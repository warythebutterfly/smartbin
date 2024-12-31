import { Career, careerDetailsQuery } from "~/sanity/lib";
import { useLiveQuery } from "next-sanity/preview";
import CareerDetailsView from "../views/careerDetails";

export const PreviewCareerDetailsPage = ({ data }: { data: Career }) => {
  const [updatedData] = useLiveQuery<Career>(data, careerDetailsQuery, {
    id: data?._id,
  });

  return <CareerDetailsView data={updatedData} />;
};
