"use client";

import React from "react";

import { FaMoneyCheckAlt } from "react-icons/fa";
import { BsCreditCard2BackFill } from "react-icons/bs";
import { IoDocumentText } from "react-icons/io5";
import { RiArrowRightSLine } from "react-icons/ri";
import Link from "next/link";

const FinanceTable = () => {
  return (
    <div className="flex flex-col gap-2 w-full mx-auto md:w-[75%]">
      <div className="flex items-center gap-5 bg-extra/15 p-2 rounded-md">
        <FaMoneyCheckAlt className="icon text-4xl text-special" />
        <p>Earnings:</p>
        <p className="flex-1 text-end ml-auto">$400</p>
        <Link href={"/reports"}>
          <RiArrowRightSLine className="icon" />
        </Link>
      </div>
      <div className="flex items-center gap-5 bg-extra/15 p-2 rounded-md">
        <IoDocumentText className="icon text-4xl text-special" />
        <p>Bills:</p>
        <p className="flex-1 text-end ml-auto">$120</p>
        <Link href={"/reports"}>
          <RiArrowRightSLine className="icon" />
        </Link>
      </div>
      <div className="flex items-center gap-5 bg-extra/15 p-2 rounded-md">
        <BsCreditCard2BackFill className="icon text-4xl text-special" />
        <p>Spending:</p>
        <p className="flex-1 text-end ml-auto">$175</p>
        <Link href={"/reports"}>
          <RiArrowRightSLine className="icon" />
        </Link>
      </div>
    </div>
  );
};

export default FinanceTable;
