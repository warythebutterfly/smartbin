import React from "react";
import { Jost } from "next/font/google";
import { Heading, Text } from "@/components/ui";

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
});

const OurValues = () => {
  const values = [
    {
      title: "Sustainability",
      description:
        "We are committed to creating lasting solutions that promote environmental sustainability by reducing plastic waste, conserving resources, and fostering a circular economy.",
      img: "",
      short: "S",
    },
    {
      title: "Innovation",
      description:
        "At YabaTech PlastoGas Hub, we believe in leveraging cutting-edge technologies and creative problem-solving to transform plastic waste into valuable resources and energy.",
      img: "",
      short: "I",
    },
    {
      title: "Community Empowerment",
      description:
        "We aim to empower individuals and communities by providing training, tools, and opportunities to actively participate in sustainable waste management practices.",
      img: "",
      short: "CE",
    },
    {
      title: "Collaboration",
      description:
        "Partnerships are key to our success. By working with academic institutions, research organizations, and local communities, we combine expertise and resources to maximize impact.",
      img: "",
      short: "C",
    },
    {
      title: "Environmental Stewardship",
      description:
        "We take responsibility for protecting our environment by promoting practices that minimize waste, reduce pollution, and align with international sustainability standards.",
      img: "",
      short: "ES",
    },
  ];

  return (
    <section id="values" className="pt-[80px] pb-[96px] bg-[#010206]">
      <div className="wrapper">
        <div className="mb-12 w-full max-w-[780px]">
          <Heading
            as="h4"
            className="text-white text-4xl md:text-[64px] font-semibold leading-[80px] tracking-[1.6px] mb-6"
          >
            Our Values
          </Heading>
          <Text
            className={`${jost.className} text-lg text-[#E5E7EB] leading-[30px] tracking-[0.36px]`}
          >
            Our values as a conglomerate company are deeply aligned with our
            mission, vision and overall strategy. They guide our
            decision-making, shape the company’s culture, and contribute to its
            overall success. Although we cannot include all positive values, we
            strive to ensure our culture, employees and partners align with
            positive values that propels our company forward.
          </Text>
        </div>

        <div>
          {values.map((value) => (
            <div
              key={value.title}
              className="px-4 md:px-12 pt-7 md:pt-14 pb-8 md:pb-16 border-b border-b-[#1F2937] flex flex-col md:flex-row md:items-center gap-6 md:gap-[123px]"
            >
              <div className="bg-primary rounded-xl w-full max-w-[120px] h-[120px] flex justify-center items-center text-white text-6xl font-semibold">
                {value.short}
              </div>

              <div>
                <Heading
                  as="h5"
                  className="mb-5 text-xl md:text-[40px] text-white leading-[56px] font-semibold tracking-[1px]"
                >
                  {value.title}
                </Heading>
                <Text
                  className={`${jost.className} text-base md:text-lg text-[#D1D5DB] leading-[30px] tracking-[0.32px]`}
                >
                  {value.description}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
