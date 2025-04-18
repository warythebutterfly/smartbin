import React, { useRef } from "react";
import { Heading, RichText, Text } from "@/components/ui";
import { Landing } from "~/sanity/lib";
import styles from "./styles.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight } from "@/components/icons";
import OurValues, { ValueItem } from "./ourValues";

const VisionMission = ({ data }: { data: Landing["visionSection"] }) => {
  return (
    <section id="vision" className="pt-[80px] pb-[96px] bg-[#010206]">
      <div className="wrapper">
        <div className="w-full md:max-w-[432px]">
          <Heading
            as="h4"
            className="text-white text-4xl md:text-[64px] font-bold md:leading-[88px] tracking-[1.6px]"
          >
            OUR VISION, MISSION AND
          </Heading>
          <Heading className="text-4xl md:text-[64px] font-bold md:leading-[88px] tracking-[1.6px]">
            <span className="bg-gradient-to-br from-[#2DBE60] via-[#003464] to-[#2DBE60] bg-clip-text text-transparent">
              VALUES
            </span>
          </Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-32 px-4 md:px-16">
          {/* Vision Card */}
          <div
            className="relative group rounded-2xl overflow-hidden transition-transform duration-700 transform hover:scale-[1.03] shadow-lg"
            style={{
              backgroundImage: "url(/img/mission.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-[rgba(0,52,100,0.85)] group-hover:bg-[rgba(0,52,100,0.9)] transition-colors duration-700 z-10"></div>
            <div className="relative z-20 p-6 md:p-10 text-white">
              <Heading
                as="h6"
                className="text-white font-bold text-3xl md:text-[48px] leading-tight tracking-wide mb-6"
              >
                Our Vision
              </Heading>
              <RichText className={styles.vision} content={data?.vision} />
            </div>
          </div>

          {/* Mission Card */}
          <div
            className="relative group rounded-2xl overflow-hidden transition-transform duration-700 transform hover:scale-[1.03] shadow-lg"
            style={{
              backgroundImage: "url(/img/vision.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-[rgba(0,52,100,0.85)] group-hover:bg-[rgba(0,52,100,0.9)] transition-colors duration-700 z-10"></div>
            <div className="relative z-20 p-6 md:p-10 text-white">
              <Heading
                as="h6"
                className="text-white font-bold text-3xl md:text-[48px] leading-tight tracking-wide mb-6"
              >
                Our Mission
              </Heading>
              <RichText className={styles.mission} content={data?.mission} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MissionSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
        <p className="mt-4 text-lg text-gray-600">
          We are committed to delivering innovative solutions that empower
          communities and drive positive change.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        <div className="text-center">
          <div className="flex items-center justify-center h-16 w-16 mx-auto bg-indigo-100 rounded-full">
            {/* Replace with appropriate icon */}
            <svg
              className="h-8 w-8 text-indigo-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-900">
            Innovation
          </h3>
          <p className="mt-2 text-base text-gray-600">
            Embracing new ideas to drive progress and efficiency.
          </p>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center h-16 w-16 mx-auto bg-indigo-100 rounded-full">
            {/* Replace with appropriate icon */}
            <svg
              className="h-8 w-8 text-indigo-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M17 9V7a4 4 0 00-8 0v2a4 4 0 00-4 4v4h16v-4a4 4 0 00-4-4z" />
            </svg>
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-900">
            Integrity
          </h3>
          <p className="mt-2 text-base text-gray-600">
            Upholding honesty and strong moral principles in all our actions.
          </p>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center h-16 w-16 mx-auto bg-indigo-100 rounded-full">
            {/* Replace with appropriate icon */}
            <svg
              className="h-8 w-8 text-indigo-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 8c-1.1 0-2 .9-2 2v2h4v-2c0-1.1-.9-2-2-2z" />
              <path d="M6 20h12v-2a4 4 0 00-4-4H10a4 4 0 00-4 4v2z" />
            </svg>
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-900">
            Community
          </h3>
          <p className="mt-2 text-base text-gray-600">
            Building strong relationships and supporting each other.
          </p>
        </div>
      </div>
    </section>
  );
};

const TextParallaxContentExample = ({
  data,
}: {
  data: Landing["visionSection"];
}) => {
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
    <div className="bg-white">
      <TextParallaxContent
        imgUrl="https://s3.eu-north-1.amazonaws.com/cdn-site.mediaplanet.com/app/uploads/sites/104/2024/04/07234343/MainImage_Recycling-888x500.jpg"
        heading="Our Vision"
        subheading="Transform plastic waste through technology, education, and sustainable practices."
      >
        <ExampleContent header={"🌍 Vision Statement"} content={data?.vision} />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://media.licdn.com/dms/image/v2/C5612AQH_Eron--vhmg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1635493839520?e=2147483647&v=beta&t=CdBeCqx97cBCecRf2w5O0vvFeo5atoBQl6OkCWDUyvc"
        heading="Our Mission"
        subheading="Foster innovation through local and international collaborations."
      >
        <ExampleContent
          header={"🚀 Mission Statement"}
          content={data?.mission}
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://sigmaconnected.com/wp-content/uploads/2022/10/full-width-banner-about-values-05.jpg"
        heading="Our Values"
        subheading="Operating with transparency, accountability, and respect in all our partnerships."
      >
        {/* <ExampleContent content={data.vision} /> */}
        <div className="grid grid-cols-4 gap-6 text-center pt-6 mx-4">
          {values.map((value, i) => (
            <div className="col-span-4 md:col-span-2 lg:col-span-1" key={i}>
              <ValueItem value={value} />
            </div>
          ))}
        </div>
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: any;
}) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({
  subheading,
  heading,
}: {
  subheading: string;
  heading: string;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>

      <p className="my-4 text-center text-l md:mb-4 md:text-2xl mx-12">
        {subheading}
      </p>
    </motion.div>
  );
};

const ExampleContent = ({
  header,
  content,
}: {
  header: string;
  content: string;
}) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl text-secondary font-bold md:col-span-4">
      {header}
    </h2>
    <div className="col-span-1 md:col-span-8">
      <RichText
        className="mb-4 text-xl text-primary md:text-xl"
        content={content}
      />
      {/* <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        reiciendis blanditiis aliquam aut fugit sint.
      </p> */}
      {/* <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Learn more <ChevronRight className="inline" />
      </button> */}
    </div>
  </div>
);

export default TextParallaxContentExample;

//export default VisionMission;
