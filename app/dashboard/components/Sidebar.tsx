"use client";

import Link from "next/link";
import {
  FaHome,
  FaRegChartBar,
  FaCreditCard,
  FaWrench,
  FaUser,
  FaFile,
  FaRocket,
  FaQuestionCircle,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen = true, onClose }: SidebarProps) {
  const activeRoute = "/dashboard";

  const menuItems = [
    { name: "Dashboard", href: "/dashboard", icon: <FaHome /> },
    { name: "Transactions", href: "/transactions", icon: <FaRegChartBar /> },
    { name: "Billing", href: "/billing", icon: <FaCreditCard /> },
    { name: "RTL", href: "/rtl", icon: <FaWrench /> },
  ];

  const accountItems = [
    { name: "Profile", href: "/profile", icon: <FaUser /> },
    { name: "Sign In", href: "/sign-in", icon: <FaFile /> },
    { name: "Sign Up", href: "/sign-up", icon: <FaRocket /> },
  ];

  return (
    <>
      {/* Overlay pour mobile */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
        />
      )}

      {/* Sidebar principale */}
      <aside
        className={`fixed md:static top-0 left-0 z-50 h-full w-64 md:w-1/5  shadow-md transform transition-transform duration-300 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 flex flex-col p-6`}
      >
        {/* Header + bouton close (mobile uniquement) */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold ">
            DEXCHANGE SAAS
          </h2>
          <button
            onClick={onClose}
            className="md:hidden "
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        <hr className="" />

        {/* Contenu scrollable */}
        <div className="flex-1 overflow-y-auto scrollbar-hidden mt-4 space-y-4">
          {/* Menu principal */}
          <nav className="flex flex-col space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-6 py-2 rounded-xl transition-all duration-200 ${
                  activeRoute === item.href
                    ? "text-teal-500 shadow-md bg-teal-50 "
                    : "  hover:text-teal-500"
                }`}
              >
                <span
                  className={`p-2 rounded-xl flex items-center justify-center transition-colors duration-200 ${
                    activeRoute === item.href
                      ? "bg-teal-500 text-white"
                      : "text-teal-500"
                  }`}
                >
                  {item.icon}
                </span>
                <span
                  className={`font-medium ${
                    activeRoute === item.href ? "text-teal-500" : ""
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>

          {/* Account Pages */}
          <p className="font-semibold uppercase text-sm mb-2 mt-4 ">
            Account pages
          </p>
          <nav className="flex flex-col space-y-2">
            {accountItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-6 py-2 rounded-xl transition-all duration-200 ${
                  activeRoute === item.href
                    ? "text-teal-500 shadow-md bg-teal-50 "
                    : "  hover:text-teal-500"
                }`}
              >
                <span
                  className={`p-2 rounded-xl flex items-center justify-center transition-colors duration-200 ${
                    activeRoute === item.href
                      ? "bg-teal-500 text-white"
                      : "text-teal-500"
                  }`}
                >
                  {item.icon}
                </span>
                <span
                  className={`font-medium ${
                    activeRoute === item.href ? "text-teal-500" : ""
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>

          {/* Documentation Card */}
          <div className="mt-6">
            <p className="font-semibold uppercase text-sm mb-3 ">
              Documentation
            </p>
            <div className="relative bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl p-6 h-40 overflow-hidden">
              <svg
                className="absolute -bottom-6 -right-2 w-24 h-24"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  d="M0,50 A50,50 0 0,1 50,0"
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth="2.5"
                />
              </svg>
              <div className="relative z-10 flex flex-col items-start">
                <span className="p-2 bg-white rounded-lg mb-2">
                  <FaQuestionCircle className="text-teal-500 text-xl" />
                </span>
                <p className="text-white text-md font-medium">Need help?</p>
                <p className=" text-sm font-medium">
                  Please check our docs
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
