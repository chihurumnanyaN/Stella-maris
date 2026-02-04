"use client";

import React, { useState } from "react";
import {
  MdSave,
  MdVisibility,
  MdInfo,
  MdSchedule,
  MdEventBusy,
} from "react-icons/md";
import { BiBookAdd } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";

type Desk = "PARISH_PRIEST" | "CATECHIST";

const Page = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [desk, setDesk] = useState<Desk>("PARISH_PRIEST");

  return (
    <div className="bg-background-light min-h-screen">
      <main className="px-8 py-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-end gap-4 border-b border-gray-200 pb-6">
          <div>
            <h2 className="text-[#111318] text-4xl font-black tracking-tight">
              Announcements
            </h2>
            <p className="text-[#616f89] text-base">
              Create and manage parish announcements
            </p>
          </div>

          <div className="flex gap-3 w-full md:w-fit">
            <button className="flex items-center gap-2 rounded-xl h-11 px-6 bg-white border border-gray-200 font-bold">
              <MdVisibility />
              Preview
            </button>

            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 rounded-xl h-11 px-6 bg-(--primary) text-white font-bold shadow-lg"
            >
              <BiBookAdd />
              New Announcement
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-8">
          {/* Editor */}
          <div className="xl:col-span-2">
            {isEditing && (
              <AnnouncementEditor
                desk={desk}
                setDesk={setDesk}
                onClose={() => setIsEditing(false)}
              />
            )}
          </div>

          {/* Settings */}
          <PublicationSettings />
        </div>
      </main>
    </div>
  );
};

export default Page;

const AnnouncementEditor = ({
  desk,
  setDesk,
  onClose,
}: {
  desk: "PARISH_PRIEST" | "CATECHIST";
  setDesk: (d: "PARISH_PRIEST" | "CATECHIST") => void;
  onClose: () => void;
}) => {
  return (
    <div className="space-y-6">
      {/* Desk Selector */}
      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
        <label className="block">
          <span className="font-semibold text-[#111318]">
            Announcement Desk
          </span>
          <div className="relative mt-2">
            <select
              value={desk}
              onChange={(e) =>
                setDesk(e.target.value as "PARISH_PRIEST" | "CATECHIST")
              }
              className="w-full px-4 py-3 border rounded-lg appearance-none"
            >
              <option value="PARISH_PRIEST">Parish Priest Desk</option>
              <option value="CATECHIST">Catechist Desk</option>
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>
        </label>
      </div>

      {/* Title */}
      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
        <label>
          <span className="font-semibold text-[#111318] block mb-2">
            Announcement Title
          </span>
          <input
            className="w-full h-14 px-4 text-lg border rounded-xl"
            placeholder="e.g. Confirmation Classes Resume"
          />
        </label>
      </div>

      {/* Content */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b font-semibold">Content</div>
        <textarea
          className="w-full min-h-80 p-6 resize-none focus:ring-0"
          placeholder="Write the announcement details here..."
        />
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3">
        <button
          onClick={onClose}
          className="h-11 px-6 rounded-xl border font-bold"
        >
          Cancel
        </button>
        <button className="h-11 px-6 rounded-xl bg-(--primary) text-white font-bold shadow-lg">
          <MdSave className="inline mr-2" />
          Save Announcement
        </button>
      </div>
    </div>
  );
};

const PublicationSettings = () => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-6">
      <h3 className="font-bold text-lg flex items-center justify-between">
        Publication Settings
        <MdInfo className="text-gray-400" />
      </h3>

      {/* Pin */}
      <div className="flex justify-between items-start">
        <div>
          <p className="font-bold text-sm">Pin to Homepage</p>
          <p className="text-xs text-gray-500">
            Display this announcement at the top
          </p>
        </div>

        <label className="relative inline-flex items-center cursor-pointer">
          {" "}
          <input className="sr-only peer" type="checkbox" value="" />{" "}
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-(--primary)"></div>{" "}
        </label>
      </div>

      <hr />

      {/* Expiry */}
      <div>
        <label className="font-bold text-sm flex items-center gap-2">
          <MdEventBusy />
          Expiry Date
        </label>
        <input type="date" className="w-full mt-2 p-3 border rounded-lg" />
      </div>

      {/* Schedule */}
      <div>
        <label className="font-bold text-sm flex items-center gap-2">
          <MdSchedule />
          Schedule Release
        </label>
        <input
          type="datetime-local"
          className="w-full mt-2 p-3 border rounded-lg"
        />
      </div>
    </div>
  );
};
