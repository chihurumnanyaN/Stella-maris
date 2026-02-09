import EditPastoralTeamMember from "./EditPastoralTeamMember";
import { getPastoralTeamMember } from "@/actions/pastorial-team";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: Props) {
  // ✅ unwrap params
  const { id } = await params;

  const memberId = Number(id);

  if (Number.isNaN(memberId)) {
    return <p className="p-8 text-red-500">Invalid member ID</p>;
  }

  const member = await getPastoralTeamMember(memberId);

  if (!member) {
    return <p className="p-8 text-red-500">Member not found</p>;
  }

  // ✅ pass real data to client component
  return <EditPastoralTeamMember member={member} />;
}
