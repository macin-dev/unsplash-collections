import Image from "next/image";

export default function CollectionCard({ ...props }) {
  const { id, preview_photos, previewLength, title, total_photos } = props;
  return (
    <div className="flex flex-col gap-4" key={id}>
      <div
        className={`grid ${previewLength === 2 ? "grid-cols-2 grid-rows-1" : previewLength === 1 ? "grid-cols-1 grid-rows-1" : "grid-rows-2 grid-cols-[2fr_1fr]"} h-57 overflow-hidden`}
      >
        {preview_photos.slice(0, previewLength).map((photo, index) => (
          <div
            key={photo.id}
            className={`${previewLength > 2 && index === 0 && "row-span-2"} h-full w-full`}
          >
            <Image
              key={photo.id}
              width={500}
              height={500}
              src={photo.urls.small}
              alt="Collection preview"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div>
        <h3 className="text-base font-medium tracking-[-3.5%]">{title}</h3>
        <span className="text-xs text-[#ABA8A8] tracking-[-3.5%]">
          {total_photos} photos
        </span>
      </div>
    </div>
  );
}
