import React from "react";
import { Jost } from "next/font/google";
import { Heading, Text } from "@/components/ui";

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
});

export const ValueItem = ({ value }: { value: any }) => (
  <div className="bg-white shadow-xl rounded-xl hover:-translate-y-1 duration-500 h-full p-6 lg:p-8">
    <div className="flex-shrink-0">
      <div className="w-[100px] h-[100px] rounded-full bg-gradient-to-br from-[#2DBE60] via-[#003464] to-[#2DBE60] flex items-center justify-center text-white text-4xl font-bold shadow-md shadow-[#2DBE6055]">
        {value.short}
      </div>
    </div>
    <div className="mt-6">
      <h4 className="text-2xl text-primary font-medium mb-1">{value.title}</h4>
      <p className="opacity-70 text-[#374151]">{value.description}</p>
    </div>
  </div>
);

const OurValues = () => {
  const values = [
    {
      title: "Sustainability",
      description:
        "We are committed to creating lasting solutions that promote environmental sustainability by reducing plastic waste, conserving resources, and fostering a circular economy.",
      img: "",
      short: "S",
    },
    // {
    //   title: "Innovation",
    //   description:
    //     "At YabaTech PlastoGas Hub, we believe in leveraging cutting-edge technologies and creative problem-solving to transform plastic waste into valuable resources and energy.",
    //   img: "",
    //   short: "I",
    // },
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

      <div className="grid grid-cols-4 gap-6 text-center pt-6">
        {values.map((value, i) => (
          <div className="col-span-4 md:col-span-2 lg:col-span-1" key={i}>
            <ValueItem value={value} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;
