"use client";
import Image from "next/image";

export default function Card() {
  const cardData = [
    {
      id: 1,
      role: "Full stack developer",
      name: "Rita",
      score: 90,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla",
      experience: "4+ years",
      availability: "Full-time",
      preVetted: "Yes",
      skills: ["NodeJS", "React", "Next.js"],
      profileLink: "View Profile",
      price: "$1000",
      pricePeriod: "per month",
      imageSrc: "/assets/img/Girl.jpeg",
    },
    {
      id: 2,
      role: "Full stack developer",
      name: "Aaron",
      score: 90,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla",
      experience: "4+ years",
      availability: "Full-time",
      preVetted: "Yes",
      skills: ["NodeJS", "React", "Next.js"],
      profileLink: "View Profile",
      price: "$1000",
      pricePeriod: "per month",
      imageSrc: "/assets/img/Image2.jpeg",
    },
    {
      id: 3,
      role: "Full stack developer",
      name: "Ria",
      score: 90,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla",
      experience: "4+ years",
      availability: "Full-time",
      preVetted: "Yes",
      skills: ["NodeJS", "React", "Next.js"],
      profileLink: "View Profile",
      price: "$1000",
      pricePeriod: "per month",
      imageSrc: "/assets/img/Image3.jpeg",
    },
    
  ];

  return (
    <div className="ml-[80px] mt-[70px]">
    <p className="text-[20px] text-[#636363]">
        Top 1% full stack developers ready for hire
        <Image
          src="/assets/img/arrow.svg"
          width={24}
          height={24}
          alt="Arrow"
          className="inline-flex ml-2"
        />
      </p>
    <div className="flex flex-wrap gap-4 mt-10">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="w-80 h-[400px] bg-gradient-to-b from-[#0f0aef] via-[#0b07bc] to-[#4845c0] rounded-[20px] border border-[#b3b3b3]/50 flex-col justify-start items-center gap-7 inline-flex"
        >
          <div className="self-stretch h-8 p-1 bg-[#eeedff]/30 rounded-tl-[20px] rounded-tr-[20px] justify-center items-center gap-2.5 inline-flex">
            <div className="px-2 justify-center items-center gap-2.5 flex">
              <div className="text-white text-sm font-medium font-['Montserrat']">
                {card.role}
              </div>
            </div>
          </div>
          <div className="h-[330px] relative flex flex-col justify-center items-center">
            <div className="left-[107px] top-0 absolute text-white text-base font-semibold font-['Montserrat']">
              {card.name}
            </div>
            <div className="left-[258px] top-[-12px] absolute flex-col justify-start items-start inline-flex">
              <div className="justify-center items-end gap-0.5 inline-flex">
                <div className="text-white text-[10px] font-medium font-['Montserrat']">
                  Score
                </div>
                <div className="w-3 h-3 relative" />
              </div>
              <div>
                <span>{card.score}</span>
                <span>/100</span>
              </div>
            </div>
            <div className="w-80 h-[275px] left-0 relative">
              <div className="w-80 h-[312px] px-5 pt-11 pb-5 left-0 top-0 absolute bg-white rounded-[20px] shadow border border-[#b3b3b3]/50 flex-col justify-end items-start gap-4 inline-flex">
                <div className="self-stretch h-[247px] flex-col justify-end items-start gap-6 flex">
                  <div className="self-stretch justify-start items-center gap-10 inline-flex">
                    <div className="w-[271px] flex-col justify-center items-start gap-1 inline-flex">
                      <div className="self-stretch text-[#626262] text-xs font-normal font-['Montserrat']">
                        {card.description}
                      </div>
                    </div>
                  </div>
                  <div className="justify-start items-center gap-10 inline-flex">
                    <div className="flex-col justify-center items-start gap-1 inline-flex">
                      <div className="text-[#626262] text-xs font-medium font-['Montserrat']">
                        Exp.
                      </div>
                      <div className="text-black text-sm font-medium font-['Montserrat']">
                        {card.experience}
                      </div>
                    </div>
                    <div className="flex-col justify-center items-start gap-1 inline-flex">
                      <div className="text-[#626262] text-xs font-medium font-['Montserrat']">
                        Availability
                      </div>
                      <div className="text-black text-sm font-medium font-['Montserrat']">
                        {card.availability}
                      </div>
                    </div>
                    <div className="flex-col justify-center items-start gap-1 inline-flex">
                      <div className="text-[#626262] text-xs font-medium font-['Montserrat']">
                        Pre-Vetted
                      </div>
                      <div className="text-black text-sm font-medium font-['Montserrat']">
                        {card.preVetted}
                      </div>
                    </div>
                  </div>
                  <div className="h-[42px] flex-col justify-center items-start gap-1 flex">
                    <div className="text-[#626262] text-xs font-medium font-['Montserrat']">
                      Skills
                    </div>
                    <div className="w-[270px] justify-start items-center gap-3 inline-flex">
                      {card.skills.map((skill, index) => (
                        <div
                          key={index}
                          className="px-2 py-1 bg-[#e5e4e4] rounded shadow justify-center items-center gap-2.5 flex"
                        >
                          <div className="text-black text-xs font-medium font-['Montserrat']">
                            {skill}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="justify-start items-start gap-3 inline-flex">
                    <div className="justify-start items-start gap-2.5 flex">
                      <div className="h-[37px] px-2 py-2.5 bg-white rounded-lg shadow border border-[#e5e4e4] justify-center items-center gap-2.5 flex">
                        <div className="text-[#626262] text-sm font-semibold font-['Montserrat']">
                          {card.profileLink}
                        </div>
                      </div>
                    </div>
                    <div className="flex-col justify-center items-center gap-1 inline-flex">
                      <div className="justify-start items-center gap-3 inline-flex">
                        <div className="text-black text-sm font-bold font-['Montserrat']">
                          {card.price}
                        </div>
                      </div>
                      <div className="text-black text-[10px] font-medium font-['Montserrat']">
                        {card.pricePeriod}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Image
                className="w-[72px] h-[72px] left-[23px] top-[-44px] absolute rounded-full shadow border-2 border-white"
                src={card.imageSrc}
                alt="Profile"
                width={72}
                height={72}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
