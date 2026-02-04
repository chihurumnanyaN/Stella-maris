"use client";
import Banner from "@/components/Banner";
import { div } from "motion/react-client";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner
        imgUrl="/church.jpg"
        headerText="Parish Anthem"
        moreText="Stella Maris Parish Anthem"
      />

      <div className=" text-center max-w-5xl text-2xl italic text-(--primary) space-y-7 mx-auto mb-20 mt-15 border-[0.5px] border-(--primary) p-10 rounded-xl">
        <p className=" text-gray-700 font-bold text-4xl mb-10">
          Mmanyi si na chi
        </p>
        <div>
          <Tag>1</Tag>
          <p>
            Amara Chineke bara uba o, na stella maris Nwanne lekene k’anyi si
            amuke, mmanyisinachi
          </p>
        </div>
        <div>
          <Tag>Chorus</Tag>
          <p>E ye mmasinachi o mmasinachi…</p>
          <p>Mmanyisina Chineke anyi, Mmanyisinachi</p>{" "}
        </div>
        <div>
          <Tag>2</Tag>
          <p>Legharianya gburu gburu, </p>{" "}
          <p>n’ogigo Stella Maris Ka ihu olu aka chineke, mmanyisinachi</p>
        </div>{" "}
        <div>
          <Tag>3</Tag>
          <p>Omama omama ka chukwu bu,</p>{" "}
          <p>
            mma Chineke zuru anyi ahu Kanyi yor”ibara n”ime chukwu,
            mmanyisinachi
          </p>
        </div>{" "}
        <div>
          <Tag>4</Tag>
          <p>Chukwubu ikem na mgbe mkpa,</p> <p>oma ka obi di onye ka obu </p>{" "}
          <p> onyedika chi na emere mu mma, mmanyisinachi.</p>
        </div>
      </div>
    </div>
  );
};

export default page;

const Tag = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex justify-center items-center gap-2">
      <span className="w-15 h-[0.5px] bg-(--primary)"></span>
      <p>{children}</p>
      <span className="w-15 h-[0.5px] bg-(--primary)"></span>
    </div>
  );
};
