import Image from "next/image";
import React from "react";

import LinkToPlaid from "@/components/linkPlaid/LinkToPlaid";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { CustomSession } from "@/lib/types";

const LinkPlaidPage = async () => {
  // calling session to retrieve the user's ID
  const user: CustomSession | null = await getServerSession(authOptions);

  return (
    <div className="content min-h-screen items-center justify-center">
      <div className="flex flex-col gap-5 min-w-[320px] p-5 shadow-md rounded-md">
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
          <h1>Link your Bank</h1>
        </div>
        <LinkToPlaid userID={user!.userID} />
      </div>
    </div>
  );
};

export default LinkPlaidPage;
