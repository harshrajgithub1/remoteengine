"use client";
import Image from "next/image";

export default function Hiring() {
  const cards = [
    {
      id: 1,
      title: "Individual Hiring",
      description:
        "Hire number of remote developers to scale your tech team easily. Enter your requirement and we find the best developer that fits for you.",
      buttonText: "Start Hiring",
      imageSrc: "/assets/img/Frame.jpg",
    },
    {
      id: 2,
      title: "Hire a Team",
      description:
        "Hire a Team/Pod for your project. Enter your requirement and let our intelligent AI assemble the best team for you to hire.",
      buttonText: "Start a Pod",
      imageSrc: "/assets/img/hire.svg",
    },
  ];

  return (
    <div className="flex justify-center gap-[58px] mx-auto max-w-[1120px] mt-[189px] mb-[189px] ml-20">
      {cards.map((card) => (
        <div
          key={card.id}
          className="w-[514.5px] p-5 border border-gray-200 rounded-lg shadow-md dark:border-blue-800"
        >
          <h5 className="text-black font-montserrat text-[20px] font-semibold mb-4 text-center tracking-tight">
            {card.title}
          </h5>
          <div className="flex justify-center mb-4">
            <Image
              src={card.imageSrc}
              alt={card.title}
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <p className="text-black text-center mb-6">{card.description}</p>
          {card.id === 2 && <br />}
          <div
            className="flex justify-center items-center gap-2 w-full"
            style={{
              display: "flex",
              padding: "12px",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              alignSelf: "stretch",
            }}
          >
            <button
              className="w-full max-w-[474.5px] h-[44px] px-4 py-2 text-sm font-semibold text-white"
              style={{
                borderRadius: "10px",
                background: "var(--Blue-RE, #0F0AEF)",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              }}
            >
              {card.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
