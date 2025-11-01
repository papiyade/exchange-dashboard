"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaGoogle,
  FaApple,
  FaKey,
  FaUserCircle,
  FaUser,
  FaDiceD6,
  FaCubes,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gray-100 font-sans flex flex-col">
      {/* --- HEADER --- */}
      <header className="relative bg-teal-500 opacity-120 h-2/6 min-h-[230px] mx-6 mt-2 rounded-2xl overflow-hidden">
        {/* Images décoratives */}
        <Image
          src="/images/frame-1.png"
          alt="Décor gauche"
          width={600}
          height={150}
          className="absolute -top-14 left-0 rotate-180 object-contain opacity-90 brightness-150"
        />
        <Image
          src="/images/frame-1.png"
          alt="Décor droite"
          width={557}
          height={83}
          className="absolute -bottom-10 right-0 opacity-90 rotate-0 object-contain brightness-150"
        />

        {/* Contenu du header */}
        <div className="relative z-10 max-w-6xl mx-auto flex items-center justify-between px-8 py-4 text-white">
          {/* Logo */}
          <h1 className="text-lg ml-16 font-medium tracking-wide flex align-items">
            <FaCubes className="me-1" />
            DEXCHANGE SAAS
          </h1>

          {/* Menu */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            <a
              href="/dashboard"
              className="hover:text-md hover:animate-pulse flex align-items"
            >
              <FaDiceD6 className="me-1" />
              DASHBOARD
            </a>
            <a
              href="#"
              className="hover:text-md hover:animate-pulse flex align-items"
            >
              <FaUser className="me-1" />
              PROFILE
            </a>
            <a
              href="#"
              className="hover:text-md hover:animate-pulse flex align-items"
            >
              <FaUserCircle className="me-1" />
              SIGN UP
            </a>
            <a
              href="#"
              className="hover:text-md hover:animate-pulse flex align-items"
            >
              <FaKey className="me-1" />
              SIGN IN
            </a>
          </nav>

          {/* Bouton droit */}
          <button className="bg-white text-gray-800 font-semibold px-5 py-2 rounded-full shadow-sm hover:bg-gray-100 transition duration-200 hover:shadow-md hover:animate-bounce">
            Call to action
          </button>
        </div>

        {/* Texte de bienvenue */}
        <div className="relative z-8 text-center text-white mt-10">
          <h2 className="text-2xl font-semibold">Welcome!</h2>
        </div>
      </header>

      {/* --- FORMULAIRE --- */}
      <main className="flex-grow flex items-start justify-center mt-8">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm -mt-20 z-10">
          {/* Social Register */}
          <div className="text-center">
            <p className="text-gray-700 font-bold mb-4">Register with</p>
            <div className="flex items-center justify-center gap-6">
              <button className="p-3 bg-gray-50 rounded-lg border-1 hover:bg-gray-200">
                <FaFacebook className="text-gray-700 text-2xl" />
              </button>
              <button className="p-3 bg-gray-50 rounded-lg border-1 hover:bg-gray-200">
                <FaApple className="text-gray-700 text-2xl" />
              </button>
              <button className="p-3 bg-gray-50 rounded-lg border-1 hover:bg-gray-200">
                <FaGoogle className="text-gray-700 text-2xl" />
              </button>
            </div>
          </div>

          {/* Séparateur */}
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="text-gray-600 font-semibold text-md px-3">or</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>

          {/* Formulaire */}
          <form className="flex flex-col items-start space-y-4">
            <div className="w-full">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full text-gray-400 border-gray-200 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div className="w-full">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 text-gray-400 border-gray-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div className="w-full">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 text-gray-400 border-gray-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Remember me */}
            <div className="flex items-center mt-2">
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-teal-500 rounded-full peer peer-checked:bg-teal-500 transition-all duration-200"></div>
                <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 peer-checked:translate-x-5"></div>
                <span className="ml-3 text-sm text-gray-600 select-none">
                  Remember me
                </span>
              </label>
            </div>

            {/* Button */}
            <a
              href="/dashboard"
              className="w-full text-center bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded-lg transition-colors duration-200 mt-4"
            >
              Sign Up
            </a>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-400 mt-6">
            Already have an account ?{" "}
            <a 
            href="/dashboard" className="text-teal-500 font-medium hover:font-semibold">
              Sign in
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
