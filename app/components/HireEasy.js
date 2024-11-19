"use client";
import Image from "next/image";

export default function HireEasy() {
  
  const steps = [
    {
      step: "Step 1",
      text: "Enter requirement",
      icon: "/assets/img/hireeasy.svg",
      additionalContent: (
        <div className="relative">
          <Image
            src="/assets/img/search.svg"
            alt="search"
            width={16}
            height={16}
            className="absolute left-4 top-1/2 transform -translate-y-1/2"
          />
          <input
            type="text"
            placeholder="Your prompt here..."
            className="w-[600px] h-[60px] pt-[18px] pb-[18px] pl-[40px] pr-[20px] border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
      ),
    },
    {
      step: "Step 2",
      text: "RemoteEngine shows you the best developers",
      icon: "/assets/img/hireeasy.svg",
    },
    {
      step: "Step 3",
      text: "View & explore detailed analysis of developers",
      icon: "/assets/img/hireeasy.svg",
    },
    {
      step: "Step 4",
      text: "Schedule interview or hire instantly the candidates",
      icon: "/assets/img/hireeasy.svg",
    },
  ];

  return (
    <>
      <div className="ml-[80px] flex items-center gap-[195px] mb-[136.68px]">
        {/* Left Section */}
        <div className="flex flex-col items-start gap-[10px]">
          <div className="w-[120px] h-[120px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="121"
              viewBox="0 0 120 121"
              fill="none"
            >
              <path
                d="M60 5.46001C90.4594 5.46001 115.2 30.2006 115.2 60.66C115.2 91.1194 90.4594 115.86 60 115.86C29.5406 115.86 4.80003 91.1194 4.80003 60.66C4.80003 30.2006 29.5406 5.46001 60 5.46001ZM60 10.26C32.1375 10.26 9.60003 32.7975 9.60003 60.66C9.60003 88.5225 32.1375 111.06 60 111.06C87.8625 111.06 110.4 88.5225 110.4 60.66C110.4 32.7975 87.8625 10.26 60 10.26ZM40.8469 39.0319C41.475 39.0506 42.0657 39.3131 42.4969 39.7631L76.8 74.0662V52.71C76.7906 52.0538 77.0438 51.435 77.5031 50.9756C77.9625 50.5163 78.5906 50.2631 79.2375 50.2725C80.5594 50.2913 81.6188 51.3788 81.6 52.71V79.4944C81.7313 80.2631 81.4781 81.0412 80.9344 81.5944C80.3813 82.1381 79.6031 82.3913 78.8344 82.26H52.05C51.1781 82.2694 50.3719 81.8194 49.9406 81.0694C49.5 80.3194 49.5 79.4006 49.9406 78.6506C50.3719 77.9006 51.1781 77.4506 52.05 77.46H73.4063L39.1031 43.1569C38.3906 42.4631 38.1844 41.4131 38.5688 40.5038C38.9531 39.585 39.8531 39.0038 40.8469 39.0319Z"
                fill="black"
              />
            </svg>
          </div>
          
          <div className="w-[192px] h-[49px] text-black font-bold">
          <p className="text-[40px]">Hire easy</p>
          </div>
        </div>

        {/* Steps Section */}
        <div className="flex flex-col gap-7 w-[660px]">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="flex items-center gap-7]">
                <span className="text-lg font-bold text-black gap-7">{step.step}</span>
                <Image
                  src={step.icon}
                  alt={step.text}
                  width={22.08}
                  height={22.08}
                  className="inline-block"
                />
              </div>
              <h2 className="text-xl font-bold text-[#0F0AEF] gap-7 pt-[28px]">{step.text}</h2>
              {step.additionalContent && <div>{step.additionalContent}</div>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
