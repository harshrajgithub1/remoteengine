"use client";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Sidebar from "./components/Sidebar";
import Image from "next/image";
import Header from "./components/Header";
import HireEasy from "./components/HireEasy";
import Hiring from "./components/hiring";

export default function Home() {
  return (
    <>
      <div className="w-[1440px] h-[3351px]">
      <Sidebar></Sidebar>
      <div className="w-[1247px] ml-[193px] bg-white">
        <Header/>
        <Carousel/>
        <Hiring/>
          <HireEasy/>
          <Carousel/>
         
      </div>
        
        
       
        <div>
        </div>
      </div>
    </>
  );
}
