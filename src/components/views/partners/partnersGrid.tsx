import React from "react";
import Image from "next/image";
import { Heading, Text } from "@/components/ui";
import { Partner, urlForImage } from "~/sanity/lib";

const PartnersGrid = ({ data }: { data: Partner[] }) => {
  return (
    <div className="">
      <div className="mb-12 pt-10 wrapper">
        <Heading className="text-4xl text-primary tracking-[-0.32px]">
          Partners
        </Heading>
        <hr className="w-16 h-[2px] bg-[#2F80ED]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1440px] mx-auto">
        {data?.map((partner) => (
          <div
            key={partner._id}
            className="partner-item px-[42px] pt-16 pb-[49px] relative border-b border-b-[#E5E7EB] border-r border-r-[#E5E7EB]"
          >
            <span className="w-6 h-6 rounded-full bg-[#F3F4F6] absolute top-6 left-10 "></span>

            <div className="flex flex-col justify-center items-center gap-8">
              <div className="flex justify-center relative w-full h-[100px]">
                <Image
                  src={urlForImage(partner.partnerLogo).url()}
                  alt={partner.partnerLogoAlt}
                  className="object-contain"
                  fill
                />
              </div>

              <Text className="text-[#4B5563] text-center leading-6">
                {partner.description}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersGrid;
