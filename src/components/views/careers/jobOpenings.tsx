import Link from "next/link";
import React, { Fragment } from "react";
import { Button } from "@/components/ui";
import { Career } from "~/sanity/lib";

const JobOpenings = ({ data }: { data: Career[] }) => {
  return (
    <Fragment>
      <div>
        {data?.map((opening, idx) => (
          <div
            key={opening._id}
            className="group px-6 md:px-10 pt-6 md:pt-9 pb-8 md:pb-12 bg-white hover:bg-primary transition-colors border-l border-l-[#E5E7EB] border-b border-b-[#E5E7EB] last:border-b-0"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 md:gap-0">
              <div className="">
                <div className="flex gap-5 items-center text-[#374151] group-hover:text-white mb-12">
                  {opening.location
                    ?.concat(opening.experienceLevel)
                    .map((req) => (
                      <>
                        <p key={req} className="text-lg">
                          {req}
                        </p>
                        <span className="w-2 h-2 rounded-full bg-[#374151] group-hover:bg-white last:hidden"></span>
                      </>
                    ))}
                </div>

                {opening.yearsOfExperience ? (
                  <div className="w-fit rounded-[32px] bg-[#374151] group-hover:bg-white group-hover:text-[#1F2937] px-[14px] py-[6px] text-white text-sm mb-3">
                    {opening.yearsOfExperience} Years Experience
                  </div>
                ) : null}

                {opening?.jobTitle ? (
                  <h3 className="text-2xl md:text-[32px] font-semibold leading-10 md:leading-[56px] text-[#252422] group-hover:text-white">
                    {opening.jobTitle}
                  </h3>
                ) : null}
              </div>

              <Link href={`/careers/${opening._id}`}>
                <Button
                  variant="outline"
                  className="text-[#252422] border-[#06813E] bg-white w-fit"
                  disabled={!opening._id}
                >
                  Apply here
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <hr className="h-[1px] w-full bg-[#E5E7EB] mt-6" />
    </Fragment>
  );
};

export default JobOpenings;
