import React from "react";
import Image from "next/image";
import { Heading, Text } from "@/components/ui";
import { Partner, urlForImage } from "~/sanity/lib";

const PartnersGrid = ({ data }: { data: Partner[] }) => {
  return (
    <section className="py-16 px-4 md:px-12">
      <div className="text-center mb-12">
        <Heading className="text-4xl font-bold text-primary tracking-tight mb-2">
          Partners
        </Heading>
        <div className="w-20 h-1 bg-gradient-to-r from-[#2DBE60] via-[#003464] to-[#2DBE60] rounded-full mx-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {data?.map((partner) => (
          <div
            key={partner._id}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-transform hover:scale-[1.03] duration-300"
          >
            <div className="w-full h-24 relative mb-6">
              <Image
                src={urlForImage(partner.partnerLogo).url()}
                alt={partner.partnerLogoAlt}
                className="object-contain"
                fill
              />
            </div>
            <Text className="text-gray-600 leading-6">
              {partner.description}
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersGrid;
