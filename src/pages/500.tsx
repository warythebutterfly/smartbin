import React, { Fragment } from "react";
import Head from "next/head";
import { ServerErrorText } from "@/components/icons";
import { Button } from "@/components/ui";
import Link from "next/link";

const ServerErrorPage = () => {
  return (
    <Fragment>
      <Head>
        <title>An error occurred | #</title>
      </Head>
      <section className="pt-[200px] flex justify-center h-screen">
        <div className="max-w-[461px] mx-auto flex flex-col items-center relative">
          <ServerErrorText />

          <div className="absolute top-[8rem] flex flex-col items-center">
            <h1 className="mt-6 text-[#181716] text-[40px] leading-[48px]">
              Something went wrong!
            </h1>
            <p className="mt-6 text-[#374151] text-center">
              Oops!!! An error occurred on our server. Please, try again later.
            </p>
            <Link href="/">
              <Button className="mt-8 w-fit">Go back home</Button>
            </Link>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ServerErrorPage;
