import React from "react";
import Link from "next/link";
import { Button, Heading, Text } from "@/components/ui";
import { Jost } from "next/font/google";
import { Product, urlForImage } from "~/sanity/lib";
import Image from "next/image";

const jost = Jost({ subsets: ["latin"] });

const ProductListings = ({ products }: { products: Product[] }) => {
  return (
    <div className="pt-14 pb-[140px] bg-white">
      <div className="wrapper">
        <div className="max-w-[600px] mx-auto mb-16 flex items-center flex-col">
          <div className="mb-8 w-fit">
            <Heading className="leading-[64px]">Our Products</Heading>
            <hr className="w-16 h-[2px] bg-[#2F80ED]" />
          </div>
          <Text className="text-lg text-[#374151] leading-8">
            <Link
              href="/"
              className="text-primary underline leading-8 font-medium"
            >
              YabaTech PlastoGas Hub
            </Link>{" "}
            is the parent company of # Technologies which focuses on building
            software for internal use, public use, and providing software
            service for its partners.
          </Text>
        </div>

        <div className="flex flex-col gap-12">
          {products?.map((product) => (
            <div
              key={product._id}
              className="flex flex-col md:flex-row gap-8 md:gap-[87px] items-center"
            >
              {product.order === 1 ? (
                <div className="bg-[#F3F4F6] rounded-xl w-full h-[484px] flex-1"></div>
              ) : null}

              <div className="flex flex-col gap-8 w-full md:w-1/2">
                <Heading className="text-[40px] text-[#1F2937] leading-[64px]">
                  {product.name}
                </Heading>

                <Text className={`text-[#534E50] leading-8 ${jost.className}`}>
                  {product.description}
                </Text>

                <Button variant="outline" className="w-fit">
                  Learn more
                </Button>
              </div>
              {product.order === 2 ? (
                <div className="relative w-full h-[484px] flex-1">
                  <Image
                    src={urlForImage(product.productImg).url()}
                    alt={product.name}
                    fill
                  />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListings;
