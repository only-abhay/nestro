import AuthIllustration from "./AuthIllustration";
import AuthFeature from "./AuthFeature";

import {
  Truck,
  Star,
  BadgePercent,
} from "lucide-react";

export default function AuthLeftPanel() {
  return (
    <div
      className="
      w-[42%]
      bg-[#1F1A17]
      flex
      flex-col
      items-center
      justify-center
      px-12
      "
    >
      <div
        className="
        text-[18px]
        font-medium
        tracking-[0.14em]
        uppercase
        text-[#FAF7F4]
        mb-8
        "
      >
        Nestro
        <span className="text-[#C6A27E]">.</span>
      </div>

      <div className="text-center mb-8">
        <AuthIllustration />
      </div>

      <h2
        className="
        text-[28px]
        font-normal
        leading-[1.25]
        tracking-[-0.02em]
        text-[#FAF7F4]
        text-center
        mb-3
        "
      >
        Your <em className="text-[#D6BFA7]">Dream Home</em>
        <br />
        Starts Here
      </h2>

      <p
        className="
        text-center
        text-[12px]
        leading-[1.7]
        text-white/45
        mb-7
        "
      >
        Join 12,000 homeowners who've transformed
        their living spaces with Nestro.
      </p>

      <div className="w-full max-w-[240px]">
        <AuthFeature
          icon={<Truck size={14} />}
          text="Free delivery + white glove assembly on all orders"
        />

        <AuthFeature
          icon={<Star size={14} />}
          text="Earn reward points on every purchase"
        />

        <AuthFeature
          icon={<BadgePercent size={14} />}
          text="Members-only prices & early access"
        />
      </div>
    </div>
  );
}