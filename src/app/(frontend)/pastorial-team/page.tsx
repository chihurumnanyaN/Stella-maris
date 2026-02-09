"use server";
import Image from "next/image";
import Banner from "@/components/Banner";
import { BiPhone } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import Link from "next/link";
import prisma from "@/lib/prisma";

{
  /*const PASTORAL_TEAM = [
  {
    id: 1,
    name: "very. rev. fr. Dr joseph azuka anuonye",
    role: "parish priest (rector)",
    bio: "i spare head all the admistrative activities of stella maris parish aba",
    imageUrl: "/priestavatar.jpg",
    phone: "090xxxxxx",
    whatsappNum: "090xxxxxxxx",
    email: "joe@gmail.com",
  },
  {
    id: 2,
    name: "very. rev. fr. Dr joseph azuka anuonye",
    role: "parish priest (rector)",
    bio: "i spare head all the admistrative activities of stella maris parish aba",
    imageUrl: "/priestavatar.jpg",
    phone: "090xxxxxx",
    whatsappNum: "090xxxxxxxx",
    email: "joe@gmail.com",
  },
  {
    id: 3,
    name: "very. rev. fr. Dr joseph azuka anuonye",
    role: "parish priest (rector)",
    bio: "i spare head all the admistrative activities of stella maris parish aba",
    imageUrl: "/priestavatar.jpg",
    phone: "090xxxxxx",
    whatsappNum: "090xxxxxxxx",
    email: "joe@gmail.com",
  },
];*/
}
export default async function PastoralTeamPage() {
  const PASTORAL_TEAM = await prisma.pastoralTeamMember.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return (
    <div>
      {/* Banner */}
      <Banner
        imgUrl="/church.jpg"
        headerText="Pastoral Team"
        moreText="Meet the priests and ministers serving Stella Maris Parish"
      />

      {/* Intro Text */}
      <div className="max-w-4xl mx-auto px-4 py-10 text-center text-gray-700">
        <p className="text-lg leading-relaxed">
          The Pastoral Team of Stella Maris Parish shepherds the faithful
          through prayer, teaching, and service. Together, they nurture
          spiritual growth and guide parishioners in living out the Gospel.
        </p>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {PASTORAL_TEAM.map((member) => (
            <div
              key={member.id}
              className="bg-white flex flex-col rounded-xl overflow-hidden shadow-xl border-t-4 border-(--primary) transition-transform hover:-translate-y-2"
            >
              {/* Image */}
              <Image
                src={member.imageUrl}
                alt={`Portrait of ${member.name}`}
                width={400}
                height={500}
                className="w-full object-cover aspect-4/5"
              />

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <div className="mb-4">
                  <span className="text-xs font-bold text-(--primary) uppercase tracking-tighter">
                    {member.role}
                  </span>
                  <h4 className="text-xl font-bold capitalize text-gray-900 mt-1">
                    {member.name}
                  </h4>
                </div>

                <p className="text-gray-600 capitalize text-sm leading-relaxed mb-8 grow">
                  {member.bio}
                </p>

                {/* Contact Buttons */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <Link
                    href={`tel:${member.phone}`}
                    className="p-2 bg-(--primary)/10 text-(--primary) rounded-full hover:bg-(--primary) hover:text-white transition-colors"
                  >
                    <BiPhone className="text-[20px]" />
                  </Link>
                  <Link
                    href={`https://wa.me/${member.whatsappNum}`}
                    className="p-2 bg-green-500/10 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition-colors"
                  >
                    <FaWhatsapp className="text-[20px]" />
                  </Link>
                  <Link
                    href={`mailto:${member.email}`}
                    className="p-2 bg-yellow-400/10 text-yellow-600 rounded-full hover:bg-yellow-500 hover:text-white transition-colors"
                  >
                    <TfiEmail className="text-[20px]" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
