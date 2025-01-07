import Head from "next/head";
import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import OurValues from "./ourValues";
import HeroSection from "./heroSection";
import AboutVictoriaBros from "./aboutVictoriaBros";
import VisionMission from "./visionMission";
import { Landing as LandingProps } from "~/sanity/lib";

const Testimonials = dynamic(() => import("./testimonials"), {
  ssr: false,
});

const LandingView = ({ data }: { data: LandingProps }) => {
  return (
    <Fragment>
      <Head>
        <title>YabaTech PlastoGas Hub</title>
        <meta
          name="description"
          content="YabaTech PlastoGas Hub is the parent company of YabaTech PlastoGas Hub Technologies which focuses on building software for internal use, public use, and providing software service for its partners."
        />
      </Head>
      <HeroSection data={data?.heroSection} />
      <AboutVictoriaBros data={data?.aboutSection} />
      <VisionMission data={data?.visionSection} />
      <OurValues />
      {data?.testimonialSection?.length ? (
        <Testimonials data={data?.testimonialSection} />
      ) : null}
    </Fragment>
  );
};

export default LandingView;
