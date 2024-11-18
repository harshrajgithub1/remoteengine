"use client";
import Image from "next/image";

export default function Carousel() {
  const developers = [
    {
      name: "Rita",
      score: 90,
      bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.",
      experience: "4+ years",
      availability: "Full-time",
      preVetted: "Yes",
      skills: ["NodeJS", "React", "React"],
      price: 1000,
      image: "/assets/img/Image2.jpeg",
    },
    {
      name: "Aaron",
      score: 90,
      bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.",
      experience: "4+ years",
      availability: "Full-time",
      preVetted: "Yes",
      skills: ["NodeJS", "React", "React"],
      price: 1000,
      image: "/assets/img/Image2.jpeg",
    },
    {
      name: "Ria",
      score: 90,
      bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.",
      experience: "4+ years",
      availability: "Full-time",
      preVetted: "Yes",
      skills: ["NodeJS", "React", "React"],
      price: 1000,
      image: "/assets/img/Image3.jpeg",
    },
  ];

  return (
    <div className="w-[1120px] ml-[80px] mt-[70px]">
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

      <div className="flex items-center mt-10 gap-[56px]">
        {developers.map((developer, index) => (
          <div
            key={index}
            className="w-80 h-[400px] bg-gradient-to-b from-[#4846C1] via-[#4846C1] to-[#4845c0] rounded-[20px] border border-[#b3b3b3]/50 flex flex-col items-center"
          >
            {/* Developer Role */}
            <div className="self-stretch h-8 p-1 bg-[#eeedff]/30 rounded-tl-[20px] rounded-tr-[20px] flex justify-center items-center">
              <span className="text-white text-sm font-medium font-['Montserrat']">
                Full stack developer
              </span>
            </div>

            {/* Developer Info */}
            <div className="relative w-full px-5 pt-11 pb-5 bg-white rounded-[20px] shadow border border-[#b3b3b3]/50 flex flex-col gap-6 mt-[55px]">
              <img
                className="absolute w-[72px] h-[72px] -top-[44px] left-5 rounded-full shadow border-2 border-white"
                src={developer.image}
                alt={`${developer.name} Profile`}
              />
              <div
                className="left-[107px] absolute text-white text-base font-semibold font-['Montserrat']"
                style={{ top: "-30px" }}
              >
                {developer.name}
              </div>
              <div className="left-[258px] top-[-45px] absolute flex-col justify-start items-start inline-flex">
                <div className="justify-center items-end gap-0.5 inline-flex">
                  <div className="text-white text-[10px] font-['Montserrat'] font-semibold">
                    Score
                  </div>
                  <Image
                   src={`/assets/img/score.svg`}
                   alt="score"
                   width={12}
                   height={12}
                  />
                  <div className="w-3 h-3 relative" />
                </div>
                <div>
                  <span class="text-white text-base font-bold font-['Montserrat']">
                    90
                  </span>
                  <span class="text-white text-[8px] font-bold font-['Montserrat']">
                    /100
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[#626262] text-xs font-normal font-['Montserrat'] leading-relaxed">
                  {developer.bio}
                </p>
              </div>

              <div className="flex justify-between">
                {[
                  { label: "Exp.", value: developer.experience },
                  { label: "Availability", value: developer.availability },
                  { label: "Pre-Vetted", value: developer.preVetted },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-start gap-1">
                    <span className="text-[#626262] text-xs font-medium font-['Montserrat']">
                      {item.label}
                    </span>
                    <span className="text-black text-sm font-medium font-['Montserrat']">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[#626262] text-xs font-medium font-['Montserrat']">
                  Skills
                </span>
                <div className="flex gap-3 flex-wrap">
                  {developer.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="px-2 py-1 bg-[#e5e4e4] rounded shadow text-black text-xs font-medium font-['Montserrat']"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <button className="px-4 py-2 bg-white rounded-lg shadow text-[#626262] text-sm font-semibold font-['Montserrat']">
                  View Profile
                </button>
                <div className="flex flex-col items-center">
                  <span className="text-black text-sm font-bold font-['Montserrat']">
                    ${developer.price}
                  </span>
                  <span className="text-black text-[10px] font-medium font-['Montserrat']">
                    per month
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
