"use client";
import Sidebar from "@/components/side_comp";
import Card from "@/components/main";
import MyBarChart from "@/components/charts";
import Portfolio from "@/components/moving";
import EventList from "@/components/table";
import BottomNavbar from "@/components/bottom_bar";
import Header from "@/components/header";
import { useState, useEffect } from "react";
const Homepage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // Set mobile state based on width
  };

  useEffect(() => {
    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener
    };
  }, []);
  return (
    <>
      {isMobile ? (
        <>
          <Header />
          <div className="space-y-4 mt-[64px]">
            <h1 className="text-2xl mb-[12px]  mx-[16px] mt-[40px] md:mx-0 ">
              Welcome! here’s your summary
            </h1>
            <Card />
            <h1 className="mt-[22px] h-[12px] mx-[16px] text-[18px] font-medium">
              Event Registrations per month
            </h1>
            <MyBarChart />
            <Portfolio />
            <EventList />
            <BottomNavbar />
          </div>
        </>
      ) : (
        <>
          <div className="flex">
            <Sidebar />
            <div className="flex-1 bg-transparent ml-[268px]">
              <h1 className="text-2xl mt-[40px]">
                Welcome! here’s your summary
              </h1>
              <div className="flex mt-[24px] justify-between">
                <Card />
              </div>
              <h1 className="mt-[22px] h-[12px] text-[18px] font-medium">
                Event Registrations per month
              </h1>
              <div className="flex gap-[12px] mt-[26px] ">
                <MyBarChart />
                <Portfolio />
              </div>
              <EventList />
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Homepage;
