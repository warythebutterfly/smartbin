import React from "react";
import Image from "next/image";
import { Heading, Text } from "@/components/ui";
import { Partner, urlForImage } from "~/sanity/lib";

const PartnersGrid = ({ data }: { data: Partner[] }) => {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <Heading className="text-3xl font-bold text-primary tracking-tight mb-2">
          Our Partners
        </Heading>
      </div>

      <div className="flex flex-col gap-8 mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-6xl">
        {data?.map((partner) => (
          <div
            key={partner._id}
            className="bg-white rounded-xl shadow-md p-4 sm:p-6 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6 transition-transform hover:scale-[1.02] duration-300"
          >
            <div className="min-w-[96px] w-24 h-24 relative">
              {/* <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"> */}
              <Image
                src={urlForImage(partner.partnerLogo).url()}
                alt={partner.partnerLogoAlt}
                className="object-contain"
                fill
              />
            </div>
            <Text className="text-gray-600 leading-6 text-base">
              {partner.description}
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersGrid;
