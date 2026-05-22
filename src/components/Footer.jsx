import { Link } from "react-router-dom"

export default function Footer() {
  return (

    <footer className="border-t border-white/5 bg-black/20 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* LEFT */}
          <div className="text-center lg:text-left">

            <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">

              <div className="
                w-10
                h-10
                rounded-2xl
                bg-indigo-500/10
                border
                border-indigo-400/20
                flex
                items-center
                justify-center
              ">

                <span className="material-symbols-outlined text-indigo-300 text-[20px]">
                  deployed_code
                </span>

              </div>

              <h2 className="text-xl font-black tracking-tight text-white">
                MKJ Portfolio
              </h2>

            </div>

            <p className="text-slate-500 text-sm leading-[1.8] max-w-md">

              Premium frontend systems, AI interfaces, cinematic motion design,
              and immersive digital experiences.

            </p>

          </div>

          {/* CENTER */}
          <div className="
            flex
            flex-wrap
            justify-center
            gap-6
            md:gap-8
            text-[12px]
            uppercase
            tracking-[0.16em]
            font-semibold
          ">

            <Link
              to="/"
              className="text-slate-500 hover:text-indigo-300 transition-colors duration-300"
            >
              Home
            </Link>

            <Link
              to="/projects"
              className="text-slate-500 hover:text-indigo-300 transition-colors duration-300"
            >
              Projects
            </Link>

            <Link
              to="/ai-projects"
              className="text-slate-500 hover:text-indigo-300 transition-colors duration-300"
            >
              AI / ML
            </Link>

            <Link
              to="/contact"
              className="text-slate-500 hover:text-indigo-300 transition-colors duration-300"
            >
              Contact
            </Link>

          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            <button className="
              w-11
              h-11
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              flex
              items-center
              justify-center
              text-slate-400
              hover:text-indigo-300
              hover:border-indigo-400/30
              hover:bg-indigo-500/10
              transition-all
              duration-300
            ">

              <span className="material-symbols-outlined text-[20px]">
                code
              </span>

            </button>

            <button className="
              w-11
              h-11
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              flex
              items-center
              justify-center
              text-slate-400
              hover:text-indigo-300
              hover:border-indigo-400/30
              hover:bg-indigo-500/10
              transition-all
              duration-300
            ">

              <span className="material-symbols-outlined text-[20px]">
                terminal
              </span>

            </button>

            <button className="
              w-11
              h-11
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              flex
              items-center
              justify-center
              text-slate-400
              hover:text-indigo-300
              hover:border-indigo-400/30
              hover:bg-indigo-500/10
              transition-all
              duration-300
            ">

              <span className="material-symbols-outlined text-[20px]">
                alternate_email
              </span>

            </button>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="
          mt-10
          pt-6
          border-t
          border-white/5
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-4
        ">

          <p className="
            text-slate-600
            text-[11px]
            uppercase
            tracking-[0.14em]
          ">

            © 2026 MKJ Portfolio — Cinematic Frontend Experiences

          </p>

          <div className="
            flex
            items-center
            gap-3
            text-slate-600
            text-[11px]
            uppercase
            tracking-[0.14em]
          ">

            <span>React</span>

            <div className="w-1 h-1 rounded-full bg-slate-700" />

            <span>Motion</span>

            <div className="w-1 h-1 rounded-full bg-slate-700" />

            <span>AI Systems</span>

          </div>

        </div>

      </div>

    </footer>
  )
}