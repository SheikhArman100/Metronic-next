"use client";
import Link from "next/link.js";
import React from "react";
import miniLogo from "@/public/assets/assets/media/app/mini-logo.svg";
import bigLogo from "@/public/assets/assets/media/app/default-logo-dark.svg";
import Image from "next/image.js";
import {
  ArrowBigLeft,
  ArrowLeft,
  ArrowLeftToLine,
  BadgeAlert,
  Files,
  LayoutGrid,
  ListChecks,
  PanelsTopLeft,
  Plus,
  Settings,
  ShoppingCart,
  User,
  Users,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-[280px] h-full border border-r-gray-200  fixed top-0 bottom-0 z-20 hidden md:flex flex-col items-stretch shrink-0">
      {/* -------------------------header------------------------------------- */}
      <div className="relative flex items-center  justify-between p-3 lg:p-6 shrink-0">
        <Link href="/" className="flex items-center gap-x-2">
          <Image height="28" width="28" className="" src={miniLogo} />
          <span className="hidden md:block text-xl font-semibold text-gray-700">
            Metronic
          </span>
        </Link>
        <button class="size-[30px] rounded-lg border z-20 border-gray-200  bg-white text-gray-500 hover:text-gray-700 toggle absolute left-full top-2/4 -translate-x-2/4 -translate-y-2/4 flex items-center justify-center">
          <ArrowLeftToLine className="size-4 transition-all duration-300" />
        </button>
      </div>
      {/* --------------------------------------------content--------------------------------------- */}
      <div className="px-3 lg:px-6 py-5">
        <Link href="#" className="flex items-center justify-between ">
          <div className="flex items-center gap-x-2">
            <LayoutGrid className="size-5 stroke-gray-500 " />
            <span className="text-sm font-semibold text-gray-700 hover:text-[#1B84FF]">
              Dashboard
            </span>
          </div>
          <div>
            <Plus className="size-4 stroke-gray-400" />
          </div>
        </Link>

        <div className="mt-6">
          <h6  className="text-gray-500 text-sm font-semibold">User</h6>
          <ul className="flex flex-col gap-y-2 mt-2">
            
            <li className="py-2">
              <Link href="#" className="flex items-center justify-between ">
                <div className="flex items-center gap-x-2">
                  <div className="rounded-full border border-gray-500 bg-gray-200">
                  <User className="size-4 stroke-gray-500 " />
                  </div>
                  <span className="text-sm font-semibold text-gray-700 hover:text-[#1B84FF]">
                    Public profile
                  </span>
                </div>
                <div>
                  <Plus className="size-4 stroke-gray-400" />
                </div>
              </Link>
            </li>
            <li className="py-2">
              <Link href="#" className="flex items-center justify-between ">
                <div className="flex items-center gap-x-2">
                  <div className="rounded-full  bg-gray-200">
                  <Settings className="size-4 stroke-gray-500 " />
                  </div>
                  <span className="text-sm font-semibold text-gray-700 hover:text-[#1B84FF]">
                    My Account
                  </span>
                </div>
                <div>
                  <Plus className="size-4 stroke-gray-400" />
                </div>
              </Link>
            </li>
            <li className="py-2">
              <Link href="#" className="flex items-center justify-between ">
                <div className="flex items-center gap-x-2">
                  <div className="rounded-full  bg-gray-200">
                  <Users className="size-4 stroke-gray-500 " />
                  </div>
                  <span className="text-sm font-semibold text-gray-700 hover:text-[#1B84FF]">
                   Network
                  </span>
                </div>
                <div>
                  <Plus className="size-4 stroke-gray-400" />
                </div>
              </Link>
            </li>
            <li className="py-2">
              <Link href="#" className="flex items-center justify-between ">
                <div className="flex items-center gap-x-2">
                  <div className="rounded-full  bg-gray-200">
                  <BadgeAlert className="size-4 stroke-gray-500 " />
                  </div>
                  <span className="text-sm font-semibold text-gray-700 hover:text-[#1B84FF]">
                   Authentication
                  </span>
                </div>
                <div>
                  <Plus className="size-4 stroke-gray-400" />
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-6">
        <h6  className="text-gray-500 text-sm font-semibold">App</h6>
          <ul className="flex flex-col gap-y-2 mt-2">
          <li className="py-2">
              <Link href="#" className="flex items-center justify-between ">
                <div className="flex items-center gap-x-2">
                  <div className="rounded-full  bg-gray-200">
                  <Users className="size-4 stroke-gray-500 " />
                  </div>
                  <span className="text-sm font-semibold text-gray-700 hover:text-[#1B84FF]">
                    User Management
                  </span>
                </div>
                <div className="rounded-lg border border-gray-400 bg-gray-200 p-1 flex items-center justify-center">
                  <span className="text-gray-500 text-2xs">Soon</span>
                </div>
              </Link>
            </li>
            <li className="py-2">
              <Link href="#" className="flex items-center justify-between ">
                <div className="flex items-center gap-x-2">
                  <div className="rounded-full p-0.5 border border-gray-500  bg-gray-200">
                  <ListChecks className="size-4 stroke-gray-500 " />
                  </div>
                  <span className="text-sm font-semibold text-gray-700 hover:text-[#1B84FF]">
                    Projects
                  </span>
                </div>
                <div className="rounded-lg border border-gray-400 bg-gray-200 p-1 flex items-center justify-center">
                  <span className="text-gray-500 text-2xs">Soon</span>
                </div>
              </Link>
            </li>
            <li className="py-2">
              <Link href="#" className="flex items-center justify-between ">
                <div className="flex items-center gap-x-2">
                  <div className="rounded-full  bg-gray-200">
                  <ShoppingCart className="size-5 stroke-gray-500 " />
                  </div>
                  <span className="text-sm font-semibold text-gray-700 hover:text-[#1B84FF]">
                    eCommerce
                  </span>
                </div>
                <div className="rounded-lg border border-gray-400 bg-gray-200 p-1 flex items-center justify-center">
                  <span className="text-gray-500 text-2xs">Soon</span>
                </div>
              </Link>
            </li>

          </ul>
        </div>
        <div className="mt-6">
        <h6  className="text-gray-500 text-sm font-semibold">MISCELLANEOUS</h6>
          <ul className="flex flex-col gap-y-2 mt-2">
          <li className="py-2">
              <Link href="#" className="flex items-center justify-between ">
                <div className="flex items-center gap-x-2">
                  <div className="rounded-full  bg-gray-200">
                  <Files className="size-4 stroke-gray-500 " />
                  </div>
                  <span className="text-sm font-semibold text-gray-700 hover:text-[#1B84FF]">
                    Modals
                  </span>
                </div>
                <div className="rounded-lg border border-gray-400 bg-gray-200 p-1 flex items-center justify-center">
                  <span className="text-gray-500 text-2xs">Soon</span>
                </div>
              </Link>
            </li>
            <li className="py-2">
              <Link href="#" className="flex items-center justify-between ">
                <div className="flex items-center gap-x-2">
                  <div className="rounded-full   bg-gray-200">
                  <PanelsTopLeft className="size-4 stroke-gray-500 " />
                  </div>
                  <span className="text-sm font-semibold text-gray-700 hover:text-[#1B84FF]">
                    Widgets
                  </span>
                </div>
                <div className="rounded-lg border border-gray-400 bg-gray-200 p-1 flex items-center justify-center">
                  <span className="text-gray-500 text-2xs">Soon</span>
                </div>
              </Link>
            </li>
            </ul>
            </div>
      </div>
    </aside>
  );
};

export default Sidebar;
