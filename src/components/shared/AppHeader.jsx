import { useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import HireMeModal from "../HireMeModal";
// import logoLight from "../../images/logo-light.svg";
// import logoDark from "../../images/logo-dark.svg";
import { motion } from "framer-motion";
import Button from "../reusable/Button";

const AppHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTheme, setTheme] = useThemeSwitcher();

  function toggleMenu() {
    setShowMenu((prev) => !prev);
  }

  function showHireMeModal() {
    if (!showModal) {
      document
        .getElementsByTagName("html")[0]
        .classList.add("overflow-y-hidden");
      setShowModal(true);
    } else {
      document
        .getElementsByTagName("html")[0]
        .classList.remove("overflow-y-hidden");
      setShowModal(false);
    }
  }

  // helper class for links: change these classes to customize active style
  const linkBase =
    "block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2";
  const linkActive = "text-indigo-400 dark:text-indigo-400 font-semibold";

  // close mobile menu on navigation
  function handleNavClick() {
    setShowMenu(false);
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="sm:container sm:mx-auto"
    >
      <div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
        {/* Header menu links and small screen hamburger menu */}
        <div className="flex justify-between items-center px-4 sm:px-0">
          <div>
            <Link to="/">
              {activeTheme === "dark" ? (
                // <img src={logoDark} className="w-36" alt="Dark Logo" />
                <div className="text-black  italic font-bold">
                  PHAM THANH DAO
                </div>
              ) : (
                // <img src={logoLight} className="w-36" alt="Light Logo" />
                <div className="text-white  italic font-bold">
                  PHAM THANH DAO
                </div>
              )}
            </Link>
          </div>

          {/* Theme switcher small screen */}
          <div
            onClick={() => setTheme(activeTheme)}
            aria-label="Theme Switcher"
            className="block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
          >
            {activeTheme === "dark" ? (
              <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
            ) : (
              <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
            )}
          </div>

          {/* Small screen hamburger menu */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="focus:outline-none"
              aria-label="Hamburger Menu"
            >
              {showMenu ? (
                <FiX className="text-3xl" />
              ) : (
                <FiMenu className="text-3xl" />
              )}
            </button>
          </div>
        </div>

        {/* Header links small screen */}
        <div
          className={
            showMenu
              ? "block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
              : "hidden"
          }
        >
          <NavLink
            to="/projects"
            onClick={handleNavClick}
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : ""}`
            }
            aria-label="Projects"
          >
            Projects
          </NavLink>

          <NavLink
            to="/about"
            onClick={handleNavClick}
            className={({ isActive }) =>
              `${linkBase} ${
                isActive
                  ? "border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark " +
                    linkActive
                  : "border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
              }`
            }
            aria-label="About Me"
          >
            About Me
          </NavLink>

          <NavLink
            to="/contact"
            onClick={handleNavClick}
            className={({ isActive }) =>
              `${linkBase} ${
                isActive
                  ? "border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark " +
                    linkActive
                  : "border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
              }`
            }
            aria-label="Contact"
          >
            Contact
          </NavLink>

          <div className="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
            <span
              onClick={() => {
                handleNavClick();
                showHireMeModal();
              }}
              className="font-general-medium sm:hidden block text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24"
              aria-label="Hire Me Button"
            >
              <Button title="Hire Me" />
            </span>
          </div>
        </div>

        {/* Header links large screen */}
        <div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : ""}`
            }
            aria-label="Projects"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : ""}`
            }
            aria-label="About Me"
          >
            About Me
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : ""}`
            }
            aria-label="Contact"
          >
            Contact
          </NavLink>
        </div>

        {/* Header right section buttons */}
        <div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
          <div className="hidden md:flex">
            <span
              onClick={showHireMeModal}
              className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
              aria-label="Hire Me Button"
            >
              <Button title="Hire Me" />
            </span>
          </div>

          {/* Theme switcher large screen */}
          <div
            onClick={() => setTheme(activeTheme)}
            aria-label="Theme Switcher"
            className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
          >
            {activeTheme === "dark" ? (
              <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
            ) : (
              <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
            )}
          </div>
        </div>
      </div>

      {/* Hire me modal */}
      <div>
        {showModal ? (
          <HireMeModal onClose={showHireMeModal} onRequest={showHireMeModal} />
        ) : null}
      </div>
    </motion.nav>
  );
};

export default AppHeader;
