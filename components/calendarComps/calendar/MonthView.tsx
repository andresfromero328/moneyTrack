"use client";

import React, { Dispatch, SetStateAction } from "react";

import { handleMonthView } from "@/lib/calendarHelper";

type Props = {
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
  setShowModal: (show: boolean) => void;
};

const MonthView = ({ selectedDate, setSelectedDate, setShowModal }: Props) => {
  const todayDate = new Date(new Date().toLocaleDateString());
  const daysInMonthView = handleMonthView(selectedDate);

  const handleShowBills = (date: Date) => {
    setSelectedDate(date);
    setShowModal(true);
  };

  return (
    <div
      id="bill-calendar-month-view-container"
      className="month-view grid grid-cols-7 gap-1 h-full"
    >
      {daysInMonthView.map((date) =>
        date.getMonth() === selectedDate.getMonth() ? (
          <div
            id="bill-calendar-month-view-cell"
            key={date.toISOString()}
            onClick={() => handleShowBills(date)}
            className={`relative bg-primary ${
              date.toLocaleDateString("en-CA") ===
              todayDate.toLocaleDateString("en-CA")
                ? "bg-special/80 [&>*:nth-child(1)]:text-secondary"
                : "bg-light"
            } border-2 border-extra hover:bg-special/80 default-anim-transition`}
          >
            <p className="text-center text-extra">{date.getDate()}</p>
          </div>
        ) : (
          <div
            id="bill-calendar-neighbor-month-view-cell"
            key={date.toISOString()}
            onClick={() => handleShowBills(date)}
            className="day bg-special/50 border-2 border-extra opacity-70 hover:bg-special/80 default-anim-transition"
          >
            <p className="text-center">{date.getDate()}</p>
          </div>
        )
      )}
    </div>
  );
};

export default MonthView;
