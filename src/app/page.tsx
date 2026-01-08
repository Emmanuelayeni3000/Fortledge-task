"use client";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import DashboardContent from "@/components/DashboardContent";

export default function Home() {
  return (
    <div className="flex bg-white min-h-screen font-poppins text-slate-800">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Header />
        <main className="flex-1 p-8 overflow-auto">
          <DashboardContent />
        </main>
      </div>
    </div>
  );
}
