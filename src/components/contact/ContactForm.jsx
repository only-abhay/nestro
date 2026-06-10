"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-10">

          <div>
            <h2 className="text-4xl font-light">
              Send Us A Message
            </h2>

            <p className="text-stone-600 mt-4">
              We usually reply within 24 hours.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="border rounded-3xl p-8 bg-white"
          >
            <div className="grid md:grid-cols-2 gap-4">

              <input
                placeholder="First Name"
                className="border rounded-xl px-4 py-3"
              />

              <input
                placeholder="Last Name"
                className="border rounded-xl px-4 py-3"
              />
            </div>

            <input
              placeholder="Email Address"
              className="w-full border rounded-xl px-4 py-3 mt-4"
            />

            <select className="w-full border rounded-xl px-4 py-3 mt-4">
              <option>General Inquiry</option>
              <option>Order Support</option>
              <option>Custom Furniture</option>
              <option>Returns</option>
            </select>

            <textarea
              rows={6}
              placeholder="Tell us about your requirement..."
              className="w-full border rounded-xl px-4 py-3 mt-4"
            />

            <button
              className="
              w-full mt-4
              bg-black text-white
              py-4 rounded-xl
              "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}