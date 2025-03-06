'use client'

import Link from "next/link";
import React from "react";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaHospital, FaPlus } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { RiArrowRightSLine } from "react-icons/ri";

const BudgetTable = () => {
  return (
    <div className="flex flex-col gap-2 w-full mx-auto md:w-[75%]">
      <div className="flex items-center gap-5 bg-extra/15 p-2 rounded-md">
        <FaHospital className="icon text-4xl text-special" />
        <p>Hospital:</p>
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
        <IoFastFood className="icon text-4xl text-special" />
        <p>Food & Drinks:</p>
        <p className="flex-1 text-end ml-auto">$175</p>
        <Link href={"/reports"}>
          <RiArrowRightSLine className="icon" />
        </Link>
      </div>

      <button className="group button w-fit mt-5 mx-auto ">
        <FaPlus className="icon" />
        <small>create budget</small>
      </button>
    </div>
  );
};

export default BudgetTable;
