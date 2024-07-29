import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";

import Icon from "./Icon";

const links = [
  {
    id: 1,
    name: "Home",
    to: "/",
  },
  {
    id: 2,
    name: "About us",
    to: "/about",
  },
  {
    id: 3,
    name: "Academics",
    to: "/academics",
  },
  {
    id: 4,
    name: "Admissions",
    to: "/admissions",
  },
  {
    id: 5,
    name: "Faculty",
    to: "/faculty",
  },
  {
    id: 6,
    name: "Students",
    to: "/students",
  },
  {
    id: 7,
    name: "Gallery",
    to: "/gallery",
  },
  {
    id: 8,
    name: "Contact us",
    to: "/contact",
  },
];

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function handleNavToggle() {
    setIsNavOpen((open) => !open);
  }

  return (
    <header className="h-20">
      <nav className="fixed top-0 z-10 flex h-20 w-full items-center justify-between bg-stone-950 px-4 py-4 shadow-2xl sm:px-12">
        <Link to="/">
          <img src="logo.png" alt="Springdale logo" className="w-40" />
        </Link>

        <div
          className={`${isNavOpen ? "translate-x-0 backdrop-blur-md" : "translate-x-full"} absolute left-0 top-0 h-screen w-screen bg-stone-50/40 xl:hidden`}
        ></div>

        <ul
          className={`absolute right-0 top-0 flex h-screen w-full ${isNavOpen ? "pointer-events-auto visible translate-x-0 opacity-100" : "pointer-events-none invisible translate-x-full opacity-0"} flex-col items-center justify-center gap-4 bg-stone-950 text-3xl duration-200 sm:w-3/4 md:gap-6 lg:w-1/2 xl:pointer-events-auto xl:visible xl:static xl:h-auto xl:w-auto xl:translate-x-0 xl:flex-row xl:gap-4 xl:bg-none xl:px-0 xl:text-xl xl:opacity-100`}
        >
          <Link to="/" className="mb-20 w-3/5 xl:hidden">
            <img src="logo.png" alt="Springdale logo" className="w-full" />
          </Link>
          {links.map((link) => (
            <li
              key={link.id}
              className="rounded-lg px-2 py-1 font-semibold xl:font-medium"
            >
              <NavLink
                to={link.to}
                onClick={handleNavToggle}
                className={({ isActive }) =>
                  isActive
                    ? "text-stone-50"
                    : "text-stone-500 transition-all duration-100 hover:text-stone-50"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className="z-40 block text-stone-50 xl:hidden"
          onClick={handleNavToggle}
        >
          {isNavOpen ? (
            <Icon icon={<FaXmark className="h-8 w-8" />} />
          ) : (
            <Icon icon={<FaBars className="h-8 w-8" />} />
          )}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
