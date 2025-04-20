import { Button } from "@/components/ui";
import React from "react";
import { IBlog, urlForImage } from "~/sanity/lib";
import Link from "next/link";
import Image from "next/image";
import BlogImg from "@/assets/img/default-blog-main-image.jpg";

const BlogItem = ({ blog }: { blog: IBlog }) => {
  const { title, mainImage, slug, excerpt, publishedAt } = blog;
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden h-full">
      <div className="relative">
        {/* <div className="flex justify-center items-center text-xl w-[60px] h-[60px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-white bg-opacity-50 rounded-full cursor-pointer before:block before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-white before:bg-opacity-20 before:rounded-full before:w-[75px] before:h-[75px]">
          {youtubeLinks.length > 0 && <DownloadIcon className="ml-1" />}
        </div> */}
        {mainImage ? (
          <div className="relative w-full h-[250px] flex-1">
            <Image src={urlForImage(mainImage).url()} alt={slug} fill />
          </div>
        ) : (
          <div className="relative w-full h-[250px] flex-1 overflow-hidden">
            <Image
              src={BlogImg}
              alt="..."
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
      <div className="p-4 pb-4">
        <p className="opacity-80 mb-2">
          {/* <span className="mr-2">
            By{" "}
            <a href="#!" className="text-blue-600">
              Oyin Writes
            </a>
          </span> */}
          <span>
            {/* <CheckIcon className="ml-1" />  */}
            <span className="text-sm text-gray-500">{publishedAt}</span>
          </span>
        </p>
        <a href="#!">
          <h5 className="text-[19px] font-medium leading-6 hover:text-blue-600 mb-4">
            {title}
          </h5>
        </a>
        <div className="text-sm text-gray-700 max-h-[250px] overflow-y-auto">
          <p>{excerpt}</p>
        </div>
        <div className="flex justify-between my-4">
          <Link href={`/blog/${slug}`}>
            <Button className="bg-transparent hover:bg-primary border border-blue-600 text-primary hover:text-white py-2 rounded transition ezy__blog15_0tHXU3wC-card-btn flex items-center px-3">
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
