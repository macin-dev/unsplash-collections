// Components Types
export type NavLinkProps = {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
};

export type Item = {
  id: string | number;
  urls: {
    small: string;
  };
  width: number;
  height: number;
  blurDataURL: string | undefined;
} & Record<string, unknown>;
