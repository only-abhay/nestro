import {
  Truck,
  Star,
  BadgePercent
} from "lucide-react";

import AuthFeature from "./AuthFeature";

export default function AuthLeftPanel() {
  return (
    <div className="bg-[#F2ECE3] flex flex-col justify-center px-14">

      <h1 className="text-4xl font-bold mb-12">
        Nestro<span className="text-amber-700">.</span>
      </h1>

      <div className="flex justify-center mb-10">
        <img
          src="/auth-furniture.svg"
          alt=""
          className="w-40"
        />
      </div>

      <h2 className="text-5xl font-semibold leading-tight mb-4">
        Your <em>Dream Home</em>
        <br />
        Starts Here
      </h2>

      <p className="text-neutral-600 mb-10 max-w-md">
        Join 12,000 homeowners who've transformed
        their living spaces with Nestro.
      </p>

      <div className="space-y-5">

        <AuthFeature
          icon={<Truck size={18} />}
          text="Free delivery + white glove assembly on all orders"
        />

        <AuthFeature
          icon={<Star size={18} />}
          text="Earn reward points on every purchase"
        />

        <AuthFeature
          icon={<BadgePercent size={18} />}
          text="Members-only prices & early access"
        />

      </div>

    </div>
  );
}