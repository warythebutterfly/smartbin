import { Conduct, conductsQuery } from "~/sanity/lib";
import { useLiveQuery } from "next-sanity/preview";
import ConductsView from "../views/conducts";

export const PreviewConductsPage = ({ data }: { data: Conduct[] }) => {
  const [updatedData] = useLiveQuery<Conduct[]>(data, conductsQuery);

  return <ConductsView data={updatedData} />;
};
