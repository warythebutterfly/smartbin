import React, { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Heading, Text } from "@/components/ui";
import { Landing, urlForImage } from "~/sanity/lib";
import {
  ChevronLeft,
  ChevronRight,
  QuoteLeft,
  QuoteRight,
} from "@/components/icons";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ReactPlayer from "react-player/lazy";
import { Star, StarHalf } from "@/components/icons";

import "swiper/css";
import "swiper/css/navigation";

const Rating = ({
  rating,
  showLabel,
  className,
  ...rest
}: {
  rating: number;
  showLabel: boolean;
  className: any;
  rest: any;
}) => (
  <p className={`my-6 ${className}`} {...rest}>
    <span className="flex items-center">
      {[...Array(5)].map((_, i) => {
        const index = i + 1;
        let content: JSX.Element;

        if (index <= Math.floor(rating)) {
          content = <Star />;
        } else if (rating > i && rating < index + 1) {
          content = <StarHalf />;
        } else {
          content = <Star color="#e0e0e0" />;
        }

        return <Fragment key={i}>{content}</Fragment>;
      })}
    </span>
    {showLabel && <span className="ml-2">{rating.toFixed(1)}</span>}
  </p>
);

const TestimonialItem = ({ testimonial }: { testimonial: any }) => (
  <div className="bg-white shadow-xl dark:bg-slate-800 rounded-2xl transition duration-300 h-full p-6">
    <div className="mt-4">
      <Rating
        rating={testimonial.rating}
        showLabel={false}
        className={""}
        rest={""}
      />
      <p className="opacity-50 mb-6">{testimonial.text}</p>
      <div className="flex items-center">
        <div className="mr-2">
          <img
            src={testimonial.picture}
            alt={testimonial.fullName}
            className="max-w-full h-auto rounded-full border"
            width="47"
          />
        </div>
        <div>
          <h4 className="text-xl text-primary font-medium">
            {testimonial.fullName}
          </h4>
          {/* <p className="text-sm">
            <i>{testimonial.author.designation}</i>
          </p> */}
        </div>
      </div>
    </div>
  </div>
);

// TestimonialItem.propTypes = {
//   testimonial: PropTypes.object.isRequired,
// };

const Testimonials = ({ data }: { data: Landing["testimonialSection"] }) => {
  const [index, setIndex] = useState(0);
  const { picture, fullName, rating, text } = data[index];

  const handleSelect = (selectedIndex: number) => setIndex(selectedIndex);
  return (
    <section className="ezy__testimonial1 py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center md:mb-6">
          <div className="sm:max-w-lg text-center">
            <h2 className="text-3xl text-primary dark:text-white leading-none md:text-[45px] font-bold mb-4">
              Community Reviews
            </h2>
            <p className="text-[#374151]">
              Hear how PlastoGas Hub is making a difference from voices that
              reflect our journey toward sustainability.
            </p>
          </div>
        </div>
        <section className="ezy__testimonial18 py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white z-[1]">
          <div className="container px-4 mx-auto">
            <div>
              <div>
                <p className="relative text-lg md:text-[26px] leading-10 font-bold mb-6 md:mb-12 text-center text-primary dark:text-white italic z-[1]">
                  {/* <FontAwesomeIcon
                    icon={faQuoteLeft}
                    className="absolute -top-3 left-0 md:-top-1/2 text-[100px] text-blue-600 text-opacity-10 -z-[1]"
                  /> */}
                  <QuoteRight className="absolute -top-3 left-0 md:-top-1/2 text-[100px] text-blue-600 text-opacity-10 -z-[1] h-24 w-24" />
                  {text}
                  {/* <FontAwesomeIcon
                    icon={faQuoteRight}
                    className="absolute -bottom-3 right-0 md:-bottom-1/2 text-[100px] text-blue-600 text-opacity-10 -z-[1]"
                  /> */}
                  <QuoteLeft className="absolute -bottom-3 right-0 md:-bottom-1/2 text-[100px] text-blue-600 text-opacity-10 -z-[1] h-24 w-24" />
                </p>
                <div className="text-center">
                  <div className="mr-3">
                    <img
                      src={picture}
                      alt={fullName}
                      className="w-20 h-20 rounded-full mb-4 mx-auto"
                    />
                  </div>
                  <div className="max-w-5xl mx-auto flex items-center flex-col">
                    <h4 className="text-xl text-secondary font-medium mb-2">
                      {fullName}
                    </h4>

                    <Rating
                      rating={rating}
                      showLabel={false}
                      className={""}
                      rest={""}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-2 m-0 mt-12">
                {data?.map((testimonial, idx) => (
                  <button
                    className={`w-3 h-3 rounded-full ${
                      index === idx
                        ? "scale-125 bg-secondary"
                        : " bg-gray-400 dark:bg-slate-800"
                    } `}
                    key={idx}
                    onClick={() => handleSelect(idx)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* <div className="grid grid-cols-6 gap-6 pt-8">
          {data?.map((testimonial, idx) => (
            <div className="col-span-6 md:col-span-3 lg:col-span-2" key={idx}>
              <TestimonialItem testimonial={testimonial} />
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;
