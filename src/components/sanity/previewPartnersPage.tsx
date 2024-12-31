import { Partner, partnersQuery } from "~/sanity/lib";
import { useLiveQuery } from "next-sanity/preview";
import PartnersView from "../views/partners";

export const PreviewPartnersPage = ({ data }: { data: Partner[] }) => {
  const [updatedData] = useLiveQuery<Partner[]>(data, partnersQuery);

  return <PartnersView data={updatedData} />;
};
