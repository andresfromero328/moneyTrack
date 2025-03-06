"use client";

import { AnimatePresence } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import ModalDayBills from "./ModalDayBills";
import CalendarHeader from "./CalendarHeader";
import MonthView from "./MonthView";

interface Props {
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
}

const CalendarMain = ({ selectedDate, setSelectedDate }: Props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <AnimatePresence initial={false} mode="wait">
        {showModal && (
          <ModalDayBills
            selectedDate={selectedDate}
            show={showModal}
            setShow={setShowModal}
          />
        )}
      </AnimatePresence>
      <div
        id="bill-calendar-container"
        className="flex flex-col w-full max-w-full h-[570px] px-1 overflow-auto"
      >
        <CalendarHeader
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <div
          id="bill-calendar-view-container"
          className="calendar-view mt-1 flex-1"
        >
          <MonthView
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            setShowModal={setShowModal}
          />
        </div>
      </div>
    </>
  );
};

export default CalendarMain;
