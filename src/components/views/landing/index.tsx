import Head from "next/head";
import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import OurValues from "./ourValues";
import HeroSection from "./heroSection";
import AboutYctPlastoGas from "./aboutYctPlastoGas";
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
          content="Join us in creating a cleaner, greener future with our sustainable solutions, advanced smart bins, and community-focused training programs. Together, we can transform plastic waste into valuable resources for a sustainable tomorrow."
        />
      </Head>
      <HeroSection data={data?.heroSection} />
      <AboutYctPlastoGas data={data?.aboutSection} />
      <VisionMission data={data?.visionSection} />
      {/* <OurValues /> */}
      {data?.testimonialSection?.length ? (
        <Testimonials data={data?.testimonialSection} />
      ) : null}
    </Fragment>
  );
};

export default LandingView;
