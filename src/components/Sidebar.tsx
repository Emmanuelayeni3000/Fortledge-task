"use client";

import React from "react";
import {
  Chart as ChartIcon,
  Buy,
  Category,
  Chat,
  Setting,
  Wallet,
  User,
  InfoSquare,
  CloseSquare,
} from "react-iconly";
import { useSidebar } from "@/context/SidebarContext";

const Sidebar = () => {
  const { isOpen, closeSidebar } = useSidebar();
  const activeColor = "#707FDD";
  const inactiveColor = "#A6ABC8";

  const menuItems = [
    { name: "Dashboard", icon: (active: boolean) => <ChartIcon set="bold" primaryColor={active ? activeColor : inactiveColor} />, active: true },
    { name: "Food Order", icon: (active: boolean) => <Buy set="bold" primaryColor={active ? activeColor : inactiveColor} />, active: false },
    { name: "Manage Menu", icon: (active: boolean) => <Category set="bold" primaryColor={active ? activeColor : inactiveColor} />, active: false },
    { name: "Customer Review", icon: (active: boolean) => <Chat set="bold" primaryColor={active ? activeColor : inactiveColor} />, active: false },
  ];

  const otherItems = [
    { name: "Settings", icon: (active: boolean) => <Setting set="bold" primaryColor={active ? activeColor : inactiveColor} />, active: false },
    { name: "Payment", icon: (active: boolean) => <Wallet set="bold" primaryColor={active ? activeColor : inactiveColor} />, active: false },
    { name: "Accounts", icon: (active: boolean) => <User set="bold" primaryColor={active ? activeColor : inactiveColor} />, active: false },
    { name: "Help", icon: (active: boolean) => <InfoSquare set="bold" primaryColor={active ? activeColor : inactiveColor} />, active: false },
  ];

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300"
          onClick={closeSidebar}
        />
      )}
      
      <div 
        className={`
          w-64 h-screen bg-[#F1F2F7] border-r border-gray-100 flex flex-col justify-between py-6 px-4
          fixed lg:sticky top-0 z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div>
          <div className="flex items-center justify-between gap-2 px-4 pb-5 mb-6 border-b border-gray-200 -mx-4 px-8">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-[#5A67BA] rounded-full flex items-center justify-center text-white font-bold text-xl">
                G
              </div>
              <span className="text-xl font-bold font-poppins text-[#5A67BA]">
                GOODFOOD
              </span>
            </div>
            <button 
              onClick={closeSidebar}
              className="lg:hidden p-1 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <CloseSquare set="bold" primaryColor="#A6ABC8" size="medium" />
            </button>
          </div>

          <div className="mb-8">
            <p className="px-4 text-xs font-medium text-gray-400 mb-4 uppercase tracking-wider">
              Menu
            </p>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors duration-200 ${
                    item.active
                      ? "bg-[#707FDD]/10 text-[#5A6ACF] font-medium"
                      : "text-[#273240]"
                  }`}
                  onClick={closeSidebar}
                >
                  <div className="icon-wrapper">{item.icon(item.active)}</div>
                  <span className="text-sm">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="px-4 text-xs font-medium text-gray-400 mb-4 uppercase tracking-wider">
              Others
            </p>
            <ul className="space-y-2">
              {otherItems.map((item) => (
                <li
                  key={item.name}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors duration-200 ${
                    item.active
                      ? "bg-[#707FDD]/10 text-[#5A6ACF] font-medium"
                      : "text-[#273240]"
                  }`}
                  onClick={closeSidebar}
                >
                  <div className="icon-wrapper">{item.icon(item.active)}</div>
                  <span className="text-sm">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
         <div className="bg-blue-50 p-4 rounded-xl mt-4 mx-2 text-center hidden">
            <p className="text-xs text-blue-400">© 2021 GoodFood</p>
         </div>
      </div>
    </>
  );
};

export default Sidebar;
