"use client";

import React from "react";
import dynamic from "next/dynamic";

const Accounts = dynamic(() => import("@/components/dashboardComps/Accounts"), {
  ssr: false,
});
const Budgets = dynamic(() => import("@/components/dashboardComps/Budgets"), {
  ssr: false,
});
const Subscriptions = dynamic(
  () => import("@/components/dashboardComps/Subscriptions"),
  { ssr: false }
);
const Spending = dynamic(() => import("@/components/dashboardComps/Spending"), {
  ssr: false,
});

const COMPS = [
  { components: Spending },
  { components: Accounts },
  { components: Budgets },
  { components: Subscriptions },
];

const MainDashboard = () => {
  return (
    <>
      {COMPS.map((Component, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 rounded-lg h-full w-full bg-special/50 shadow-onRest overflow-auto"
        >
          <Component.components />
        </div>
      ))}
    </>
  );
};

export default MainDashboard;
