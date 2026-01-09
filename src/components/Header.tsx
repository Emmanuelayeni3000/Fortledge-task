"use client";

import React from "react";
import { Search, Notification, ChevronDown } from "react-iconly";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-4 px-8 bg-white backdrop-blur-sm sticky top-0 z-10 border-b border-gray-200">
      <div className="relative flex-1 max-w-xl">
        <input
          type="text"
          placeholder="Search"
          className="pl-4 pr-12 py-3 bg-[#F8F9FC] rounded-lg border border-gray-100 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
           <Search set="light" size="small" />
        </div>
      </div>

      <div className="flex items-center gap-4">
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
