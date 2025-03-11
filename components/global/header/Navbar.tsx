"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import Links from "./headerComps/Links";
import Sidebar from "./Sidebar";
import useScreenWidth from "@/hooks/useScreenWidth";
import { redirect } from "next/navigation";
import ContentLanding from "@/components/animations/ContentLanding";

interface Props {
  user: {
    name: string,
    email: string,
    image: string | null
  }
}

const Navbar = ({user}: Props) => {
  const [show, setShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const width = useScreenWidth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSidebar = () => {
    if (width! < 769) {
      setShow(!show);
    } else redirect("/settings");
  };

  return (
    <ContentLanding style="navbar">
      <header
        id="website-header"
        className={`flex items-center justify-between p-5 anim-transition ${
          isScrolled && "shadow-onRest bg-extra/75 backdrop-blur-[2px]"
        }`}
      >
        <Image
          src={"/logo.svg"}
          width={75}
          height={75}
          priority
          alt="Logo"
          className="user-icon-resize drop-shadow-md default-anim-transition"
        />

        <Links />

        <div
          id="logged-user-button"
          className="relative flex items-center gap-2"
        >
          <small className="absolute right-20 whitespace-nowrap">
            Hello {user.name}
          </small>
          <div
            onClick={handleSidebar}
            className="user-icon-resize rounded-full bg-special border-4 border-primary default-anim-transition cursor-pointer"
          ></div>
        </div>
      </header>
      <Sidebar show={show} setShow={setShow} />
    </ContentLanding>
  );
};

export default Navbar;
