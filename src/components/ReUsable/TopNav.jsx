import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Cleanup effect to restore body scroll
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  }, [location.pathname]);

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
    // Prevent body scroll when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
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
        <div className="fixed w-full px-3 sm:px-4 -mt-2 pt-0 pb-2 z-[10000] flex justify-end">
          <motion.button
            onClick={toggleMenu}
            className={`${isMenuOpen ? 'text-gray-600 bg-white/90' : 'text-white bg-black/20'} backdrop-blur-sm rounded-lg p-2 sm:p-3 z-[10001] hover:bg-black/30 transition-colors touch-manipulation border-none outline-none -mt-3`}
            style={{ appearance: 'none', WebkitAppearance: 'none' }}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? (
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
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
                className="w-5 h-5 sm:w-6 sm:h-6"
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
            className="fixed inset-0 z-[9999] bg-white overflow-hidden lg:hidden mobile-menu-container"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            style={{ 
              touchAction: 'none',
              WebkitAppearance: 'none',
              appearance: 'none'
            }}
          >
            <style jsx global>{`
              * {
                list-style: none !important;
                list-style-type: none !important;
              }
              *::before,
              *::after {
                display: none !important;
                content: none !important;
              }
              ul, li, a {
                list-style: none !important;
                list-style-type: none !important;
                -webkit-appearance: none !important;
                appearance: none !important;
              }
              ul::marker,
              li::marker {
                display: none !important;
              }
              .mobile-menu-container * {
                position: relative !important;
              }
              .mobile-menu-container *::after,
              .mobile-menu-container *::before {
                display: none !important;
                content: none !important;
                visibility: hidden !important;
              }
              /* Hide any arrow or chevron icons */
              svg[class*="arrow"],
              svg[class*="chevron"],
              .arrow,
              .chevron {
                display: none !important;
              }
              /* Hide the contact icon when mobile menu is open */
              img[src*="icon2.png"],
              img[alt="contact"] {
                display: none !important;
                visibility: hidden !important;
                opacity: 0 !important;
              }
              /* Hide any images in bottom right area */
              .absolute.bottom-5.right-5,
              .absolute.bottom-4.right-4,
              .absolute.bottom-6.right-6 {
                display: none !important;
                visibility: hidden !important;
              }
            `}</style>
            <div className="flex flex-col min-h-screen relative">
              {/* Header space */}
              <div className="h-6 sm:h-8"></div>

              {/* Navigation items */}
              <nav className="flex-1 flex flex-col justify-start pt-4 sm:pt-6 px-3 sm:px-4 overflow-y-auto" style={{ position: 'relative' }}>
                <ul className="space-y-4 sm:space-y-5 py-4" style={{ 
                  listStyle: 'none', 
                  listStyleType: 'none', 
                  margin: 0, 
                  padding: '16px 0',
                  WebkitAppearance: 'none',
                  appearance: 'none'
                }}>
                  {contents.map((item, index) => (
                    <motion.li
                      key={item.name}
                      custom={index}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      style={{ 
                        listStyle: 'none', 
                        listStyleType: 'none', 
                        margin: 0, 
                        padding: 0,
                        WebkitAppearance: 'none',
                        appearance: 'none'
                      }}
                    >
                      <Link
                        to={item.link}
                        className={`block py-4 sm:py-5 text-center text-lg sm:text-xl font-medium hover:text-[#A10E2B] transition-colors border-b border-gray-100 hover:border-[#A10E2B] touch-manipulation no-underline ${
                          location.pathname === item.link ? 'text-[#A10E2B] border-[#A10E2B]' : 'text-gray-700'
                        }`}
                        style={{ 
                          textDecoration: 'none',
                          listStyle: 'none',
                          position: 'relative',
                          background: 'none',
                          border: 'none',
                          outline: 'none',
                          WebkitAppearance: 'none',
                          appearance: 'none',
                          overflow: 'hidden'
                        }}
                        onClick={() => {
                          toggleMenu();
                          // Restore body scroll when navigating
                          document.body.style.overflow = 'unset';
                        }}
                      >
                        <motion.span
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {item.name}
                        </motion.span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              
              {/* White overlay to hide any bottom arrows */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-white z-50"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TopNav;