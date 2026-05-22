export default function AIProjects() {
  return (
    <main className="pt-32 pb-16 min-h-screen px-8 autumn-gradient">

      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <section className="mb-16">

          <h1 className="text-[60px] leading-[1.1] tracking-[-0.02em] font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-orange-400 to-orange-600">

            AI/ML & API Projects

          </h1>

          <p className="text-[18px] leading-[1.6] text-slate-400 max-w-2xl">

            Exploring the intersection of neural networks and seamless
            integration. This collection showcases intelligent systems built
            with an autumnal lens—warm, grounded, and deeply analytical.

          </p>

        </section>

        {/* GRID */}
        <div className="grid grid-cols-12 gap-6">

          {/* FEATURE CARD */}
          <div className="col-span-12 lg:col-span-8 glass-panel ghost-border rounded-xl p-8 bg-white/5 hover:bg-white/10 transition-all duration-300 group">

            <div className="flex flex-col lg:flex-row gap-8">

              {/* LEFT */}
              <div className="flex-1 space-y-6">

                <div className="flex items-center gap-3">

                  <span className="material-symbols-outlined text-orange-400">
                    neurology
                  </span>

                  <h3 className="text-[24px] leading-[1.3] font-semibold text-white">

                    Neural Harvest Optimizer

                  </h3>

                </div>

                <p className="text-slate-400 text-[16px] leading-[1.5]">

                  <span className="block font-semibold text-amber-200 mb-1">

                    The Problem:

                  </span>

                  Agricultural yields were unpredictable due to shifting
                  climate cycles, leading to significant resource waste.

                  <span className="block font-semibold text-amber-200 mt-4 mb-1">

                    The Solution:

                  </span>

                  A predictive ML model using multi-layer perceptrons to
                  forecast soil moisture levels and optimize watering schedules
                  via a RESTful API.

                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2">

                  {["Python", "TensorFlow", "FastAPI"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-300 text-[13px] font-semibold tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}

                </div>

                <button className="mt-4 px-6 py-3 rounded-xl bg-orange-600 text-white text-[13px] font-semibold hover:bg-orange-500 hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] transition-all">

                  Explore Project

                </button>

              </div>

              {/* IMAGE */}
              <div className="flex-1 h-64 lg:h-auto min-h-[300px] rounded-lg overflow-hidden relative border border-white/5">

                <img
                  className="w-full h-full object-cover saturate-[1.2] sepia-[0.2]"
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"
                  alt="AI Dashboard"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326] via-transparent to-transparent opacity-60" />

              </div>

            </div>

          </div>

          {/* SIDE CARD */}
          <div className="col-span-12 lg:col-span-4 glass-panel ghost-border rounded-xl p-8 bg-white/5 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between">

            <div className="space-y-4">

              <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-6">

                <span className="material-symbols-outlined text-amber-400">
                  api
                </span>

              </div>

              <h3 className="text-[24px] leading-[1.3] font-semibold text-white">

                Sentiment Stream API

              </h3>

              <p className="text-slate-400 text-[16px] leading-[1.5]">

                Real-time NLP processing for social media feeds, extracting
                emotional nuances during peak retail seasons using BERT
                architectures.

              </p>

            </div>

            <div className="mt-8 space-y-4">

              <div className="flex flex-wrap gap-2">

                {["PyTorch", "NLP"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-300 text-[13px] font-semibold"
                  >
                    {tag}
                  </span>
                ))}

              </div>

              <button className="w-full py-3 rounded-xl glass-panel ghost-border text-amber-200 text-[13px] font-semibold hover:bg-white/5 transition-all">

                View API Docs

              </button>

            </div>

          </div>

          {/* WIDE CARD */}
          <div className="col-span-12 glass-panel ghost-border rounded-xl p-8 bg-white/5 hover:bg-white/10 transition-all duration-300">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

              {/* IMAGE */}
              <div className="md:col-span-1 h-48 rounded-lg overflow-hidden border border-white/5">

                <img
                  className="w-full h-full object-cover contrast-125 grayscale-[0.5] hover:grayscale-0 transition-all duration-500"
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                  alt="Circuit"
                />

              </div>

              {/* CONTENT */}
              <div className="md:col-span-2 space-y-4">

                <div className="flex justify-between items-start">

                  <div>

                    <h3 className="text-[24px] leading-[1.3] font-semibold text-white">

                      EmberEdge: Anomaly Detection

                    </h3>

                    <p className="text-slate-400 text-[16px] leading-[1.5] mt-2">

                      Edge computing solution for server farm temperature
                      anomalies. Utilizes isolation forests to detect
                      overheating signatures before hardware failure.

                    </p>

                  </div>

                  <span className="material-symbols-outlined text-orange-500 text-4xl">
                    sensors
                  </span>

                </div>

                {/* BOTTOM */}
                <div className="flex items-center justify-between pt-4">

                  <div className="flex gap-4">

                    <span className="flex items-center gap-1 text-[13px] font-semibold text-slate-400">

                      <span className="material-symbols-outlined text-[18px]">
                        code
                      </span>

                      Sklearn

                    </span>

                    <span className="flex items-center gap-1 text-[13px] font-semibold text-slate-400">

                      <span className="material-symbols-outlined text-[18px]">
                        terminal
                      </span>

                      Docker

                    </span>

                  </div>

                  <a
                    href="#"
                    className="text-orange-400 text-[13px] font-semibold flex items-center gap-2 group"
                  >

                    Read Case Study

                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>

                  </a>

                </div>

              </div>

            </div>

          </div>

          {/* STATS CARD */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 glass-panel ghost-border rounded-xl p-6 bg-white/5 flex gap-6 items-center">

            <div className="text-4xl font-bold text-orange-400">

              99%

            </div>

            <div>

              <h4 className="text-white uppercase tracking-wider text-[13px] font-semibold">

                Inference Accuracy

              </h4>

              <p className="text-xs text-slate-400">

                Validated on the Leaf-Net dataset across 12 unique species.

              </p>

            </div>

          </div>

          {/* TECH STACK */}
          <div className="col-span-12 md:col-span-6 lg:col-span-8 glass-panel ghost-border rounded-xl p-6 bg-white/5 flex items-center overflow-hidden">

            <div className="flex items-center gap-8 animate-pulse">

              {[
                "SCIKIT-LEARN",
                "PANDAS",
                "NUMPY",
                "KUBEFLOW",
                "DVC",
              ].map((item) => (
                <span
                  key={item}
                  className="text-slate-500 font-bold tracking-tighter opacity-50"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}