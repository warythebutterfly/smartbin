import Head from "next/head";
import Link from "next/link";
import React, { Fragment } from "react";
import { Heading, RichText, Text } from "@/components/ui";
import { Investor, News, urlForImage } from "~/sanity/lib";
import styles from "./news.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Slider from "react-slick";
import { MediaCarousel } from "./mediaCarousel";

interface InvestorViewProps {
  data: {
    investorsData: Investor[];
    newsData: News[];
  };
}

const NewsView = ({ data: { newsData } }: InvestorViewProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
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

      {/* News Section */}
      <section className="bg-white py-20">
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

                  {/* News Content */}
                  <div className="text-sm text-gray-700 max-h-[250px] overflow-y-auto">
                    <RichText content={news.content} />
                  </div>

                  <MediaCarousel news={news} />

                  {/* Media Gallery */}
                  {/* <div className="flex flex-col gap-4"> */}
                  {/* Images */}
                  {/* <div className="flex flex-wrap gap-3">
                      <Carousel
                        showThumbs={false}
                        infiniteLoop={true}
                        showStatus={false}
                        renderArrowPrev={(clickHandler, hasPrev) =>
                          hasPrev && (
                            <button
                              onClick={clickHandler}
                              className="absolute top-1/2 left-4 z-10 p-2 bg-black bg-opacity-10 rounded-full text-[#60B58A] text-2xl"
                            >
                              ◀
                            </button>
                          )
                        }
                        renderArrowNext={(clickHandler, hasNext) =>
                          hasNext && (
                            <button
                              onClick={clickHandler}
                              className="absolute top-1/2 right-4 z-10 p-2 bg-black bg-opacity-10 rounded-full text-[#60B58A] text-2xl"
                            >
                              ▶
                            </button>
                          )
                        }
                      >
                        {news.images?.length > 0 &&
                          news.images.map((img: any, index: number) => (
                            <Image
                              key={index}
                              src={urlForImage(img).url()}
                              alt={`Image ${index + 1} for ${news.title}`}
                              width={300}
                              height={200}
                              className="rounded-lg object-cover w-full max-w-[100%] md:max-w-[48%] lg:max-w-[48%]"
                            />
                          ))}
                      </Carousel>
                    </div> */}

                  {/* YouTube Videos */}
                  {/* {news.youtubeLinks?.length > 0 && (
                      <div className="flex flex-col gap-4">
                        {news.youtubeLinks.map(
                          (link: string, index: number) => (
                            <div key={index} className="aspect-video w-full">
                              <iframe
                                src={`https://www.youtube.com/embed/${extractYouTubeID(link)}`}
                                title={`YouTube Video ${index + 1}`}
                                allowFullScreen
                                className="w-full h-full rounded-lg"
                              />
                            </div>
                          ),
                        )}
                      </div>
                    )} */}
                  {/* </div> */}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-lg text-gray-600">
              No news available.
            </div>
          )}
        </div>
      </section>
    </Fragment>
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
