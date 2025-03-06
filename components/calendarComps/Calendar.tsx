"use client";

import { useState } from "react";

import BillsRadialChart from "./BillsRadialChart";
import BillsBarChart from "./BillsBarChart";
import BillsDonutChart from "./BillsDonutChart";
import CalendarMain from "./calendar/CalendarMain";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  return (
    <>
      <CalendarMain
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />

      <h2 id="calendar-title">
        {selectedDate.toUTCString().split(" ").slice(0, 4).join(" ")} - Bill
        Report
      </h2>

      <div
        id="grid-flex-container-component"
        className="flex-calendar-report md:grid-calendar-report"
      >
        <BillsBarChart selectedDate={selectedDate} />
        <BillsRadialChart selectedDate={selectedDate} />
        <BillsDonutChart selectedDate={selectedDate} />
      </div>
    </>
  );
};

export default Calendar;
