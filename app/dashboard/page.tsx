"use client";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Image from "next/image";
import { projectData } from "./data/projectData";
import {
  FaWallet,
  FaGlobe,
  FaFileAlt,
  FaShoppingCart,
  FaBolt,
  FaArrowRight,
  FaEllipsisV,
  FaCheckCircle
} from "react-icons/fa";
import { useState } from "react";
export default function DashboardPage() {
  const stats = [
    {
      name: "Today's Money",
      stat: "$53,000",
      change: "+55%",
      changeType: "increase",
      icon: <FaWallet />,
    },
    {
      name: "Today's Users",
      stat: "2,300",
      change: "+5%",
      changeType: "increase",
      icon: <FaGlobe />,
    },
    {
      name: "New Clients",
      stat: "3,052",
      change: "-14%",
      changeType: "decrease",
      icon: <FaFileAlt />,
    },
    {
      name: "Total Sales",
      stat: "$173,000",
      change: "+8%",
      changeType: "increase",
      icon: <FaShoppingCart />,
    },
  ];
      const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen flex ">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Contenu Main */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar onMenuClick={() => setSidebarOpen(true)} currentPage="Dashboard" />

        {/* Contenu principal */}
        <main className="p-4 flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((item) => (
              <div
                key={item.name}
                className="rounded-xl shadow-2xl px-6 py-1 flex justify-between items-center"
              >
                {/* Left: title + stat */}
                <div className="flex flex-col">
                  <span className="text-sm font-semibold ">
                    {item.name}
                  </span>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="text-sm font-bold ">
                      {item.stat}
                    </span>
                    <span
                      className={`text-xs font-semibold ${
                        item.changeType === "increase"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {item.change}
                    </span>
                  </div>
                </div>

                {/* Right: icon */}
                <span className="p-2 bg-linear-to-br from-teal-600 to-teal-500 text-white rounded-lg text-md">
                  {item.icon}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {/* --- Left Card (col-span-2) --- */}
            <div className="lg:col-span-2 rounded-xl shadow p-6 flex justify-between items-center relative overflow-hidden">
              {/* Text Section */}
              <div className="flex flex-col space-y-2">
                <p className="text-sm ">Lorem Ipsum</p>
                <h2 className="text-lg font-semibold ">
                  Lorem Dashboard
                </h2>
                <p className=" text-sm max-w-md ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex align-items mt-10">
                  <p className="mt-auto text-sm font-bold  me-2">
                    Read More
                  </p>
                  <FaArrowRight className="me-2 text-sm" />
                </div>
              </div>

              {/* Teal Stat Card */}
              <div className="bg-teal-500 text-white px-12 py-12 rounded-xl flex items-center gap-3 shadow-md">
                <div className="p-3 bg-white rounded-full">
                  <FaBolt className="text-2xl text-teal-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">chakra</h3>
                </div>
              </div>

              {/* Decorative background gradient blob */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-100 rounded-full opacity-30 blur-2xl"></div>
            </div>

            {/* --- Right Card (Image Card) --- */}
            <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow">
              {/* Image background */}
              <Image
                src="/images/image-cover.jpg"
                alt="Background"
                width={100}
                height={100}
                className="absolute inset-0 w-full h-full object-cover opacity-70"
              />

              {/* Contenu overlay */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-start">
                <h3 className="text-white text-md font-semibold">
                  Lorem Ipsum
                </h3>
                <p className="text-white/80 text-sm mt-2 max-w-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="flex align-items mt-20">
                  <div className="flex items-start align-items space-x-3">
                    <p className="text-sm text-gray-300">Read More</p>
                    <FaArrowRight className="text-gray-300" />
                  </div>
                </div>
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {/* --- Projects Table --- */}
            <div className="lg:col-span-2 rounded-xl shadow p-6">
              {/* Header */}
              <div className="flex items-center mb-2">
                <p className="font-semibold  text-lg">Projects</p>
                <button className="ml-auto text-gray-400 hover:text-gray-600 transition">
                  <FaEllipsisV className="" />
                </button>
              </div>
              <p className="text-gray-500 text-sm mb-4 font-medium flex align-items">
                <FaCheckCircle className="text-green-600 me-2"/>
                <span className="font-bold me-2">30 done</span>this month
              </p>

              {/* Table */}
              <table className="w-full text-left border-separate border-spacing-y-3">
                <thead>
                  <tr className=" text-xs uppercase font-semibold">
                    <th className="py-2">Companies</th>
                    <th className="py-2">Members</th>
                    <th className="py-2">Budget</th>
                    <th className="py-2">Completion</th>
                  </tr>
                </thead>
                <tbody>
                  {projectData.map((project) => (
                    <tr
                      key={project.id}
                      className=" transition"
                    >
                      {/* Company */}
                      <td className="py-3 px-2 font-semibold  text-sm flex items-center gap-2 ">
                        {Array.isArray(project.companyLogo) ? (
                          project.companyLogo.map((logo, index) => (
                            <Image
                              key={index}
                              src={logo}
                              alt="logo"
                              width={20}
                              height={20}
                              className="w-4 h-4"
                            />
                          ))
                        ) : (
                          <Image
                            src={project.companyLogo}
                            alt="logo"
                            width={20}
                            height={20}
                            className="w-6 h-6"
                          />
                        )}
                        {project.companyName}
                      </td>

                      {/* Members */}
                      <td className="py-3 px-2">
                        <div className="flex -space-x-2">
                          {project.members.map((member, i) => (
                            <Image
                              key={i}
                              src={member}
                              alt="member"
                              width={24}
                              height={24}
                              className="rounded-full "
                            />
                          ))}
                        </div>
                      </td>

                      {/* Budget */}
                      <td className="py-3 px-2 text-sm font-semibold">
                        {project.budget}
                      </td>

                      {/* Completion */}
                      <td className="py-3 px-2">
                        <div className="flex flex-col items-start gap-1">
                          <span className="text-teal-600 text-sm font-medium">
                            {project.completion}%
                          </span>
                          <div className="w-24 h-1 rounded-full overflow-hidden">
                            <div
                              className={`h-1 bg-${project.color}-500 rounded-full transition-all duration-500`}
                              style={{ width: `${project.completion}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* --- Order Review Card --- */}
            <div className=" rounded-xl shadow p-6 flex flex-col justify-between ">
              {/* Header */}
              <h3 className=" font-semibold text-lg ">
                Orders overview
                <p className="font-light  text-sm mt-1">
                  <span className="text-green-600 font-semibold">+30%</span>{" "}
                  this month
                </p>
              </h3>

              {/* Timeline */}
              <div className="relative mb-24 ml-2 border-l-2 border-gray-200 pl-6 space-y-6">
                {/* Ligne 1 */}
                <div className="relative">
                  <Image
                    src="/images/css3.svg"
                    alt="css3"
                    width={10}
                    height={10}
                    className="absolute bg-white -left-[30px] top-1 w-6 h-6  p-1 rounded-full shadow"
                  />
                  <p className="text-sm font-semibold ">
                    $2400, Design Changes
                  </p>
                  <p className="text-xs text-gray-600">22 DEC 7:20 PM</p>
                </div>

                {/* Ligne 2 */}
                <div className="relative">
                  <Image
                    src="/images/cart.svg"
                    alt="cart"
                    width={10}
                    height={10}
                    className="absolute -left-[30px] top-1 w-6 h-6 bg-white p-1 rounded-full shadow"
                  />
                  <p className="text-sm font-semibold ">
                    New order #4219423
                  </p>
                  <p className="text-xs text-gray-600">21 DEC 11:21 PM</p>
                </div>

                {/* Ligne 3 */}
                <div className="relative">
                  <Image
                    src="/images/wallet.svg"
                    alt="wallet"
                    width={10}
                    height={10}
                    className="absolute -left-[30px] top-1 w-6 h-6 bg-white p-1 rounded-full shadow"
                  />
                  <p className="text-sm font-semibold ">
                    Server Payments for April
                  </p>
                  <p className="text-xs text-gray-600">21 DEC 9:28 PM</p>
                </div>

                {/* Ligne 4 */}
                <div className="relative">
                  <Image
                    src="/images/dropbox.svg"
                    alt="dropbox"
                    width={10}
                    height={10}
                    className="absolute -left-[30px] top-1 w-6 h-6 bg-white p-1 rounded-full shadow"
                  />
                  <p className="text-sm font-semibold ">
                    New card added for order #3210145
                  </p>
                  <p className="text-xs text-gray-600">20 DEC 3:52 PM</p>
                </div>

                {/* Ligne 5 */}
                <div className="relative">
                  <Image
                    src="/images/wallet.svg"
                    alt="wallet"
                    width={10}
                    height={10}
                    className="absolute -left-[30px] top-1 w-6 h-6 bg-white p-1 rounded-full shadow"
                  />
                  <p className="text-sm font-semibold">
                    Unlock packages for Development
                  </p>
                  <p className="text-xs text-gray-600">19 DEC 11:35 PM</p>
                </div>
                {/* Exemple 6 */}
                <div className="relative">
                  <Image
                    src="/images/xd.svg"
                    alt="xd"
                    width={10}
                    height={10}
                    className="absolute -left-[30px] top-1 w-6 h-6 bg-white p-1 rounded-full shadow"
                  />
                  <p className="text-sm font-semibold ">
                    New order #9851258
                  </p>
                  <p className="text-xs text-gray-600">18 DEC 4:41 PM</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
