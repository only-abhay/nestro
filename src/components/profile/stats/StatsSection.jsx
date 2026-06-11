import StatCard from "./StatCard";
import SectionCard from "../common/SectionCard";

export default function StatsSection() {
  return (
    <SectionCard>
      <div className="grid grid-cols-4 gap-3">
        <StatCard number="7" label="Orders" />
        <StatCard number="₹4.2L" label="Spent" />
        <StatCard number="420" label="Points" />
        <StatCard number="3" label="Reviews" />
      </div>
    </SectionCard>
  );
}