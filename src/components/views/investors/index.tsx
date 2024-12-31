import Head from "next/head";
import Link from "next/link";
import React, { Fragment } from "react";
import { Heading, Text } from "@/components/ui";
import { Investor, News } from "~/sanity/lib";
import InvestorItem from "./investorItem";

interface InvestorViewProps {
  data: {
    investorsData: Investor[];
    newsData: News[];
  };
}

const InvestorsView = ({
  data: { investorsData, newsData },
}: InvestorViewProps) => {
  return (
    <Fragment>
      <Head>
        <title>Investors | #</title>
      </Head>

      <section>
        <div
          className="h-[549px] flex items-center justify-center"
          style={{
            background: `linear-gradient(180deg, rgba(154, 65, 81, 0.46) 0%, #9A4151 88.62%), url("/img/investors-hero.webp")`,
          }}
        >
          <div className="w-full max-w-[640px] text-center">
            <Heading className="text-white font-semibold mb-10">
              Investors
            </Heading>
            <Text className="text-white text-xl leading-8">
              We prepare this site to keep it up to date with our last news and
              financial information. If you’ve got any doubt or questions, you
              can communicate through our E-Mail
            </Text>
          </div>
        </div>

        <div className="bg-primary pt-16 pb-[148px]">
          <div className="wrapper">
            <Heading className="text-3xl md:text-[40px] font-normal mb-6 text-white">
              Earnings
            </Heading>

            {investorsData?.map((investor) => (
              <InvestorItem key={investor._id} investor={investor} />
            ))}

            {newsData && newsData?.length ? (
              <div className="pt-[80px]">
                <div className="mb-12">
                  <Heading className="text-2xl text-white font-medium leading-[48px] border-b border-b-[#60B58A] w-fit">
                    Corporate news
                  </Heading>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                  {newsData?.map((news) => (
                    <Link key={news._id} href="#">
                      <div className="pb-4 border-b border-b-[#374151] hover:border-b-[#9A4151] transition-colors flex flex-col gap-8">
                        <Text className="text-lg  text-[#E5E7EB] leading-8 tracking-[0.27px]">
                          {news.title}
                        </Text>
                        <Text className="text-[#D1D5DB] text-sm leading-6 tracking-[0.21px]">
                          {news.publishedAt}
                        </Text>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default InvestorsView;
