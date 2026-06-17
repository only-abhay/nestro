import { ArrowRight } from "lucide-react";

export default function StoreHero() {
  return (
    <section
      className="
      relative
      mx-4
      sm:mx-6
      my-5
      overflow-hidden
      rounded-2xl
      bg-[linear-gradient(135deg,_#2C2016_0%,_#3D2B1A_60%,_#5A3D24_100%)]
      "
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(198,162,126,0.35)_0%,transparent_60%)]" />

      <div
        className="
        relative
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-8
        lg:gap-12
        items-center
        "
      >
        {/* Left Content */}
        <div
          className="
          p-6
          sm:p-8
          md:p-10
          lg:p-13
          "
        >
          <span className="uppercase tracking-[4px] text-[#C6A27E] text-[10px] font-medium">
            New Collection — SS 2026
          </span>

          <h1 className="mt-3 text-[29px] md:text-[30px] lg:text-[34px] text-white font-light leading-[1.1] text-[#1E1E1E]">
            Modern Living <br />
            <span className="italic text-[#C6A27E]">
              Collection
            </span>
          </h1>

          <p className="mt-3 text-[#6B7280] text-[13px] md:text-base max-w-md leading-7">
            Timeless furniture crafted for elegant spaces.
            Designed with intention, built to endure.
          </p>

          <button className="mt-4 inline-flex items-center gap-2 bg-[#8B5E3C] text-white px-6 py-3 rounded-md text-sm tracking-wide hover:bg-[#734c2f] transition-all">
            Explore Collection
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Right Image Placeholder */}
        <div
          className="
          relative
          flex
          justify-center
          lg:justify-end
          px-6
          pb-6
          lg:px-0
          lg:pb-0
          "
        >
          <div className="relative w-full max-w-[520px] rounded-3xl bg-gradient-to-br from-[#D6BFA7]/60 via-[#C6A27E]/30 to-[#8B5E3C]/20 border border-[#E8E0D5] shadow-xl aspect-[4/3]" />

          {/* Extra Glow */}
          <div className="absolute w-[250px] sm:w-[320px] lg:w-[400px] bg-[#C6A27E]/20 blur-3xl rounded-full -z-10 right-0 top-1/2 -translate-y-1/2" />
        </div>
      </div>
    </section>
  );
}