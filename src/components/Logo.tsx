import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ colour }: { colour: string }) => {
  return (
    <Link href="/" className="flex items-center space-x-3">
      <Image
        src="/stella.png"
        alt="Stella Maris Parish logo"
        width={50}
        height={50}
        className="rounded-full"
      />
      <p
        className={`text-xl font-bold italic text-[${colour}] flex flex-col justify-start items-start`}
      >
        <span>Stella Maris </span>
        <span> Parish Aba</span>
      </p>
    </Link>
  );
};

export default Logo;
