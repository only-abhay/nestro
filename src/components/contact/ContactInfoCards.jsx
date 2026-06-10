import {
  Phone,
  Mail,
  Clock,
  MapPin,
} from "lucide-react";

const items = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 98765 43210",
  },
  {
    icon: Mail,
    title: "Email",
    value: "hello@nestro.in",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sat, 10AM - 7PM",
  },
  {
    icon: MapPin,
    title: "Flagship Store",
    value: "MI Road, Jaipur",
  },
];

export default function ContactInfoCards() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-6">

        {items.map((item) => (
          <div
            key={item.title}
            className="bg-white border rounded-3xl p-6"
          >
            <item.icon size={24} />

            <h3 className="font-semibold mt-4">
              {item.title}
            </h3>

            <p className="text-stone-600 mt-2">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}