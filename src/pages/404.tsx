import React, { Fragment } from "react";
import Head from "next/head";
import { NotFoundText } from "@/components/icons";
import { Button } from "@/components/ui";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Page not found | YabaTech PlastoGas Hub</title>
      </Head>
      <section className="pt-[200px] flex justify-center h-screen">
        <div className="max-w-[461px] mx-auto flex flex-col items-center relative">
          <NotFoundText />

          <Link href="/">
            <Button className="mb-10 w-fit">Go back home</Button>
          </Link>

          {/* <div className="absolute top-[8rem] flex flex-col items-center">
            <h1 className="mt-6 text-[#181716] text-[46px] leading-[48px]">
              Page not found
            </h1>
            <p className="mt-6 text-[#374151] text-center">
              Oops!!! Sorry, we can’t find the page that you are looking for.
              Kindly return to the home page.
            </p>
            <Link href="/">
              <Button className="mt-8 w-fit">Go back home</Button>
            </Link>
          </div> */}
        </div>
      </section>
    </Fragment>
  );
};

export default NotFoundPage;
