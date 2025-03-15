import React, { useEffect, useState } from "react";
import Partners from "./partners";
import { Partner, getClient, getPartnersData } from "~/sanity/lib";

const PartnersSkeleton = () => (
  <div className="flex gap-8">
    <div className="animate-pulse animate-duration-2 w-[150px] h-[150px] bg-[#37415130] rounded-xl"></div>
    <div className="animate-pulse animate-duration-2 w-[150px] h-[150px] bg-[#37415130] rounded-xl"></div>{" "}
    <div className="animate-pulse animate-duration-2 w-[150px] h-[150px] bg-[#37415130] rounded-xl"></div>
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
    <div className="mt-16 py-10 md:min-h-[112px]">
      <div className="flex flex-col gap-8 md:gap-0 md:flex-row md:items-center">
        <p className="font-medium text-lg text-[#374151] leading-8 mr-[51px]">
          Trusted by:
        </p>

        {isLoading ? <PartnersSkeleton /> : <Partners partners={partners} />}
      </div>
    </div>
  );
};

export default PartnersList;
