"use client";
import React, { useState } from "react";
import Link from "next/link";

const BottomNavbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <nav className="fixed border-t border-[1px] bottom-0 left-0 right-0 h-[98px] bg-white shadow-lg">
      <div className="flex items-center h-full justify-around">
        <Link href="#"  onClick={() => setActiveLink("home")} className={`text-gray-600 flex flex-col items-center  h-full justify-center px-3 py-2 ${activeLink === "home" ? "font-bold text-[#8576FF]  border-t border-t-[3px] border-[#8576FF]" : ""}`}
        >
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.85019 19.2502H17.3502C18.4548 19.2502 19.3502 18.3548 19.3502 17.2502V9.75025L12.1002 4.75024L4.85019 9.75025V17.2502C4.85019 18.3548 5.74562 19.2502 6.85019 19.2502Z"
              stroke="#64748B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.84958 15.7493C9.84958 14.6447 10.745 13.7493 11.8496 13.7493H12.3496C13.4541 13.7493 14.3496 14.6447 14.3496 15.7493V19.2493H9.84958V15.7493Z"
              stroke="#64748B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span className="text-xs">Home</span>
        </Link>
        <Link href="#" onClick={() => setActiveLink("home1")} className={`text-gray-600 flex flex-col items-center  h-full justify-center px-3 py-2 ${activeLink === "home1" ? "font-bold text-[#8576FF]  border-t border-t-[3px] border-[#8576FF]" : ""}`}
>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.30002 12C2.30002 8.229 2.30002 6.343 3.47202 5.172C4.64402 4.001 6.52902 4 10.3 4H14.3C18.071 4 19.957 4 21.128 5.172C22.299 6.344 22.3 8.229 22.3 12V14C22.3 17.771 22.3 19.657 21.128 20.828C19.956 21.999 18.071 22 14.3 22H10.3C6.52902 22 4.64302 22 3.47202 20.828C2.30102 19.656 2.30002 17.771 2.30002 14V12Z"
              stroke="#484554"
              stroke-width="1.5"
            />
            <path
              d="M7.30002 4V2.5M17.3 4V2.5M2.80002 9H21.8"
              stroke="#484554"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M17.8 17C17.8 17.1326 17.7473 17.2598 17.6536 17.3536C17.5598 17.4473 17.4326 17.5 17.3 17.5C17.1674 17.5 17.0402 17.4473 16.9465 17.3536C16.8527 17.2598 16.8 17.1326 16.8 17C16.8 16.8674 16.8527 16.7402 16.9465 16.6464C17.0402 16.5527 17.1674 16.5 17.3 16.5C17.4326 16.5 17.5598 16.5527 17.6536 16.6464C17.7473 16.7402 17.8 16.8674 17.8 17ZM17.8 13C17.8 13.1326 17.7473 13.2598 17.6536 13.3536C17.5598 13.4473 17.4326 13.5 17.3 13.5C17.1674 13.5 17.0402 13.4473 16.9465 13.3536C16.8527 13.2598 16.8 13.1326 16.8 13C16.8 12.8674 16.8527 12.7402 16.9465 12.6464C17.0402 12.5527 17.1674 12.5 17.3 12.5C17.4326 12.5 17.5598 12.5527 17.6536 12.6464C17.7473 12.7402 17.8 12.8674 17.8 13ZM12.8 17C12.8 17.1326 12.7473 17.2598 12.6536 17.3536C12.5598 17.4473 12.4326 17.5 12.3 17.5C12.1674 17.5 12.0402 17.4473 11.9465 17.3536C11.8527 17.2598 11.8 17.1326 11.8 17C11.8 16.8674 11.8527 16.7402 11.9465 16.6464C12.0402 16.5527 12.1674 16.5 12.3 16.5C12.4326 16.5 12.5598 16.5527 12.6536 16.6464C12.7473 16.7402 12.8 16.8674 12.8 17ZM12.8 13C12.8 13.1326 12.7473 13.2598 12.6536 13.3536C12.5598 13.4473 12.4326 13.5 12.3 13.5C12.1674 13.5 12.0402 13.4473 11.9465 13.3536C11.8527 13.2598 11.8 13.1326 11.8 13C11.8 12.8674 11.8527 12.7402 11.9465 12.6464C12.0402 12.5527 12.1674 12.5 12.3 12.5C12.4326 12.5 12.5598 12.5527 12.6536 12.6464C12.7473 12.7402 12.8 12.8674 12.8 13ZM7.80002 17C7.80002 17.1326 7.74734 17.2598 7.65357 17.3536C7.5598 17.4473 7.43263 17.5 7.30002 17.5C7.16741 17.5 7.04023 17.4473 6.94647 17.3536C6.8527 17.2598 6.80002 17.1326 6.80002 17C6.80002 16.8674 6.8527 16.7402 6.94646 16.6464C7.04023 16.5527 7.16741 16.5 7.30002 16.5C7.43263 16.5 7.5598 16.5527 7.65357 16.6464C7.74734 16.7402 7.80002 16.8674 7.80002 17ZM7.80002 13C7.80002 13.1326 7.74734 13.2598 7.65357 13.3536C7.5598 13.4473 7.43263 13.5 7.30002 13.5C7.16741 13.5 7.04023 13.4473 6.94647 13.3536C6.8527 13.2598 6.80002 13.1326 6.80002 13C6.80002 12.8674 6.8527 12.7402 6.94647 12.6464C7.04023 12.5527 7.16741 12.5 7.30002 12.5C7.43263 12.5 7.5598 12.5527 7.65357 12.6464C7.74734 12.7402 7.80002 12.8674 7.80002 13Z"
              fill="#484554"
              stroke="#484554"
            />
          </svg>

          <span className="text-xs">Events</span>
        </Link>
        <Link href="#" onClick={() => setActiveLink("home2")} className={`text-gray-600 flex flex-col items-center  h-full justify-center px-3 py-2 ${activeLink === "home2" ? "font-bold text-[#8576FF]  border-t border-t-[3px] border-[#8576FF]" : ""}`}
>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 10C12.7091 10 14.5 8.20914 14.5 6C14.5 3.79086 12.7091 2 10.5 2C8.29086 2 6.5 3.79086 6.5 6C6.5 8.20914 8.29086 10 10.5 10Z"
              stroke="#484554"
              stroke-width="1.5"
            />
            <path
              d="M10.5 21C14.366 21 17.5 19.2091 17.5 17C17.5 14.7909 14.366 13 10.5 13C6.63401 13 3.5 14.7909 3.5 17C3.5 19.2091 6.63401 21 10.5 21Z"
              stroke="#484554"
              stroke-width="1.5"
            />
            <path
              d="M19.5 2C19.5 2 21.5 3.2 21.5 6C21.5 8.8 19.5 10 19.5 10M17.5 4C17.5 4 18.5 4.6 18.5 6C18.5 7.4 17.5 8 17.5 8"
              stroke="#484554"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>

          <span className="text-xs">Speaker</span>
        </Link>
        <Link href="#" onClick={() => setActiveLink("home3")} className={`text-gray-600 flex flex-col items-center  h-full justify-center px-3 py-2 ${activeLink === "home3" ? "font-bold text-[#8576FF]  border-t border-t-[3px] border-[#8576FF]" : ""}`}
>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.7 10C3.7 6.229 3.7 4.343 4.872 3.172C6.044 2.001 7.929 2 11.7 2H13.7C17.471 2 19.357 2 20.528 3.172C21.699 4.344 21.7 6.229 21.7 10V14C21.7 17.771 21.7 19.657 20.528 20.828C19.356 21.999 17.471 22 13.7 22H11.7C7.929 22 6.043 22 4.872 20.828C3.701 19.656 3.7 17.771 3.7 14V10Z"
              stroke="#484554"
              stroke-width="1.5"
            />
            <path
              d="M8.7 10H16.7M8.7 14H13.7"
              stroke="#484554"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>

          <span className="text-xs">Reports</span>
        </Link>
        <Link href="#" onClick={() => setActiveLink("home4")} className={`text-gray-600 flex flex-col items-center   h-full justify-center px-3 py-2 ${activeLink === "home4" ? "font-bold text-[#8576FF]  border-t border-t-[3px] border-[#8576FF]" : ""}`}
>
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_19214)">
              <rect x="1" y="1" width="32" height="32" rx="16" fill="#F3F4F6" />
              <mask
                id="mask0_1_19214"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="1"
                y="1"
                width="32"
                height="32"
              >
                <circle cx="17" cy="17" r="16" fill="#F1F5F9" />
              </mask>
              <g mask="url(#mask0_1_19214)">
                <path
                  d="M33 28.992V33.0013H1V29.0066C2.86127 26.5192 5.27721 24.5004 8.05572 23.1107C10.8342 21.721 13.8987 20.9987 17.0053 21.0013C23.544 21.0013 29.352 24.14 33 28.992ZM22.336 13C22.336 14.4144 21.7741 15.771 20.7739 16.7712C19.7737 17.7714 18.4172 18.3333 17.0027 18.3333C15.5882 18.3333 14.2316 17.7714 13.2314 16.7712C12.2312 15.771 11.6693 14.4144 11.6693 13C11.6693 11.5855 12.2312 10.2289 13.2314 9.22872C14.2316 8.22853 15.5882 7.66663 17.0027 7.66663C18.4172 7.66663 19.7737 8.22853 20.7739 9.22872C21.7741 10.2289 22.336 11.5855 22.336 13Z"
                  fill="#CBD5E1"
                />
              </g>
            </g>
            <rect
              x="0.5"
              y="0.5"
              width="33"
              height="33"
              rx="16.5"
              stroke="#E2E8F0"
            />
            <defs>
              <clipPath id="clip0_1_19214">
                <rect x="1" y="1" width="32" height="32" rx="16" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <span className="text-xs">Profile</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNavbar;
