import LandingView from "../views/landing";
import { useLiveQuery } from "next-sanity/preview";
import { Landing, landingQuery } from "~/sanity/lib";

export const PreviewLandingPage = ({
  data: incomingData,
}: {
  data: Landing;
}) => {
  const [updatedData, loadingData] = useLiveQuery<Landing>(
    incomingData,
    landingQuery,
  );

  return <LandingView data={updatedData} />;
};
