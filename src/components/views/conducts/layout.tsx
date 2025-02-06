import React, { Fragment, ReactNode } from "react";
import Image from "next/image";
import { Heading, Text } from "@/components/ui";
import ConductsHero from "@/assets/img/conducts-hero.png";
import Link from "next/link";

const ConductsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <div className="min-h-[400px] lg:min-h-[673px] bg-primary flex flex-col md:flex-row justify-center lg:mb-10">
        <div className="mb-8 text-center mt-[96px] w-full max-w-[750px] px-8 md:px-0">
          <Heading className="text-white text-[66px] leading-[72px] mb-6">
            Conducts
          </Heading>
          <Text className="text-[#D1D5DB]">
            At{" "}
            <Link href="/" className="underline text-white">
              YabaTech PlastoGas Hub,
            </Link>{" "}
            we are committed to conducting our business in an ethical and honest
            manner. These conducts are designed to promote a culture of
            integrity, respect, and professionalism within our company and in
            our dealings with partners.
          </Text>
        </div>
      </div>

      <div className="relative w-full max-w-[1232px] px-8 mx-auto -mt-4 lg:mt-[-25rem] mb-14">
        <div
          className="absolute top-0 left-0 right-0 z-[5] h-[150px] md:h-[329px]"
          style={{
            background:
              "linear-gradient(180deg, #252422 11.09%, rgba(37, 36, 34, 0.00) 100%)",
          }}
        ></div>
        <Image
          src={ConductsHero}
          alt="Conducts Hero"
          className="z-[1]"
          priority
        />
      </div>
      {children}
    </Fragment>
  );
};

export default ConductsLayout;
