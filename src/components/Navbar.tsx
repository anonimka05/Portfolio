import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavListType from "../types/Navlist.type";

const Navbar: React.FC = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const navList: NavListType[] = [
    { element: "Home", path: "#home" },
    { element: "About", path: "#about" },
    { element: "Skills", path: "#skills" },
    { element: "Projects", path: "#projects" },
    { element: "Contact", path: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="text-amber-100 text-3xl left-0 fixed z-9999 w-full">
      <div
        className={`flex items-center px-3 container mx-auto justify-between  ${sticky} ? bg-[#770562] opacity-70  : ""`}
      >
        <div>
          <h1>
            <Link
              className={`cursor-pointer text-[#ff00d0] hover:text-[#ff6be4]`}
              to="/"
            >
              <b>Musayeva</b>
            </Link>
          </h1>
        </div>
        <div
          className={`text-white md:block hidden py-2 font-medium rounded-bl-full `}
        >
          <ul className={`flex items-center gap-[25px] py-2 text-2xl `}>
            {navList.map((item, id) => (
              <li
                onClick={() => setOpen(!open)}
                key={id}
                className={`px-6 hover:text-[#ff00d0] ${
                  sticky ? "text-gray-200 " : "text-white"
                }`}
              >
                <a
                  href={item.path}
                  className="cursor-pointer hover:text-[#ff00d0]"
                >
                  {item.element}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999] ${
            open ? "text-gray-900" : "text-white"
          } text-3xl md:hidden m-5`}
        >
          ☰
        </div>

        <div
          className={`md:hidden text-gray-900 absolute w-2/4 h-screen px-7 py-2 font-medium bg-white top-0 duration-300 ${
            open ? "right-0" : "right-[-100%]"
          }`}
        >
          <ul className="flex flex-col justify-center  h-full gap-6 py-2 text-lg">
            {navList.map((item, id) => (
              <li onClick={() => setOpen(true)} className="px-6">
                <a key={id} href={item.path}>
                  {item.element}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
