import React from "react";
import { Button, Text } from "@/components/ui";
import { Jost } from "next/font/google";
import { Conduct } from "~/sanity/lib";
import Link from "next/link";

const jost = Jost({
  subsets: ["latin"],
});

interface IConductItemProps {
  conduct: Conduct;
}

const ConductItem = ({ conduct }: IConductItemProps) => (
  <div className="border border-[#E5E7EB] hover:border-primary hover:shadow-[4px_4px_16px_0px_rgba(30,_30,_30,_0.08)] transition-colors rounded-2xl px-6 pt-10 pb-[50px] flex flex-col gap-8">
    <div>
      <Text className="font-semibold mb-[14px]">{conduct.title}</Text>
      <Text className={`text-[#534E50] leading-8`}>
        {conduct.excerpt.substring(0, 150)}...
      </Text>
    </div>

    <Link href={`/conducts/${conduct.slug}`}>
      <Button
        variant="outline"
        className="w-fit border-[#D1D5DB] hover:bg-primary hover:text-white"
      >
        Read conduct
      </Button>
    </Link>
  </div>
);
export default ConductItem;
