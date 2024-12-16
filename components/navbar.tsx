import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between text-2xl p-4 w-full bg-slate-900 border-b border-b-slate-500">
      <div className="flex gap-6">
        <Link
          className="bg-slate-900 px-4 py-2 rounded-lg 0 text-slate-100 hover:text-slate-500"
          href="/"
        >
          Home
        </Link>
        <Link
          className="bg-slate-900 px-4 py-2 rounded-lg  text-slate-100 hover:text-slate-500"
          href="/about"
        >
          About Me
        </Link>
        <Link
          className="bg-slate-900 px-4 py-2 rounded-lg text-slate-100 hover:text-slate-500"
          href="/contact"
        >
          Contact Me
        </Link>
      </div>
      <div className="flex">
        <Link className="bg-green-300 text-slate-900 py-2 px-4 rounded-lg hover:bg-green-500 hover:text-slate-100"
          href="https://www.therapyportal.com/p/clearhope77505/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Book Appointment
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
