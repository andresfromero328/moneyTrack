"use client";

import React from "react";
import { signIn } from "@/node_modules/next-auth/react";

import { FaApple, FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa";

const PROVIDERS = [
  {
    icon: FaGoogle,
    provider: "google",
  },
  {
    icon: FaFacebookF,
    provider: "facebook",
  },
  {
    icon: FaApple,
    provider: "apple",
  },
  {
    icon: FaInstagram,
    provider: "instagram",
  },
];

const SignInProviders = () => {
  const handleSignIn = (provider: string) => {
    if (provider === "google") {
      signIn("google", {
        redirect: true,
        callbackUrl: "/",
      });
    }
  };

  return (
    <div className="relative flex flex-col items-center gap-5 py-2 border-t-2 border-secondary/50">
      <small>or sign-in using</small>
      <div className="flex items-center gap-2">
        {PROVIDERS.map((prov, index) => (
          <button
            key={index}
            onClick={() => handleSignIn(prov.provider)}
            className="group button bg-transparent hover:bg-special"
          >
            <prov.icon className="icon group-hover:text-extra anim-transition" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SignInProviders;
