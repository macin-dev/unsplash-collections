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
  likes: number;
  width: number;
  height: number;
  blurDataURL: string;
} & Record<string, unknown>;

export type SearchPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export type ButtonProps = {
  src: string;
  text: string;
  width?: number;
  height?: number;
};

// API Response Types
const PhotoSchema = z.object({
  id: z.string(),
  urls: z.object({
    raw: z.string(),
  }),
  likes: z.number(),
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

export type CollectionItemProps = z.infer<typeof CollectionSchema>;

// Collection's Photos Types
export const CollectionPhotoSchema = z.object({
  id: z.string(),
  alt_description: z.string().nullable(),
  blur_hash: z.string(),
  likes: z.number(),
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

// Photo Page Types
export const PhotoDetailSchema = z.object({
  id: z.string(),
  alt_description: z.string().nullable(),
  blur_hash: z.string(),
  likes: z.number(),
  created_at: z.string(),
  width: z.number(),
  height: z.number(),
  urls: z.object({
    regular: z.string(),
  }),
  links: z.object({
    download: z.string(),
  }),
  user: z.object({
    id: z.string(),
    name: z.string(),
    profile_image: z.object({
      medium: z.string(),
    }),
  }),
  related_collections: z.object({
    results: z.array(CollectionSchema),
  }),
});

export type CollectionPhoto = z.infer<typeof CollectionPhotoSchema>;
