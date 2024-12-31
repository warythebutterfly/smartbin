import { RichText } from "@/components/ui";
import Link from "next/link";
import React from "react";
import { Terms as TermsProps } from "~/sanity/lib";
import styles from "./privacy.module.css";

const Terms = ({ termsData }: { termsData?: TermsProps }) => {
  return (
    <div className="flex gap-[91px]">
      {/* <aside className="hidden md:block w-[250px] pl-6 pr-[44px] py-4">
        <div className="pb-2 mb-8 border-b border-b-[#AA916A] leading-7 text-[#1F2937]">
          <p>Types of information we collect online</p>
        </div>

        <div className="flex flex-col gap-8 text-[#6B7280] leading-7">
          <Link href="#use-of-information" className="hover:text-primary">
            How we use your information
          </Link>
          <Link href="#product-usage" className="hover:text-primary">
            Product Usage
          </Link>
          <Link href="#about-the-job" className="hover:text-primary">
            About the job
          </Link>
          <Link href="#data-security" className="hover:text-primary">
            Data security
          </Link>
          <Link href="#" className="hover:text-primary">
            Types of information we collect online
          </Link>
          <Link href="#" className="hover:text-primary">
            Types of information we collect online
          </Link>
          <Link href="#" className="hover:text-primary">
            Types of information we collect online
          </Link>
          <Link href="#" className="hover:text-primary">
            Types of information we collect online
          </Link>
        </div>
      </aside> */}

      <div className="flex-1 flex flex-col gap-10 px-2">
        <div className="flex-1 flex flex-col gap-10">
          <RichText
            className={styles.portableText}
            content={termsData?.content}
          />
        </div>
      </div>
    </div>
  );
};

export default Terms;
