import { Conduct, conductDetailsQuery, conductsQuery } from "~/sanity/lib";
import { useLiveQuery } from "next-sanity/preview";
import ConductDetailsView from "../views/conducts/detail";

export const PreviewConductDetailPage = ({ data }: { data: Conduct }) => {
  const [updatedData] = useLiveQuery<Conduct>(data, conductDetailsQuery, {
    slug: data?.slug,
  });

  return <ConductDetailsView data={updatedData} />;
};
