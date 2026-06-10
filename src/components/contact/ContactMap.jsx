export default function ContactMap() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">

        <div
          className="
          h-[500px]
          rounded-3xl
          overflow-hidden
          border
          "
        >
          <iframe
            src="https://www.google.com/maps/embed?pb="
            width="100%"
            height="100%"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}