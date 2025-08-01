"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Home, BookOpen, Users, FileText, Info } from "lucide-react";
import SimpleLogo from "@/components/ui/SimpleLogo";
import SignInButton from "@/components/ui/SignInButton";
import CustomGetStartedButton from "@/components/ui/CustomGetStartedButton";
import CryptoTicker from "./CryptoTicker";



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", href: "/", icon: <Home className="h-4 w-4 text-[#ffcc00]" /> },
    { name: "Courses", href: "/courses", icon: <BookOpen className="h-4 w-4 text-[#ffcc00]" /> },
    { name: "Community", href: "/community", icon: <Users className="h-4 w-4 text-[#ffcc00]" /> },
    { name: "Resources", href: "/resources", icon: <FileText className="h-4 w-4 text-[#ffcc00]" /> },
    { name: "About", href: "/about", icon: <Info className="h-4 w-4 text-[#ffcc00]" /> },
  ];

  return (
    <nav className="bg-[#5c0f49] text-white py-3">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo - Left aligned */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <SimpleLogo />
              <span className="font-bold text-xl ml-2">StrellerMinds</span>
            </Link>
            <CryptoTicker/>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Navigation Links - Center aligned */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`group flex items-center gap-2 relative px-2 py-1 overflow-hidden hover:text-[#dfb1cc] transition-colors ${
                      pathname === link.href ? "font-semibold" : ""
                    }`}
                  >
                    <span className="inline-block transition-transform group-hover:translate-x-1 duration-300 ease-in-out">
                      {link.icon}
                    </span>
                    <span>{link.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#dfb1cc] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Auth Buttons - Right aligned */}
          <div className="hidden md:flex items-center space-x-4">
            <SignInButton />
            <CustomGetStartedButton />
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`flex items-center gap-2 hover:text-[#dfb1cc] transition-colors ${
                      pathname === link.href ? "font-semibold" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t border-[#dfb1cc]/30 flex flex-col space-y-3">
                <SignInButton />
                <CustomGetStartedButton />
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;