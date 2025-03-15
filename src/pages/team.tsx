import React from "react";
import { GetStaticProps } from "next";
import TeamView from "@/components/views/team";
import { PreviewTeamPage } from "@/components/sanity";
import { Team, getClient, getTeamData } from "~/sanity/lib";

interface PageProps {
  data: Team[];
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
  const data = await getTeamData(client);

  return {
    props: {
      data,
      preview,
      previewToken,
    },
  };
};

const TeamMembers = ({ data, preview, previewToken }: PageProps) => {
  if (preview && previewToken) {
    return <PreviewTeamPage members={data} />;
  }

  return <TeamView members={data} />;
};

export default TeamMembers;
