import { Investor, News, investorsQuery, newsQuery } from "~/sanity/lib";
import { useLiveQuery } from "next-sanity/preview";
import InvestorsView from "../views/news";

interface Props {
  data: { investorsData: Investor[]; newsData: News[] };
}

export const PreviewInvestorsPage = ({
  data: { investorsData, newsData },
}: Props) => {
  const [updatedData] = useLiveQuery<Investor[]>(investorsData, investorsQuery);
  const [updatedNews] = useLiveQuery<News[]>(newsData, newsQuery);

  return (
    <InvestorsView
      data={{ investorsData: updatedData, newsData: updatedNews }}
    />
  );
};
