import TeamView from "../views/team";
import { Team, teamQuery } from "~/sanity/lib";
import { useLiveQuery } from "next-sanity/preview";

export const PreviewTeamPage = ({ members }: { members: Team[] }) => {
  const [updatedMembers, loadingMembers] = useLiveQuery<Team[]>(
    members,
    teamQuery,
  );

  return <TeamView members={updatedMembers} />;
};
