import Head from "next/head";
import React, { Fragment } from "react";
import { Career } from "~/sanity/lib";
import { RichText } from "@/components/ui";
import styles from "./styles.module.css";

const CareerDetailsView = ({ data }: { data: Career }) => {
  return (
    <Fragment>
      <Head>
        <title>{data?.jobTitle} | Careers @ YabaTech PlastoGas Hub</title>
      </Head>

      <section className="pt-[56px] md:pt-[112px] pb-[49px] bg-[#F9FAFB] px-4">
        <div className="w-full max-w-[997px] mx-auto bg-white border border-[#E5E7EB] rounded-lg px-4 md:px-16 py-10">
          <div className="mb-8">
            <div className="w-fit rounded-[32px] bg-[#374151] group-hover:bg-white group-hover:text-[#1F2937] px-[14px] py-[6px] text-white text-sm mb-[6px]">
              {data?.experienceLevel}
            </div>
            <h2 className="text-2xl md:text-[32px] font-semibold leading-10 md:leading-[56px] text-[#252422] group-hover:text-white">
              {data?.jobTitle}
            </h2>
          </div>

          {data?.qualifications && (
            <div className="border border-[#F3F4F6] rounded-lg bg-[#F9FAFB] px-4 md:px-10 py-6 mb-8">
              <RichText
                className={styles.portableText}
                content={data?.qualifications}
              />
            </div>
          )}

          {data?.jobDescription && (
            <div className="mb-6">
              <h2 className="mb-3 text-primary text-2xl leading-[48px] font-semibold">
                About the job
              </h2>
              <RichText
                className={`${styles.portableText} leading-8"`}
                content={data?.jobDescription}
              />
            </div>
          )}

          <hr className="h-[1px] w-full bg-[#F3F4F6]" />

          {data?.responsibilities && (
            <div className="my-6">
              <h6 className="text-2xl text-primary font-semibold leading-[48px] mb-3">
                Responsibilities
              </h6>
              <RichText
                className={styles.portableText}
                content={data?.responsibilities}
              />
            </div>
          )}

          <hr className="h-[1px] w-full bg-[#F3F4F6]" />

          {data?.howToApply && (
            <div className="mt-6">
              <h2 className="mb-3 text-primary text-2xl leading-[48px] font-semibold">
                Apply
              </h2>
              <RichText
                className={styles.portableText}
                content={data?.howToApply}
              />
            </div>
          )}
        </div>
      </section>
    </Fragment>
  );
};

export default CareerDetailsView;
