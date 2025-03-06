import React from "react";

import ContentLanding from "@/components/animations/ContentLanding";
import BudgetTable from "@/components/reportComps/budgetComps/BudgetTable";
import BudgetPieChart from "@/components/reportComps/BudgetPieChart";
import FinanceBarChart from "@/components/reportComps/FinanceBarChart";
import FinanceTable from "@/components/reportComps/financeComps/FinanceTable";
import SpendingTable from "@/components/reportComps/spendingComps/SpendingTable";
import SpendingPieChart from "@/components/reportComps/SpendingPieChart";

const ReportsPage = () => {
  return (
    <main id="main-container-report" className="content ">
      <ContentLanding style="flex flex-col gap-5">
        <h1>Report</h1>
        {/* <div className="flex-calendar-report md:grid-calendar-report"> */}
        <div className="flex flex-col gap-5 p-5 rounded-lg bg-special/50 shadow-onRest">
          <h2 className="p-2 m-2 rounded-md bg-primary/15 shadow-sm w-fit">
            Finances
          </h2>
          <FinanceBarChart />
          <FinanceTable />
        </div>

        <div className="flex flex-col gap-5 p-5 rounded-lg bg-special/50 shadow-onRest">
          <h2 className="p-2 m-2 rounded-md bg-primary/15 shadow-sm w-fit">
            Spending
          </h2>
          <SpendingPieChart />
          <SpendingTable />
        </div>

        <div className="flex flex-col gap-5 p-5 rounded-lg bg-special/50 shadow-onRest">
          <h2 className="p-2 m-2 rounded-md bg-primary/15 shadow-sm w-fit">
            Budget
          </h2>
          <BudgetPieChart />
          <BudgetTable />
        </div>
        {/* </div> */}
      </ContentLanding>
    </main>
  );
};

export default ReportsPage;
