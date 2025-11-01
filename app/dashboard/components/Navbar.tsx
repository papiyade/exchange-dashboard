"use client";

import { FaUser, FaCog, FaBell, FaSearch, FaBars } from "react-icons/fa";
import { ModeToggle } from "../../components/ModeToggle";

interface NavbarProps {
  currentPage?: string;
  onMenuClick?: () => void;
}

export default function Navbar({
  currentPage = "Dashboard",
  onMenuClick,
}: NavbarProps) {
  return (
    <header className="w-full shadow-md p-3 flex items-center justify-between ">
      {/* Left: Breadcrumb + Hamburger */}
      <div className="flex items-center space-x-3">
        {/* Hamburger menu visible uniquement sur mobile */}
        {onMenuClick && (
          <button
            onClick={onMenuClick}
            className="md:hidden"
          >
            <FaBars className="w-5 h-5" />
          </button>
        )}

        <div className="flex flex-col">
          <p className="text-sm">
            Pages /{" "}
            <span className=" font-semibold">
              {currentPage}
            </span>
          </p>
          <h1 className="text-md font-bold ">
            {currentPage}
          </h1>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center space-x-4">
        {/* Search bar (hidden on small screens) */}
        <div className="relative w-64 hidden md:block">
          <input
            type="text"
            placeholder="Type here..."
            className="text-sm  border-gray-200  w-full pl-10 pr-4 py-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
          />
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-sm" />
        </div>

        {/* Action buttons */}
        <button className="flex items-center space-x-2 px-4 py-1  rounded-lg hover:bg-teal-500 hover:text-white transition duration-300">
          <FaUser />
          <span className="text-sm hidden sm:inline">Sign in</span>
        </button>

        <button className="p-2  rounded-full  transition">
          <FaCog className="" />
        </button>

        <button className="p-2  rounded-full  transition relative">
          <FaBell className="" />
        </button>

        <ModeToggle />
      </div>
    </header>
  );
}
