"use client";

import Link from "next/link";
import { useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isSignedIn } = useUser();

  const navItems = [
    { label: "Dashboard", href: "/" },
    { label: "Transactions", href: "/transactions" },
    { label: "Analytics", href: "/analytics" },
  ];

  return (
    <nav className="backdrop-blur-md bg-white/30 shadow-lg fixed left-1/2 transform -translate-x-1/2 w-[95%] max-w-full z-50 mt-5 rounded-2xl top-0 border border-white/20">
      <div className="w-full px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/finvault.png"
            alt="FinVault Logo"
            width={32}
            height={32}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-indigo-600 hover:underline transition"
            >
              {item.label}
            </Link>
          ))}
          <UserButton />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X
              size={30}
              className="text-gray-700 hover:text-red-600 transition cursor-pointer"
            />
          ) : (
            <Menu
              size={30}
              className="text-gray-700 hover:text-indigo-600 transition cursor-pointer"
            />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4 space-y-3 rounded-2xl">
          {isSignedIn && (
            <div className="flex justify-center pr-2">
              <UserButton />
            </div>
          )}
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-black hover:text-indigo-600 bg-indigo-100 p-3 rounded-2xl"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
