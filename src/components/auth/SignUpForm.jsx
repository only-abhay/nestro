import SocialLogin from "./SocialLogin";

export default function SignUpForm({
  switchTab,
}) {
  return (
    <>
      <h2 className="text-3xl font-semibold mb-2">
        Create Account
      </h2>

      <p className="text-neutral-500 mb-6">
        Join Nestro today.
      </p>

      <div className="grid grid-cols-2 gap-4">

        <input
          placeholder="First Name"
          className="border rounded-xl px-4 py-3"
        />

        <input
          placeholder="Last Name"
          className="border rounded-xl px-4 py-3"
        />

      </div>

      <div className="space-y-4 mt-4">

        <input
          placeholder="Email"
          className="w-full border rounded-xl px-4 py-3"
        />

        <input
          placeholder="Password"
          className="w-full border rounded-xl px-4 py-3"
        />

        <input
          placeholder="Phone Number"
          className="w-full border rounded-xl px-4 py-3"
        />

      </div>

      <div className="space-y-3 mt-5">

        <label className="flex gap-2 text-sm">
          <input type="checkbox" defaultChecked />
          I agree to Terms & Privacy Policy
        </label>

        <label className="flex gap-2 text-sm">
          <input type="checkbox" defaultChecked />
          Send me offers and design tips
        </label>

      </div>

      <button className="w-full bg-black text-white py-3 rounded-xl mt-6">
        Create Account
      </button>

      <SocialLogin />

      <p className="text-center text-sm mt-6">
        Already have an account?

        <button
          onClick={switchTab}
          className="ml-2 text-amber-700"
        >
          Sign In
        </button>
      </p>
    </>
  );
}