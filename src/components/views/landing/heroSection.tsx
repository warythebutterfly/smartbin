import React, { useState } from "react";
import { Button, Heading, RichText } from "@/components/ui";
import dynamic from "next/dynamic";
import { Landing } from "~/sanity/lib";
import styles from "./styles.module.css";
import { cn } from "@/utils/helpers";
import Image from "next/image";
import HeroImg from "@/assets/img/3d-recycling-symbol.png";
import Link from "next/link";

const PartnersList = dynamic(() => import("./partnersList"), {
  ssr: false,
});

const HeroSectionOld = ({ data }: { data: Landing["heroSection"] }) => {
  const [showMoreDetail, setShowMoreDetail] = useState(false);

  const toggleShowMoreDetail = () => setShowMoreDetail((open) => !open);

  return (
    <section className="pt-[150px] bg-[#daffd6] pb-[66px] bg-team bg-right bg-no-repeat">
      <div className="wrapper">
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 items-center">
          <div className="w-full md:w-1/2">
            <div className="">
              <Heading className="text-4xl text-[#2DBE60] md:text-[66px] mb-6 font-semibold md:leading-[72px] tracking-[-0.66px]">
                {data?.title}
              </Heading>

              <div
                style={{
                  display: "grid",
                  gridTemplateRows: showMoreDetail
                    ? "min-content 1fr"
                    : "min-content 0fr",
                  transition: "grid-template-rows 500ms",
                }}
              >
                <div className="mb-8">
                  <RichText
                    className={styles.portableText}
                    content={data?.summary}
                  />
                </div>

                <div className="overflow-hidden">
                  <RichText
                    className={styles.portableText}
                    content={data?.description}
                  />
                </div>
              </div>

              <button
                onClick={toggleShowMoreDetail}
                className={cn(
                  "bg-none border-none p-[10px] pl-0 text-[#06813E] font-semibold underline cursor-pointer",
                  showMoreDetail ? "mt-0" : "-mt-4",
                )}
              >
                {showMoreDetail ? "Read less" : "Read more"}
              </button>
            </div>
          </div>
        </div>

        <PartnersList />
      </div>
    </section>
  );
};

const HeroSection = ({ data }: { data: Landing["heroSection"] }) => {
  return (
    <section className="py-12 bg-team sm:pb-16 lg:pb-20 xl:pb-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="relative">
          <div className="lg:w-2/3">
            <h1 className="mt-6 text-4xl font-normal text-white sm:mt-10 sm:text-5xl lg:text-6xl xl:text-8xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003464] to-[#2DBE60]">
                {data?.title}
              </span>{" "}
            </h1>
            <RichText
              className="max-w-lg mt-4 text-lg font-normal text-[#374151] sm:mt-8"
              content={data?.summary}
            />

            <div>
              <div className="inline-flex items-center pt-6 mt-8 border-t sm:pt-10 sm:mt-14">
                <PartnersList />
              </div>
            </div>
            <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
              <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-[#003464] to-[#2DBE60] group-hover:shadow-lg group-hover:shadow-green-500/50"></div>
              <Link
                href="/partners"
                className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-primary border border-transparent rounded-full"
                role="button"
              >
                Explore Partnerships
              </Link>
            </div>
          </div>

          <div className="mt-8 md:absolute md:mt-0 md:top-32 lg:top-0 md:right-0">
            <Image src={HeroImg} alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
