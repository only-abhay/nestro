import { team } from "@/data/aboutData,";
import TeamCard from "./Teamcard";

export default function TeamSection() {
  return (
    <section className="px-6 py-8">
      <div className="section-tag text-[#8B5E3C] ">
        The people behind Nestro
      </div>

      <h2 className="section-title text-2xl">
        Our Team
      </h2>

      <div
        className="
        grid
        grid-cols-4
        gap-[14px]
        mt-5
      "
      >
        {team.map((member) => (
          <TeamCard
            key={member.name}
            {...member}
          />
        ))}
      </div>
    </section>
  );
}