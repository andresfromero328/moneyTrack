import Image from "next/image";
import Link from "next/link";

import { RiUserSharedFill } from "react-icons/ri";

import { SignUpForm } from "@/components/forms/SignUpForm";
import ContentLanding from "@/components/animations/ContentLanding";

const SignupPage = () => {
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
          <h1>Welcome!</h1>
        </div>

        <SignUpForm />
        <div className="flex items-center justify-center w-full gap-5">
          <p>Already have an account</p>
          <Link href={"/sign-in"} className="button">
            <RiUserSharedFill className="icon" />
            <small>sign in</small>
          </Link>
        </div>
      </ContentLanding>
    </div>
  );
};

export default SignupPage;
