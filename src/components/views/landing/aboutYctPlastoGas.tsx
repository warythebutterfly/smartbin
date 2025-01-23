import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Heading, Text } from "@/components/ui";
import AboutYctPlastoGasHub from "@/assets/img/about-yctplasto.jpeg";
import { Landing } from "~/sanity/lib";

const AboutYctPlastoGas = ({ data }: { data: Landing["aboutSection"] }) => {
  return (
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
            <span className="text-[#9A4151]">  plastic waste management </span>
            through innovative technologies, community empowerment, and sustainable practices, creating a cleaner and greener future”.
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
                <Button className="w-[170px] h-12">Become a partner</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutYctPlastoGas;
