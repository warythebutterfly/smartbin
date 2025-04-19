import React from "react";
import { GetStaticProps } from "next";
import {
  Investor,
  News,
  getClient,
  getInvestorsData,
  getNewsData,
} from "~/sanity/lib";
import InvestorsView from "@/components/views/news";
import { PreviewInvestorsPage } from "@/components/sanity";

interface PageProps {
  investorsData: Investor[];
  newsData: News[];
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

  const client = getClient();
  const [investorsData, newsData] = await Promise.all([
    getInvestorsData(client),
    getNewsData(client),
  ]);

  return {
    props: {
      investorsData,
      newsData,
      preview,
      previewToken,
    },
  };
};

const Investors = ({
  investorsData,
  newsData,
  preview,
  previewToken,
}: PageProps) => {
  if (preview && previewToken) {
    return <PreviewInvestorsPage data={{ investorsData, newsData }} />;
  }

  return <InvestorsView data={{ investorsData, newsData }} />;
};

export default Investors;
