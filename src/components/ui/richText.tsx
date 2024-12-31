import { SanityImage } from "../sanity/sanityImage";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";

const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => {
      return <SanityImage {...value} />;
    },
  },
};

export const RichText = ({
  content,
  className,
}: {
  content: any;
  className?: string;
}) => {
  return (
    <div className={className}>
      <PortableText value={content} components={myPortableTextComponents} />
    </div>
  );
};
