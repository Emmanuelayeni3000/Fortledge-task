"use client";

import React from "react";
import { Search, Notification, ChevronDown, Category } from "react-iconly";
import { useSidebar } from "@/context/SidebarContext";

const Header = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="flex items-center py-4 px-4 md:px-8 bg-white backdrop-blur-sm sticky top-0 z-10 border-b border-gray-200 gap-3 md:gap-4">
      <button 
        onClick={toggleSidebar}
        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
        aria-label="Toggle sidebar"
      >
        <Category set="bold" primaryColor="#5A6ACF" size="medium" />
      </button>

      <div className="relative flex-1 max-w-[180px] sm:max-w-[240px] md:max-w-xl">
        <input
          type="text"
          placeholder="Search"
          className="pl-3 pr-10 md:pl-4 md:pr-12 py-2.5 md:py-3 bg-[#F8F9FC] rounded-lg border border-gray-100 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
        />
        <div className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 text-gray-400">
           <Search set="light" size="small" />
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4 ml-auto">
          <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-yellow-100 p-1">
                  <img src="/images/hamburger-avatar-icon.png" alt="User" onError={(e) => e.currentTarget.src = 'https://ui-avatars.com/api/?name=Delicious+Burger&background=FF8A00&color=fff'} className="w-full h-full rounded-full object-cover" />
              </div>
              <div className="hidden md:flex items-center gap-1">
                  <p className="text-sm font-semibold text-slate-800">Delicious Burger</p>
                  <ChevronDown set="light" size="small" primaryColor="#64748b" />
              </div>
          </div>

          <button className="p-2 rounded-full relative text-gray-400 hover:bg-gray-50">
              <Notification set="bold" primaryColor="#c9c9c9" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </button>
      </div>
    </div>
  );
};

export default Header;
