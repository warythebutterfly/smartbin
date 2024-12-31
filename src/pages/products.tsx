import React from "react";
import ProductsView from "@/components/views/products";
import { Product, getClient, getProductsData } from "~/sanity/lib";
import { GetStaticProps } from "next";
import { PreviewProductsPage } from "@/components/sanity";

interface PageProps {
  data: Product[];
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
  const data = await getProductsData(client);

  return {
    props: {
      data,
      preview,
      previewToken,
    },
  };
};

const Products = ({ data, preview, previewToken }: PageProps) => {
  if (preview && previewToken) {
    return <PreviewProductsPage products={data} />;
  }

  return <ProductsView products={data} />;
};

export default Products;
