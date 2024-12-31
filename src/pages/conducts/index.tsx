import React from "react";
import { GetStaticProps } from "next";
import ConductsView from "@/components/views/conducts";
import { PreviewConductsPage } from "@/components/sanity";
import { Conduct, getClient, getConductsData } from "~/sanity/lib";

interface PageProps {
  data: Conduct[];
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
  const data = await getConductsData(client);

  return {
    props: {
      data,
      preview,
      previewToken,
    },
  };
};

const Conducts = ({ data, preview, previewToken }: PageProps) => {
  if (preview && previewToken) {
    return <PreviewConductsPage data={data} />;
  }

  return <ConductsView data={data} />;
};

export default Conducts;
