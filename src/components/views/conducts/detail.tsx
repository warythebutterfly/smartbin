import Head from "next/head";
import Link from "next/link";
import React, { Fragment } from "react";
import { Heading, RichText } from "@/components/ui";
import ConductsLayout from "./layout";
import { Conduct } from "~/sanity/lib";
import styles from "./conducts.module.css";

const ConductDetailsView = ({ data }: { data: Conduct }) => {
  return (
    <Fragment>
      <Head>
        <title>{data?.title} | Conducts</title>
      </Head>

      <ConductsLayout>
        <div className="bg-white pb-[265px]">
          <div className="wrapper">
            <div className="max-w-[684px] mx-auto">
              <div className="flex items-center">
                <Link href="/conducts" className="py-[10px] text-[#9CA3AF]">
                  Back
                </Link>
              </div>

              {data?.title ? (
                <Heading className="mb-4 text-[28px] text-primary tracking-[-0.32px]">
                  {data?.title}
                </Heading>
              ) : null}

              <RichText
                className={styles.portableText}
                content={data?.description}
              />
            </div>
          </div>
        </div>
      </ConductsLayout>
    </Fragment>
  );
};

export default ConductDetailsView;
