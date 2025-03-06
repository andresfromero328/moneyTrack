"use client";

import React from "react";
import Backdrop from "../..//animations/Backdrop";
import CollapseAnim from "../../animations/CollapseAnim";
import { FaTimes } from "react-icons/fa";

interface Props {
  selectedDate: Date;
  show: boolean;
  setShow: (show: boolean) => void;
}

const ModalDayBills = ({ selectedDate, show, setShow }: Props) => {
  return (
    <Backdrop>
      <CollapseAnim style="today-bill-modal">
        <div
          id="bills-header-container"
          className="sticky top-0 bg-dark rounded-tl-md p-2"
        >
          <button
            id="drop-down-close-button"
            onClick={() => setShow(!show)}
            className="group absolute top-3 right-2 back"
          >
            <FaTimes className="icon text-light" />
          </button>
          <h2 id="selected-date-bills-title">
            {selectedDate.toUTCString().split(" ").slice(0, 4).join(" ")} bills
          </h2>
        </div>
      </CollapseAnim>
    </Backdrop>
  );
};

export default ModalDayBills;
