import Head from "next/head";
import React, { Fragment } from "react";
import HeroSection from "./heroSection";
import ProductListings from "./listings";
import { Product } from "~/sanity/lib";

const ProductsView = ({ products }: { products: Product[] }) => {
  return (
    <Fragment>
      <Head>
        <title>Products | #</title>
      </Head>
      <HeroSection />
      <ProductListings products={products} />
    </Fragment>
  );
};

export default ProductsView;
