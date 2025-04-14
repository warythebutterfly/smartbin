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
    <section id="values" className="bg-[#010206] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <Heading
          as="h4"
          className="text-white text-4xl md:text-6xl font-semibold leading-tight mb-6"
        >
          Our Values
        </Heading>
        <div className="w-16 h-1 bg-gradient-to-r from-[#2DBE60] via-[#003464] to-[#2DBE60] mx-auto rounded-full mb-6" />
        <Text
          className={`${jost.className} text-lg text-[#E5E7EB] max-w-3xl mx-auto leading-8`}
        >
          As a waste management initiative, our values drive decisions, shape
          culture, and align with our mission for a cleaner, greener planet. We
          focus on principles that fuel long-term, meaningful impact.
        </Text>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        {values.map((value) => (
          <div
            key={value.title}
            className="flex items-start gap-6 p-6 md:p-10 bg-primary rounded-2xl border border-primary hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex-shrink-0">
              <div className="w-[100px] h-[100px] rounded-full bg-gradient-to-br from-[#2DBE60] via-[#003464] to-[#2DBE60] flex items-center justify-center text-white text-4xl font-bold shadow-md shadow-[#2DBE6055]">
                {value.short}
              </div>
            </div>

            <div className="text-left">
              <Heading
                as="h5"
                className="text-2xl md:text-[32px] text-white font-semibold mb-4 leading-snug"
              >
                {value.title}
              </Heading>
              <Text
                className={`${jost.className} text-base text-[#D1D5DB] leading-7`}
              >
                {value.description}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;
