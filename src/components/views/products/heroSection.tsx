import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Text, Heading } from "@/components/ui";
import HeroImg from "@/assets/img/hero.svg";

const HeroSection = () => {
  return (
    <div className="pt-[112px] bg-[#daffd6] pb-[66px]">
      <div className="wrapper">
        <div className="flex flex-col md:flex-row gap-8 md:gap-0">
          <div className="w-full md:w-1/2">
            <div className="w-full md:max-w-[520px]">
              <Heading className="text-4xl md:text-[66px] mb-6 font-semibold md:leading-[72px] tracking-[-0.66px]">
                All our Innovative products in just one view
              </Heading>

              <Text className="text-[#374151] mb-3 leading-8">
                <Link href="#" className="text-[#252422] underline">
                  #
                </Link>{" "}
                is the parent company of # Technologies which focuses on
                building software for internal use, public use, and providing
                software service for its partners.
              </Text>

              <Link
                href="#"
                className="p-[10px] text-[#06813E] font-normal underline"
              >
                Read more...
              </Link>
            </div>
          </div>

          <div className="hidden md:block bg-[#D1D5DB] w-[1px] h-[293px] flex-shrink-0" />

          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div>
              <Image src={HeroImg} alt="Hero" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
