"use server";
import { readTeamMembers } from "@/actions/pastorial-team";
import Link from "next/link";
import React from "react";
import { FaEllipsisV, FaGripVertical, FaPlus } from "react-icons/fa";

const PastoralTeam = async () => {
  const PASTORAL_TEAM = await readTeamMembers();

  return (
    <div className="min-h-screen bg-background-light flex">
      <main className="flex-1 flex flex-col overflow-y-auto">
        <div className="p-8 max-w-7xl mx-auto w-full">
          {/* Header */}
          <div className="flex md:flex-row flex-col justify-between w-full items-end mb-8">
            <div>
              <h1 className="text-3xl font-black mb-2">Pastoral Team</h1>
              <p className="text-[#616f89] max-w-2xl">
                All the Pastoral Team members of Stella Maris Parish. This will
                be displayed on the{" "}
                <Link className="underline" href="/pastorial-teams">
                  pastoral teams page
                </Link>
                .
              </p>
            </div>

            <Link
              href="/admin/pastorial-team/add"
              className="bg-(--primary) text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 shadow-sm active:scale-95 mt-3 md:mt-0"
            >
              <FaPlus />
              Add Member
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {PASTORAL_TEAM.map((member) => (
              <MemberCard
                key={member.id}
                name={member.name}
                role={member.role}
                joined={member.createdAt}
                status="Published"
                image={member.imageUrl}
              />
            ))}
            <AddNewCard />
          </div>
        </div>
      </main>
    </div>
  );
};

export default PastoralTeam;

const MemberCard = ({
  name,
  role,
  joined,
  status,
  image,
}: {
  name: string;
  role: string;
  joined: Date;
  status: string;
  image: string;
}) => (
  <div className="relative bg-white rounded-xl p-5 shadow-sm hover:shadow-xl transition-all border border-gray-100 cursor-grab">
    <FaGripVertical className="absolute top-4 left-4 text-gray-300" />
    <button className="absolute top-4 right-4 text-gray-400">
      <FaEllipsisV />
    </button>

    <div className="flex flex-col items-center text-center mt-4">
      <div
        className="size-24 rounded-full border-4 border-white shadow-md mb-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <h3 className="font-bold">{name}</h3>
      <p className="text-(--primary) text-sm font-semibold mb-3">{role}</p>

      <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-[10px] font-bold uppercase">
        {status}
      </span>
    </div>

    <div className="mt-6 flex justify-between items-center border-t border-gray-50 pt-4">
      <span className="text-xs text-gray-500">
        Joined {joined.toLocaleDateString()}
      </span>
      <Link
        href="/admin/pastorial-team/edit"
        className="text-xs font-bold text-(--primary) hover:underline"
      >
        Edit Profile
      </Link>
    </div>
  </div>
);

const AddNewCard = () => (
  <Link
    href="/admin/pastorial-team/add"
    className="border-2 border-dashed border-gray-200 rounded-xl p-5 flex flex-col items-center justify-center text-center hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer min-h-[280px]"
  >
    <div className="size-14 rounded-full bg-gray-100 flex items-center justify-center mb-4">
      <FaPlus className="text-gray-400" />
    </div>
    <h3 className="text-sm font-bold">Add New Team Member</h3>
    <p className="text-xs text-[#616f89] mt-2 max-w-[150px]">
      Upload a photo and set their role and bio.
    </p>
  </Link>
);
