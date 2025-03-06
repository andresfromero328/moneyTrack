"use client";

import React from "react";
import { motion } from "framer-motion";

const Backdrop = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      id="main-container-backdrop"
    >
      {/* <div className="w-full md:w-[350px] h-full absolute top-0 right-0 bg-primary/20 z-50 shadow-onRest"> */}
      {children}
      {/* </div> */}
    </motion.div>
  );
};

export default Backdrop;
