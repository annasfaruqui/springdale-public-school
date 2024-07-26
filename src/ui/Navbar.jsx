import { Link, NavLink } from "react-router-dom";

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
  return (
    <header className="h-20">
      <nav className="fixed top-0 z-10 flex h-20 w-full items-center justify-between bg-stone-950 px-12 py-4 text-xl text-stone-200 shadow-2xl">
        <Link to="/">
          <img src="logo.png" alt="Springdale logo" className="w-40" />
        </Link>
        <ul className="flex items-center justify-center gap-4">
          {links.map((link) => (
            <li key={link.id} className="rounded-lg px-2 py-1 font-medium">
              <NavLink
                to={link.to}
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
      </nav>
    </header>
  );
}

export default Navbar;
