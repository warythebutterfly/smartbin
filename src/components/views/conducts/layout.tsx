import React, { Fragment, ReactNode } from "react";
import Image from "next/image";
import { Heading, Text } from "@/components/ui";
import ConductsHero from "@/assets/img/conducts.png";
import Link from "next/link";

const ConductsLayoutOld = ({ children }: { children: ReactNode }) => {
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
            we are committed to operating with integrity, transparency, and
            sustainability. Our values promote a culture of responsibility,
            respect, and professionalism in all our initiatives and
            collaborations.
          </Text>
        </div>
      </div>

      <div className="relative w-full max-w-[1232px] px-8 mx-auto -mt-4 lg:mt-[-25rem] mb-14">
        <div
          className="absolute top-0 left-0 right-0 z-[5] h-[500px] md:h-[329px]"
          style={{
            background:
              "linear-gradient(180deg, #003464 11.09%, rgba(37, 36, 34, 0.00) 100%)",
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

const ConductsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative pt-48 pb-12 overflow-hidden bg-[#daffd6] xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
      <div className="absolute inset-y-0 right-0">
        <div className="relative w-[600px] h-[600px] mx-auto">
          {/* Top Image */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] rounded-full overflow-hidden">
            <Image
              src="/img/mission.png"
              alt="Mission"
              width={150}
              height={150}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Bottom Left Image */}
          <div className="absolute bottom-0 left-0 transform -translate-x-1/4 w-[300px] h-[300px] rounded-full overflow-hidden">
            <Image
              src={ConductsHero}
              alt="Conducts Hero"
              width={150}
              height={150}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Bottom Right Image */}
          <div className="absolute bottom-0 right-0 transform translate-x-1/4 w-[300px] h-[300px] rounded-full overflow-hidden">
            <Image
              src="/img/vision.png"
              alt="Vision"
              width={150}
              height={150}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="w-full text-right lg:w-2/3 xl:w-1/2 md:text-left">
            <p className="font-sans text-base font-normal tracking-tight uppercase text-primary">
              YABATECH PLASTOGAS HUB
            </p>
            <h1 className="mt-6 tracking-tighter text-primary">
              <span className="font-sans font-normal text-7xl">Our</span>
              <br />
              <span className="font-serif italic font-normal text-8xl">
                Conducts
              </span>
            </h1>
            <p className="mt-12 font-sans text-base font-normal leading-7 md:max-w-sm text-[#374151] text-opacity-70">
              We are committed to operating with integrity, transparency, and
              sustainability. Our values promote a culture of responsibility,
              respect, and professionalism in all our initiatives and
              collaborations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConductsLayout;
