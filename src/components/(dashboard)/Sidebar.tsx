import React from "react";
import Link from "next/link";
import Logo from "../Logo";
import {
  MdDashboard,
  MdCampaign,
  MdEvent,
  MdPhotoLibrary,
  MdPeople,
  MdSettings,
} from "react-icons/md";

const Sidebar = () => {
  return (
    <aside className="w-64 border-r sticky top-0 h-screen border-gray-200 bg-white flex flex-col shrink-0">
      {/* Logo */}
      <div className="flex flex-col items-start gap-2 px-6 py-5">
        <Logo colour="black" />
        <p className="text-gray-800 text-sm font-bold">Parish CMS Admin</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 flex flex-col gap-1 border-t border-gray-200">
        <Link
          href="/admin"
          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-800 hover:bg-(--primary) transition-colors"
        >
          <MdDashboard className="text-[22px]" />
          <span className="text-sm font-medium">Dashboard</span>
        </Link>

        <Link
          href="/admin/announcements"
          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-800 hover:bg-(--primary) transition-colors"
        >
          <MdCampaign className="text-[22px]" />
          <span className="text-sm font-medium">Announcements</span>
        </Link>

        <Link
          href="/admin/events"
          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-800 hover:bg-(--primary) transition-colors"
        >
          <MdEvent className="text-[22px]" />
          <span className="text-sm font-medium">Events</span>
        </Link>

        <Link
          href="/admin/gallery"
          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-800 hover:bg-(--primary) transition-colors"
        >
          <MdPhotoLibrary className="text-[22px]" />
          <span className="text-sm font-medium">Gallery</span>
        </Link>

        <Link
          href="/admin/pastorial-team"
          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-800 hover:bg-(--primary) transition-colors"
        >
          <MdPeople className="text-[22px]" />
          <span className="text-sm font-medium">Pastorial Team</span>
        </Link>

        <Link
          href="/admin/settings"
          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-800 hover:bg-(--primary) transition-colors"
        >
          <MdSettings className="text-[22px]" />
          <span className="text-sm font-medium">Settings</span>
        </Link>
      </nav>
      <footer className="p-3 text-start text-xs text-gray-400">
        © {new Date().getFullYear()} Stella Maris Parish Administration System.
      </footer>
    </aside>
  );
};

export default Sidebar;
