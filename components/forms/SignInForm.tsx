"use client";

import { signIn } from "@/node_modules/next-auth/react";
import { redirect } from "next/navigation";
import { useState, FormEvent } from "react";

import { FaSignInAlt } from "react-icons/fa";
import { LuOctagonAlert } from "react-icons/lu";

const SignInForm = () => {
  // UseState
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);

  /**
   *
   * param: event FormEvent
   *
   * this is the onSubmit handle function that will receive the data from the registration form
   * and call nextauth's signIn. Depending on the outcome, it will:
   *    1. Be successful and redirect to dashboard
   *    2. Have a form error or internal server error
   */
  const handleSignIn = async (event: FormEvent<HTMLFormElement>) => {
    // setting up form and isPending
    event.preventDefault();
    setIsPending(true);

    // Receiving data and calling signIn function
    const formData = new FormData(event.currentTarget);
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("pwd"),
      redirect: false,
    });

    // Handling possible errors received from signIn
    if (res?.error) {
      if (res.status.toString().startsWith("4"))
        setError("wrong email or password");
      if (res.status.toString().startsWith("5"))
        setError("there was a problem with the server, try again");
    }
    if (res?.ok) {
      redirect("/");
    }

    // After completition, set pending to false
    setIsPending(false);
  };

  return (
    <>
      <form
        onSubmit={handleSignIn}
        className="flex flex-col gap-5 items-center mt-5"
      >
        <input
          type="text"
          id="email"
          name="email"
          placeholder="example@email.com"
          className="w-full"
          onChange={() => setError("")}
          required
        />
        <input
          type="password"
          id="pwd"
          name="pwd"
          placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
          className="w-full"
          onChange={() => setError("")}
          required
        />
        {isPending ? (
          <small>pending...</small>
        ) : (
          <button className="button">
            <FaSignInAlt className="icon" />
            <small className="">sign-in</small>
          </button>
        )}
      </form>
      {error && (
        <div className="flex items-center gap-2 mx-auto border-2 border-onFailure p-2 rounded-md">
          <LuOctagonAlert className="icon text-onFailure" />
          <small className="text-onFailure">{error}</small>
        </div>
      )}
    </>
  );
};

export default SignInForm;
