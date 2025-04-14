import Head from "next/head";
import React, { Fragment } from "react";
import ConductsLayout from "./layout";
import { Heading } from "@/components/ui";
import ConductItem from "./conductItem";
import { Conduct } from "~/sanity/lib";

const ConductsView = ({ data }: { data: Conduct[] }) => {
  return (
    <Fragment>
      <Head>
        <title>Conducts | YabaTech PlastoGas Hub</title>
      </Head>
      <ConductsLayout>
        <div className="bg-white pb-[265px]">
          <div className="wrapper">
            <div className="px-4 md:px-10">
              <div className="mb-12">
                <Heading className="text-4xl text-primary tracking-[-0.32px] mb-4">
                  Our Conducts
                </Heading>
                <div className="w-20 h-1 bg-gradient-to-r from-[#2DBE60] via-[#003464] to-[#2DBE60] rounded-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[26px]">
                {data?.map((conduct) => (
                  <ConductItem key={conduct._id} conduct={conduct} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </ConductsLayout>
    </Fragment>
  );
};

export default ConductsView;
