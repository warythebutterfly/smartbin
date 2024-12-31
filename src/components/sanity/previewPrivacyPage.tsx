import { PrivacyPolicy, Terms, privacyQuery, termsQuery } from "~/sanity/lib";
import { useLiveQuery } from "next-sanity/preview";
import PrivacyView from "@/components/views/privacy";

interface Props {
  data: { privacyData?: PrivacyPolicy; termsData?: Terms };
}

export const PreviewPrivacyPage = ({
  data: { privacyData, termsData },
}: Props) => {
  const [updatedPrivacyData] = useLiveQuery(privacyData, privacyQuery);
  const [updatedTermsData] = useLiveQuery(termsData, termsQuery);

  return (
    <PrivacyView
      privacyData={updatedPrivacyData}
      termsData={updatedTermsData}
    />
  );
};
