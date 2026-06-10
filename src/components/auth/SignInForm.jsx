import SocialLogin from "./SocialLogin";

export default function SignInForm({
  switchTab,
}) {
  return (
    <>
      <h2 className="text-3xl font-semibold mb-2">
        Welcome back
      </h2>

      <p className="text-neutral-500 mb-6">
        Sign in to your Nestro account.
      </p>

      <div className="space-y-4">

        <div>
          <label>Email Address</label>

          <input
            type="email"
            placeholder="rahul@email.com"
            className="w-full mt-2 border rounded-xl px-4 py-3"
          />
        </div>

        <div>
          <label>Password</label>

          <input
            type="password"
            placeholder="••••••••"
            className="w-full mt-2 border rounded-xl px-4 py-3"
          />
        </div>

      </div>

      <button className="w-full bg-black text-white py-3 rounded-xl mt-6">
        Sign In
      </button>

      <SocialLogin />

      <p className="text-center text-sm mt-6">
        Don't have an account?
        <button
          onClick={switchTab}
          className="ml-2 text-amber-700"
        >
          Create one free
        </button>
      </p>
    </>
  );
}