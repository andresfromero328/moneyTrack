"use client";

import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

const Subscriptions = () => {
  return (
    <>
      <h2 className="p-2 m-2 rounded-md bg-primary/15 shadow-sm w-fit">
        Subscriptions
      </h2>
      <div className="flex items-center gap-5 mx-auto">
        <p className="w-14 h-14 rounded-full grid place-items-center border-4 border-special/50 font-bold">
          1
        </p>
        <p className="font-bold">Subscriptions</p>
      </div>

      <div id="container-subscription-list" className="flex flex-col gap-5 p-2">
        <div
          id="subscription-[name]"
          className="flex items-center justify-between bg-extra/15 p-2 rounded-md"
        >
          <div
            id="subscription-[name]-info"
            className="flex items-center gap-2 "
          >
            <p className="w-14 h-14 rounded-full grid place-items-center bg-primary/50 font-bold">
              N
            </p>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-secondary">Netflix</p>
              <small className="text-secondary/75">since 11/12/23</small>
            </div>
          </div>

          <div
            id="subscription-[name]-extra-info"
            className="flex items-center gap-5"
          >
            <p className="font-semibold">$15.99</p>
            <button className="text-extra">
              <MdArrowForwardIos className="icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscriptions;
