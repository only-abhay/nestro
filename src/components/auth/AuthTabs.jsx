"use client";

import { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

export default function AuthTabs() {
  const [active, setActive] =
    useState("signin");

  return (
    <div className="bg-white border rounded-3xl p-8 w-full max-w-lg">

      <div className="grid grid-cols-2 bg-neutral-100 rounded-xl p-1 mb-8">

        <button
          onClick={() => setActive("signin")}
          className={`py-3 rounded-lg text-sm ${
            active === "signin"
              ? "bg-white shadow"
              : ""
          }`}
        >
          Sign In
        </button>

        <button
          onClick={() => setActive("signup")}
          className={`py-3 rounded-lg text-sm ${
            active === "signup"
              ? "bg-white shadow"
              : ""
          }`}
        >
          Create Account
        </button>

      </div>

      {active === "signin" ? (
        <SignInForm
          switchTab={() =>
            setActive("signup")
          }
        />
      ) : (
        <SignUpForm
          switchTab={() =>
            setActive("signin")
          }
        />
      )}
    </div>
  );
}