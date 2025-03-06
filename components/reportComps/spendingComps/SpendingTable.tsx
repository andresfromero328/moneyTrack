import React from "react";
import Link from "next/link";

import { GrTechnology } from "react-icons/gr";
import { BiSolidCameraMovie } from "react-icons/bi";
import { IoFastFood } from "react-icons/io5";
import { RiArrowRightSLine } from "react-icons/ri";

const SpendingTable = () => {
  return (
    <div className="flex flex-col gap-2 w-full mx-auto md:w-[75%]">
      <div className="flex items-center gap-5 bg-extra/15 p-2 rounded-md">
        <IoFastFood className="icon text-4xl text-special" />
        <p>Food & Drinks:</p>
        <p className="flex-1 text-end ml-auto">$400</p>
        <Link href={"/reports"}>
          <RiArrowRightSLine className="icon" />
        </Link>
      </div>
      <div className="flex items-center gap-5 bg-extra/15 p-2 rounded-md">
        <BiSolidCameraMovie className="icon text-4xl text-special" />
        <p>Recreation:</p>
        <p className="flex-1 text-end ml-auto">$120</p>
        <Link href={"/reports"}>
          <RiArrowRightSLine className="icon" />
        </Link>
      </div>
      <div className="flex items-center gap-5 bg-extra/15 p-2 rounded-md">
        <GrTechnology className="icon text-4xl text-special" />
        <p>Technology:</p>
        <p className="flex-1 text-end ml-auto">$175</p>
        <Link href={"/reports"}>
          <RiArrowRightSLine className="icon" />
        </Link>
      </div>
    </div>
  );
};

export default SpendingTable;
