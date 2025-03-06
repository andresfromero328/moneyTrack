import React from "react";

import Calendar from "@/components/calendarComps/Calendar";
import ContentLanding from "@/components/animations/ContentLanding";

const CalendarPage = () => {
  return (
    <main id="main-container-calendar" className="content ">
      <ContentLanding style="flex flex-col gap-5">
        <h1>Calendar</h1>
        <Calendar />
      </ContentLanding>
    </main>
  );
};

export default CalendarPage;
