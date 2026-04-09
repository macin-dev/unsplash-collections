import Image from "next/image";
import { ListCollection } from "@/app/components/ListCollection";
import Button from "@/app/components/Button";
import { PhotoDetailSchema } from "@/app/types";
import { formatDate } from "@/app/lib/dateFormating";
import PlusIcon from "@/public/Plus.svg";
import DownArrow from "@/public/down_arrow.svg";

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ photo_id: string }>;
}) {
  const { photo_id } = await params;

  const resp = await fetch(
    `https://api.unsplash.com/photos/${photo_id}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
  );

  if (!resp.ok) {
    return (
      <p className="text-red-500 text-center">Failed to fetch photo data</p>
    );
  }

  const photo: unknown = await resp.json();
  const parsedPhoto = PhotoDetailSchema.parse(photo);

  return (
    <section className="py-10">
      <div className="max-w-138.25 mx-auto w-full xl:flex xl:max-w-283.75 xl:gap-8 xl:h-[calc(100vh-150px)]">
        <div className="bg-gray-50 h-full aspect-square xl:flex-1 xl:aspect-auto">
          <Image
            src={parsedPhoto.urls.regular}
            width={parsedPhoto.width}
            height={parsedPhoto.height}
            alt={parsedPhoto.alt_description || "Photo"}
            className="w-full h-full object-contain xl:object-top"
          />
        </div>

        <div className="xl:flex-1">
          <div className="flex flex-col gap-5 mt-10 xl:mt-0">
            <div className="flex items-center gap-4">
              <Image
                src={parsedPhoto.user.profile_image.medium}
                width={40}
                height={40}
                alt={parsedPhoto.user.name}
                className="rounded-full"
              />
              <span className="font-medium text-sm tracking-[-3.5%]">
                {parsedPhoto.user.name}
              </span>
            </div>

            <span className="text-light text-sm tracking-[-3.5%] text-[#121826]">
              Published on {formatDate(parsedPhoto.created_at)}
            </span>

            <div className="flex gap-4">
              <Button
                href={`/api/download/${parsedPhoto.id}`}
                src={PlusIcon}
                text="Add to Collection"
              />
              <Button
                href={`/api/download/${parsedPhoto.id}`}
                src={DownArrow}
                text="Download"
              />
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-[1.25rem] font-semibold tracking-[-3.5%]">
              Collections
            </h3>

            <ListCollection
              collectionArray={parsedPhoto.related_collections.results}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
