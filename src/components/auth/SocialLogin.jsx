

export default function SocialLogin() {
  return (
    <>
      <div className="flex items-center gap-4 my-6">
        <div className="flex-1 h-px bg-neutral-200" />
        <span className="text-sm text-neutral-400">
          or continue with
        </span>
        <div className="flex-1 h-px bg-neutral-200" />
      </div>

      <div className="space-y-3">

        <button className="w-full border rounded-xl py-3 flex justify-center items-center gap-3">
          Chrome
          Continue with Google
        </button>

        <button className="w-full border rounded-xl py-3 flex justify-center items-center gap-3">
        Apple
          Continue with Apple
        </button>

      </div>
    </>
  );
}