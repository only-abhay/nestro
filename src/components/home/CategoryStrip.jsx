import Link from "next/link";
import { categories } from "@/data/categories";

export default function Categories() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">

        <div className="grid md:grid-cols-4 lg:grid-cols-7 gap-5">

          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href="/store"
                className="bg-white  rounded-xl border-[#e8e0d5] border-[0.5px] p-5 text-center hover:shadow-lg transition"
              >
                <Icon
                  className="mx-auto mb-3 text-[#c6a27e]"
                  size={30}
                />

                <h3 className="font-medium">
                  {item.name}
                </h3>

                <p className="text-sm text-zinc-500">
                  {item.count}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}