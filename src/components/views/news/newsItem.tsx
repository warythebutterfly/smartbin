import { Text } from "@/components/ui";
import React, { Fragment } from "react";
import { Investor } from "~/sanity/lib";
import { DownloadIcon, PdfIcon } from "@/components/icons";
import Link from "next/link";

const InvestorItem = ({ investor }: { investor: Investor }) => {
  return (
    <Fragment>
      <Text className="p-[10px] text-white border-b border-b-[#06813E]">
        {investor?.earnings?.year}
      </Text>

      <div className="my-8 pb-[88px] border-b border-b-[#374151] flex flex-col md:flex-row gap-6 md:pr-[113px]">
        {investor?.earnings?.quartersList?.map((quarter, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-[#4B5563] bg-[#252422] p-8 flex flex-col gap-8"
          >
            <div className="text-white">
              {quarter?.when ? (
                <Text className="text-white text-[32px] font-medium mb-[10px]">
                  {quarter.when}
                </Text>
              ) : null}

              <Text>Earning Release</Text>

              {quarter?.description ? (
                <Text className="text-[#9CA3AF] text-sm">
                  {quarter.description}
                </Text>
              ) : null}
            </div>
            <div className="text-white flex justify-between items-center">
              <div className="flex gap-2 items-center text-sm">
                <PdfIcon />
                <Text>Pdf report</Text>
              </div>

              {quarter?.reportUrl ? (
                <Link
                  href={`${quarter.reportUrl}?dl-`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex gap-2 items-center"
                >
                  <DownloadIcon />
                  <Text>Download</Text>
                </Link>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default InvestorItem;
