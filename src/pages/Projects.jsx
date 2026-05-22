import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import projects from "../data/data_project"

export default function Projects() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070b17] text-white">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at top left, rgba(99,102,241,0.18), transparent 30%),
              radial-gradient(circle at bottom right, rgba(236,72,153,0.15), transparent 30%),
              #070b17
            `,
          }}
        />

        <div className="absolute top-[-200px] left-[-120px] w-[500px] h-[500px] bg-indigo-500/10 blur-[140px] rounded-full" />

        <div className="absolute bottom-[-200px] right-[-120px] w-[500px] h-[500px] bg-pink-500/10 blur-[140px] rounded-full" />

      </div>

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">

        <div className="max-w-7xl mx-auto h-20 px-6 md:px-8 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-400/20 flex items-center justify-center">

              <span className="material-symbols-outlined text-indigo-300">
                dashboard
              </span>

            </div>

            <h1 className="text-xl font-bold tracking-tight">
              Portfolio
            </h1>

          </div>

          {/* NAV */}
          <nav className="hidden md:flex items-center gap-8">

            <Link
              to="/"
              className="text-slate-400 hover:text-white transition"
            >
              Home
            </Link>

            <Link
              to="/projects"
              className="text-indigo-300 border-b border-indigo-300 pb-1"
            >
              Projects
            </Link>

            <Link
              to="/ai-projects"
              className="text-slate-400 hover:text-white transition"
            >
              AI/ML
            </Link>

            <Link
              to="/contact"
              className="text-slate-400 hover:text-white transition"
            >
              Contact
            </Link>

          </nav>

          {/* BUTTON */}
          <button className="hidden md:flex px-5 py-2.5 rounded-full bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-semibold transition-all duration-300 shadow-[0_0_30px_rgba(99,102,241,0.25)]">

            Hire Me

          </button>

          {/* MOBILE */}
          <button className="md:hidden w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">

            <span className="material-symbols-outlined">
              menu
            </span>

          </button>

        </div>

      </header>

      {/* HERO */}
      <section className="pt-36 md:pt-44 pb-20 px-6 md:px-8">

        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-400/20 bg-indigo-400/10 mb-8 backdrop-blur-xl">

              <span className="material-symbols-outlined text-indigo-300 text-[18px]">
                deployed_code
              </span>

              <span className="uppercase tracking-[0.18em] text-[11px] text-indigo-200 font-semibold">

                Featured Projects

              </span>

            </div>

            <h1 className="text-[52px] md:text-[82px] leading-[0.92] font-black tracking-[-0.06em] mb-8">

              Creative
              <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-pink-300 to-cyan-300">

                Frontend Systems

              </span>

            </h1>

            <p className="max-w-2xl text-[16px] md:text-[19px] leading-[1.9] text-slate-400">

              A premium collection of immersive interfaces crafted with
              animation systems, modern frontend architecture, glassmorphism,
              and cinematic interaction design.

            </p>

          </motion.div>

        </div>

      </section>

      {/* PROJECTS */}
      <section className="px-6 md:px-8 pb-24">

        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {projects.map((project, index) => (

              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-white/10
                  bg-white/3
                  backdrop-blur-2xl
                  hover:bg-white/5
                  transition-all
                  duration-500
                  hover:border-indigo-400/30
                "
              >

                {/* IMAGE */}
                <div className="relative h-[230px] overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b17] via-transparent to-transparent" />

                </div>

                {/* CONTENT */}
                <div className="p-6">

                  {/* TOP */}
                  <div className="flex items-center justify-between mb-5">

                    <span className="text-[11px] uppercase tracking-[0.18em] text-indigo-300 font-bold">
                      {project.category}
                    </span>

                    <span className="text-[11px] text-slate-500">
                      {project.year}
                    </span>

                  </div>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2 mb-5">

                    {project.tags.map((tag, i) => (

                      <span
                        key={i}
                        className="
                          px-3
                          py-1
                          rounded-full
                          border
                          border-indigo-400/20
                          bg-indigo-400/10
                          text-indigo-300
                          text-[10px]
                          uppercase
                          tracking-[0.14em]
                          font-bold
                        "
                      >
                        {tag}
                      </span>

                    ))}

                  </div>

                  {/* TITLE */}
                  <h2 className="
                    text-[26px]
                    font-bold
                    leading-[1.2]
                    tracking-[-0.03em]
                    mb-4
                    group-hover:text-indigo-300
                    transition-colors
                  ">

                    {project.title}

                  </h2>

                  {/* DESC */}
                  <p className="
                    text-[14px]
                    leading-[1.8]
                    text-slate-400
                    mb-7
                  ">

                    {project.description}

                  </p>

                  {/* FOOTER */}
                  <div className="flex items-center justify-between">

                    <button className="
                      px-5
                      py-3
                      rounded-full
                      bg-indigo-500
                      hover:bg-indigo-400
                      text-white
                      text-[11px]
                      uppercase
                      tracking-[0.14em]
                      font-bold
                      transition-all
                      duration-300
                      shadow-[0_0_30px_rgba(99,102,241,0.25)]
                    ">

                      {project.action}

                    </button>

                    <button className="
                      w-11
                      h-11
                      rounded-full
                      border
                      border-white/10
                      flex
                      items-center
                      justify-center
                      text-slate-300
                      hover:text-white
                      hover:border-indigo-400/40
                      hover:bg-white/5
                      transition-all
                    ">

                      <span className="material-symbols-outlined text-[20px]">
                        arrow_outward
                      </span>

                    </button>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

    </main>
  )
}