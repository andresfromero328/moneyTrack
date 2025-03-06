import React from "react";

import Accounts from "@/components/dashboardComps/Accounts";
import Budgets from "@/components/dashboardComps/Budgets";
import Subscriptions from "@/components/dashboardComps/Subscriptions";
import Spending from "@/components/dashboardComps/Spending";
import ContentLanding from "@/components/animations/ContentLanding";

const COMPS = [
  { components: Spending },
  { components: Accounts },
  { components: Budgets },
  { components: Subscriptions },
];

const HomePage = () => {
  return (
    <main id="main-container-dashboard" className="content ">
      <ContentLanding style="flex flex-col gap-2">
        <h1>Dashboard</h1>
        {COMPS.map((Component, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 rounded-lg h-full w-full bg-special/50 shadow-onRest overflow-auto"
          >
            <Component.components />
          </div>
        ))}
      </ContentLanding>
    </main>
  );
};

export default HomePage;
