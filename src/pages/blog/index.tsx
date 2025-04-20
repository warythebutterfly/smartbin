import React from "react";
import { GetStaticProps } from "next";
import { IBlog, getBlogData, getClient, getInvestorsData } from "~/sanity/lib";
import BlogView from "@/components/views/blog";
import { PreviewBlogPage } from "@/components/sanity";

interface PageProps {
  data: IBlog[];
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
  const data = await getBlogData(client);

  return {
    props: {
      data,
      preview,
      previewToken,
    },
  };
};

const Blog = ({ data, preview, previewToken }: PageProps) => {
  if (preview && previewToken) {
    return <PreviewBlogPage data={data} />;
  }

  return <BlogView data={data} />;
};

export default Blog;
