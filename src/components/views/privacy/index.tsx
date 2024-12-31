import React, { useEffect, useState } from "react";
import PrivacyHero from "@/assets/img/privacy-hero.svg";
import Image from "next/image";
import Policy from "./policy";
import { useRouter } from "next/router";
import { PrivacyPolicy, Terms as TermsProps } from "~/sanity/lib";
import Terms from "./terms";
import { formatDate } from "@/utils/helpers";

interface PrivacyViewProps {
  privacyData?: PrivacyPolicy;
  termsData?: TermsProps;
}

const PrivacyView = ({ privacyData, termsData }: PrivacyViewProps) => {
  const router = useRouter();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (router.query?.tab) {
      const tab = parseInt(router.query.tab as string);
      if (tab >= 1 && tab <= 2) {
        setCurrent(tab - 1);
      }
    } else {
      setCurrent(0);
    }
  }, [router]);

  const steps = [
    {
      title: "Privacy Policy",
      content: <Policy privacyData={privacyData} />,
    },
    {
      title: "Terms",
      content: <Terms termsData={termsData} />,
    },
  ];

  const lastUpdatedAt =
    current === 0
      ? formatDate(privacyData?._updatedAt)
      : formatDate(termsData?._updatedAt);

  const Component = steps[current].content;

  return (
    <section className="pt-[88px] pb-20 bg-[#F9FAFB]">
      <div className="wrapper">
        <div className="flex flex-col md:flex-row md:items-center gap-[70px] mb-12">
          <div>
            <h1 className="mb-[10px] text-[48px] text-primary leading-[72px] font-semibold">
              {current === 0 ? privacyData?.title : termsData?.title}
            </h1>
            {/* <p className="text-primary text-sm leading-7">
              # PRIVACY POLICY
            </p> */}
            <p className="text-primary text-sm leading-7">
              Last Updated: {lastUpdatedAt}
            </p>
          </div>
          <div className="relative">
            <Image src={PrivacyHero} alt="Privacy Hero" />
          </div>
        </div>

        <div>
          {/* md:pl-[calc(250px_+_91px)] */}
          <nav className="mb-10 pl-0">
            <div className="border-b border-b-[#E5E7EB] flex gap-4 items-center">
              <button
                onClick={() => router.push("/privacy-policy")}
                className={`bg-none px-[10px] py-1 ${
                  current === 0
                    ? "border-b border-b-primary text-primary"
                    : "text-[#9CA3AF]"
                }`}
              >
                Privacy
              </button>
              <button
                onClick={() => router.push("/privacy-policy?tab=2")}
                className={`bg-none px-[10px] py-1 ${
                  current === 1
                    ? "border-b border-b-primary text-primary"
                    : "text-[#9CA3AF]"
                }`}
              >
                Terms
              </button>
            </div>
          </nav>

          {Component}
        </div>
      </div>
    </section>
  );
};

export default PrivacyView;
