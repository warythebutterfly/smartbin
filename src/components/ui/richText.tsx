import { SanityImage } from "../sanity/sanityImage";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import Image from "next/image";
import { extractYouTubeID } from "../views/news/mediaCarousel";

const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => (
      <div className="my-4">
        <SanityImage
          {...value}
          src={value.asset?.url}
          alt={value.alt || "News image"}
          width={800}
          height={600}
          className="rounded-lg mx-auto"
        />
        {value.caption && (
          <p className="text-center text-xs text-gray-500 mt-2">
            {value.caption}
          </p>
        )}
      </div>
    ),
    youtube: ({ value }) => {
      const id = extractYouTubeID(value.url);
      return id ? (
        <div className="my-6 aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            className="w-full h-full rounded-lg"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : null;
    },
  },
  marks: {
    link: ({ children, value }) => {
      const isExternal = value.href?.startsWith("http");
      return (
        <a
          href={value.href}
          target={isExternal ? "_blank" : "_self"}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-blue-600 underline hover:text-blue-800"
        >
          {children}
        </a>
      );
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold my-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold my-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-medium my-2">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-medium my-2">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-base font-medium my-1.5">{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-sm font-medium my-1">{children}</h6>
    ),
    normal: ({ children }) => (
      <p className="text-lg text-gray-800 leading-relaxed my-2">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside my-2 text-base">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside my-2 text-base">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="ml-4">{children}</li>,
    number: ({ children }) => <li className="ml-4">{children}</li>,
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
