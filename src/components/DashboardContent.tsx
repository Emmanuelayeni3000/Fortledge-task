"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Column, Pie, Line } from "@ant-design/charts";
import { Separator } from "@/components/ui/separator";

const DashboardContent = () => {
  const revenueData = [
    { day: "01", value: 30, type: "Last 6 days" },
    { day: "01", value: 15, type: "Last Week" },
    { day: "02", value: 22, type: "Last 6 days" },
    { day: "02", value: 35, type: "Last Week" },
    { day: "03", value: 38, type: "Last 6 days" },
    { day: "03", value: 18, type: "Last Week" },
    { day: "04", value: 28, type: "Last 6 days" },
    { day: "04", value: 32, type: "Last Week" },
    { day: "05", value: 50, type: "Last 6 days" },
    { day: "05", value: 22, type: "Last Week" },
    { day: "06", value: 58, type: "Last 6 days" },
    { day: "06", value: 25, type: "Last Week" },
    { day: "07", value: 42, type: "Last 6 days" },
    { day: "07", value: 28, type: "Last Week" },
    { day: "08", value: 32, type: "Last 6 days" },
    { day: "08", value: 38, type: "Last Week" },
    { day: "09", value: 38, type: "Last 6 days" },
    { day: "09", value: 18, type: "Last Week" },
    { day: "10", value: 28, type: "Last 6 days" },
    { day: "10", value: 35, type: "Last Week" },
    { day: "11", value: 48, type: "Last 6 days" },
    { day: "11", value: 28, type: "Last Week" },
    { day: "12", value: 68, type: "Last 6 days" },
    { day: "12", value: 25, type: "Last Week" },
  ];

  const revenueConfig = {
    data: revenueData,
    xField: "day",
    yField: "value",
    colorField: "type",
    group: true,
    scale: {
      color: {
        range: ["#5A6ACF", "#D8D9DB"],
      },
    },
    columnWidthRatio: 0.6,
    axis: {
      y: { labelFormatter: () => "", grid: null, line: null, tick: null },
      x: { label: { style: { fill: '#9CA3AF', fontSize: 11 } }, line: null, tick: null }
    },
    legend: false,
    style: {
        radiusTopLeft: 0,
        radiusTopRight: 0,
    }
  };

  const orderTimeDetails: Record<string, { time: string; orders: string }> = {
    "Afternoon": { time: "1pm - 4pm", orders: "1.890" },
    "Evening": { time: "5pm - 9pm", orders: "1.512" },
    "Morning": { time: "6am - 12pm", orders: "1.323" },
  };

  const [activeSection, setActiveSection] = useState("Afternoon");
  const [isHovering, setIsHovering] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  // Close tooltip when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        setShowTooltip(false);
      }
    };

    if (showTooltip) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [showTooltip]);

  const orderTimeData = [
    { type: "Afternoon", value: 40 },
    { type: "Evening", value: 32 },
    { type: "Morning", value: 28 },
  ];

  const orderTimeConfig = {
    data: orderTimeData,
    angleField: "value",
    colorField: "type",
    innerRadius: 0.65,
    radius: 0.85,
    startAngle: Math.PI * 0.5,
    endAngle: Math.PI * 2.5,
    scale: {
      color: {
        range: ["#5a6acf", "#c7ceff", "#8593ed"],
      },
    },
    legend: false,
    label: false,
    tooltip: false,
    statistic: false,
    interaction: {
      elementHighlight: true,
    },
    onReady: (plot: { on: (event: string, callback: (evt: { data?: { data: { type: string } } }) => void) => void }) => {
      plot.on('element:mouseenter', (evt: { data?: { data: { type: string } } }) => {
        if (evt.data?.data?.type === "Afternoon") {
          setIsHovering(true);
        }
      });
      plot.on('element:mouseleave', () => {
        setIsHovering(false);
      });
    },
  };

  const orderLineData = [
    { day: "01", value: 1600, type: "Last 6 days" },
    { day: "02", value: 1400, type: "Last 6 days" },
    { day: "03", value: 2200, type: "Last 6 days" },
    { day: "04", value: 2400, type: "Last 6 days" },
    { day: "05", value: 1500, type: "Last 6 days" },
    { day: "06", value: 2900, type: "Last 6 days" },
    { day: "01", value: 2000, type: "Last Week" },
    { day: "02", value: 2300, type: "Last Week" },
    { day: "03", value: 1800, type: "Last Week" },
    { day: "04", value: 2000, type: "Last Week" },
    { day: "05", value: 2200, type: "Last Week" },
    { day: "06", value: 2000, type: "Last Week" },
  ];

  const orderLineConfig = {
    data: orderLineData,
    xField: "day",
    yField: "value",
    colorField: "type",
    scale: {
      color: {
        range: ["#5A6ACF", "#CBCBCB"],
      },
    },
    smooth: false,
    axis: {
      y: { labelFormatter: () => "", grid: null, line: null, tick: null },
      x: { label: { style: { fill: '#9CA3AF', fontSize: 10 } }, line: null, tick: null }
    },
    legend: false,
    point: false,
    lineStyle: {
        lineWidth: 2.5,
    }
  };

  return (
    <div className="bg-white overflow-hidden">
      <h1 className="text-xl font-semibold text-black px-4 md:px-8 pt-6 md:pt-8 pb-4">Dashboard</h1>
      
      <div className="flex flex-col lg:flex-row lg:items-stretch min-h-fit lg:min-h-[400px]">
        <div className="flex-[2] p-4 md:p-8">
            <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-lg font-normal text-black mb-1">Revenue</h2>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-2xl font-bold text-slate-800">
                      IDR 7.852.000
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-green-500 font-medium">↑ 2.1%</span>
                    <span className="text-gray-400 text-xs">vs last week</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-3">
                    Sales from 1-12 Dec, 2020
                  </p>
                </div>
                <button className="text-sm font-medium text-[#5A6ACF] bg-[#FBFCFE] px-4 py-2 border border-[#dde4f0] rounded-[5px]  transition-colors">
                  View Report
                </button>
            </div>
            
            <div className="h-52">
                <Column {...revenueConfig} />
            </div>
            <div className="flex items-center gap-6 mt-2">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                    <span className="text-xs text-slate-500">Last 6 days</span>
                </div>
                 <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                    <span className="text-xs text-slate-500">Last Week</span>
                </div>
            </div>
        </div>

         <div className="hidden lg:block w-px bg-gray-200 self-stretch" />
         <Separator orientation="horizontal" className="lg:hidden w-full h-px bg-gray-200" />

        <div className="flex-[1] py-6 md:py-8 px-4 md:px-[1.0625rem] flex flex-col">
            <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-lg font-normal text-black mb-1">Order Time</h2>
                  <p className="text-xs text-gray-400">From 1-6 Dec, 2020</p>
                </div>
                <button className="text-sm font-medium text-[#5A6ACF] bg-[#FBFCFE] px-4 py-2 border border-[#dde4f0] rounded-[5px] transition-colors">
                  View Report
                </button>
            </div>
            
            <div className="flex-1 flex items-center justify-center relative">
               <div className="w-48 h-48 relative" ref={tooltipRef}>
                    <Pie {...orderTimeConfig} />
                    <button 
                      type="button"
                      className="absolute top-1/4 right-0 w-20 h-28 cursor-pointer bg-transparent border-0 outline-none"
                      style={{ touchAction: 'manipulation' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowTooltip(prev => !prev);
                      }}
                      onMouseEnter={() => {
                        if (window.matchMedia('(hover: hover)').matches) {
                          setShowTooltip(true);
                        }
                      }}
                      onMouseLeave={() => {
                        if (window.matchMedia('(hover: hover)').matches) {
                          setShowTooltip(false);
                        }
                      }}
                      aria-label="Show order time details"
                    />
                    {showTooltip && (
                      <div 
                        className="absolute -top-2 right-0 translate-x-1/2 bg-[#363B64] text-white px-5 py-4 rounded-xl shadow-lg z-50 border-0"
                        style={{ minWidth: '140px' }}
                      >
                        <p className="text-base font-normal">Afternoon</p>
                        <p className="text-sm text-slate-400">1pm - 4pm</p>
                        <p className="text-xl font-normal mt-2">1.890 orders</p>
                        <div 
                          className="absolute bottom-0 left-4 w-0 h-0 translate-y-full"
                          style={{
                            borderLeft: '8px solid transparent',
                            borderRight: '8px solid transparent',
                            borderTop: '10px solid #363B64',
                          }}
                        />
                      </div>
                    )}
               </div>
            </div>

            <div className="flex items-center justify-center gap-6 mt-4">
                 <div className="flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                     <span className="text-xs text-slate-500">Afternoon</span>
                     <span className="text-xs font-semibold text-slate-600">40%</span>
                 </div>
                 <div className="flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-indigo-300"></span>
                     <span className="text-xs text-slate-500">Evening</span>
                     <span className="text-xs font-semibold text-slate-600">32%</span>
                 </div>
                 <div className="flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-indigo-100"></span>
                     <span className="text-xs text-slate-500">Morning</span>
                     <span className="text-xs font-semibold text-slate-600">28%</span>
                 </div>
            </div>
        </div>
      </div>

      <Separator orientation="horizontal" className="w-full h-px bg-gray-200" />

      <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap lg:items-stretch min-h-fit lg:min-h-[350px]">
         <div className="flex-[1] p-4 md:p-8 min-w-[280px] md:min-w-[50%] lg:min-w-0">
           <h2 className="text-lg font-normal text-black mb-1">Your Rating</h2>
           <p className="text-xs text-gray-400 mb-6">Lorem ipsum dolor sit amet, consectetur</p>
           
           <div className="w-full h-64 relative flex items-center justify-center">
              <svg viewBox="0 0 340 260" className="w-full h-full">
                <circle cx="80" cy="183" r="52" fill="#2FBFDE" fillOpacity="0.9" />
                <circle cx="80" cy="183" r="58" fill="none" stroke="#2FBFDE" strokeWidth="3" strokeDasharray="220 145" transform="rotate(270 80 183)" strokeLinecap="round" />
                <text x="80" y="178" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">92%</text>
                <text x="80" y="198" textAnchor="middle" fill="white" fontSize="10">Packaging</text>
                
                <circle cx="210" cy="120" r="68" fill="#F99C30" fillOpacity="0.9" />
                <circle cx="210" cy="120" r="74" fill="none" stroke="#F99C30" strokeWidth="3" strokeDasharray="280 185" transform="rotate(270 210 120)" strokeLinecap="round" />
                <text x="210" y="113" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">85%</text>
                <text x="210" y="138" textAnchor="middle" fill="white" fontSize="12">Food Taste</text>
                
                <circle cx="118" cy="75" r="42" fill="#6463D6" fillOpacity="0.9" />
                <circle cx="118" cy="75" r="48" fill="none" stroke="#6463D6" strokeWidth="3" strokeDasharray="180 120" transform="rotate(270 118 75)" strokeLinecap="round" />
                <text x="118" y="68" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">85%</text>
                <text x="118" y="85" textAnchor="middle" fill="white" fontSize="9">Hygiene</text>
              </svg>
           </div>
         </div>

         <div className="hidden lg:block w-px bg-gray-200 self-stretch" />
         <Separator orientation="horizontal" className="lg:hidden w-full h-px bg-gray-200" />

         <div className="flex-[1] p-4 md:p-8 min-w-[280px] md:min-w-[50%] lg:min-w-0">
           <h2 className="text-lg font-normal text-black mb-1">Most Ordered Food</h2>
           <p className="text-xs text-gray-400 mb-6">Adipiscing elit, sed do eiusmod tempor</p>
           
           <div className="space-y-5">
              {[
                  { name: "Fresh Salad Bowl", price: "IDR 45.000", image: "/images/fresh-salad-bowl.png" },
                  { name: "Chicken Noodles", price: "IDR 75.000", image: "/images/chicken-noodles.png" },
                  { name: "Smoothie Fruits", price: "IDR 45.000", image: "/images/smoothie-fruits.png" },
                  { name: "Hot Chicken Wings", price: "IDR 45.000", image: "/images/hot-chicken-wings.png" },
              ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                      <div className="w-10 h-10 relative rounded-full overflow-hidden shrink-0">
                          <Image src={item.image} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                          <h4 className="text-sm font-medium text-slate-700">{item.name}</h4>
                      </div>
                      <span className="text-sm text-gray-400">{item.price}</span>
                  </div>
              ))}
           </div>
         </div>

         <div className="hidden lg:block w-px bg-gray-200 self-stretch" />
         <Separator orientation="horizontal" className="md:hidden w-full h-px bg-gray-200" />

         <div className="flex-[1] p-4 md:p-8 min-w-[280px] md:w-full lg:w-auto lg:min-w-0">
             <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-lg font-normal text-black mb-1">Order</h2>
                  <h3 className="text-2xl font-bold text-slate-800">2.568</h3>
                  <div className="flex items-center gap-2 text-sm mt-1">
                    <span className="text-red-500 font-medium">↓ 2.1%</span>
                    <span className="text-gray-400 text-xs">vs last week</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-3">
                    Sales from 1-6 Dec, 2020
                  </p>
                </div>
                 <button className="text-sm font-medium text-[#5A6ACF] bg-[#FBFCFE] px-4 py-2 border border-[#dde4f0] rounded-[5px] transition-colors">
                  View Report
                </button>
              </div>
              <div className="h-32">
                 <Line {...orderLineConfig} />
              </div>
              <div className="flex items-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#5A6ACF]"></span>
                    <span className="text-xs text-slate-500">Last 6 days</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#CBCBCB]"></span>
                    <span className="text-xs text-slate-500">Last Week</span>
                </div>
              </div>
         </div>
      </div>
    </div>
  );
};

export default DashboardContent;
