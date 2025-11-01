"use client";
import Sidebar from "../dashboard/components/Sidebar";
import Navbar from "../dashboard/components/Navbar";
import Image from "next/image";
import { projectData } from "../dashboard/data/projectData";
import { authorsData } from "./data/authorsData";
import { ModeToggle } from "../components/ModeToggle";
import { useState } from "react";
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
export default function TablePage() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      {/* Contenu Main */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar onMenuClick={() => setSidebarOpen(true)} currentPage="Dashboard" />
        <main className="p-8 flex-1">
          <div className=" rounded-xl shadow-md overflow-x-auto shadow-gray-300">
            <h1 className="text-lg font-semibold mt-4 ml-6">
              Authors Table
            </h1>
            <table className="w-full text-left ">
              <thead>
                <tr className=" text-xs uppercase border-b">
                  <th className="px-6 py-3 font-bold">Author</th>
                  <th className="px-6 py-3 font-bold">Function</th>
                  <th className="px-6 py-3 font-bold">Status</th>
                  <th className="px-6 py-3 font-bold">Employed</th>
                  <th className="px-6 py-3 font-bold text-center"> </th>
                </tr>
              </thead>

              <tbody>
                {authorsData.map((author) => (
                  <tr
                    key={author.id}
                    className="border-b transition "
                  >
                    {/* Author */}
                    <td className="px-6 py-4 flex items-center space-x-3">
                      <Image
                        src={author.image}
                        alt={author.name}
                        width={30}
                        height={30}
                        className="rounded-lg object-cover"
                      />
                      <div>
                        <p className="text-sm font-semibold ">
                          {author.name}
                        </p>
                        <p className="text-xs text-gray-400">{author.email}</p>
                      </div>
                    </td>

                    {/* Function */}
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold ">
                        {author.function}
                      </p>
                      <p className="text-xs text-gray-500 dark-text-gray-400">
                        {author.department}
                      </p>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-lg ${
                          author.status === "Online"
                            ? "bg-green-500 text-white"
                            : "bg-gray-300 text-white"
                        }`}
                      >
                        {author.status}
                      </span>
                    </td>

                    {/* Employed */}
                    <td className="px-6 py-4 text-sm ">
                      {author.employed}
                    </td>

                    {/* Action */}
                    <td className="px-6 py-4 text-right">
                      <a
                        href="#"
                        className="text-gray-500 text-sm font-semibold hover:underline dark:text-gray-500"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

                      {/* --- Projects Table --- */}
                      <div className="lg:col-span-2 rounded-xl shadow-lg p-6 mt-8  ">
                        {/* Header */}
                        <div className="flex items-center mb-2">
                          <p className="font-semibold  text-lg ">Projects</p>
                          <button className="ml-auto  transition">
                            <FaEllipsisV className="" />
                          </button>
                        </div>
                        <p className="text-gray-500 text-sm mb-4 font-medium flex align-items">
                            <FaCheckCircle className="text-green-600 me-2"/>
                          <span className="font-bold me-2">30 done</span> this month
                        </p>
          
                        {/* Table */}
                        <table className="w-full text-left border-separate border-spacing-y-3">
                          <thead>
                            <tr className="text-xs uppercase font-semibold ">
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
                                <td className="py-3 px-2 font-semibold  text-sm flex items-center gap-2">
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
                                        className="rounded-full border border-gray-200"
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
                                <td className="py-3 px-2">
                                   <button className="ml-auto transition">
                            <FaEllipsisV className="text-sm" />
                          </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
        </main>
      </div>
    </div>
  );
}
