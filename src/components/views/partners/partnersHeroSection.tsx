import React from "react";
import Image from "next/image";
import PartnersHero from "@/assets/img/partners-hero.png";
import PartnershipGrowth from "@/assets/img/partnership-growth.png";
import { Heading, Text } from "@/components/ui";
import Link from "next/link";

const PartnersHeroSection = () => {
  return (
    <div className="relative z-[1] mt-[-88px]">
      <div className="flex flex-col md:flex-row min-h-[767px]">
        <div className="hidden md:block w-full md:w-1/2 relative">
          <Image src={PartnersHero} alt="Partners Hero" fill />
        </div>
        <div className="w-full md:w-1/2 bg-[#F9FAFB]">
          <div className="pt-[calc(88px_+_96px)] px-4 md:px-16 pb-8 max-w-[630px]">
            <Heading className="text-[66px] leading-[72px] mb-6">
              Partners
            </Heading>
            <Text className="text-[#374151] leading-8">
              <Link
                href="https://www.linkedin.com/company/#/"
                target="_blank"
                rel="noreferrer noopener"
                className="text-primary underline font-medium"
              >
                YabaTech PlastoGas Hub Technologies
              </Link>{" "}
              focuses on building software for internal use, public use and
              private use. We have helped our partners build and scale their
              software solutions using bleeding edge technologies while adhering
              to agreed milestones.
            </Text>

            <div className="mt-[42px]">
              <Text className="text-[#1F2937] font-semibold leading-8">
                Partnership growth:
              </Text>

              <div className="mt-6">
                <Image src={PartnershipGrowth} alt="Partnership Growth" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersHeroSection;
