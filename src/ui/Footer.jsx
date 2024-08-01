import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

import Container from "./Container";
import Image from "./Image";
import Icon from "./Icon";

import logoImg from "../../images/logo.png";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    id: 1,
    icon: FaFacebook,
  },
  {
    id: 2,
    icon: FaTwitter,
  },
  {
    id: 3,
    icon: FaInstagram,
  },
];

const quickLinks1 = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Faculty",
    link: "/faculty",
  },
  {
    id: 4,
    name: "Students",
    link: "/students",
  },
];

const quickLinks2 = [
  {
    id: 1,
    name: "Contact",
    link: "/contact",
  },
  {
    id: 2,
    name: "Admissions",
    link: "/admissions",
  },
  {
    id: 3,
    name: "Academics",
    link: "/academics",
  },
  {
    id: 4,
    name: "Gallery",
    link: "/gallery",
  },
];

function Footer() {
  return (
    <footer className="mt-28 bg-stone-950 pb-20 pt-10 text-stone-300">
      <Container extraStyles="grid grid-cols-1 sm:grid-cols-2 gap-20 sm:gap-12 lg:grid-cols-[2fr_2fr_1fr_1fr] lg:gap-4">
        <div className="flex flex-col gap-4">
          <Image imgSrc={logoImg} altText="Springdale logo" styles="w-52" />
          <ul className="flex items-center gap-5 px-4">
            {socialLinks.map((link) => (
              <li key={link.id}>
                <Icon
                  icon={<link.icon />}
                  extraStyles="text-2xl text-stone-400 cursor-pointer hover:text-stone-50 hover:scale-110 duration-100"
                />
              </li>
            ))}
          </ul>
          <p className="text-base sm:px-4 lg:mt-4">
            Copyright © 2024 by <br />
            Springdale Public School. All right reserved
          </p>
        </div>

        {/* OFFICE */}
        <div className="flex flex-col gap-8">
          <h6 className="text-xl font-semibold">Office</h6>
          <p className="text-base">
            Springdale Public School, 123 Education Lane, Cityville, State, ZIP
            Code
          </p>
          <div className="flex flex-col items-start text-base font-light text-stone-400">
            <a
              href="tel:+1 (123) 456-7890"
              className="inline hover:text-stone-50"
            >
              +1 (123) 456-7890
            </a>
            <a
              href="mailto:info@springdale.edu"
              className="inline hover:text-stone-50"
            >
              info@springdale.edu
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="flex flex-col items-start gap-8 px-2">
          <h6 className="text-xl font-semibold">Quick Links</h6>
          <ul className="flex flex-col items-start gap-4 text-base font-medium">
            {quickLinks1.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.link}
                  className="text-stone-400 hover:text-stone-50"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div className="flex flex-col items-start gap-8 px-2">
          <h6 className="text-xl font-semibold">Quick Links</h6>
          <ul className="flex flex-col items-start gap-4 text-base font-medium">
            {quickLinks2.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.link}
                  className="text-stone-400 hover:text-stone-50"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
