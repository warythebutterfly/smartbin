import React from "react";
import CareersView from "@/components/views/careers";
import {
  getCareersData,
  getClient,
  Career,
  getCategoryData,
  Category,
} from "~/sanity/lib";
import { GetStaticProps } from "next";
import { PreviewCareersPage } from "@/components/sanity";

interface PageProps {
  data: Career[];
  category: Category[];
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
  const [data, category] = await Promise.all([
    getCareersData(client),
    getCategoryData(client),
  ]);

  return {
    props: {
      data,
      category,
      preview,
      previewToken,
    },
  };
};

const Careers = ({ data, category, preview, previewToken }: PageProps) => {
  if (preview && previewToken) {
    return <PreviewCareersPage data={data} category={category} />;
  }

  return <CareersView data={data} category={category} />;
};

export default Careers;
