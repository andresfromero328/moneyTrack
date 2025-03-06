import React from "react";
import Image from "next/image";

import RegisterLink from "@/components/signIn/RegisterLink";
import SignInProviders from "@/components/signIn/SignInProviders";
import SignInForm from "@/components/forms/SignInForm";
import ContentLanding from "@/components/animations/ContentLanding";

const SignInpage = () => {
  return (
    <div className="content min-h-screen items-center justify-center">
      <ContentLanding style="flex flex-col gap-5 min-w-[320px] p-5 shadow-md rounded-md">
        <div className="flex items-center justify-between">
          <Image
            src={"/logo.svg"}
            width={75}
            height={75}
            priority
            alt="Logo"
            className="drop-shadow-md"
            style={{ width: "75px", height: "75px" }}
          />
          <h1>Sign-in</h1>
        </div>
        <SignInForm />
        <SignInProviders />
        <RegisterLink />
      </ContentLanding>
    </div>
  );
};

export default SignInpage;
