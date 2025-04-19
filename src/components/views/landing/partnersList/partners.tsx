import React from "react";
import Image from "next/image";
import Carousel from "./carousel";
import { useMediaQuery } from "@/hooks";
import { Partner, urlForImage } from "~/sanity/lib";

const Partners = ({ partners }: { partners: Partner[] }) => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(max-width: 768px)");
  const isLaptop = useMediaQuery("(max-width: 1024px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const condition =
    (isMobile && partners.length <= 2) ||
    (isTablet && partners.length <= 4) ||
    (isLaptop && partners.length <= 6) ||
    (isDesktop && partners.length <= 8);
  return (
    <>
      {condition ? (
        <div className="mt-8 lg:mt-12 lg:flex lg:items-center">
          <div className="flex justify-center flex-shrink-0 -space-x-4 overflow-hidden lg:justify-start">
            {partners.slice(0, 4).map((partner) => (
              <div key={partner._id} className="">
                <Image
                  src={urlForImage(partner.partnerLogo).url()}
                  alt={partner.partnerLogoAlt}
                  className="inline-block rounded-full w-20 h-20 ring-2 ring-white"
                  width={20}
                  height={20}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
          <p className="mt-4 text-lg text-primary lg:mt-0 lg:ml-4 font-pj">
            Join with{" "}
            <span className="font-bold">{partners.length}+ partners</span> and
            start promoting awareness to drive sustainable waste management
            behaviours right now
          </p>
        </div>
      ) : (
        <Carousel partners={partners} />
      )}
    </>
  );
};

export default Partners;
