"use client";

import { Eye } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

import CheckboxField from "./CheckboxField";
import SocialButton from "./SocialButton";
import AuthTerms from "./AuthTerms";

export default function SignUpForm({
  switchToSignin,
}) {
  return (
    <>
      <h2 className="text-[20px] font-medium text-[#2F2B27] mb-1">
        Create account
      </h2>

      <p className="text-[12px] text-[#8B8680] mb-[22px]">
        Join Nestro and start designing your dream home.
      </p>

      <div className="grid grid-cols-2 gap-3">
        <div className="mb-[14px]">
          <label className="block text-[11px] text-[#8B8680] mb-[5px]">
            First Name
          </label>

          <input
            placeholder="Rahul"
            className="
            w-full
            px-3
            py-[10px]
            border
            border-[#E5DDD5]
            rounded-[6px]
            bg-[#FAFAF9]
            "
          />
        </div>

        <div className="mb-[14px]">
          <label className="block text-[11px] text-[#8B8680] mb-[5px]">
            Last Name
          </label>

          <input
            placeholder="Khanna"
            className="
            w-full
            px-3
            py-[10px]
            border
            border-[#E5DDD5]
            rounded-[6px]
            bg-[#FAFAF9]
            "
          />
        </div>
      </div>

      <div className="mb-[14px]">
        <label className="block text-[11px] text-[#8B8680] mb-[5px]">
          Email Address
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
            placeholder="Min. 8 characters"
            className="
            w-full
            px-3
            py-[10px]
            pr-10
            border
            border-[#E5DDD5]
            rounded-[6px]
            bg-[#FAFAF9]
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

      <div className="mb-[14px]">
        <label className="block text-[11px] text-[#8B8680] mb-[5px]">
          Phone Number
        </label>

        <input
          placeholder="+91 98765 43210"
          className="
          w-full
          px-3
          py-[10px]
          border
          border-[#E5DDD5]
          rounded-[6px]
          bg-[#FAFAF9]
          "
        />
      </div>

      <CheckboxField
        id="terms"
        defaultChecked
        label={
          <>
            I agree to the{" "}
            <span className="text-[#8B5E3C]">
              Terms of Service
            </span>{" "}
            & Privacy Policy
          </>
        }
      />

      <CheckboxField
        id="news"
        defaultChecked
        label="Send me design tips & exclusive offers"
      />

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
        Create Account
      </button>

      <div className="flex items-center gap-2 mb-4">
        <div className="flex-1 h-px bg-[#E5DDD5]" />
        <span className="text-[11px] text-[#8B8680]">
          or sign up with
        </span>
        <div className="flex-1 h-px bg-[#E5DDD5]" />
      </div>

      <SocialButton
        icon={<FcGoogle size={16} />}
        text="Continue with Google"
      />

      <AuthTerms
        text="Already have an account?"
        actionText="Sign in"
        onClick={switchToSignin}
      />
    </>
  );
}