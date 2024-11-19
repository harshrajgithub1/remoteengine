"use client";
import Carousel from "./components/Carousel";
import Sidebar from "./components/Sidebar";
import Image from "next/image";
import Header from "./components/Header";
import HireEasy from "./components/HireEasy";
import Hiring from "./components/hiring";
// import HireDemo from "./components/hireDemo";
import Card from "./components/Card";

export default function Home() {
  return (
    <>
      <div className="">
        <div className="w-[193px]">
          <Sidebar></Sidebar>

        </div>
      <div className="ml-[193px] bg-white">
        <Header/>
        
        <Card/>
         <Hiring/>
      
          <HireEasy/>
          <Card/>
        {/* <HireDemo/>  */}
        
      </div>
        
        
       
        <div>
        </div>
      </div>
    </>
  );
}
