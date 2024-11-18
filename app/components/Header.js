"use client";
import Image from "next/image";
import "./../../public/css/custom.css";

export default function Header() {
  return (
    <>
      <section className="inline-flex  w-[1247px] h-[381px] bg-white">
        <div className="w-[600px] h-[230px] pl-[85px] pt-[97px] pb-[54px]">
          <div className="w-[347px]">
            <p className="text-[40px] font-bold mb-6 text-black">
              Hire vetted Devs & AI Engineers
            </p>
          </div>
          <p className="text-[16px] mb-10 font-semibold" style={{ color: "#0F0AEF" }}>
            Start building your dream team
          </p>
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
              style={{ borderRadius: "20px" }}
              className="w-full h-[60px] pt-[18px] pb-[18px] pl-[40px] pr-[20px] border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="pt-[97px] ml-[151px]">
          <div className="w-[371px] h-[137px] pt-[10px] pl-[20px] pr-[20px] pb-[10px]">
            <div className="h-[51px]">
              <p
                className="h-[51px] text-black"
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "17.07px",
                  textAlign: "left",
                  textDecorationSkipInk: "none",
                  textUnderlinePosition: "from-font",
                  color: "#636363",
                }}
              >
                "Partnering with them has been a truly valuable and seamless
                experience. We look forward to continuing our relationship with
                RemoteEngine."
              </p>
            </div>
            <div className="flex items-center mt-4">
              <Image
                src="/assets/img/Girl.jpeg"
                alt="Girl"
                width={52}
                height={52}
                style={{
                  maxHeight: "52px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <div className="pl-[10px]">
                <p
                  className="text-[12px] text-blusse"
                  style={{ color: "#0F0AEF" }}
                >
                  Ritwik
                </p>
                <p className="text-[12px] text-gray-600">
                  Co-founder, Gulbonda
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
