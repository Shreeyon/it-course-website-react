import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Transition from "../utils/Transition.js";

import { HashLink } from "react-router-hash-link";
import DesktopSubHeaderComponent from "./header-components/DesktopSubHeaderComponent";
function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const trigger = useRef(null);
  const contentWebsite =
    "https://ace-matric-coding.teachable.com/sign_in?origin_path=/courses/1539566/lectures/35353876";
  const contactLink = "mailto:taufeeq849@gmail.com";
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      console.log(mobileNav.current.contains(target));
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  // Handle light modes
  const [darkMode, setDarkMode] = useState(() => {
    const dark = localStorage.getItem("dark-mode");
    if (dark === null) {
      return true;
    } else {
      return dark === "true";
    }
  });

  useEffect(() => {
    localStorage.setItem("dark-mode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto py-2 px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-5">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Ace matric coding">
              <img
                src={require("../images/logo.png").default}
                width="150"
                height="150"
              ></img>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:flex-grow">
            {/* Desktop menu links */}
            <ul className="flex flex-grow flex-wrap items-center font-medium">
              <DesktopSubHeaderComponent
                title="Already purchased"
                link={contentWebsite}
              />
              <DesktopSubHeaderComponent title="Contact" link={contactLink} />
            </ul>

            {/* Desktop CTA on the right */}
            <ul className="flex justify-end flex-wrap items-center">
              <li>
                <HashLink
                  to="#pricing"
                  className="btn-sm text-white bg-teal-500 hover:bg-teal-400 ml-6"
                >
                  Enroll Now
                </HashLink>
              </li>
            </ul>
          </nav>

          {/* Mobile menu */}
          <div className="inline-flex md:hidden">
            {/* Hamburger button */}
            <button
              ref={trigger}
              className={`hamburger ${mobileNavOpen && "active"}`}
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="w-6 h-6 fill-current text-gray-900 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition duration-150 ease-in-out"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <Transition
              show={mobileNavOpen}
              tag="ul"
              className="fixed top-0 h-screen z-20 left-0 w-full max-w-sm -ml-16 overflow-scroll bg-white dark:bg-gray-900 shadow-lg"
              enter="transition ease-out duration-200 transform"
              enterStart="opacity-0 -translate-x-full"
              enterEnd="opacity-100 translate-x-0"
              leave="transition ease-out duration-200"
              leaveStart="opacity-100"
              leaveEnd="opacity-0"
            >
              <nav
                id="mobile-nav"
                ref={mobileNav}
                className="fixed top-0 h-screen z-20 left-0 w-full max-w-sm -ml-16 overflow-scroll bg-white dark:bg-gray-900 shadow-lg no-scrollbar"
              >
                <div className="py-6 pr-4 pl-20">
                  {/* Links */}
                  <ul>
                    <li>
                      <a
                        href={contactLink}
                        className="flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 py-2"
                      >
                        Contact
                      </a>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          window.open(contentWebsite, "__blank");
                        }}
                        className="flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 py-2"
                      >
                        Already purchased?
                      </button>
                    </li>

                    <li>
                      <HashLink
                        to="#pricing"
                        className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded text-white bg-teal-500 hover:bg-teal-400 transition duration-150 ease-in-out"
                      >
                        Enroll Now
                      </HashLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </Transition>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
