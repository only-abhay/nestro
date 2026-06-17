import { milestones } from "@/data/aboutData,";

export default function Milestones() {
  return (
    <section className="px-6 py-8">
      <div
        className="
        grid
        grid-cols-4
        overflow-hidden
        rounded-xl
        border
        border-[#E5DDD3]
      "
      >
        {milestones.map((item) => (
          <div
            key={item.label}
            className="
            bg-white
            px-6
            py-6
            text-center
            border-r
            last:border-r-0
            border-[#E5DDD3]
          "
          >
            <h3
              className="
              text-[28px]
              font-medium
              text-[#8B5E3C]
              mb-1
            "
            >
              {item.number}
            </h3>

            <p
              className="
              text-[11px]
              text-[#8C837A]
            "
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}