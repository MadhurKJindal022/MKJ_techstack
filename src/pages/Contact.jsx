export default function Contact() {
  return (
    <main className="relative overflow-hidden bg-[#070b17] text-white">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at top left, rgba(34,211,238,0.12), transparent 28%),
              radial-gradient(circle at bottom right, rgba(99,102,241,0.12), transparent 30%),
              #070b17
            `,
          }}
        />

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        {/* GLOW */}
        <div className="absolute top-[-200px] left-[-120px] w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />

        <div className="absolute bottom-[-200px] right-[-120px] w-[500px] h-[500px] bg-indigo-500/10 blur-[140px] rounded-full" />

      </div>

      {/* HERO */}
      <section className="relative pt-36 pb-20 px-6 md:px-8">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>

              {/* BADGE */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl mb-8">

                <span className="material-symbols-outlined text-cyan-300 text-[18px]">
                  alternate_email
                </span>

                <span className="uppercase tracking-[0.18em] text-[11px] font-bold text-cyan-200">
                  Contact Portal
                </span>

              </div>

              {/* TITLE */}
              <h1 className="text-[46px] md:text-[78px] leading-[0.95] tracking-[-0.06em] font-black mb-8">

                Let’s Build
                <br />

                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-indigo-300 to-purple-300">

                  Intelligent Systems

                </span>

              </h1>

              {/* DESC */}
              <p className="max-w-xl text-[16px] md:text-[18px] leading-[1.9] text-slate-400 mb-10">

                Available for AI engineering, frontend systems,
                predictive analytics, automation architecture,
                and scalable enterprise applications.

              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4">

                <button className="
                  px-7
                  py-4
                  rounded-2xl
                  bg-cyan-400
                  text-black
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-[12px]
                  hover:scale-[1.03]
                  transition-all
                  duration-300
                  shadow-[0_0_40px_rgba(34,211,238,0.35)]
                ">

                  Schedule Call

                </button>

                <button className="
                  px-7
                  py-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  hover:bg-white/[0.08]
                  text-white
                  uppercase
                  tracking-[0.14em]
                  text-[12px]
                  font-semibold
                  transition-all
                  duration-300
                ">

                  Download Resume

                </button>

              </div>

            </div>

            {/* RIGHT INFO PANEL */}
            <div className="relative">

              <div className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-2xl
                p-8
              ">

                {/* GLOW */}
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-cyan-400/10 blur-[100px] rounded-full" />

                <div className="relative z-10">

                  {/* HEADER */}
                  <div className="flex items-center justify-between mb-10">

                    <div>

                      <p className="uppercase tracking-[0.18em] text-[11px] text-cyan-300 font-bold mb-3">
                        Live Status
                      </p>

                      <h3 className="text-3xl md:text-4xl font-black tracking-tight">
                        Available
                      </h3>

                    </div>

                    <div className="flex items-center gap-3">

                      <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />

                      <span className="text-sm text-slate-400">
                        Open for Projects
                      </span>

                    </div>

                  </div>

                  {/* INFO CARDS */}
                  <div className="space-y-4">

                    {[
                      {
                        icon: "mail",
                        title: "EMAIL",
                        value: "architect@devcore.ai",
                      },

                      {
                        icon: "call",
                        title: "PHONE",
                        value: "+91 98765 43210",
                      },

                      {
                        icon: "location_on",
                        title: "LOCATION",
                        value: "Rajasthan, India",
                      },
                    ].map((item, index) => (

                      <div
                        key={index}
                        className="
                          group
                          flex
                          items-center
                          gap-4
                          p-5
                          rounded-2xl
                          border
                          border-white/5
                          bg-[#0f1729]
                          hover:bg-[#121d33]
                          transition-all
                          duration-300
                        "
                      >

                        <div className="
                          w-14
                          h-14
                          rounded-2xl
                          bg-cyan-400/10
                          border
                          border-cyan-400/10
                          flex
                          items-center
                          justify-center
                          group-hover:scale-110
                          transition-transform
                        ">

                          <span className="material-symbols-outlined text-cyan-300">
                            {item.icon}
                          </span>

                        </div>

                        <div>

                          <p className="uppercase tracking-[0.14em] text-[10px] text-slate-500 font-bold mb-1">
                            {item.title}
                          </p>

                          <p className="text-[15px] text-white font-medium">
                            {item.value}
                          </p>

                        </div>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section className="pb-28 px-6 md:px-8">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">

            {/* SMALLER CONTACT FORM */}
            <div className="
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-2xl
              p-8
              h-fit
            ">

              <div className="mb-8">

                <p className="uppercase tracking-[0.16em] text-[11px] text-cyan-300 font-bold mb-3">
                  Send Message
                </p>

                <h2 className="text-[34px] font-black leading-[1.1] tracking-[-0.04em]">
                  Start a Conversation
                </h2>

              </div>

              <form className="space-y-5">

                <div>

                  <label className="block text-[11px] uppercase tracking-[0.14em] text-slate-500 font-bold mb-3">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="
                      w-full
                      h-12
                      rounded-xl
                      bg-[#0f1729]
                      border
                      border-white/10
                      px-4
                      text-sm
                      text-white
                      outline-none
                      focus:border-cyan-400
                      transition-all
                    "
                  />

                </div>

                <div>

                  <label className="block text-[11px] uppercase tracking-[0.14em] text-slate-500 font-bold mb-3">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="
                      w-full
                      h-12
                      rounded-xl
                      bg-[#0f1729]
                      border
                      border-white/10
                      px-4
                      text-sm
                      text-white
                      outline-none
                      focus:border-cyan-400
                      transition-all
                    "
                  />

                </div>

                <div>

                  <label className="block text-[11px] uppercase tracking-[0.14em] text-slate-500 font-bold mb-3">
                    Project Type
                  </label>

                  <select className="
                    w-full
                    h-12
                    rounded-xl
                    bg-[#0f1729]
                    border
                    border-white/10
                    px-4
                    text-sm
                    text-white
                    outline-none
                    focus:border-cyan-400
                    transition-all
                  ">

                    <option>AI / ML System</option>
                    <option>Frontend Platform</option>
                    <option>Automation</option>
                    <option>API Integration</option>

                  </select>

                </div>

                <div>

                  <label className="block text-[11px] uppercase tracking-[0.14em] text-slate-500 font-bold mb-3">
                    Message
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Describe your project..."
                    className="
                      w-full
                      rounded-xl
                      bg-[#0f1729]
                      border
                      border-white/10
                      px-4
                      py-4
                      text-sm
                      text-white
                      outline-none
                      resize-none
                      focus:border-cyan-400
                      transition-all
                    "
                  />

                </div>

                <button className="
                  w-full
                  h-12
                  rounded-xl
                  bg-cyan-400
                  text-black
                  text-[12px]
                  uppercase
                  tracking-[0.16em]
                  font-black
                  hover:scale-[1.01]
                  transition-all
                  duration-300
                  shadow-[0_0_35px_rgba(34,211,238,0.3)]
                ">

                  Submit Request

                </button>

              </form>

            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-8">

              {/* AI CARD */}
              <div className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-2xl
                p-10
              ">

                <div className="absolute top-[-100px] right-[-50px] w-[250px] h-[250px] bg-indigo-500/10 blur-[100px] rounded-full" />

                <div className="relative z-10">

                  <div className="flex items-center gap-5 mb-8">

                    <div className="
                      w-16
                      h-16
                      rounded-2xl
                      bg-indigo-400/10
                      border
                      border-indigo-400/10
                      flex
                      items-center
                      justify-center
                    ">

                      <span className="material-symbols-outlined text-indigo-300 text-3xl">
                        hub
                      </span>

                    </div>

                    <div>

                      <h3 className="text-3xl font-black tracking-tight">
                        AI Infrastructure
                      </h3>

                      <p className="text-slate-400 mt-2">
                        Enterprise-grade deployment systems.
                      </p>

                    </div>

                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">

                    {[
                      "Docker + Kubernetes",
                      "LLM Fine-tuning",
                      "Realtime APIs",
                      "Cloud Architecture",
                    ].map((item, index) => (

                      <div
                        key={index}
                        className="
                          flex
                          items-center
                          gap-3
                          rounded-2xl
                          border
                          border-white/5
                          bg-[#0f1729]
                          p-4
                        "
                      >

                        <span className="material-symbols-outlined text-cyan-300 text-[18px]">
                          check_circle
                        </span>

                        <span className="text-sm text-slate-300">
                          {item}
                        </span>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

              {/* TERMINAL */}
              <div className="
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-2xl
              ">

                <div className="flex items-center gap-2 px-5 py-4 border-b border-white/5 bg-black/30">

                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-cyan-400" />

                </div>

                <div className="p-6 font-mono text-sm leading-8 text-slate-300">

                  <pre>{`> initializing communication...

> loading AI infrastructure...

> deployment systems online

> awaiting project request...
`}</pre>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}