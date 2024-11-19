"use client";
import Image from "next/image";

export default function Nis() {
  const items = [
    {
      title: "Individual Hiring",
      description:
        "Hire remote developers to scale your tech team easily. Enter your requirement, and we’ll find the best developer that fits your needs.",
      imageSrc: "/assets/img/individualHiring.svg",
      buttonText: "Start Hiring",
    },
    {
      title: "Hire a Team",
      description:
        "Hire a Team/Pod for your project. Enter your requirement and let our intelligent AI assemble the best team for you to hire.",
      imageSrc: "/assets/img/hireTeam.svg",
      buttonText: "Start a Pod",
    },
    
  ];

  return (
    <>
      <div className="w-[1087px] h-[356px] flex justify-center items-center gap-[58px]">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-[514.5px] h-[356px] rounded-[10px] p-5 flex flex-col justify-between shadow-xl custom-border ml-[80px] mt-[189px] mb-[189px]"
          >
            {/* Individual Hiring Title */}
            <div className="max-w-[172px] h-6 p-1 flex justify-center items-center mx-auto">
              <h5 className="text-black font-semibold">{item.title}</h5>
            </div>

            {/* Image Section */}
            <div className="max-w-[100px] h-[100px] mx-auto">
              <Image
                src={item.imageSrc}
                alt={item.title}
                width={100}
                height={100}
                className="object-contain"
              />
            </div>

            {/* Description Section */}
            <div className="w-full h-auto p-3 flex justify-center items-center">
              <p className="text-black text-center">{item.description}</p>
            </div>

            {/* Start Hiring Button */}
            <button className="w-full h-[44px] bg-[#0F0AEF] text-white font-semibold rounded-lg">
              {item.buttonText}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
