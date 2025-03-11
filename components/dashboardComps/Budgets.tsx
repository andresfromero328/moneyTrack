"use client";

import React from "react";
import dynamic from "next/dynamic";
import { FaHospital, FaPlus, FaTheaterMasks } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
// import BudgetRadialChart from "./budgetComps/BudgetRadialChart";
const BudgetRadialChart = dynamic(
  () => import("./budgetComps/BudgetRadialChart"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);

const Budgets = () => {
  return (
    <>
      <h2 className="p-2 m-2 rounded-md bg-primary/15 shadow-sm w-fit">
        Budgets
      </h2>

      <div className="flex items-center gap-5 mx-auto p-2">
        <BudgetRadialChart />
        <div id="budget-remaining-info" className="flex flex-col gap-1">
          <p className="font-bold text-secondary">Left for spending:</p>
          <p className="font-semibold text-secondary/75">$2,453.23</p>
          <small>
            on <span className="text-special">Category</span>
          </small>
        </div>
      </div>

      <div
        id="budget-list-budget-selector"
        className="flex items-center gap-5 mx-auto p-2"
      >
        <button className="button group bg-transparent hover:bg-primary">
          <small className="text-primary group-hover:text-special default-anim-transition">
            All
          </small>
        </button>
        <button className="button group bg-transparent hover:bg-primary">
          <FaHospital className="icon group-hover:text-special default-anim-transition" />
        </button>
        <button className="button group bg-transparent hover:bg-primary">
          <FaTheaterMasks className="icon group-hover:text-special default-anim-transition" />
        </button>
        <button className="button group bg-transparent hover:bg-primary">
          <IoFastFood className="icon group-hover:text-special default-anim-transition" />
        </button>
        <button className="button group bg-special hover:bg-primary">
          <FaPlus className="icon text-extra group-hover:text-special default-anim-transition" />
        </button>
      </div>
    </>
  );
};

export default Budgets;
