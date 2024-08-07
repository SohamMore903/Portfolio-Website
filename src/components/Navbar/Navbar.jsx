import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import "../About/About.jsx";

const MenuLinks = [
  {
    id: 1,
    name: "About Me",
    link: "/#",
  },
  {
    id: 2,
    name: "Projects",
    link: "/#projects",
  },
  {
    id: 3,
    name: "Skills",
    link: "/#Skills",
  },
  {
    id: 4,
    name: "Contact",
    link: "/#contact",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];
const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo and Links section */}
          <div className="flex items-center gap-4">
            <a
              href="#rank-title"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Soham More
            </a>
            {/* Menu Items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                    >
                      {" "}
                      {data.name}
                    </a>
                  </li>
                ))}
                {/* Dropdown  */}
              </ul>
            </div>
          </div>

          {/* Navbar Right section */}
         
            {/* Dark Mode section */}
            <div>
              <DarkMode />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] flex justify-center items-center
