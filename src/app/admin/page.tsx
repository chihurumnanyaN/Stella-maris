import Link from "next/link";
import React from "react";
import { BiImage } from "react-icons/bi";
import {
  MdAddBox,
  MdCampaign,
  MdCloudUpload,
  MdEvent,
  MdUpdate,
} from "react-icons/md";

const page = () => {
  return (
    <div className="p-8 max-w-7xl flex md:flex-col flex-col-reverse w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="flex flex-col gap-4 rounded-xl border border-[#dbdfe6] bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="size-12 rounded-lg bg-(--primary)/10 text-(--primary) flex items-center justify-center">
            <MdCampaign />
          </div>
          <div className="flex flex-col">
            <h3 className="text-[#111318] text-lg font-bold">Announcements</h3>
            <p className="text-[#616f89] text-sm font-normal">
              12 Active Announcements
            </p>
          </div>
          <div className="mt-2 pt-4 border-t border-[#f0f2f4] flex items-center justify-between text-xs font-medium">
            <span className="text-(--primary)">+2 since yesterday</span>
            <span className="text-[#616f89]">View list</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-xl border border-[#dbdfe6] bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="size-12 rounded-lg bg-orange-100  text-orange-600 flex items-center justify-center">
            <MdEvent />
          </div>
          <div className="flex flex-col">
            <h3 className="text-[#111318] text-lg font-bold">Events</h3>
            <p className="text-[#616f89]  text-sm font-normal">
              4 Upcoming Events
            </p>
          </div>
          <div className="mt-2 pt-4 border-t border-[#f0f2f4]   flex items-center justify-between text-xs font-medium">
            <span className="text-orange-600">Next: Sunday Feast</span>
            <span className="text-[#616f89]">Calendar</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-xl border border-[#dbdfe6]    bg-white    p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="size-12 rounded-lg bg-emerald-100    text-emerald-600 flex items-center justify-center">
            <BiImage />
          </div>
          <div className="flex flex-col">
            <h3 className="text-[#111318]    text-lg font-bold">Gallery</h3>
            <p className="text-[#616f89]    text-sm font-normal">
              248 Photos Uploaded
            </p>
          </div>
          <div className="mt-2 pt-4 border-t border-[#f0f2f4]    flex items-center justify-between text-xs font-medium">
            <span className="text-emerald-600">84% Storage used</span>
            <span className="text-[#616f89]">Manage</span>
          </div>
        </div>
      </div>
      <div>
        <div className="mb-6">
          <h2 className="text-[#111318]    text-[22px] font-bold leading-tight tracking-tight px-1">
            Quick Actions
          </h2>
          <p className="text-[#616f89]    text-sm px-1 mb-4">
            Common tasks and administrative shortcuts
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          <Link
            href="/admin/announcements"
            className="flex items-center gap-4 p-5 rounded-xl bg-(--primary) text-white shadow-lg shadow-(--primary)/20 hover:scale-[1.02] active:scale-[0.98] transition-all text-left"
          >
            <div className="size-12 rounded-lg bg-white/20 flex items-center justify-center">
              <MdAddBox />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold">Add Announcement</span>
              <span className="text-white/70 text-xs">
                Post to Announcement page
              </span>
            </div>
          </Link>
          <Link
            href="/admin/gallary"
            className="flex items-center gap-4 p-5 rounded-xl bg-(--primary) text-white shadow-lg shadow-(--primary)/20 hover:scale-[1.02] active:scale-[0.98] transition-all text-left"
          >
            <div className="size-12 rounded-lg bg-white/20 flex items-center justify-center">
              <MdCloudUpload />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold">Upload Photos</span>
              <span className="text-white/70 text-xs">
                Share event highlights
              </span>
            </div>
          </Link>
          <Link
            href="/admin/mass-schedule"
            className="flex items-center gap-4 p-5 rounded-xl bg-(--primary) text-white shadow-lg shadow-(--primary)/20 hover:scale-[1.02] active:scale-[0.98] transition-all text-left"
          >
            <div className="size-12 rounded-lg bg-white/20 flex items-center justify-center">
              <MdUpdate />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold">Update Mass Schedule</span>
              <span className="text-white/70 text-xs">
                Edit times and celebrants
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
