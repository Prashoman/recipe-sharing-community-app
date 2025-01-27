import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white shadow-md p-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-green-600">
            <Link href="/">
              <span className="flex items-center">
                {/* <img src="/logo.png" alt="Logo" className="h-10 w-10 mr-2" /> */}
                RecipeShare
              </span>
            </Link>
          </div>

          {/* Navbar Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="/recipes"
              className="text-gray-700 hover:text-green-600"
            >
              Recipes
            </Link>
            <Link
              href="/community"
              className="text-gray-700 hover:text-green-600"
            >
              Community
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600">
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-green-600"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-700 focus:outline-none focus:text-green-600"
              aria-label="Open Menu"
              id="mobile-menu-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            id="mobile-menu"
            className="hidden absolute top-16 left-0 w-full bg-white shadow-md md:hidden"
          >
            <ul className="space-y-4 p-4">
              <li>
                <Link
                  href="/recipes"
                  className="text-gray-700 hover:text-green-600 block"
                >
                  Recipes
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-gray-700 hover:text-green-600 block"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-green-600 block"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-green-600 block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
