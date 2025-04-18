import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Heading, Text } from "@/components/ui";
import AboutYctPlastoGasHub from "@/assets/img/about-yctplasto.jpeg";
import { Landing } from "~/sanity/lib";

const AboutYctPlastoGas = ({ data }: { data: Landing["aboutSection"] }) => {
  return (
    <>
      <section className="ezy__cta8 py-14 md:py-24 mx-auto max-w-7xl bg-white text-zinc-900">
        <div className="container px-4">
          <div className="bg-[#eff4fd] rounded-3xl overflow-hidden">
            <div className="grid grid-cols-12">
              <div className="col-span-12 lg:col-span-6 bg-black bg-opacity-10 text-center p-4">
                <Image
                  src={AboutYctPlastoGasHub}
                  alt=""
                  className="max-w-full h-auto rounded-2xl"
                />
              </div>
              <div className="col-span-12 lg:col-span-6">
                <div className="flex items-center h-full py-12 px-6 sm:px-12">
                  <div>
                    {data?.introHeading && (
                      <Text className="mb-6 text-[#4B5563] font-normal leading-6">
                        {data?.introHeading}
                      </Text>
                    )}
                    <h2 className="text-2xl md:text-[40px] leading-none font-bold mb-6">
                      Join with us for more information
                    </h2>
                    <p className="text-lg opacity-80 mb-12 lg:mr-12">
                      Our mission is “to revolutionize
                      <span className="text-[#2DBE60]">
                        {" "}
                        plastic waste management{" "}
                      </span>
                      through innovative technologies, community empowerment,
                      and sustainable practices, creating a cleaner and greener
                      future”.
                    </p>
                    {data?.subText && (
                      <Text className="mb-6 text-[#4B5563] font-normal leading-6">
                        {data?.subText}
                      </Text>
                    )}

                    <div>
                      <Link href="https://bine.yctplastogashub.com/about">
                        <button className="px-7 py-3 rounded-full min-w-[110px] bg-transparent border border-blue-600 hover:text-white hover:bg-primary hover:border-opacity-90 transition mb-3 lg:mb-0 lg:mr-2">
                          Learn More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  <section id="about" className="pt-14 pb-16 bg-white px-4">
    <div>
      <div className="max-w-5xl mx-auto mb-12">
        {data?.introHeading && (
          <Text className="mb-6 text-[#4B5563] text-center font-normal leading-6">
            {data?.introHeading}
          </Text>
        )}
        <Heading
          as="h2"
          className="text-xl md:text-[40px] font-normal md:leading-[56px] text-center"
        >
          Our mission is “to revolutionize
          <span className="text-[#2DBE60]"> plastic waste management </span>
          through innovative technologies, community empowerment, and
          sustainable practices, creating a cleaner and greener future”.
        </Heading>
      </div>

      <div>
        <div className="mb-8 flex justify-center">
          <Image
            src={AboutYctPlastoGasHub}
            alt="About #"
            className="rounded-2xl"
          />
        </div>

        {/* <div className="mb-[88px] text-center max-w-4xl mx-auto">
      <Heading
        as="h4"
        className="mb-4 text-lg md:text-[32px] font-normal md:leading-[48px]"
      >
        Our products cut across all areas of human endeavours making life
        easier and fun.
      </Heading>
      <Link
        href="/products"
        className="text-[#06813E] font-medium leading-6"
      >
        Learn more
      </Link>
    </div> */}

        <div className="max-w-5xl mx-auto flex items-center flex-col">
          {data?.subText && (
            <Heading
              as="h3"
              className="mb-10 text-center text-2xl md:text-[56px] font-normal md:leading-[72px]"
            >
              {data?.subText}
            </Heading>
          )}
          <div className="flex items-center gap-4">
            {/* <Link href="/products">
          <Button className="w-fit h-12">View all products</Button>
        </Link> */}

            <Link href="/partners">
              <Button className="w-[170px] h-12 bg-[#2DBE60]">
                Become a partner
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>;
};

export default AboutYctPlastoGas;
