"use client";

import { Eye, Apple } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

import SocialButton from "./SocialButton";
import AuthTerms from "./AuthTerms";

export default function SignInForm({
  switchToSignup,
}) {
  return (
    <>
      <h2 className="text-[20px] font-medium text-[#2F2B27] mb-1">
        Welcome back
      </h2>

      <p className="text-[12px] text-[#8B8680] mb-[22px]">
        Sign in to your Nestro account to continue.
      </p>

      <div className="mb-[14px]">
        <label className="block text-[11px] text-[#8B8680] mb-[5px]">
          Email address
        </label>

        <input
          type="email"
          placeholder="rahul@email.com"
          className="
          w-full
          px-3
          py-[10px]
          border
          border-[#E5DDD5]
          rounded-[6px]
          bg-[#FAFAF9]
          text-[13px]
          "
        />
      </div>

      <div className="mb-[14px]">
        <label className="block text-[11px] text-[#8B8680] mb-[5px]">
          Password
        </label>

        <div className="relative">
          <input
            type="password"
            placeholder="••••••••"
            className="
            w-full
            px-3
            py-[10px]
            pr-10
            border
            border-[#E5DDD5]
            rounded-[6px]
            bg-[#FAFAF9]
            text-[13px]
            "
          />

          <Eye
            size={16}
            className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-[#8B8680]
            "
          />
        </div>
      </div>

      <div className="text-right text-[11px] text-[#8B5E3C] mb-[14px]">
        Forgot password?
      </div>

      <button
        className="
        w-full
        py-3
        bg-[#8B5E3C]
        text-white
        rounded-[6px]
        text-[13px]
        font-medium
        mb-4
        "
      >
        Sign In
      </button>

      <div className="flex items-center gap-2 mb-4">
        <div className="flex-1 h-px bg-[#E5DDD5]" />
        <span className="text-[11px] text-[#8B8680]">
          or continue with
        </span>
        <div className="flex-1 h-px bg-[#E5DDD5]" />
      </div>

      <SocialButton
        icon={<FcGoogle size={16} />}
        text="Continue with Google"
      />

      <SocialButton
        icon={<Apple size={16} />}
        text="Continue with Apple"
      />

      <AuthTerms
        text="Don't have an account?"
        actionText="Create one free"
        onClick={switchToSignup}
      />
    </>
  );
}