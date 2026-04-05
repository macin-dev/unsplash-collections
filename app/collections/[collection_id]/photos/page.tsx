import MasonryWrapper from "@/app/components/MasonryWrapper";
import { blurHashToDataURL } from "@/app/lib/blurHash";
import { CollectionInfoSchema, CollectionPhotoSchema } from "@/app/types";

export default async function CollectionGallery({
  params,
}: {
  params: Promise<{ collection_id: string }>;
}) {
  const { collection_id } = await params;

  const [collectionInfo, photos] = await Promise.all([
    fetch(
      `https://api.unsplash.com/collections/${collection_id}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
    ),
    fetch(
      `https://api.unsplash.com/collections/${collection_id}/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
    ),
  ]);

  if (!collectionInfo.ok || !photos.ok) {
    return (
      <p className="text-red-500 text-center">
        Failed to fetch collection data
      </p>
    );
  }

  const collectionInfoJson: unknown = await collectionInfo.json();
  const parsedCollectionInfo = CollectionInfoSchema.parse(collectionInfoJson);
  const collection: unknown = await photos.json();
  const parsedCollection = CollectionPhotoSchema.array().parse(collection);

  if (parsedCollection.length === 0) {
    return (
      <section>
        <div className="flex flex-col items-center mb-14 pt-9 max-w-94.5 mx-auto">
          <h1 className="bg-linear-to-r from-[#F2C593] to-[#8A3282] text-[2.5rem] font-semibold text-transparent bg-clip-text tracking-[-3.5%] w-fit">
            No Photos Found
          </h1>
        </div>
      </section>
    );
  }

  const collectionPhotos = parsedCollection.map((photo) => ({
    ...photo,
    blurDataURL: blurHashToDataURL({
      hash: photo.blur_hash,
    }),
  }));

  return (
    <section>
      <div className="flex flex-col items-center mb-14 pt-9 max-w-94.5 mx-auto">
        <h1 className="bg-linear-to-r from-[#F2C593] to-[#8A3282] text-[2.5rem] font-semibold text-transparent bg-clip-text tracking-[-3.5%] w-fit">
          {parsedCollectionInfo.title}
        </h1>
        <p className="text-lg font-light tracking-[-3.5%] mt-2">
          {parsedCollectionInfo.total_photos} photos in this collection
        </p>
      </div>

      <MasonryWrapper results={collectionPhotos} />
    </section>
  );
}
