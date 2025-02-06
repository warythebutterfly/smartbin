import Head from "next/head";
import React, { Fragment, useState } from "react";
import CareersHero from "@/assets/img/careers-hero.png";
import Image from "next/image";
import Link from "next/link";
import JobOpenings from "./jobOpenings";
import { cn, scrollToTop } from "@/utils/helpers";
import { Career, Category } from "~/sanity/lib";

type Message = "NO_DATA" | "ERROR";

const CareersView = ({
  data,
  category,
}: {
  data: Career[];
  category: Category[];
}) => {
  const [current, setCurrent] = useState("All");
  const [message, setMessage] = useState<Message | null>(null);
  const [filteredData, setFilteredData] = useState<Career[]>([]);

  const careersData = filteredData.length === 0 ? data : filteredData;

  const handleFilter = (filterValue: string) => {
    setMessage(null);
    setCurrent(filterValue);

    if (filterValue === "All") {
      scrollToTop();
      return setFilteredData([]);
    }
    const result = data?.filter((d) => d.category.includes(filterValue));

    if (result.length === 0) {
      setFilteredData([]);
      return setMessage("NO_DATA");
    }

    // setCurrent(filterValue);
    setFilteredData(result);
    scrollToTop();
  };

  return (
    <Fragment>
      <Head>
        <title>Careers | YabaTech PlastoGas Hub</title>
      </Head>
      <section className="pt-[112px] pb-40">
        <div className="wrapper">
          <div className="flex flex-col md:flex-row mb-10">
            <div>
              <Image src={CareersHero} alt="Careers Hero" />
            </div>
            <p className="text-[#374151] max-w-[400px]">
              Join YabaTech PlastoGas Hub and take on new problems that
              challenge your skills plus opportunities to display your
              leadership qualities.
            </p>
          </div>

          <div className="lg:flex">
            <div className="hidden lg:flex flex-col w-[calc(293px+33px)]">
              <div className="pb-5 border-b border-b-[#E5E7EB]">
                <p className="text-[#374151] font-medium text-2xl">
                  Our current openings:
                </p>
              </div>
              <div className="mt-[27px] mr-[33px]">
                <p className="text-[#6B7280] leading-6">
                  View all open roles at{" "}
                  <Link href="/" className="underline text-[#252422]">
                    YabaTech PlastoGas Hub
                  </Link>{" "}
                  or shoot us an email at{" "}
                  <Link
                    href="mailto:yctplastogashub@gmail.com"
                    className="underline text-primary"
                  >
                    yctplastogashub@gmail.com
                  </Link>{" "}
                  and we will be in touch.
                </p>
              </div>
            </div>
            <div className="lg:flex-1">
              <div className="flex flex-col md:flex-row lg:items-center lg:justify-between gap-4 lg:gap-0 lg:pl-10 pb-4 border-b border-b-[#E5E7EB]">
                <div className="overflow-x-auto order-2 lg:order-1">
                  <ul className="flex w-full items-center lg:gap-[10px] flex-nowrap">
                    <li className="flex-shrink-0">
                      <button
                        className={cn(
                          "bg-none border-none text-[#9CA3AF] hover:text-[#06813E] transition-colors leading-6 px-2 lg:px-[10px] py-1",
                          current === "All" ? "text-[#06813E]" : "",
                        )}
                        onClick={() => handleFilter("All")}
                      >
                        All
                      </button>
                    </li>
                    {category?.map((d) => (
                      <li key={d._id} className="flex-shrink-0">
                        <button
                          className={cn(
                            "bg-none border-none text-[#9CA3AF] hover:text-[#06813E] transition-colors leading-6 px-2 lg:px-[10px] py-1",
                            current === d.name ? "text-[#06813E]" : "",
                          )}
                          onClick={() => handleFilter(d.name)}
                        >
                          {d.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-[#6B7280] leading-6 px-[10px] py-[6px] flex-shrink-0 order-1 lg:order-2">
                  {message === "NO_DATA"
                    ? 0
                    : careersData?.length
                    ? careersData?.length
                    : "No"}{" "}
                  opening(s)
                </p>
              </div>

              {message === "NO_DATA" || careersData.length === 0 ? (
                <div>
                  <h4 className="text-xl font-medium text-center py-20">
                    There are no openings under this category!
                  </h4>
                </div>
              ) : (
                <JobOpenings data={careersData} />
              )}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default CareersView;
