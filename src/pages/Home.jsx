import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
  Sparkles,
  ArrowRight,
  Cpu,
  BrainCircuit,
  Rocket,
  Box,
  Workflow,
  Binary,
  Hexagon,
  Orbit,
  Layers3,
  ShieldCheck,
  Globe2,
} from "lucide-react"

export default function Home() {

  // FIXED PARTICLE POSITIONS
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    left: `${(i * 4 + 7) % 100}%`,
    duration: 5 + (i % 5),
    delay: i * 0.3,
  }))

  const cards = [
    {
      title: "AI Systems",
      icon: BrainCircuit,
      desc: "Neural architectures and intelligent ecosystems.",
      pos: "top-8 left-0",
      color: "from-cyan-500/20 to-indigo-500/10",
    },

    {
      title: "3D Interfaces",
      icon: Box,
      desc: "Cinematic spatial interaction experiences.",
      pos: "bottom-20 left-10",
      color: "from-pink-500/20 to-purple-500/10",
    },

    {
      title: "Cloud Stack",
      icon: Rocket,
      desc: "Scalable deployment and realtime pipelines.",
      pos: "top-32 right-0",
      color: "from-indigo-500/20 to-cyan-500/10",
    },
  ]

  return (

    <main className="relative min-h-screen overflow-hidden bg-[#040816] text-white">

      {/* ================= BACKGROUND ================= */}

      <div className="fixed inset-0 -z-50 overflow-hidden">

        {/* BASE */}
        <div className="absolute inset-0 bg-[#040816]" />

        {/* ANIMATED GRID */}
        <motion.div
          animate={{
            backgroundPosition: ["0px 0px", "120px 120px"],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "120px 120px",
          }}
        />

        {/* GLOW 1 */}
        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, -60, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -top-60
            -left-40
            w-[700px]
            h-[700px]
            rounded-full
            bg-indigo-500/20
            blur-[180px]
          "
        />

        {/* GLOW 2 */}
        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, 70, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -bottom-60
            -right-40
            w-[700px]
            h-[700px]
            rounded-full
            bg-cyan-500/20
            blur-[180px]
          "
        />

        {/* ROTATING LIGHT */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            w-[1400px]
            h-[1400px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-white/5
          "
        />

        {/* PARTICLES */}
        {particles.map((particle) => (

          <motion.div
            key={particle.id}
            animate={{
              y: [0, -140],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeOut",
            }}
            className="absolute"
            style={{
              left: particle.left,
              bottom: "-20px",
            }}
          >

            <div className="
              w-1
              h-1
              rounded-full
              bg-cyan-300
              shadow-[0_0_20px_rgba(34,211,238,1)]
            " />

          </motion.div>

        ))}

      </div>

      {/* ================= HERO ================= */}

      <section className="relative min-h-screen flex items-center px-6 md:px-10 pt-32 pb-24">

        <div className="max-w-7xl mx-auto w-full">

          <div className="grid lg:grid-cols-2 gap-24 items-center">

            {/* ================= LEFT ================= */}

            <div>

              {/* BADGE */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-5
                  py-3
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-white/5
                  backdrop-blur-2xl
                  mb-8
                "
              >

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Sparkles className="w-4 h-4 text-cyan-300" />
                </motion.div>

                <span className="
                  uppercase
                  tracking-[0.25em]
                  text-[11px]
                  font-bold
                  text-cyan-200
                ">
                  Immersive Experience Engineer
                </span>

              </motion.div>

              {/* TITLE */}
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="
                  text-[58px]
                  md:text-[110px]
                  leading-[0.86]
                  tracking-[-0.08em]
                  font-black
                  mb-8
                "
              >

                Building
                <br />

                <motion.span
                  animate={{
                    backgroundPosition: [
                      "0% 50%",
                      "100% 50%",
                      "0% 50%",
                    ],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    text-transparent
                    bg-clip-text
                    bg-[length:300%_300%]
                    bg-gradient-to-r
                    from-cyan-300
                    via-indigo-300
                    to-pink-300
                  "
                >
                  Future Reality
                </motion.span>

              </motion.h1>

              {/* DESCRIPTION */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="
                  max-w-2xl
                  text-lg
                  md:text-xl
                  leading-[1.9]
                  text-slate-400
                  mb-10
                "
              >

                AI engineer crafting immersive interfaces,
                realtime visual ecosystems,
                cinematic frontend experiences,
                motion architecture,
                and futuristic interaction systems.

              </motion.p>

              {/* BUTTONS */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-5"
              >

                <Link
                  to="/projects"
                  className="
                    group
                    relative
                    overflow-hidden
                    px-8
                    py-4
                    rounded-2xl
                    bg-indigo-500
                    hover:bg-indigo-400
                    transition-all
                    duration-300
                    shadow-[0_0_40px_rgba(99,102,241,0.4)]
                  "
                >

                  <span className="
                    relative
                    z-10
                    flex
                    items-center
                    gap-3
                    font-semibold
                  ">

                    Explore Projects

                    <ArrowRight className="
                      w-4
                      h-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    " />

                  </span>

                  <motion.div
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-r
                      from-transparent
                      via-white/20
                      to-transparent
                    "
                  />

                </Link>

                <Link
                  to="/contact"
                  className="
                    px-8
                    py-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-2xl
                    hover:bg-white/10
                    transition-all
                    duration-300
                    font-semibold
                  "
                >
                  Start Project
                </Link>

              </motion.div>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-5 mt-16">

                {[
                  ["40+", "Projects"],
                  ["12+", "AI Systems"],
                  ["99%", "Performance"],
                ].map((item, i) => (

                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 + 0.6 }}
                    whileHover={{
                      y: -8,
                      rotateX: 8,
                      scale: 1.03,
                    }}
                    className="
                      relative
                      overflow-hidden
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      backdrop-blur-2xl
                      p-5
                    "
                  >

                    <div className="
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-indigo-500/10
                      to-transparent
                    " />

                    <div className="relative z-10">

                      <h3 className="text-3xl font-black mb-2">
                        {item[0]}
                      </h3>

                      <p className="
                        text-xs
                        uppercase
                        tracking-[0.2em]
                        text-slate-500
                      ">
                        {item[1]}
                      </p>

                    </div>

                  </motion.div>

                ))}

              </div>

            </div>

            {/* ================= RIGHT ================= */}

            <div className="relative hidden lg:flex items-center justify-center h-[760px]">

              {/* ORBIT RING */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  w-[650px]
                  h-[650px]
                  rounded-full
                  border
                  border-dashed
                  border-cyan-400/20
                "
              />

              {/* SECOND RING */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  w-[500px]
                  h-[500px]
                  rounded-full
                  border
                  border-indigo-400/20
                "
              />

              {/* CENTER OBJECT */}
              <motion.div
                animate={{
                  rotateY: [0, 360],
                  rotateX: [0, 15, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
                className="
                  relative
                  w-[340px]
                  h-[340px]
                  rounded-[60px]
                  border
                  border-white/10
                  overflow-hidden
                  bg-gradient-to-br
                  from-indigo-500/20
                  via-cyan-500/10
                  to-pink-500/10
                  backdrop-blur-3xl
                  shadow-[0_0_120px_rgba(99,102,241,0.35)]
                "
              >

                {/* LIGHT */}
                <div className="
                  absolute
                  inset-0
                  bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_70%)]
                " />

                {/* PULSE */}
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="
                    absolute
                    inset-10
                    rounded-full
                    border
                    border-cyan-400/20
                  "
                />

                {/* CENTER ICON */}
                <div className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                ">

                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="
                      w-28
                      h-28
                      rounded-[30px]
                      border
                      border-white/10
                      bg-white/5
                      backdrop-blur-2xl
                      flex
                      items-center
                      justify-center
                    "
                  >

                    <Cpu className="w-12 h-12 text-cyan-300" />

                  </motion.div>

                </div>

              </motion.div>

              {/* FLOATING CARDS */}
              {cards.map((card, index) => {

                const Icon = card.icon

                return (

                  <motion.div
                    key={index}
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 3, 0],
                    }}
                    transition={{
                      duration: 5 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`absolute ${card.pos}`}
                  >

                    <div className="
                      w-[220px]
                      rounded-[28px]
                      border
                      border-white/10
                      bg-white/5
                      backdrop-blur-2xl
                      overflow-hidden
                    ">

                      <div className={`
                        h-1
                        bg-gradient-to-r
                        ${card.color}
                      `} />

                      <div className="p-6">

                        <div className="
                          w-14
                          h-14
                          rounded-2xl
                          border
                          border-white/10
                          bg-white/5
                          flex
                          items-center
                          justify-center
                          mb-5
                        ">

                          <Icon className="text-cyan-300" />

                        </div>

                        <h3 className="text-xl font-bold mb-3">
                          {card.title}
                        </h3>

                        <p className="text-sm leading-7 text-slate-400">
                          {card.desc}
                        </p>

                      </div>

                    </div>

                  </motion.div>

                )

              })}

              {/* ORBITING ICONS */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  w-[760px]
                  h-[760px]
                "
              >

                <Workflow className="
                  absolute
                  top-10
                  left-1/2
                  text-indigo-300/40
                  w-8
                  h-8
                " />

                <Binary className="
                  absolute
                  bottom-20
                  right-20
                  text-cyan-300/40
                  w-8
                  h-8
                " />

                <Hexagon className="
                  absolute
                  left-10
                  bottom-40
                  text-pink-300/40
                  w-8
                  h-8
                " />

                <Orbit className="
                  absolute
                  top-1/2
                  left-0
                  text-cyan-200/40
                  w-8
                  h-8
                " />

                <Layers3 className="
                  absolute
                  right-0
                  top-1/2
                  text-indigo-200/40
                  w-8
                  h-8
                " />

                <ShieldCheck className="
                  absolute
                  top-28
                  right-24
                  text-green-300/40
                  w-8
                  h-8
                " />

                <Globe2 className="
                  absolute
                  bottom-12
                  left-28
                  text-cyan-300/40
                  w-8
                  h-8
                " />

              </motion.div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= MOVING TEXT ================= */}

      <section className="relative py-10 border-y border-white/5 overflow-hidden">

        <motion.div
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            flex
            whitespace-nowrap
            gap-24
            text-[80px]
            font-black
            tracking-[-0.08em]
            text-white/5
          "
        >

          {Array(12)
            .fill("AI • FRONTEND • 3D • MOTION •")
            .map((item, i) => (
              <span key={i}>
                {item}
              </span>
            ))}

        </motion.div>

      </section>

    </main>

  )
}