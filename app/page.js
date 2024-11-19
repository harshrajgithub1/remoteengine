"use client";
import Carousel from "./components/Carousel";
import Sidebar from "./components/Sidebar";
import Image from "next/image";
import Header from "./components/Header";
import HireEasy from "./components/HireEasy";
import Hiring from "./components/hiring";
import Nis from "./components/nis";

export default function Home() {
  return (
    <>
      <div className="">
        <div className="w-[193px]">
          <Sidebar></Sidebar>

        </div>
      <div className="ml-[193px] bg-white">
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
