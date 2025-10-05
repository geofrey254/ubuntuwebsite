"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronDown, ChevronRight, Menu, Zap } from "lucide-react";
import {
  HiOutlineLogin,
  HiOutlineMicrophone,
  HiOutlineMusicNote,
} from "react-icons/hi";
import {
  FaBookOpen,
  FaTrophy,
  FaStar,
  FaUsers,
  FaHandshake,
  FaQuestionCircle,
} from "react-icons/fa";
import { IoChatbubbleOutline, IoMailOutline } from "react-icons/io5";
import { MdSchool, MdHelpOutline } from "react-icons/md";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);
  const [mobileCommunityOpen, setMobileCommunityOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileFeaturesOpen(false);
    setMobileCommunityOpen(false);
    setMobileResourcesOpen(false);
  };

  const navItems = {
    Features: [
      {
        name: "Record Stories",
        href: "/record",
        icon: <HiOutlineMicrophone />,
      },
      { name: "Upload Songs", href: "/songs", icon: <HiOutlineMusicNote /> },
      { name: "Share Fables", href: "/fables", icon: <FaBookOpen /> },
      { name: "Earn Rewards", href: "/rewards", icon: <FaTrophy /> },
      { name: "Leaderboard", href: "/leaderboard", icon: <FaStar /> },
    ],
    Community: [
      { name: "About Us", href: "/about", icon: <FaUsers /> },
      {
        name: "Community Forum",
        href: "/community",
        icon: <IoChatbubbleOutline />,
      },
      { name: "Partnerships", href: "/partners", icon: <FaHandshake /> },
      { name: "Contact Us", href: "/contact", icon: <IoMailOutline /> },
    ],
    Resources: [
      { name: "Guides", href: "/resources/guides", icon: <FaBookOpen /> },
      { name: "Tutorials", href: "/resources/tutorials", icon: <MdSchool /> },
      { name: "FAQ", href: "/faq", icon: <FaQuestionCircle /> },
      { name: "Support", href: "/support", icon: <MdHelpOutline /> },
    ],
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`relative transition-all duration-500 ${
            scrolled
              ? "bg-white/40 shadow-xl shadow-amber-500/10"
              : "bg-amber-600/20 backdrop-blur-md shadow-md shadow-amber-500/10"
          } backdrop-blur-xl rounded-2xl border border-amber-200/50`}
        >
          <div className="flex items-center justify-between h-20 px-6">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <Image src="/logo.png" alt="Logo" width={120} height={40} />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-3">
              {Object.entries(navItems).map(([category, items]) => (
                <DropdownMenu key={category}>
                  <DropdownMenuTrigger asChild>
                    <button className="px-4 py-2.5 text-gray-700 hover:text-amber-600 font-medium rounded-xl hover:bg-amber-50/50 transition-all flex items-center space-x-1">
                      <span>{category}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-64 p-2 mt-2 border border-amber-200 rounded-xl bg-white/95 shadow-xl">
                    <DropdownMenuGroup>
                      {items.map((item, idx) => (
                        <DropdownMenuItem key={idx} asChild>
                          <Link
                            href={item.href}
                            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-amber-50 transition-colors"
                          >
                            <span className="text-lg text-amber-600">
                              {item.icon}
                            </span>
                            <span className="text-gray-700">{item.name}</span>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              ))}
            </div>

            {/* Desktop Auth */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                href="/login"
                className="px-5 py-2.5 text-gray-700 hover:text-amber-600 font-medium rounded-xl hover:bg-amber-50/50 transition-all flex items-center space-x-2"
              >
                <HiOutlineLogin className="w-5 h-5" />
                <span>Log In</span>
              </Link>
              <Link
                href="/signup"
                className="relative px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center space-x-2"
              >
                <span>Sign Up</span>
                <Zap className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2.5 rounded-xl hover:bg-amber-50/50 transition-all"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-amber-600" />
              ) : (
                <Menu className="w-6 h-6 text-amber-600" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 top-24">
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={closeMobileMenu}
          ></div>
          <div className="relative max-w-lg mx-auto px-4">
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-amber-200/50 max-h-[calc(100vh-8rem)] overflow-y-auto">
              <div className="p-4 space-y-2">
                {/* Map over navItems */}
                {Object.entries(navItems).map(([category, items]) => {
                  const openState =
                    category === "Features"
                      ? mobileFeaturesOpen
                      : category === "Community"
                      ? mobileCommunityOpen
                      : mobileResourcesOpen;
                  const toggleState =
                    category === "Features"
                      ? () => setMobileFeaturesOpen(!mobileFeaturesOpen)
                      : category === "Community"
                      ? () => setMobileCommunityOpen(!mobileCommunityOpen)
                      : () => setMobileResourcesOpen(!mobileResourcesOpen);

                  return (
                    <div
                      key={category}
                      className="border-b border-amber-100 pb-2"
                    >
                      <button
                        onClick={toggleState}
                        className="w-full flex items-center justify-between px-4 py-3 text-amber-600 font-semibold rounded-xl hover:bg-amber-50/50 transition-all"
                      >
                        <span>{category}</span>
                        <ChevronRight
                          className={`w-5 h-5 transition-transform ${
                            openState ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                      {openState && (
                        <div className="mt-1 space-y-1 pl-6">
                          {items.map((item, idx) => (
                            <Link
                              key={idx}
                              href={item.href}
                              onClick={closeMobileMenu}
                              className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-amber-50 transition-all text-gray-700"
                            >
                              <span className="text-lg text-amber-600">
                                {item.icon}
                              </span>
                              <span>{item.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Auth */}
                <div className="pt-4 space-y-2">
                  <Link
                    href="/login"
                    onClick={closeMobileMenu}
                    className="flex items-center justify-center space-x-2 w-full px-4 py-3 text-amber-600 font-medium rounded-xl border border-amber-200 hover:bg-amber-50"
                  >
                    <HiOutlineLogin className="w-5 h-5" />
                    <span>Log In</span>
                  </Link>
                  <Link
                    href="/signup"
                    onClick={closeMobileMenu}
                    className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl"
                  >
                    <span>Sign Up</span>
                    <Zap className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
