import React from "react";

import Navbar from "@/components/global/header/Navbar";
import { getServerSession, Session } from "next-auth";
import { authOptions } from "@/lib/auth";

interface Props {
  children: React.ReactNode;
}

interface CustomUser extends Session {
  user: {
    name: string;
    email: string;
    image: string;
  };
}

const AuthenticatedLayout = async ({ children }: Props) => {
  const user: CustomUser | null = await getServerSession(authOptions);

  return (
    <>
      <Navbar user={user!.user} />
      {children}
    </>
  );
};

export default AuthenticatedLayout;
