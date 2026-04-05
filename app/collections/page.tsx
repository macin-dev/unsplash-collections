import { CollectionSchema } from "../types";
import CollectionCard from "../components/CollectionCard";

const MAX_PREVIEWS = 3;

export default async function Collections() {
  const resp = await fetch(
    `https://api.unsplash.com/collections?client_id=${process.env.UNSPLASH_ACCESS_KEY} `,
  );
  const data: unknown = await resp.json();
  const parsedData = CollectionSchema.array().parse(data);

  return (
    <section>
      <div className="flex flex-col items-center mb-14 pt-9 max-w-94.5 mx-auto">
        <h1 className="bg-linear-to-r from-[#F2C593] to-[#8A3282] text-[2.5rem] font-semibold text-transparent bg-clip-text tracking-[-3.5%] w-fit">
          Collections
        </h1>
        <p className="text-center">
          Explore the world through collections of beautiful photos free to use
          under the
          <a
            className="font-semibold text-black border-b"
            target="_blank"
            href="https://unsplash.com/license"
          >
            Unsplash License
          </a>
          .
        </p>
      </div>

      <ul className="grid gap-8 max-w-89.25 mx-auto lg:grid-cols-2 lg:max-w-186.5 xl:grid-cols-3 xl:max-w-283.75">
        {parsedData.map((collection) => {
          const previewLength = collection.preview_photos.slice(
            0,
            MAX_PREVIEWS,
          ).length;
          return (
            <CollectionCard
              key={collection.id}
              id={collection.id}
              preview_photos={collection.preview_photos.slice(0, previewLength)}
              previewLength={previewLength}
              title={collection.title}
              total_photos={collection.total_photos}
            />
          );
        })}
      </ul>
    </section>
  );
}
