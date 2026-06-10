import {
  ChevronDown,
} from "lucide-react";

export default function FAQSection() {
  return (
    <section className="py-24 bg-stone-50">

      <div className="max-w-4xl mx-auto px-4">

        <h2 className="text-4xl font-light text-center mb-10">
          Frequently Asked Questions
        </h2>

        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="
            bg-white
            border
            rounded-2xl
            p-6
            mb-4
            flex
            justify-between
            "
          >
            <span>
              How long does delivery take?
            </span>

            <ChevronDown />
          </div>
        ))}
      </div>
    </section>
  );
}