"use client";

import { useEffect } from "react";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { SidebarContent } from "./headerComps/SidebarContent";

interface Props {
  show: boolean;
  setShow: (show: boolean) => void;
}

const Sidebar = ({ show, setShow }: Props) => {
  const pathmame = usePathname();

  useEffect(() => {
    if (show) setShow(!show);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathmame]);

  return (
    <>
      <AnimatePresence initial={false} mode="wait">
        {show && <SidebarContent show={show} setShow={setShow} />}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
