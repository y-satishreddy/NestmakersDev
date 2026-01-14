import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/white_logo.svg";
import MenuIcon from "../assets/Menu.svg";

const dropdownBox = {
  hidden: {
    opacity: 0,
    y: -10,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.28,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.96,
    transition: {
      duration: 0.2,
      ease: "easeIn",
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const dropdownItem = {
  hidden: { opacity: 0, x: 12 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    x: 12,
    transition: { duration: 0.18, ease: "easeIn" },
  },
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "PROJECTS", path: "/projects" },
    { name: "CAREER", path: "/careers" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <section
      className={`fixed z-[1000] w-full transition-all duration-700 ${
        scrolled ? "bg-[#35674E]" : "bg-transparent"
      }`}
    >
      <div className="relative max-w-[1400px] mx-auto flex items-center justify-between px-[20px] md:px-[50px] py-2">
   
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-[90px] md:w-[100px]" />
        </Link>


        <div className="relative">
    
          <AnimatePresence mode="wait">
            {!menuOpen ? (
              <motion.img
                key="menu"
                src={MenuIcon}
                className="w-[40px] h-[40px] cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                whileHover={{ rotate: 90 }}
                onClick={() => setMenuOpen(true)}
              />
            ) : (
              <motion.div
                key="close"
                className="relative w-[40px] h-[40px] cursor-pointer flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                whileHover={{ rotate: 180 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMenuOpen(false)}
              >
                <span className="absolute w-[26px] h-[2px] bg-white rotate-45 rounded-full" />
                <span className="absolute w-[26px] h-[2px] bg-white -rotate-45 rounded-full" />
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                className="absolute right-0 top-[55px] mt-3 origin-top-right"
                variants={dropdownBox}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <motion.ul
                  className="
                    w-[150px]
                    bg-black/80 
                    rounded-md
                    px-5 py-4
                    flex flex-col gap-4
                    text-white
                 text-right
                  "
                >
                  {menuItems.map((item) => (
                    <motion.li key={item.name} variants={dropdownItem}>
                      <Link
                        to={item.path}
                        onClick={() => setMenuOpen(false)}
                        className={`text-rightblock text-[18px] transition-all duration-200 hover:text-[#95b67b] ${
                          location.pathname === item.path
                            ? "text-[#95b67b]"
                            : "text-white"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
