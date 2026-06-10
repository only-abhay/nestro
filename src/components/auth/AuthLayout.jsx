export default function AuthLayout({
  leftContent,
  children,
}) {
  return (
    <section className="min-h-screen bg-[#F8F5F0]">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Left Side */}
        <div className="hidden lg:flex">
          {leftContent}
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-lg">
            {children}
          </div>
        </div>

      </div>
    </section>
  );
}