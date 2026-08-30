import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="relative z-50 flex h-[78px] w-full items-center justify-between border-b border-slate-100 bg-white px-[5%] lg:px-[7%]">
      
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center gap-2.5 text-[22px] font-extrabold text-slate-900"
      >
        <span className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-blue-600 font-extrabold text-white">
          S
        </span>

        <span>
          School<span className="text-blue-600">Find</span>
        </span>
      </Link>

      {/* Navigation */}
      <div className="hidden items-center gap-8 text-sm text-slate-500 md:flex">
        <a
          href="#how-it-works"
          className="transition hover:text-blue-600"
        >
          How It Works
        </a>

        <a
          href="#schools"
          className="transition hover:text-blue-600"
        >
          Schools
        </a>

        <a
          href="#about"
          className="transition hover:text-blue-600"
        >
          About Us
        </a>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 sm:gap-6">
        <Link
          to="/login"
          className="text-sm font-semibold text-slate-700 transition hover:text-blue-600"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="rounded-[9px] bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700 hover:-translate-y-0.5"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;