import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Heading, Text } from "@/components/ui";
import { Landing, urlForImage } from "~/sanity/lib";
import { ChevronLeft, ChevronRight } from "@/components/icons";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ReactPlayer from "react-player/lazy";

import "swiper/css";
import "swiper/css/navigation";

const Testimonials = ({ data }: { data: Landing["testimonialSection"] }) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const swiperRef = useRef<SwiperRef>();

  useEffect(() => {
    swiperRef.current?.swiper?.on("slideChange", (swiper) => {
      if (swiper.isBeginning) {
        setIsBeginning(true);
      } else {
        setIsBeginning(false);
      }

      if (swiper.isEnd) {
        setIsEnd(true);
      } else {
        setIsEnd(false);
      }
    });
  }, []);

  const onClickPrev = () => swiperRef.current?.swiper?.slidePrev();
  const onClickNext = () => swiperRef.current?.swiper?.slideNext();

  const getCompanyLogoUrl = (
    company: Landing["testimonialSection"][0]["companyLogo"],
  ) => (company ? urlForImage(company)?.url() : undefined);

  return (
    <section id="testimonials" className="pt-20 pb-32 bg-[#daffd6]">
      <div className="mb-20 px-3 max-w-5xl mx-auto">
        <Text className="mb-6 text-[#4B5563] text-center font-normal leading-6">
          What our partners say about us
        </Text>
        <Heading
          as="h2"
          className="text-lg md:text-4xl font-normal md:leading-[56px] text-center"
        >
          As we
          <span className="text-[#9A4151]">
            {" "}
            advance into the future through strategic partnerships
          </span>
          , these are testaments to our collaborative journey and shared vision.
        </Heading>
      </div>

      <div className="max-w-screen-md mx-auto py-12 flex items-center">
        <div className="flex-shrink-0">
          <button
            onClick={onClickPrev}
            disabled={isBeginning}
            className="bg-none border-none disabled:opacity-25 disabled:cursor-auto disabled:pointer-events-none"
          >
            <ChevronLeft className="text-[#06813e] w-10 h-10" />
          </button>
        </div>
        <Swiper
          id="testimonials-slider"
          ref={swiperRef as any}
          className="flex-1"
          slidesPerView={1}
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
        >
          {data?.map((testimonial, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center gap-14" key={idx}>
                {testimonial.videoUrl && (
                  // pt-[56.25%], w-[640px] h-[360px]
                  <div className="relative w-full max-w-[560px] h-[280px]">
                    <ReactPlayer
                      url={testimonial.videoUrl}
                      width="100%"
                      height="100%"
                      className="absolute top-0 left-0"
                    />
                  </div>
                )}

                <Text className="text-lg md:text-xl font-medium italic">
                  {`“${testimonial.text}”`}
                </Text>

                <div className="flex flex-col items-center gap-4">
                  <figcaption className="">
                    <Text className="font-medium text-base md:text-lg">
                      {testimonial.name}
                    </Text>
                    <Text className="text-sm md:text-base">{`${testimonial.role} at ${testimonial.company}`}</Text>
                  </figcaption>

                  {getCompanyLogoUrl(testimonial.companyLogo) && (
                    <div className="grayscale flex justify-center relative w-full h-[52px]">
                      <Image
                        src={getCompanyLogoUrl(testimonial.companyLogo)!}
                        alt={testimonial.company}
                        className="object-contain"
                        fill
                      />
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex-shrink-0">
          <button
            onClick={onClickNext}
            disabled={isEnd}
            className="bg-none border-none disabled:opacity-25 disabled:cursor-auto disabled:pointer-events-none"
          >
            <ChevronRight className="text-[#06813e] w-10 h-10" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
