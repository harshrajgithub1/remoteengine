"use client";
import Image from "next/image";
import Link from "next/link";
export default function Sidebar() {
  const menuItems = [
    {
      src: "/assets/img/Vector.svg",
      alt: "icon",
      text: "Hire Engineers",
    },
    {
      src: "/assets/img/Vector (1).svg",
      alt: "icon",
      text: "Interviews",
    },
    {
      src: "/assets/img/Vector (1).svg",
      alt: "icon",
      text: "Your Team",
    },
    {
      src: "/assets/img/Vector (2).svg",
      alt: "icon",
      text: "Saved Profiles",
    },
    {
      src: "/assets/img/Vector (3).svg",
      alt: "icon",
      text: "Organisations",
    },
    {
      src: "/assets/img/Vector (4).svg",
      alt: "icon",
      text: "Billing",
    },
  ];

  const secondMenuItems = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="18"
          viewBox="0 0 24 18"
          fill="none"
          className="flex-shrink-0"
        >
          <path
            d="M4.32002 0.599976C4.11377 0.599976 3.93002 0.731226 3.8644 0.928101L0.984397 9.5681C0.967522 9.61685 0.960022 9.66748 0.960022 9.71998V16.92C0.960022 17.1862 1.17377 17.4 1.44002 17.4H22.56C22.8263 17.4 23.04 17.1862 23.04 16.92V9.72935C23.04 9.7256 23.04 9.72373 23.04 9.71998C23.04 9.66748 23.0325 9.61685 23.0156 9.5681L20.1356 0.928101C20.07 0.731226 19.8863 0.599976 19.68 0.599976H4.32002ZM4.66502 1.55998H19.335L21.8925 9.23997H15.36C15.0938 9.23997 14.88 9.45373 14.88 9.71998C14.88 11.3081 13.5881 12.6 12 12.6C10.4119 12.6 9.12002 11.3081 9.12002 9.71998C9.12002 9.45373 8.90627 9.23997 8.64002 9.23997H2.10752L4.66502 1.55998Z"
            fill="#636363"
          />
        </svg>
      ),
      label: "Notifications",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          className="flex-shrink-0"
        >
          <path
            d="M8 0.5C3.5888 0.5 0 4.0888 0 8.5V11.8144C0 12.6336 0.7176 13.3 1.6 13.3H2.4C2.61217 13.3 2.81566 13.2157 2.96569 13.0657C3.11571 12.9157 3.2 12.7122 3.2 12.5V8.3856C3.2 8.17343 3.11571 7.96994 2.96569 7.81991C2.81566 7.66989 2.61217 7.5856 2.4 7.5856H1.6736C2.1184 4.4896 4.7824 2.1 8 2.1C11.2176 2.1 13.8816 4.4896 14.3264 7.5856H13.6C13.3878 7.5856 13.1843 7.66989 13.0343 7.81991C12.8843 7.96994 12.8 8.17343 12.8 8.3856V13.3C12.8 14.1824 12.0824 14.9 11.2 14.9H9.6V14.1H6.4V16.5H11.2C12.9648 16.5 14.4 15.0648 14.4 13.3C15.2824 13.3 16 12.6336 16 11.8144V8.5C16 4.0888 12.4112 0.5 8 0.5Z"
            fill="#636363"
          />
        </svg>
      ),
      label: "Support",
    },
    {
      icon: (
        <Image
          src="/assets/img/Ellipse 48.jpg"
          alt="icon"
          width={40}
          height={40}
          className="flex-shrink-0"
        />
      ),
      label: "John Doe",
    },
  ];

  return (
    <>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-[193px] h-full flex-shrink: 0 shadow-custom transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
        style={{ border: "1px" }}
      >
        <div className="w-[193px] h-full bg-white pl-[22px] pr-[22px]"
          style={{ overflowY: "auto" }}>
          <div className="inline-flex justify-center items-center gap-1.25 pt-10 hover:cursor-pointer">
            <Image
              src={`/assets/img/icon.png`}
              alt="icon"
              width={20}
              height={19.245}
            />
            <div className="text-black font-montserrat text-base font-semibold leading-none pl-[5px]">
              RemoteEngine
            </div>
          </div>

          <div className="w-[160px] p-2 justify-center items-center gap-2 custom-box inline-flex mt-[50px]">
            <div>
              <Image
                src="/assets/img/icon2.png"
                alt="icon2"
                width={20}
                height={19.245}
                className="flex-shrink-0 hover:cursor-pointer"
              />
            </div>
            <div className="text-black font-montserrat text-xs font-semibold leading-normal hover:cursor-pointer">
              Recall FZCO
            </div>
            <div>
              <Image
                src="/assets/img/downarrow.png"
                alt="downarrow"
                width={20}
                height={20}
                className="pl-[8px] flex-shrink-0 hover:cursor-pointer"
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-[28px] w-[140px] mt-6" style={{overflow: 'auto'}}>
            <ul className="text-black cursor-pointer">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="pb-[28px] flex items-center gap-2 hover:text-[#0F0AEF] hover:font-semibold"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={20}
                    height={20}
                    className="flex-shrink-0"
                  />
                  <span className="pl-[8px] h-[17px] text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-10 pb-10 cursor-pointer">
            <ul>
              {secondMenuItems.map((item, index) => (
                <li
                  key={index}
                  className="text-black flex items-center gap-2 pb-[24px]"
                >
                  {item.icon}
                  <span className="pl-[8px] text-sm hover:text-[#0F0AEF] hover:font-semibold">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}
