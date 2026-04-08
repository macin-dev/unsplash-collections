import { CollectionItemProps } from "../types";
import CollectionItem from "./CollectionItem";

export function ListCollection({
  collectionArray,
}: {
  collectionArray: CollectionItemProps[];
}) {
  return (
    <ul className="flex flex-col gap-3">
      {collectionArray.map((collection: CollectionItemProps) => (
        <CollectionItem key={collection.id} {...collection} />
      ))}
    </ul>
  );
}
