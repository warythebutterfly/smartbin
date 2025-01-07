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
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        onLoad={() => {
          console.log("gRecaptcha script is now ready!!!!!");
          let grecaptcha = (window as any)?.grecaptcha;
          grecaptcha.ready(function () {
            grecaptcha
              .execute(`${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`, {
                action: "formbackend_frontpage",
              })
              .then(function (token: string) {
                (
                  document.getElementById(
                    "g-recaptcha-response",
                  ) as HTMLInputElement
                ).value = token;
              });
          });
          console.log("gRecaptcha script has been executed!!!!!");
        }}
      ></Script>
    </Fragment>
  );
};

export default PartnersView;
