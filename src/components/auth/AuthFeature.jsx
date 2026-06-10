export default function AuthFeature({
  icon: Icon,
  text,
}) {
  return (
    <div className="flex gap-[10px] items-center mb-[14px] w-full max-w-[240px]">

      <div className="w-7 h-7 bg-[#C6A27E26] rounded-md flex items-center justify-center">
        <Icon
          size={14}
          className="text-[#C6A27E]"
        />
      </div>

      <p className="text-[11px] text-white/55 leading-[1.5]">
        {text}
      </p>

    </div>
  );
}