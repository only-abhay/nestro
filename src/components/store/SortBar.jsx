import { X } from "lucide-react";

export default function SortBar() {
  return (
    <div
      className="
      bg-white
      rounded-xl
      border
      border-[#E8E0D5]
      px-5
      py-3
      flex
      flex-col
      md:flex-row
      gap-3
      justify-between
      items-start
      md:items-center
      mb-5
    "
    >
      <p className="text-sm text-gray-500">
        <span className="font-semibold text-black">
          128
        </span>{" "}
        products found
      </p>

      <div className="flex flex-wrap gap-2 items-center">
        <div className="bg-[#F5EDE4] text-[#8B5E3C] px-3 py-1 rounded-full text-xs flex items-center gap-1">
          Living Room
          <X size={12} />
        </div>

        <div className="bg-[#F5EDE4] text-[#8B5E3C] px-3 py-1 rounded-full text-xs flex items-center gap-1">
          Solid Wood
          <X size={12} />
        </div>

        <select className="border rounded-md px-3 py-2 text-sm">
          <option>Sort: Featured</option>
          <option>Price Low → High</option>
          <option>Price High → Low</option>
          <option>Newest First</option>
        </select>
      </div>
    </div>
  );
}