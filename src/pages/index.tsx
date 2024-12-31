import { GetStaticProps } from "next";
import {
  Landing as LandingProps,
  getClient,
  getLandingData,
} from "~/sanity/lib";
import LandingView from "@/components/views/landing";
import { PreviewLandingPage } from "@/components/sanity";

interface PageProps {
  data: LandingProps;
  preview?: boolean;
  previewToken?: string;
}

interface Query {
  [key: string]: string;
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const preview = ctx.draftMode || false;
  const previewToken = preview ? process.env.SANITY_READ_TOKEN : "";
  if (preview && !previewToken) {
    throw new Error(
      `Preview mode is active, but SANITY_READ_TOKEN is not set in environment variables`,
    );
  }

  const client = getClient(previewToken);
  const data = await getLandingData(client);

  return {
    props: {
      data,
      preview,
      previewToken,
    },
  };
};

function Home({ data, preview, previewToken }: PageProps) {
  if (preview && previewToken) {
    return <PreviewLandingPage data={data} />;
  }

  return <LandingView data={data} />;
}

export default Home;
