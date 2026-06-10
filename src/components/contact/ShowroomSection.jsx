import { MapPin } from "lucide-react";

const stores = [
  {
    city: "Jaipur",
    address: "MI Road, Jaipur",
  },
  {
    city: "Mumbai",
    address: "Linking Road, Bandra West",
  },
  {
    city: "Bangalore",
    address: "100ft Road, Indiranagar",
  },
];

export default function ShowroomSection() {
  return (
    <section className="py-24 bg-stone-50">

      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-4xl font-light mb-10">
          Visit Our Showrooms
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {stores.map((store) => (
            <div
              key={store.city}
              className="bg-white rounded-3xl p-8 border"
            >
              <MapPin />

              <h3 className="text-2xl mt-4">
                {store.city}
              </h3>

              <p className="text-stone-600 mt-2">
                {store.address}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}