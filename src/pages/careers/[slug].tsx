import React from "react";
import { GetStaticProps } from "next";
import CareerDetailsView from "@/components/views/careerDetails";
import {
  Career,
  getCareerDetailsData,
  getCareersData,
  getClient,
} from "~/sanity/lib";
import { PreviewCareerDetailsPage } from "@/components/sanity";

interface PageProps {
  data: Career;
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
  const data = await getCareerDetailsData(client, params.slug);

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
  const careersData = await getCareersData(client);

  const paths = careersData.map((career) => ({ params: { slug: career._id } }));

  return {
    paths: paths || [],
    fallback: "blocking",
  };
};

const CareerDetail = ({ data, preview, previewToken }: PageProps) => {
  if (preview && previewToken) {
    return <PreviewCareerDetailsPage data={data} />;
  }

  return <CareerDetailsView data={data} />;
};

export default CareerDetail;
