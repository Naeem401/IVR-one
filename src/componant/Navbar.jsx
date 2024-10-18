import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#000000a2] text-white font-inter font-extrabold text-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-white text-2xl">
              <img 
                src={logo} 
                alt="Indian Valley Resturent" 
                className="h-28 w-auto"
              />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-[#EEFF25]' : 'hover:text-[#EEFF25]'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive ? 'text-[#EEFF25]' : 'hover:text-[#EEFF25]'
              }
            >
              Our Menu
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-[#EEFF25]' : 'hover:text-[#EEFF25]'
              }
            >
              Contact Us
            </NavLink>
          </div>

          {/* Login button */}
          <div className="hidden md:block">
            <button className="bg-white text-[#151515] font-bold py-2 px-4 rounded">
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'block text-base font-medium text-[#EEFF25]'
                  : 'block text-base font-medium text-white hover:text-[#EEFF25]'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive
                  ? 'block text-base font-medium text-[#EEFF25]'
                  : 'block text-base font-medium text-white hover:text-[#EEFF25]'
              }
            >
              Our Menu
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'block text-base font-medium text-[#EEFF25]'
                  : 'block text-base font-medium text-white hover:text-[#EEFF25]'
              }
            >
              Contact Us
            </NavLink>
            <button className="bg-white text-[#151515] font-bold py-2 px-4 rounded w-full">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
