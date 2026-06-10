export default function AuthFeature({
  icon,
  text,
}) {
  return (
    <div className="flex items-center gap-4">

      <div className="w-10 h-10 rounded-full bg-white border flex items-center justify-center">
        {icon}
      </div>

      <p className="text-sm text-neutral-700">
        {text}
      </p>

    </div>
  );
}