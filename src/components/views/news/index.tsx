import Head from "next/head";
import Link from "next/link";
import React, { Fragment } from "react";
import { Heading, RichText, Text } from "@/components/ui";
import { Investor, News } from "~/sanity/lib";
import styles from "./news.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import NewsCol from "@/assets/img/news2-bg.png";

interface InvestorViewProps {
  data: {
    investorsData: Investor[];
    newsData: News[];
  };
}

const NewsView = ({ data: { newsData } }: InvestorViewProps) => {
  return (
    <Fragment>
      <Head>
        <title>News | YabaTech PlastoGas Hub</title>
      </Head>

      <section>
        <div
          className="h-[549px] flex items-center justify-center"
          style={{
            background: `linear-gradient(180deg, rgba(154, 65, 81, 0.46) 0%, #9A4151 88.62%), url("/img/investors-hero.webp")`,
          }}
        >
          <div className="w-full max-w-[640px] text-center">
            <Heading className="text-white font-semibold mb-10">News</Heading>
            <Text className="text-white text-xl leading-8">
              We keep this site updated with our latest news, initiatives,
              sustainability efforts, and project developments. If you have any
              questions, feel free to reach out to us via email.
            </Text>
          </div>
        </div>

        <div className="bg-white pt-16 pb-[148px]">
          <div className="wrapper">
            <Heading className="text-3xl md:text-[40px] font-normal mb-6 text-black">
              News
            </Heading>

            {newsData && newsData?.length ? (
              <div className="pt-[80px]">
                <div className="mb-12">
                  <Heading className="text-2xl text-black font-medium leading-[48px] border-b border-b-[#60B58A] w-fit">
                    Corporate news
                  </Heading>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  {/* Carousel Section */}
                  <div className="w-full md:w-3/4">
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
                      renderIndicator={(onClickHandler, isSelected, index) => (
                        <li
                          className={`inline-block mx-1 w-3 h-3 rounded-full cursor-pointer ${
                            isSelected ? "bg-[#60B58A]" : "bg-[#374151]"
                          }`}
                          onClick={onClickHandler}
                        />
                      )}
                    >
                      {newsData?.map((news) => (
                        <div key={news._id} className="p-4">
                          <Link href="#">
                            <div className="pb-4 border-b border-b-[#374151] hover:border-b-[#9A4151] transition-colors flex flex-col gap-8">
                              <b className="text-lg text-[#60B58A] leading-8 tracking-[0.27px]">
                                {news.title}
                              </b>
                              <p className="text-[#60B58A] text-sm leading-6 tracking-[0.21px]">
                                {news.publishedAt}
                              </p>
                            </div>
                            <div
                              className="h-[300px] overflow-y-auto"
                              onTouchStart={(e) => e.stopPropagation()}
                              onPointerDown={(e) => e.stopPropagation()}
                            >
                              <RichText
                                className={styles.portableText}
                                content={news?.content}
                              />
                            </div>
                          </Link>
                        </div>
                      ))}
                    </Carousel>
                  </div>

                  {/* Image Section (Hidden on Small Screens) */}
                  <div className="hidden md:block md:w-1/4 relative">
                    <Image src={NewsCol} alt="Partners Hero" fill />
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default NewsView;
