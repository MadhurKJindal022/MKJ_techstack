import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "AI / ML",
      path: "/ai-projects",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto h-20 px-6 md:px-8 flex items-center justify-between">
        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/30 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
            <span className="material-symbols-outlined text-white">
              dashboard
            </span>
          </div>

          <div>
            <h1 className="text-xl font-black tracking-tight text-white">
              Portfolio
            </h1>

            <p className="text-xs text-slate-400">
              Creative Developer
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-3">
          {navLinks.map((item) => {
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  relative px-5 py-2 rounded-full text-sm font-medium
                  transition-all duration-300 overflow-hidden
                  ${
                    active
                      ? "text-white bg-white/10 border border-white/10"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                <span className="relative z-10">
                  {item.name}
                </span>

                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10" />
              </Link>
            );
          })}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* CONTACT BUTTON */}
          <Link
            to="/contact"
            className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 hover:scale-105 transition-all duration-300"
          >
            <span className="material-symbols-outlined text-[18px]">
              call
            </span>

            Contact
          </Link>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-11 h-11 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:bg-white/10"
          >
            <span className="material-symbols-outlined">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-500
          ${
            menuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div className="px-6 pb-6 pt-2 bg-[#07111f]/95 backdrop-blur-2xl border-t border-white/5">
          <nav className="flex flex-col gap-2">
            {navLinks.map((item) => {
              const active = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`
                    px-5 py-4 rounded-2xl
                    transition-all duration-300
                    flex items-center justify-between
                    ${
                      active
                        ? "bg-indigo-500/15 border border-indigo-400/20 text-white"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }
                  `}
                >
                  {item.name}

                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* MOBILE CTA */}
          <Link
            to="/contact"
            onClick={closeMenu}
            className="w-full mt-5 h-12 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-semibold hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-indigo-500/20"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </header>
  );
}