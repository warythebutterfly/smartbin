import React, { useState } from "react";
import { Heading, RichText } from "@/components/ui";
import dynamic from "next/dynamic";
import { Landing } from "~/sanity/lib";
import styles from "./styles.module.css";
import { cn } from "@/utils/helpers";

const PartnersList = dynamic(() => import("./partnersList"), {
  ssr: false,
});

const HeroSection = ({ data }: { data: Landing["heroSection"] }) => {
  const [showMoreDetail, setShowMoreDetail] = useState(false);

  const toggleShowMoreDetail = () => setShowMoreDetail((open) => !open);

  return (
    <section className="pt-[150px] bg-[#EBF2EF] pb-[66px] bg-right bg-no-repeat">
      <div className="wrapper">
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 items-center">
          <div className="w-full md:w-1/2">
            <div className="">
              <Heading className="text-4xl md:text-[66px] mb-6 font-semibold md:leading-[72px] tracking-[-0.66px]">
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

export default HeroSection;
