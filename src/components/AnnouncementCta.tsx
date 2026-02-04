import Link from "next/link";
import React from "react";
import { MdAnnouncement } from "react-icons/md";

const AnnouncementCta = () => {
  return (
    <section className="absolute w-full justify-center flex h-fit -mt-20 mb-110 z-30 capitalize ">
      <div className=" bg-(--primary) w-[80%] h-fit rounded-xl p-5 flex flex-col justify-center items-center shadow-2xl">
        <p className="text-white text-xl font-bold text-center">
          {" "}
          Weekly anouncements are out and published visit announcement page
          or{" "}
        </p>{" "}
        <Link
          className="bg-amber-50 px-4 py-3 rounded-xl mt-5 flex gap-3 items-center shadow-md "
          href="/announcements"
        >
          <MdAnnouncement />
          View Anouncements
        </Link>
      </div>
    </section>
  );
};

export default AnnouncementCta;
