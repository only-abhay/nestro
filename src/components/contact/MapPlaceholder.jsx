import { Map } from "lucide-react";

export default function MapPlaceholder() {
  return (
    <div className="bg-[#221A14] rounded-[12px] h-[180px] flex items-center justify-center text-[#C6A27E] text-[13px]">
      <Map
        size={22}
        className="mr-[10px]"
      />
      View on Google Maps
    </div>
  );
}