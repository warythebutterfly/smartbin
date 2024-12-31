import React from "react";
import Image from "next/image";
import { Partner, urlForImage } from "~/sanity/lib";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Carousel = ({ partners }: { partners: Partner[] }) => {
  return (
    <Swiper
      slidesPerView={2} // 2 Slides on mobile
      spaceBetween={12}
      breakpoints={{
        640: {
          slidesPerView: 4, // 4 Slides on tablet i.e when window is >= 640px
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 6, // 6 Slides on small screen i.e when window is >= 768px
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 8, // 8 Slides on laptop i.e when window is >= 1024px
          spaceBetween: 51,
        },
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      loop
    >
      {partners.map((partner) => (
        <SwiperSlide key={partner._id}>
          <div
            key={partner._id}
            className="grayscale relative flex-shrink-0 w-full h-[150px]"
          >
            <Image
              src={urlForImage(partner.partnerLogo).url()}
              alt={partner.partnerLogoAlt}
              className="object-contain"
              fill
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
