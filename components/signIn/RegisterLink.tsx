"use client";

import Link from "next/link";
import React from "react";
import { RiUserAddFill } from "react-icons/ri";

const RegisterLink = () => {
  return (
    <div className="flex items-center gap-2 mx-auto">
      <small>or create an account</small>
      <Link href={"/sign-up"}>
        <button className="button anim-transition">
          <RiUserAddFill className="" />
          <small className="">register</small>
        </button>
      </Link>
    </div>
  );
};

export default RegisterLink;
