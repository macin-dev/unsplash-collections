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
