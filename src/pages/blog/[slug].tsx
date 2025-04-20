import { GetStaticProps } from "next";
import React from "react";
import {
  getClient,
  getBlogData,
  getBlogDetailsData,
  IBlog,
} from "~/sanity/lib";
import { BlogDetailsView } from "@/components/views/blog/detail";
import PreviewBlogDetailPage from "@/components/sanity/PreviewBlogDetailPage";

interface PageProps {
  data: IBlog;
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
  const data = await getBlogDetailsData(client, params.slug);

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
  const blogData = await getBlogData(client);

  const paths = blogData.map((blog) => ({
    params: { slug: blog.slug },
  }));

  return {
    paths: paths || [],
    fallback: false,
  };
};

const BlogDetail = ({ data, preview, previewToken }: PageProps) => {
  if (preview && previewToken) {
    return <PreviewBlogDetailPage data={data} />;
  }

  return <BlogDetailsView article={data} />;
};

export default BlogDetail;
