"use client";

import { DAYS } from "@/lib/calendarHelper";
import React, { Dispatch, SetStateAction } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { FaCalendar, FaCaretLeft, FaCaretRight } from "react-icons/fa";
import useScreenWidth from "@/hooks/useScreenWidth";

type Props = {
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
};

const CalendarHeader = ({ selectedDate, setSelectedDate }: Props) => {
  const width = useScreenWidth();

  // Handle previous month button
  const handlePrev = () => {
    setSelectedDate((prevDate: Date) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  // Handle next month button
  const handleNext = () => {
    setSelectedDate((prevDate: Date) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  // Handle change month to current one
  const handleToday = () => {
    setSelectedDate(new Date());
  };

  // Render Calendar's header
  const renderHeaderView = () => {
    return (
      <div className="flex flex-col gap-2">
        <h2 className="text-extra">
          {selectedDate.toLocaleString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <div className="flex w-full mb-2">
          {DAYS.map((day, index) =>
            width! > 768 ? (
              <small key={index} className="flex-1">
                {day}
              </small>
            ) : (
              <small key={index} className="flex-1">
                {day.substring(0, 3)}
              </small>
            )
          )}
        </div>
      </div>
    );
  };

  return (
    <div
      id="bill-calendar-header"
      className="sticky top-0 flex flex-col gap-2 bg-primary shadow-onRest rounded-t-md z-20"
    >
      <div
        id="bill-calendar-shortcut-nav"
        className="flex items-center justify-between p-2"
      >
        <button
          id="bill-calendar-prev-month-btn"
          onClick={() => handlePrev()}
          className="group"
        >
          <FaCaretLeft className="icon text-extra group-hover:-translate-x-1 anim-transition" />
        </button>
        <button
          id="bill-calendar-today-btn"
          onClick={() => handleToday()}
          className="group hover:drop-shadow-md anim-transition"
        >
          <h2 className="text-extra">Today</h2>
        </button>
        <button
          id="bill-calendar-next-month-btn"
          onClick={() => handleNext()}
          className="group"
        >
          <FaCaretRight className="icon text-extra group-hover:translate-x-1 anim-transition" />
        </button>
      </div>

      <div className="flex items-center p-2">
        <DatePicker
          selected={selectedDate}
          customInput={
            <button className="button">
              <small className="text-extra">
                {selectedDate.toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                })}
              </small>
              <FaCalendar className="text-extra" />
            </button>
          }
          onChange={(date: Date | null) => setSelectedDate(date!)}
          showMonthYearPicker
          dateFormat="MM/yyyy"
          className="p-2 rounded-md cursor-pointer"
        />
      </div>

      <div id="bill-calendar-date-text" className="text-center">
        {renderHeaderView()}
      </div>
    </div>
  );
};

export default CalendarHeader;
