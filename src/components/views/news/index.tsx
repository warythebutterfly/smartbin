import Head from "next/head";
import Link from "next/link";
import React, { Fragment, ReactNode, useEffect, useState } from "react";
import { Heading, RichText, Text } from "@/components/ui";
import { Investor, News, urlForImage } from "~/sanity/lib";
import styles from "./news.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Slider from "react-slick";
import { MediaCarousel } from "./mediaCarousel";
import {
  CheckIcon,
  ChevronLeft,
  ChevronRight,
  DownloadIcon,
} from "@/components/icons";
import { useMediaQuery } from "@/hooks";

interface InvestorViewProps {
  data: {
    investorsData: Investor[];
    newsData: News[];
  };
}

const NewsView = ({ data: { newsData } }: InvestorViewProps) => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(max-width: 768px)");

  const [activeIndex, setActiveIndex] = useState(0);

  const [blogs, setBlogs] = useState<News[][]>([]);

  useEffect(() => {
    const clonedNews = [...newsData];
    const chunks: any[] = [];

    while (clonedNews.length) {
      chunks.push(clonedNews.splice(0, isMobile ? 2 : isTablet ? 4 : 6));
    }

    setBlogs(chunks);
  }, [newsData]);

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
        <title>News | YabaTech PlastoGas Hub</title>
      </Head>

      {/* Hero Section */}
      {/* <section
        className="relative h-[549px] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(154, 65, 81, 0.46), #1F2937), url("/img/investors-hero.webp")`,
        }}
      >
        <div className="max-w-xl px-4">
          <Heading className="text-4xl md:text-5xl font-bold mb-6">
            News
          </Heading>
          <Text className="text-lg leading-8">
            Stay updated with our latest news, initiatives, sustainability
            efforts, and project developments.
          </Text>
        </div>
      </section> */}

      <NewsHeroSection>
        <section className="py-16">
          <div className="mb-12">
            <Heading className="text-3xl font-bold text-primary tracking-tight mb-2">
              Latest articles on Yct PlastoGas Hub
            </Heading>
            {/* <div className="w-20 h-1 bg-gradient-to-r from-[#2DBE60] via-[#003464] to-[#2DBE60] rounded-full mx-auto" /> */}
          </div>

          <div className="relative">
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
          </div>
        </section>
      </NewsHeroSection>

      {/* News Section */}

      {/* <section className="bg-white py-20">
        <div className="wrapper">
          <Heading className="text-4xl text-primary tracking-[-0.32px] mb-4">
            News
          </Heading>
          <div className="w-20 h-1 bg-gradient-to-r from-[#2DBE60] via-[#003464] to-[#2DBE60] rounded-full" />

          {newsData?.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-5">
              {newsData.map((news) => (
                <div
                  key={news._id}
                  className="bg-[#F9FAFB] rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow p-6 flex flex-col gap-6"
                >
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold text-primary">
                      {news.title}
                    </h3>
                    <p className="text-sm text-gray-500">{news.publishedAt}</p>
                  </div>


                  <div className="text-sm text-gray-700 max-h-[250px] overflow-y-auto">
                    <RichText content={news.content} />
                  </div>

                  <MediaCarousel news={news} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-lg text-gray-600">
              No news available.
            </div>
          )}
        </div>
      </section> */}
    </Fragment>
  );
};

const NewsHeroSection = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="relative bg-white px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl mt-10">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content">
                <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-dark  sm:text-[42px] lg:text-[40px] xl:text-5xl text-primary">
                  News
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

const BlogItem = ({ blog }: { blog: News }) => {
  const { title, images, excerpt, publishedAt, youtubeLinks } = blog;
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden h-full">
      <div className="relative">
        <div className="flex justify-center items-center text-xl w-[60px] h-[60px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-white bg-opacity-50 rounded-full cursor-pointer before:block before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-white before:bg-opacity-20 before:rounded-full before:w-[75px] before:h-[75px]">
          {youtubeLinks.length > 0 && <DownloadIcon className="ml-1" />}
        </div>
        <img src={images[0].url} className="w-full" alt="..." />
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
          <h5 className="text-[19px] font-medium leading-6 hover:text-blue-600 mb-2">
            {title}
          </h5>
        </a>
        <div className="text-sm text-gray-700 max-h-[250px] overflow-y-auto">
          <p>{excerpt}</p>
        </div>
        <div className="flex justify-between my-2">
          <a
            href="#!"
            className="bg-transparent hover:bg-primary border border-blue-600 hover:text-white py-2 rounded transition ezy__blog15_0tHXU3wC-card-btn flex items-center px-3"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

// Utility function to extract YouTube video ID
const extractYouTubeID = (url: string): string => {
  const match = url?.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=))([\w-]{11})/,
  );
  return match ? match[1] : "";
};

export default NewsView;
