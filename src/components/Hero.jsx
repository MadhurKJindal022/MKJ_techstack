export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-5xl text-center">
        <h1 className="text-6xl font-bold leading-tight">
          Build Stunning Modern Websites
        </h1>

        <p className="mt-6 text-lg text-zinc-400">
          Fast, responsive, cinematic and modern landing pages
          using React and Tailwind CSS v4.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-xl font-medium">
            Get Started
          </button>

          <button className="border border-zinc-700 px-6 py-3 rounded-xl">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}