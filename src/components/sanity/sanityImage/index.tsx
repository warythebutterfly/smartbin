import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { getSanityImageConfig } from "~/sanity/lib";

interface Props {
  asset: SanityImageSource;
  alt: string;
  caption?: string;
}

export const SanityImage = (props: Props) => {
  const { asset, alt, caption } = props;
  const imageProps = useNextSanityImage(getSanityImageConfig(), asset);

  if (!imageProps) return null;

  return (
    <figure className="relative w-[600px]">
      <Image
        {...imageProps}
        alt={alt}
        sizes="(max-width: 800px) 100vw, 800px"
      />
      {caption && (
        <figcaption className="absolute bottom-0 left-0 w-full bg-black/40 text-white text-center py-2 text-sm italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
