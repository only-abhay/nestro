export default function AccountStats() {
  const stats = [
    {
      title: "Orders",
      value: "7",
    },
    {
      title: "Spent",
      value: "₹4.2L",
    },
    {
      title: "Points",
      value: "420",
    },
    {
      title: "Reviews",
      value: "3",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((item) => (
        <div
          key={item.title}
          className="bg-white border rounded-2xl p-6 text-center"
        >
          <h3 className="text-3xl font-bold">
            {item.value}
          </h3>

          <p className="text-gray-500 mt-2">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
}