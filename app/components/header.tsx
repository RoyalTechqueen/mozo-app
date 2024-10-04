"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed w-full z-10 transition-colors duration-300 px-8 ${
        isScrolled ? "bg-blue-300" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-6 sm:px-6 min-w-screen-8xl">
        <div className="flex items-center">
          <h1 className="text-3xl font-extrabold text-primary">MOZO</h1>
        </div>

        <nav className="hidden lg:flex space-x-8 items-center text-2xl font-semibold">
          <Link href="#features" className="hover:bg-text-800">
            Features
          </Link>
          <Link href="#pricing" className="hover:bg-text-800">
            Pricing
          </Link>
          <Link href="#contact" className="hover:bg-text-800">
            Contact
          </Link>
        </nav>

        <div className="lg:flex items-center gap-2 hidden">
          <Link href="#signup">
            <button className="block px-4 py-2 items-center bg-blue-600 text-white text-xl rounded-md hover:bg-blue-800">
              Get Started
            </button>
          </Link>
          <Link href="#login">
            <button className=" block px-4 py-2 items-center bg-blue-600 text-white text-xl rounded-md hover:bg-blue-800">
              Login
            </button>
          </Link>
        </div>

        <button
          className="block lg:hidden ml-4"
          aria-label="Toggle Menu"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? (
            <IoMdClose className="text-2xl" />
          ) : (
            <HiOutlineMenuAlt3 className="text-2xl" />
          )}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-full bg-blue-100 transform ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-2xl"
            aria-label="Close Menu"
            onClick={() => setShowMenu(false)}
          >
            <IoMdClose />
          </button>
        </div>
        <nav className="flex flex-col items-center p-6 space-y-6">
          <div className="flex items-center">
            <h1 className="text-3xl font-extrabold text-blue-600">MOZO</h1>
          </div>
          <Link
            href="#features"
            onClick={() => setShowMenu(false)}
            className="text-lg font-medium hover:text-blue-800"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            onClick={() => setShowMenu(false)}
            className="text-lg font-medium hover:text-blue-800"
          >
            Pricing
          </Link>
          <Link
            href="#contact"
            onClick={() => setShowMenu(false)}
            className="text-lg font-medium hover:text-blue-800"
          >
            Contact
          </Link>
        </nav>
        <Link href="#signup">
          <button className="block mx-auto px-8 py-2 items-center bg-blue-600 text-white text-xl rounded-md">
            Get Started
          </button>
        </Link>
        <Link href="#login">
          <button className=" block mt-4 mx-auto px-8 py-2 items-center bg-blue-600 text-white text-xl rounded-md">
            Login
          </button>
        </Link>
      </div>
    </header>
  );
}
