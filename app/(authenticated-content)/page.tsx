import React from "react";

import ContentLanding from "@/components/animations/ContentLanding";
import MainDashboard from "@/components/dashboardComps/MainDashboard";

const HomePage = () => {
  return (
    <main id="main-container-dashboard" className="content ">
      <ContentLanding style="flex flex-col gap-2">
        <h1>Dashboard</h1>
        <MainDashboard/>
      </ContentLanding>
    </main>
  );
};

export default HomePage;
