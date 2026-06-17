export default function RelatedProductCard({
  image,
  category,
  name,
  rating,
  price,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className="
        cursor-pointer
        group
      "
    >
      <div
        className="
        rounded-[12px]
        overflow-hidden
        bg-[#F5F0EB]
      "
      >
        {image}
      </div>

      <div className="pt-3">
        <div
          className="
          text-[10px]
          uppercase
          tracking-[0.12em]
          text-[#8A8177]
          mb-1
        "
        >
          {category}
        </div>

        <div
          className="
          text-[14px]
          text-[#2C2016]
          mb-2
        "
        >
          {name}
        </div>

        <div className="flex justify-between">
          <span className="text-[#C6A27E]">
            {rating}
          </span>

          <span className="font-medium">
            {price}
          </span>
        </div>
      </div>
    </div>
  );
}