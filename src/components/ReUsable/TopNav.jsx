import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const contents = [
    { name: "Home", link: "/" },
    { name: "About us", link: "/about-us" },
    { name: "Products", link: "/products" },
    { name: "Philosophy", link: "/philosophy" },
    { name: "Electronics", link: "/electronics" },
    { name: "Facilities", link: "/facilities" },
    { name: "Quality", link: "/quality" },
    { name: "Finance", link: "/finance" },
    { name: "Training", link: "/training" },
    { name: "Contact", link: "/contact" },
  ];

  // Manually split: 4 on left, 5 on right
  const leftContents = contents.slice(0, 5);
  const rightContents = contents.slice(5);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Animation variants for mobile menu
  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.2
      }
    },
    open: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.05,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  return (
    <>
      {/* Desktop version */}
      <div className="hidden lg:block">
        <div className="absolute flex justify-between items-center w-full text-white px-4 sm:px-6 md:px-10 lg:px-14 xl:px-[80px] py-2">
          {/* Left Side */}
          <div className="flex xl:space-x-15 lg:space-x-12 ">
            {leftContents.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className={`xl:text-[16px] font-medium lg:text-[14px] hover:text-[#ED1C24] ${
                  location.pathname === item.link ? 'text-[#ED1C24]' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex xl:space-x-10 lg:space-x-8">
            {rightContents.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className={`xl:text-[16px] lg:text-[14px] font-medium hover:text-[#ED1C24] ${
                  location.pathname === item.link ? 'text-[#ED1C24]' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile version */}
      <div className="lg:hidden">
        <div className="absolute w-full px-4 py-2 z-50">
        
          <motion.button
            onClick={toggleMenu}
            className="text-[#A10E2B]  z-50 relative ml-auto px-6 block"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12H21M3 6H21M3 18H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white overflow-hidden lg:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="flex flex-col h-full p-6">
              {/* Header space */}
              <motion.div
                className="flex justify-between items-center pb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              />

              {/* Navigation items */}
              <nav className="flex-1 flex flex-col justify-center">
                <ul className="space-y-4">
                  {contents.map((item, index) => (
                    <motion.li
                      key={item.name}
                      custom={index}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      <Link
                        to={item.link}
                        className={`block py-3 text-center text-2xl font-medium hover:text-[#A10E2B] ${
                          location.pathname === item.link ? 'text-[#A10E2B]' : 'text-gray-600'
                        }`}
                        onClick={() => {
                          toggleMenu();
                        }}
                      >
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {item.name}
                        </motion.span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TopNav;