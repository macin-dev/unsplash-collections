import z from "zod";

// Components Types
export type NavLinkProps = {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
};

export type Item = {
  id: string;
  urls: {
    raw: string;
  };
  width: number;
  height: number;
  blurDataURL: string;
} & Record<string, unknown>;

export type SearchPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// API Response Types
const PhotoSchema = z.object({
  id: z.string(),
  urls: z.object({
    raw: z.string(),
  }),
  width: z.number(),
  height: z.number(),
  blur_hash: z.string(),
});

export const SearchResponseSchema = z.object({
  results: z.array(PhotoSchema),
});

// Collection Types
export const PreviewPhotoSchema = z.object({
  id: z.string(),
  urls: z.object({
    small: z.string(),
  }),
});

export const CollectionSchema = z.object({
  id: z.string(),
  title: z.string(),
  total_photos: z.number(),
  preview_photos: z.array(PreviewPhotoSchema),
});

// Collection's Photos Types
export const CollectionPhotoSchema = z.object({
  id: z.string(),
  alt_description: z.string().nullable(),
  blur_hash: z.string(),
  urls: z.object({
    small: z.string(),
    raw: z.string(),
  }),
  width: z.number(),
  height: z.number(),
});

export const CollectionInfoSchema = z.object({
  id: z.string(),
  title: z.string(),
  total_photos: z.number(),
});

export type CollectionPhoto = z.infer<typeof CollectionPhotoSchema>;
