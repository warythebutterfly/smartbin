import { GetStaticProps } from "next";
import React from "react";
import ConductDetailsView from "@/components/views/conducts/detail";
import {
  Conduct,
  getClient,
  getConductDetailsData,
  getConductsData,
} from "~/sanity/lib";
import { PreviewConductDetailPage } from "@/components/sanity";

interface PageProps {
  data: Conduct;
  preview?: boolean;
  previewToken?: string;
}

interface Query {
  [key: string]: string;
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { params = {}, draftMode } = ctx;
  const preview = draftMode || false;
  const previewToken = preview ? process.env.SANITY_READ_TOKEN : "";
  if (preview && !previewToken) {
    throw new Error(
      `Preview mode is active, but SANITY_READ_TOKEN is not set in environment variables`,
    );
  }
  const client = getClient();
  const data = await getConductDetailsData(client, params.slug);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
      preview,
      previewToken,
    },
  };
};

export const getStaticPaths = async () => {
  const client = getClient();
  const conductsData = await getConductsData(client);

  const paths = conductsData.map((conduct) => ({
    params: { slug: conduct.slug },
  }));

  return {
    paths: paths || [],
    fallback: false,
  };
};

const ConductDetail = ({ data, preview, previewToken }: PageProps) => {
  if (preview && previewToken) {
    return <PreviewConductDetailPage data={data} />;
  }

  return <ConductDetailsView data={data} />;
};

export default ConductDetail;
