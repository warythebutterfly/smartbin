import React from "react";
import PartnersView from "@/components/views/partners";
import { Partner, getClient, getPartnersData } from "~/sanity/lib";
import { GetStaticProps } from "next";
import { PreviewPartnersPage } from "@/components/sanity";

interface PageProps {
  data: Partner[];
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
  const data = await getPartnersData(client);

  return {
    props: {
      data,
      preview,
      previewToken,
    },
  };
};

const Partners = ({ data, preview, previewToken }: PageProps) => {
  if (preview && previewToken) {
    return <PreviewPartnersPage data={data} />;
  }
  return <PartnersView data={data} />;
};

export default Partners;
