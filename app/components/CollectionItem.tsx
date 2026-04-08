import Image from "next/image";
import { CollectionItemProps } from "../types/index";

export default function CollectionItem({ ...collection }: CollectionItemProps) {
  return (
    <li
      key={collection.id}
      className="flex items-center gap-4 p-2 rounded-lg hover:bg-[#E5E7EB] cursor-pointer"
    >
      <div className="w-15 h-15 rounded-sm overflow-hidden">
        <Image
          src={collection.preview_photos[0]?.urls.small}
          width={60}
          height={60}
          alt="Collection"
          className="w-full h-full object-cover"
        />
      </div>

      <div>
        <h4 className="font-medium text-base">{collection.title}</h4>
        <p className="font-light text-sm">{collection.total_photos} photos</p>
      </div>
    </li>
  );
}
