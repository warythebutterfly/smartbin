import Head from "next/head";
import Script from "next/script";
import React, { Fragment } from "react";
import PartnersHeroSection from "./partnersHeroSection";
import PartnersGrid from "./partnersGrid";
import BecomePartner from "./becomePartner";
import { Partner } from "~/sanity/lib";

const PartnersView = ({ data }: { data: Partner[] }) => {
  return (
    <Fragment>
      <Head>
        <title>Our Partners | YabaTech PlastoGas Hub</title>
      </Head>
      <PartnersHeroSection />
      <PartnersGrid data={data} />
      <BecomePartner />
    </Fragment>
  );
};

export default PartnersView;
