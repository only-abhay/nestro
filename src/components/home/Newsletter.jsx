export default function NewsletterBanner() {
  return (
    <section className="max-w-full rounded-3xl bg-[#2C2016] p-8 ">

      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

        {/* Left Side */}

        <div>

          <span className="inline-block rounded-full border px-4 py-1 text-[10px] uppercase tracking-[3px] text-[#C6A27E]">
            Stay in the Loop
          </span>

          <h3 className="mt-4 text-[20px] font-light leading-tight text-white md:text-[20px]">
            Design Tips &
            New Arrivals
          </h3>

          <p className="mt-4 max-w-md text-[12px] text-white/60 md:text-base">
            Join 8,000+ subscribers who get exclusive first looks.
          </p>

        </div>

        {/* Right Side */}

        <div className="flex flex-col items-start gap-3 md:items-end">

          <div className="flex w-full flex-col gap-3 sm:flex-row">

            <input
              type="email"
              placeholder="Your email address"
              className="h-12 min-w-[280px] rounded-full border border-white/10 bg-white/5 px-5 text-white placeholder:text-white/40 outline-none transition focus:border-[#C6A27E]"
            />

            <button className="h-12 rounded-full bg-[#C6A27E] px-8 font-medium text-white transition hover:bg-[#b89472]">
              Subscribe
            </button>

          </div>

          <span className="text-xs text-white/40">
            No spam. Unsubscribe anytime.
          </span>

        </div>

      </div>

    </section>
  );
}