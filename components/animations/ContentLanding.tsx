"use client";

import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  style: string;
}

const ContentLanding = ({ children, style }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className={style}
      id="content-landing-animation-wrapper"
    >
      {children}
    </motion.div>
  );
};

export default ContentLanding;
