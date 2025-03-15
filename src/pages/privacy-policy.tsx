import Head from "next/head";
import React, { Fragment } from "react";
import PrivacyView from "@/components/views/privacy";
import { GetStaticProps } from "next";
import {
  getClient,
  getPrivacyData,
  getTermsData,
  PrivacyPolicy as PrivacyPolicyProps,
  Terms,
} from "~/sanity/lib";
import { PreviewPrivacyPage } from "@/components/sanity";

interface PageProps {
  data: { privacyData?: PrivacyPolicyProps; termsData?: Terms };
  preview?: boolean;
  previewToken?: string;
}

interface Query {
  [key: string]: string;
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const preview = ctx.draftMode || false;
  const previewToken = preview ? process.env.SANITY_READ_TOKEN : "";
  if (preview && !previewToken) {
    throw new Error(
      `Preview mode is active, but SANITY_READ_TOKEN is not set in environment variables`,
    );
  }

  const client = getClient(previewToken);
  const privacyData = await getPrivacyData(client);
  const termsData = await getTermsData(client);

  return {
    props: {
      data: { privacyData, termsData },
      preview,
      previewToken,
    },
  };
};

const PrivacyPolicy = ({ data, preview, previewToken }: PageProps) => {
  if (preview && previewToken) {
    return <PreviewPrivacyPage data={data} />;
  }

  return (
    <Fragment>
      <Head>
        <title>Privacy Policy | YabaTech PlastoGas Hub</title>
      </Head>
      <PrivacyView
        privacyData={data?.privacyData}
        termsData={data?.termsData}
      />
    </Fragment>
  );
};

export default PrivacyPolicy;
