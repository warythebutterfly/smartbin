import Head from "next/head";
import Link from "next/link";
import React, { Fragment, ReactNode, useEffect, useState } from "react";
import { Button } from "@/components/ui";
import { IBlog, urlForImage } from "~/sanity/lib";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "@/components/icons";
import { useMediaQuery } from "@/hooks";
import BlogImg from "@/assets/img/default-blog-main-image.jpg";
import BlogItem from "./blogItem";

interface BlogViewProps {
  data: IBlog[];
}

const BlogSkeleton = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(max-width: 768px)");
  return (
    <div className="grid grid-cols-6 gap-x-6 animate-pulse">
      {[...Array(isMobile ? 1 : isTablet ? 4 : 6)].map((_, i) => (
        <div
          className="col-span-6 md:col-span-3 lg:col-span-2 mt-6 md:mt-12"
          key={i}
        >
          <div className="h-60 bg-gray-200 rounded-md mb-4"></div>
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-48 bg-gray-200 rounded w-full"></div>
        </div>
      ))}
    </div>
  );
};

const BlogView = ({ data: blogData }: BlogViewProps) => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(max-width: 768px)");
  const [isLoading, setIsLoading] = useState(true);

  const [activeIndex, setActiveIndex] = useState(0);

  const [blogs, setBlogs] = useState<IBlog[][]>([]);

  useEffect(() => {
    setIsLoading(true);
    const cloned = [...blogData];
    const chunks: any[] = [];

    while (cloned.length) {
      chunks.push(cloned.splice(0, isMobile ? 1 : isTablet ? 4 : 6));
    }
    setIsLoading(false);

    setBlogs(chunks);
  }, [blogData]);

  const handleControl = (type: string) => {
    if (type === "prev") {
      setActiveIndex(activeIndex <= 0 ? blogs.length - 1 : activeIndex - 1);
    } else {
      setActiveIndex(activeIndex >= blogs.length - 1 ? 0 : activeIndex + 1);
    }
  };

  return (
    <Fragment>
      <Head>
        <title>Blog | YabaTech PlastoGas Hub</title>
      </Head>

      <BlogHeroSection>
        <section className="py-4">
          {/* <div className="mb-12">
            <Heading className="text-3xl font-bold text-primary tracking-tight mb-2">
              Latest articles on Yct PlastoGas Hub
            </Heading>
            // {/* <div className="w-20 h-1 bg-gradient-to-r from-[#2DBE60] via-[#003464] to-[#2DBE60] rounded-full mx-auto" /> 
          </div> */}

          <div className="relative">
            {isLoading ? (
              <BlogSkeleton />
            ) : blogs.length === 0 || !blogs[activeIndex]?.length ? (
              <div className="text-center text-gray-500 py-12">
                <p className="text-lg">No blog posts available right now.</p>
              </div>
            ) : (
              <div className="grid grid-cols-6 gap-x-6">
                {blogs[activeIndex]?.map((blog, i) => (
                  <div
                    className="col-span-6 md:col-span-3 lg:col-span-2 mt-6 md:mt-12"
                    key={i}
                  >
                    <BlogItem blog={blog} />
                  </div>
                ))}
              </div>
            )}

            {!isLoading && blogs.length > 0 && (
              <>
                <button
                  className="w-12 h-12 text-[22px] bg-primary bg-opacity-70 hover:bg-opacity-100 text-white rounded-full absolute top-2/4 -left-6 -translate-y-1/2 transition"
                  onClick={() => handleControl("prev")}
                >
                  <ChevronLeft className="flex items-center justify-center w-12" />
                </button>
                <button
                  className="w-12 h-12 text-[22px] bg-primary bg-opacity-70 hover:bg-opacity-100 text-white rounded-full absolute top-2/4 -right-6 -translate-y-1/2 transition"
                  onClick={() => handleControl("next")}
                >
                  <ChevronRight className="flex items-center justify-center w-12" />
                </button>
              </>
            )}
          </div>
        </section>
      </BlogHeroSection>
    </Fragment>
  );
};

const BlogHeroSection = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="relative bg-white px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl mt-10">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-12/12">
              <div className="hero-content">
                <h1 className=" text-4xl font-bold !leading-[1.208] text-dark  sm:text-[42px] lg:text-[40px] xl:text-5xl text-primary">
                  Latest articles on Yct PlastoGas Hub
                </h1>
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default BlogView;
