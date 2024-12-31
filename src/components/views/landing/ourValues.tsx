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
      title: "Integrity",
      description:
        "Integrity as a core value for our company is foundational to us. We uphold honesty, transparency, fairness, sincerity, and ethical principles in all our business operations. Our strong ethical values extend to interactions with employees, customers, partners, and the wider community, which helps to build a reputation for reliability and ethical behavior, contributing to long-term success and positive stakeholder relationships.",
      img: "",
      short: "I",
    },
    {
      title: "Innovation",
      description:
        "Innovation as a core value for our company emphasizes the importance of creativity, a forward-thinking mindset, and continuous improvement. We foster a culture that encourages personal development and the implementation of new ideas, technologies, and processes. We seek to stay ahead in a rapidly changing business environment by improving our products and services, providing opportunities for growth, and embracing innovative ideas and technologies to maintain a competitive edge.",
      img: "",
      short: "I",
    },
    {
      title: "Inclusiveness",
      description:
        "Inclusiveness as a core value for our company, emphasizes a commitment to fostering a diverse and inclusive environment. We recognize, respect, and value differences among employees and promote equal opportunities. We are creating a culture where all voices are heard, which contributes to a dynamic and adaptive culture where every individual feels valued and can contribute to the company's success.",
      img: "",
      short: "I",
    },
    {
      title: "Quality",
      description:
        "Quality as a core value for our company signifies our commitment to maintaining the highest standards in products, services, and operations through rigorous quality control processes, attention to detail, and a continuous pursuit of improvement. We are dedicated to excellence, precision, and consistency throughout all aspects of our business, and by prioritizing quality, our company aims to meet and exceed customer expectations, establish a positive reputation, and ensure long-term success and overall competitiveness in the markets in which we operate.",
      img: "",
      short: "Q",
    },
    {
      title: "Collaboration",
      description:
        "Collaboration as a core value for our company emphasizes a culture that values teamwork, open-ended communication, and idea sharing. Our company aims to leverage the diverse perspectives and skills of our workforce, which enhances problem solving and promotes a cooperative and inclusive environment.",
      img: "",
      short: "C",
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
