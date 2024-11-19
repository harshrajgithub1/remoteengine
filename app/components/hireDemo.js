"use client"
import Image from "next/image"
export default function HireDemo(){
    return(
        <>  
        <div className="w-[1067px] h-[460.32px] justify-start items-center gap-[195px] inline-flex">
  <div className="flex-col justify-start items-start gap-2.5 inline-flex">
    <div className="w-[120px] h-[120px] relative origin-top-left rotate-180" >
        <Image
          src={`/assets/img/hireDemo.svg`}
          width={120}
          height={120}
          className=""
        />

        </div>
    <div className="text-black text-[40px] font-bold font-['Montserrat']">Hire easy</div>
  </div>
  <div className="justify-start items-start gap-20 flex">
    <div className="flex-col justify-start items-start gap-7 inline-flex">
      <div className="p-px origin-top-left rotate-180 justify-start items-center gap-2.5 inline-flex">
        <div className="origin-top-left rotate-180 text-black text-base font-medium font-['Montserrat']">Step 1</div>
      </div>
      <div className="self-stretch text-[#0f0aef] text-base font-semibold font-['Montserrat']">Enter requirement</div>
      <div className="w-[600px] h-[60px] pl-5 pr-[396px] py-[18px] bg-white rounded-[20px] shadow border border-[#b3b3b3] justify-start items-center inline-flex">
        <div className="justify-center items-center gap-2.5 inline-flex">
          <div className="p-1 justify-center items-center gap-2.5 flex" />
          <div className="text-[#626262] text-base font-normal font-['Montserrat']">Your prompt here..</div>
        </div>
      </div>
      <div className="p-px origin-top-left rotate-180 justify-start items-center gap-2.5 inline-flex">
        <div className="origin-top-left rotate-180 text-black text-base font-medium font-['Montserrat']">Step 2</div>
      </div>
      <div className="text-[#0f0aef] text-base font-semibold font-['Montserrat']">RemoteEngine shows you the best developers</div>
      <div className="p-px origin-top-left rotate-180 justify-start items-center gap-2.5 inline-flex">
        <div className="origin-top-left rotate-180 text-black text-base font-medium font-['Montserrat']">Step 3</div>
      </div>
      <div className="self-stretch text-[#0f0aef] text-base font-semibold font-['Montserrat']">View & explore detailed analysis of developers</div>
      <div className="p-px origin-top-left rotate-180 justify-start items-center gap-2.5 inline-flex">
        <div className="origin-top-left rotate-180 text-black text-base font-medium font-['Montserrat']">Step 4</div>
      </div>
      <div className="self-stretch text-[#0f0aef] text-base font-semibold font-['Montserrat']">Schedule interview or hire instantly the candidates</div>
    </div>
  </div>
</div>
        </>
    )
}