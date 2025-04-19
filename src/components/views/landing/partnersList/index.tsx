import React, { useEffect, useState } from "react";
import Partners from "./partners";
import { Partner, getClient, getPartnersData } from "~/sanity/lib";

const PartnersSkeleton = () => (
  <div className="flex justify-center flex-shrink-0 -space-x-4 overflow-hidden lg:justify-start">
    <div className="animate-pulse animate-duration-2 w-[80px] h-[80px] bg-[#37415130] rounded-full"></div>{" "}
    <div className="animate-pulse animate-duration-2 w-[80px] h-[80px] bg-[#37415130] rounded-full"></div>{" "}
    <div className="animate-pulse animate-duration-2 w-[80px] h-[80px] bg-[#37415130] rounded-full"></div>
    <div className="animate-pulse animate-duration-2 w-[80px] h-[80px] bg-[#37415130] rounded-full"></div>
  </div>
);

const PartnersList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    const fetchPartners = async () => {
      setIsLoading(true);
      const client = getClient();
      const data = await getPartnersData(client);
      setIsLoading(false);
      setPartners(data);
    };

    fetchPartners();
  }, []);

  return (
    <div className="">
      <div className="">
        {/* <p className="font-medium text-lg text-[#374151] leading-8 mr-[51px]">
          Trusted by:
        </p> */}

        {isLoading ? <PartnersSkeleton /> : <Partners partners={partners} />}
      </div>
    </div>
  );
};

export default PartnersList;
