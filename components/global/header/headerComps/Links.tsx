import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import useScreenWidth from "@/hooks/useScreenWidth";
import { AnimatePresence, motion } from "framer-motion";
import { NAVLINKS } from "@/lib/navbarlinks";

const Links = () => {
  const pathname = usePathname();
  const width = useScreenWidth();

  return (
    <AnimatePresence>
      {width! > 768 && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <nav className="flex items-center gap-5">
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Links;
