import Link from "next/link";
import React, { useCallback, useEffect } from "react";
import { usePathname } from "next/navigation";

import { FaSignInAlt, FaTimes } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import Backdrop from "@/components/animations/Backdrop";
import CollapseAnim from "@/components/animations/CollapseAnim";
import { NAVLINKS } from "@/lib/navbarlinks";

interface Props {
  show: boolean;
  setShow: (show: boolean) => void;
}

export const SidebarContent = ({ show, setShow }: Props) => {
  const pathname = usePathname();
  const handleDroNav = useCallback(() => {
    const windowSize = window.innerWidth;
    if (show && windowSize > 767) setShow(!show);
  }, [show, setShow]);

  useEffect(() => {
    window.addEventListener("resize", handleDroNav);

    return () => window.removeEventListener("resize", handleDroNav);
  }, [handleDroNav]);
  return (
    <Backdrop>
      <CollapseAnim style="modal-nav">
        <button
          onClick={() => setShow(!show)}
          className="button absolute top-10 right-5 scale-100"
        >
          <FaTimes className="icon" />
        </button>

        <nav className="flex flex-col gap-5">
          {NAVLINKS.map((navLink, index) => (
            <Link
              key={index}
              href={navLink.href}
              className={`flex items-center gap-2 p-2 rounded-md hover:shadow-onRest hover:bg-special/75 ${
                pathname.split("/").slice(0, 2).join("/") ===
                  navLink.href.split("/").slice(0, 2).join("/") &&
                "bg-special/75 shadow-onRest"
              } anim-transition`}
            >
              <navLink.icon className="icon" />
              <small>{navLink.text}</small>
            </Link>
          ))}
        </nav>

        <Link
          href={"/settings"}
          className="button absolute bottom-10 left-5 text-extra"
        >
          <IoMdSettings />
          <small className="text-extra">settings</small>
        </Link>

        <button className="button absolute bottom-10 right-5 text-extra">
          <FaSignInAlt />
          <small className="text-extra">sign out</small>
        </button>
      </CollapseAnim>
    </Backdrop>
  );
};
