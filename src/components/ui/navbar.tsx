"use client";
import Link from "next/link";
import { Button } from "./button";
import { MenuIcon, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Guides", href: "/guides" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className={clsx(
        "fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-lg border-b"
      )}
    >
      <div className="flex items-center justify-between p-4 text-white max-w-screen-xl mx-auto">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-primary">DevFree</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-md font-semibold text-primary border-2 border-white rounded-full px-8 py-2 shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "hover:bg-primary hover:text-white rounded-full px-4 py-2 transition duration-300",
                pathname === link.href ? "bg-primary text-white" : ""
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div>
          <Button
            variant={"default"}
            className="rounded-full hidden md:block"
            size={"lg"}
          >
            Login
          </Button>
          {isOpen ? (
            <motion.div
              initial={{ opacity: 1 }}
              whileTap={{ opacity: 0, scale: 0.9 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <X
                onClick={toggleMenu}
                className="md:hidden text-primary"
                size={32}
              />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 1 }}
              whileTap={{ opacity: 0, scale: 0.8 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <MenuIcon
                onClick={toggleMenu}
                className="md:hidden text-primary"
                size={32}
              />
            </motion.div>
          )}
        </div>
      </div>

      {isOpen && <NavlinksDropdown />}
    </div>
  );
};

const NavlinksDropdown = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.2 }}
      className="absolute top-16  bg-white shadow-lg w-full rounded-lg p-4"
    >
      <div className="w-full mx-auto flex flex-col gap-2  ">
        <Link
          href="/"
          className="block text-primary font-semibold border-b  hover:bg-gray-200 p-2"
        >
          Home
        </Link>
        <Link
          href="/features"
          className="block text-primary font-semibold border-b  hover:bg-gray-200 p-2"
        >
          Features
        </Link>
        <Link
          href="/pricing"
          className="block text-primary font-semibold border-b  hover:bg-gray-200 p-2"
        >
          Pricing
        </Link>
        <Link
          href="/guides"
          className="block text-primary font-semibold border-b  hover:bg-gray-200 p-2"
        >
          Guides
        </Link>
        <Button variant={"default"} className="rounded-full mt-4" size={"lg"}>
          Login
        </Button>
      </div>
    </motion.div>
  );
};
