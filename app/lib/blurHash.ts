import { decode } from "blurhash";
import { PNG } from "pngjs/browser";

export function blurHashToDataURL({
  hash,
  width = 32,
  height = 32,
}: {
  hash: string;
  width?: number;
  height?: number;
}) {
  const pixels = decode(hash, width, height);
  const png = new PNG({ width, height });
  png.data = Buffer.from(pixels);
  const base64 = PNG.sync.write(png).toString("base64");

  return `data:image/png;base64,${base64}`;
}
