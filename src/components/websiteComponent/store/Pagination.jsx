import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Pagination() {
  return (
    <div className="py-8 flex flex-col items-center gap-5 px-4">

      <div className="flex flex-wrap justify-center gap-2">

        <button className="w-9 h-9 border rounded-md flex items-center justify-center flex-shrink-0">
          <ChevronLeft size={16} />
        </button>

        <button className="w-9 h-9 bg-[#8B5E3C] text-white rounded-md flex-shrink-0">
          1
        </button>

        <button className="w-9 h-9 border rounded-md flex-shrink-0">
          2
        </button>

        <button className="w-9 h-9 border rounded-md flex-shrink-0">
          3
        </button>

        <button className="w-9 h-9 border rounded-md flex-shrink-0">
          8
        </button>

        <button className="w-9 h-9 border rounded-md flex items-center justify-center flex-shrink-0">
          <ChevronRight size={16} />
        </button>

      </div>

      <button
        className="
        w-full
        sm:w-auto
        max-w-[320px]
        border
        border-[#C6A27E]
        text-[#8B5E3C]
        px-8
        py-3
        rounded-md
        uppercase
        tracking-wider
        text-xs
      "
      >
        Load More Products
      </button>

    </div>
  );
}