import { showrooms } from "@/data/contactData";
import ShowroomCard from "./ShowroomCard";

export default function ShowroomSection() {
  return (
    <div className="mt-4">
      <div className="section-tag">
        Showrooms
      </div>

      <div className="grid grid-cols-3 gap-3">
        {showrooms.map((showroom) => (
          <ShowroomCard
            key={showroom.city}
            {...showroom}
          />
        ))}
      </div>
    </div>
  );
}