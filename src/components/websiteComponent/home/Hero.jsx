
import AuthIllustration from "../auth/AuthIllustration";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="
        bg-[#2c2016]
        mt-5
        mr-4 sm:mr-6
        mb-5
        ml-4 sm:ml-6
        rounded-[16px]
        text-white
        min-h-[380px]
        flex
        items-center
      "
    >
      <div
        className="
          mx-auto
          w-full
          grid
          grid-cols-1
          lg:grid-cols-2
          items-center
        "
      >
        <div
          className="
            p-6
            sm:p-8
            md:p-10
            lg:p-13
          "
        >
          <span className="uppercase tracking-[4px] text-[#C6A27E] text-[10px]">
            Summer Collection 2026
          </span>

          <h1 className="text-2xl md:text-[42px] font-light mt-2 leading-tight">
            Where Comfort
            <br />
            Meets <em className="text-[#C6A27E]">Craft</em>
          </h1>

          <p className="mt-2 text-zinc-400 max-w-[340px] mb-7">
            Scandinavian-inspired furniture for modern living.
            Curated pieces that endure seasons.
          </p>

          <div
            className="
              flex
              flex-col
              sm:flex-row
              gap-4
              mt-2
            "
          >
            <button className="bg-[#8b5e3c] text-[#FFF8F3] px-[22px] py-[11px] text-[11px] rounded-lg flex items-center justify-center gap-[7]">
              Shop Collection
              <ArrowRight size={11} />
            </button>

            <button className="border font-[500] bg-none text-[rgba(255,255,255,0.7)] border-[#C6A27E] px-[22px] py-[10px] tracking-wider text-[11px] rounded-lg">
              View Lookbook
            </button>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="flex justify-center mb-8">
            <AuthIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}