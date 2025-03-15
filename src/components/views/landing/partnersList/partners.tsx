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
        <div className="overflow-x-auto flex-1 pb-2">
          <div className="flex gap-4 md:gap-8">
            {partners.map((partner, idx) => (
              <div
                key={partner._id}
                className="relative flex-shrink-0 w-[150px] h-[150px]"
              >
                <Image
                  src={urlForImage(partner.partnerLogo).url()}
                  alt={partner.partnerLogoAlt}
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  fill
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Carousel partners={partners} />
      )}
    </>
  );
};

export default Partners;
