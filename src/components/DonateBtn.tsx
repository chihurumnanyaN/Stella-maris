import Link from "next/link";
import React from "react";
import { BiDonateHeart } from "react-icons/bi";

const DonateBtn = () => {
  return (
    <Link
      href="/donate"
      className={`text-(--primary) flex justify-center items-center gap-3 shadow-md px-6 py-3 rounded-md font-bold hover:bg-white/85 bg-white transition-colors duration-300`}
    >
      {" "}
      <BiDonateHeart />
      Donate
    </Link>
  );
};

export default DonateBtn;
