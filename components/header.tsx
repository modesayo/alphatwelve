"use client";
import React, { useState, useRef} from "react";
import { Switch } from "@mui/material";
import ModalComponent from "./modal";

interface NavItem {
  id: number;
  name: string;
  path: string;
  icon: JSX.Element | null;
  icon1: JSX.Element | null;
  action?: () => void;
  render?: () => JSX.Element;
}
const Header = () => {
  const [theme, setTheme] = useState('light');
  const toggleDarkMode = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
};
const logo = '/Logo.jpg'
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleOpen = () => setIsModalOpen(true);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // Reference to the dropdown

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev); // Toggle the dropdown state
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClose = () => {
    setIsOpen(false); // Close the dropdown
    setIsDropdownOpen(false);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const navItems: NavItem[] = [
    {
      id: 1,
      name: "Home",
      path: "/dashboard",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.62516 16.0419H14.3752C15.2956 16.0419 16.0418 15.2957 16.0418 14.3752V8.12519L10.0002 3.95853L3.9585 8.12519V14.3752C3.9585 15.2957 4.70469 16.0419 5.62516 16.0419Z"
            stroke="#64748B"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.12465 13.1244C8.12465 12.2039 8.87085 11.4577 9.79132 11.4577H10.208C11.1285 11.4577 11.8747 12.2039 11.8747 13.1244V16.0411H8.12465V13.1244Z"
            stroke="#64748B"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      icon1: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.62516 16.0419H14.3752C15.2956 16.0419 16.0418 15.2957 16.0418 14.3752V8.12519L10.0002 3.95853L3.9585 8.12519V14.3752C3.9585 15.2957 4.70469 16.0419 5.62516 16.0419Z"
            stroke="#ADA9BB"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.12465 13.1244C8.12465 12.2039 8.87085 11.4577 9.79132 11.4577H10.208C11.1285 11.4577 11.8747 12.2039 11.8747 13.1244V16.0411H8.12465V13.1244Z"
            stroke="#ADA9BB"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 2,
      name: "Events",
      path: "/home",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.12498 5.83334L9.99998 3.95834L11.875 5.83334L9.99998 7.70834L8.12498 5.83334Z"
            stroke="#64748B"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.2916 10L14.1666 8.12501L16.0416 10L14.1666 11.875L12.2916 10Z"
            stroke="#64748B"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.12498 14.1667L9.99998 12.2917L11.875 14.1667L9.99998 16.0417L8.12498 14.1667Z"
            stroke="#64748B"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.95831 10L5.83331 8.12501L7.70831 10L5.83331 11.875L3.95831 10Z"
            stroke="#64748B"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      icon1: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.66669 10C1.66669 6.85751 1.66669 5.28584 2.64335 4.31001C3.62002 3.33418 5.19085 3.33334 8.33335 3.33334H11.6667C14.8092 3.33334 16.3809 3.33334 17.3567 4.31001C18.3325 5.28668 18.3334 6.85751 18.3334 10V11.6667C18.3334 14.8092 18.3334 16.3808 17.3567 17.3567C16.38 18.3325 14.8092 18.3333 11.6667 18.3333H8.33335C5.19085 18.3333 3.61919 18.3333 2.64335 17.3567C1.66752 16.38 1.66669 14.8092 1.66669 11.6667V10Z"
            stroke="#ADA9BB"
            strokeWidth="1.5"
          />
          <path
            d="M5.83337 3.33334V2.08334M14.1667 3.33334V2.08334M2.08337 7.50001H17.9167"
            stroke="#ADA9BB"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M15 14.1667C15 14.3877 14.9122 14.5996 14.7559 14.7559C14.5996 14.9122 14.3877 15 14.1667 15C13.9457 15 13.7337 14.9122 13.5774 14.7559C13.4211 14.5996 13.3333 14.3877 13.3333 14.1667C13.3333 13.9457 13.4211 13.7337 13.5774 13.5774C13.7337 13.4211 13.9457 13.3333 14.1667 13.3333C14.3877 13.3333 14.5996 13.4211 14.7559 13.5774C14.9122 13.7337 15 13.9457 15 14.1667ZM15 10.8333C15 11.0543 14.9122 11.2663 14.7559 11.4226C14.5996 11.5789 14.3877 11.6667 14.1667 11.6667C13.9457 11.6667 13.7337 11.5789 13.5774 11.4226C13.4211 11.2663 13.3333 11.0543 13.3333 10.8333C13.3333 10.6123 13.4211 10.4004 13.5774 10.2441C13.7337 10.0878 13.9457 10 14.1667 10C14.3877 10 14.5996 10.0878 14.7559 10.2441C14.9122 10.4004 15 10.6123 15 10.8333ZM10.8333 14.1667C10.8333 14.3877 10.7455 14.5996 10.5893 14.7559C10.433 14.9122 10.221 15 10 15C9.77899 15 9.56702 14.9122 9.41074 14.7559C9.25446 14.5996 9.16667 14.3877 9.16667 14.1667C9.16667 13.9457 9.25446 13.7337 9.41074 13.5774C9.56702 13.4211 9.77899 13.3333 10 13.3333C10.221 13.3333 10.433 13.4211 10.5893 13.5774C10.7455 13.7337 10.8333 13.9457 10.8333 14.1667ZM10.8333 10.8333C10.8333 11.0543 10.7455 11.2663 10.5893 11.4226C10.433 11.5789 10.221 11.6667 10 11.6667C9.77899 11.6667 9.56702 11.5789 9.41074 11.4226C9.25446 11.2663 9.16667 11.0543 9.16667 10.8333C9.16667 10.6123 9.25446 10.4004 9.41074 10.2441C9.56702 10.0878 9.77899 10 10 10C10.221 10 10.433 10.0878 10.5893 10.2441C10.7455 10.4004 10.8333 10.6123 10.8333 10.8333ZM6.66667 14.1667C6.66667 14.3877 6.57887 14.5996 6.42259 14.7559C6.26631 14.9122 6.05435 15 5.83333 15C5.61232 15 5.40036 14.9122 5.24408 14.7559C5.0878 14.5996 5 14.3877 5 14.1667C5 13.9457 5.0878 13.7337 5.24408 13.5774C5.40036 13.4211 5.61232 13.3333 5.83333 13.3333C6.05435 13.3333 6.26631 13.4211 6.42259 13.5774C6.57887 13.7337 6.66667 13.9457 6.66667 14.1667ZM6.66667 10.8333C6.66667 11.0543 6.57887 11.2663 6.42259 11.4226C6.26631 11.5789 6.05435 11.6667 5.83333 11.6667C5.61232 11.6667 5.40036 11.5789 5.24408 11.4226C5.0878 11.2663 5 11.0543 5 10.8333C5 10.6123 5.0878 10.4004 5.24408 10.2441C5.40036 10.0878 5.61232 10 5.83333 10C6.05435 10 6.26631 10.0878 6.42259 10.2441C6.57887 10.4004 6.66667 10.6123 6.66667 10.8333Z"
            fill="#ADA9BB"
          />
        </svg>
      ),
    },
    {
      id: 3,
      name: "Speakers",
      path: "/profile",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.45831 3.95834V5.20834M9.99998 3.95834V5.20834M13.5416 3.95834V5.20834M5.62498 16.0417H14.375C15.2955 16.0417 16.0416 15.2955 16.0416 14.375V8.95834C16.0416 8.03787 15.2955 7.29168 14.375 7.29168H5.62498C4.70451 7.29168 3.95831 8.03787 3.95831 8.95834V14.375C3.95831 15.2955 4.70451 16.0417 5.62498 16.0417ZM11.875 11.6667C11.875 12.7022 11.0355 13.5417 9.99998 13.5417C8.96445 13.5417 8.12498 12.7022 8.12498 11.6667C8.12498 10.6311 8.96445 9.79168 9.99998 9.79168C11.0355 9.79168 11.875 10.6311 11.875 11.6667Z"
            stroke="#64748B"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      icon1: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.33333 8.33332C9.17428 8.33332 10.6667 6.84094 10.6667 4.99999C10.6667 3.15904 9.17428 1.66666 7.33333 1.66666C5.49238 1.66666 4 3.15904 4 4.99999C4 6.84094 5.49238 8.33332 7.33333 8.33332Z"
            stroke="#ADA9BB"
            strokeWidth="1.5"
          />
          <path
            d="M7.33333 17.5C10.555 17.5 13.1667 16.0076 13.1667 14.1666C13.1667 12.3257 10.555 10.8333 7.33333 10.8333C4.11167 10.8333 1.5 12.3257 1.5 14.1666C1.5 16.0076 4.11167 17.5 7.33333 17.5Z"
            stroke="#ADA9BB"
            strokeWidth="1.5"
          />
          <path
            d="M14.8334 1.66666C14.8334 1.66666 16.5 2.66666 16.5 4.99999C16.5 7.33332 14.8334 8.33332 14.8334 8.33332M13.1667 3.33332C13.1667 3.33332 14 3.83332 14 4.99999C14 6.16666 13.1667 6.66666 13.1667 6.66666"
            stroke="#ADA9BB"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      id: 4,
      name: "Reports",
      path: "/settings",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.66665 3.95834V6.87501M13.3333 3.95834V6.87501M6.45831 8.95834H13.5416M5.62498 16.0417H14.375C15.2955 16.0417 16.0416 15.2955 16.0416 14.375V7.29168C16.0416 6.3712 15.2955 5.62501 14.375 5.62501H5.62498C4.70451 5.62501 3.95831 6.3712 3.95831 7.29168V14.375C3.95831 15.2955 4.70451 16.0417 5.62498 16.0417Z"
            stroke="#64748B"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      icon1: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 8.33332C2.5 5.19082 2.5 3.61916 3.47667 2.64332C4.45333 1.66749 6.02417 1.66666 9.16667 1.66666H10.8333C13.9758 1.66666 15.5475 1.66666 16.5233 2.64332C17.4992 3.61999 17.5 5.19082 17.5 8.33332V11.6667C17.5 14.8092 17.5 16.3808 16.5233 17.3567C15.5467 18.3325 13.9758 18.3333 10.8333 18.3333H9.16667C6.02417 18.3333 4.4525 18.3333 3.47667 17.3567C2.50083 16.38 2.5 14.8092 2.5 11.6667V8.33332Z"
            stroke="#ADA9BB"
            strokeWidth="1.5"
          />
          <path
            d="M6.66669 8.33331H13.3334M6.66669 11.6666H10.8334"
            stroke="#ADA9BB"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      id: 5,
      name: "Notifications",
      path: "/help",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5 17.9583C11.5 17.9583 11.5 20.0417 14 20.0417C16.5 20.0417 16.5 17.9583 16.5 17.9583M18.375 12.3333V14L20.0416 17.5417H7.95831L9.62498 14V12.3333C9.62498 9.9171 11.5837 7.95834 14 7.95834C16.4162 7.95834 18.375 9.9171 18.375 12.3333Z"
            stroke="#64748B"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="23" cy="5" r="3" fill="#F43F5E" />
        </svg>
      ),
      icon1: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.49998 13.9583C7.49998 13.9583 7.49998 16.0417 9.99998 16.0417C12.5 16.0417 12.5 13.9583 12.5 13.9583M14.375 8.33333V9.99999L16.0416 13.5417H3.95831L5.62498 9.99999V8.33333C5.62498 5.91708 7.58373 3.95833 9.99998 3.95833C12.4162 3.95833 14.375 5.91708 14.375 8.33333Z"
            stroke="#ADA9BB"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      action: handleOpen,
    },
    {
      id: 6,
      name: "Messages",
      path: "/help",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.1894 5.74999C12.7127 6.39269 13.0274 7.25647 13.0274 8.35835C13.0274 9.38848 12.7524 10.2105 12.2889 10.8383C12.1208 11.0661 12.1562 11.5969 12.2906 11.8461C12.6121 12.4424 12.0046 13.0958 11.3443 12.9444C10.85 12.8311 10.3315 12.6778 9.87784 12.4722C9.71172 12.3969 9.52831 12.3665 9.34708 12.387C9.12194 12.4125 8.89216 12.425 8.65949 12.425C7.57968 12.425 6.56229 12.1538 5.78151 11.5833M9.69417 5.02502C9.69417 7.82964 7.6554 9.09171 5.32624 9.09171C5.09357 9.09171 4.86379 9.07912 4.63865 9.05365C4.45742 9.03315 4.27401 9.06353 4.10789 9.13883C3.65418 9.3445 3.13573 9.4978 2.64146 9.6111C1.98113 9.76247 1.37362 9.10904 1.69515 8.51275C1.82951 8.26359 1.86493 7.73274 1.69681 7.505C1.23336 6.87717 0.958313 6.05515 0.958313 5.02502C0.958313 2.22041 2.99709 0.958328 5.32624 0.958328C7.6554 0.958328 9.69417 2.22041 9.69417 5.02502Z"
            stroke="#64748B"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      icon1: (
        <svg
          width="18"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.1894 8.74999C15.7127 9.39269 16.0274 10.2565 16.0274 11.3584C16.0274 12.3885 15.7524 13.2105 15.2889 13.8383C15.1208 14.0661 15.1562 14.5969 15.2906 14.8461C15.6121 15.4424 15.0046 16.0958 14.3443 15.9444C13.85 15.8311 13.3315 15.6778 12.8778 15.4722C12.7117 15.3969 12.5283 15.3665 12.3471 15.387C12.1219 15.4125 11.8922 15.425 11.6595 15.425C10.5797 15.425 9.56229 15.1538 8.78151 14.5833M12.6942 8.02502C12.6942 10.8296 10.6554 12.0917 8.32624 12.0917C8.09357 12.0917 7.86379 12.0791 7.63865 12.0536C7.45742 12.0331 7.27401 12.0635 7.10789 12.1388C6.65418 12.3445 6.13573 12.4978 5.64146 12.6111C4.98113 12.7625 4.37362 12.109 4.69515 11.5127C4.82951 11.2636 4.86493 10.7327 4.69681 10.505C4.23336 9.87717 3.95831 9.05515 3.95831 8.02502C3.95831 5.22041 5.99709 3.95833 8.32624 3.95833C10.6554 3.95833 12.6942 5.22041 12.6942 8.02502Z"
            stroke="#ADA9BB"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 7,
      name: "Settings",
      path: "/help",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.68429 16.4689L9.60162 16.6126C10.2788 16.7186 10.7624 17.3388 10.7125 18.0376L10.6449 18.9847C10.6253 19.2606 10.7722 19.5203 11.0157 19.6405L11.6942 19.9748C11.9376 20.0949 12.2283 20.05 12.4271 19.8627L13.1089 19.2183C13.6115 18.7431 14.3871 18.7431 14.8904 19.2183L15.5722 19.8627C15.771 20.0506 16.061 20.0949 16.3051 19.9748L16.9849 19.6398C17.2277 19.5203 17.374 19.2613 17.3544 18.986L17.2868 18.0376C17.2369 17.3388 17.7205 16.7186 18.3977 16.6126L19.315 16.4689C19.5821 16.4273 19.7973 16.2226 19.8577 15.9527L20.025 15.2023C20.0854 14.9325 19.9784 14.6526 19.7553 14.4968L18.9895 13.9605C18.4246 13.5645 18.252 12.7912 18.5932 12.1838L19.0558 11.3608C19.1903 11.1212 19.168 10.8211 18.9994 10.605L18.5302 10.0029C18.3616 9.78677 18.0807 9.6975 17.8222 9.77872L16.9351 10.0566C16.2795 10.262 15.5807 9.91766 15.3287 9.2659L14.9888 8.38456C14.8891 8.12681 14.6457 7.95766 14.3747 7.95833L13.6227 7.96034C13.3517 7.96102 13.1089 8.13151 13.0105 8.38993L12.6791 9.2612C12.4297 9.91699 11.7276 10.264 11.0701 10.0573L10.1463 9.76731C9.88706 9.68542 9.60491 9.77536 9.43627 9.99284L8.97038 10.5956C8.80174 10.8138 8.7814 11.1145 8.91854 11.3541L9.39165 12.1791C9.74008 12.7872 9.56947 13.5678 9.00122 13.9659L8.24465 14.4962C8.02155 14.6526 7.91459 14.9325 7.97496 15.2016L8.14229 15.9521C8.202 16.2226 8.41722 16.4273 8.68429 16.4689Z"
            stroke="#64748B"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.3259 12.6741C16.058 13.4063 16.058 14.5937 15.3259 15.3259C14.5937 16.058 13.4062 16.058 12.6741 15.3259C11.9419 14.5937 11.9419 13.4063 12.6741 12.6741C13.4062 11.942 14.5937 11.942 15.3259 12.6741Z"
            stroke="#64748B"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      icon1: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.68429 12.4689L5.60162 12.6126C6.2788 12.7186 6.7624 13.3388 6.71253 14.0376L6.64495 14.9847C6.62526 15.2606 6.77224 15.5203 7.01569 15.6405L7.69417 15.9748C7.93762 16.0949 8.2283 16.05 8.42712 15.8627L9.10889 15.2183C9.61152 14.7431 10.3871 14.7431 10.8904 15.2183L11.5722 15.8627C11.771 16.0506 12.061 16.0949 12.3051 15.9748L12.9849 15.6398C13.2277 15.5203 13.374 15.2613 13.3544 14.986L13.2868 14.0376C13.2369 13.3388 13.7205 12.7186 14.3977 12.6126L15.315 12.4689C15.5821 12.4273 15.7973 12.2226 15.8577 11.9527L16.025 11.2023C16.0854 10.9325 15.9784 10.6526 15.7553 10.4968L14.9895 9.96051C14.4246 9.56448 14.252 8.79122 14.5932 8.18375L15.0558 7.36082C15.1903 7.12119 15.168 6.82115 14.9994 6.60501L14.5302 6.00291C14.3616 5.78677 14.0807 5.6975 13.8222 5.77872L12.9351 6.05661C12.2795 6.26201 11.5807 5.91766 11.3287 5.2659L10.9888 4.38456C10.8891 4.12681 10.6457 3.95766 10.3747 3.95833L9.62268 3.96034C9.35168 3.96102 9.10889 4.13151 9.01046 4.38993L8.6791 5.2612C8.42975 5.91699 7.72764 6.26402 7.07015 6.05728L6.14625 5.76731C5.88706 5.68542 5.60491 5.77536 5.43627 5.99284L4.97038 6.59561C4.80174 6.81376 4.7814 7.11448 4.91854 7.35411L5.39165 8.17905C5.74008 8.78719 5.56947 9.56784 5.00122 9.96588L4.24465 10.4962C4.02155 10.6526 3.91459 10.9325 3.97496 11.2016L4.14229 11.9521C4.202 12.2226 4.41722 12.4273 4.68429 12.4689Z"
            stroke="#ADA9BB"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.3259 8.6741C12.058 9.40625 12.058 10.5937 11.3259 11.3259C10.5937 12.058 9.40624 12.058 8.67409 11.3259C7.94194 10.5937 7.94194 9.40625 8.67409 8.6741C9.40624 7.94196 10.5937 7.94196 11.3259 8.6741Z"
            stroke="#ADA9BB"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 8,
      name: "",
      path: "#",
      icon: null,
      icon1: null,
      action: toggleDarkMode, // Use the toggleDarkMode function directly
      render: () => (
        <div className="flex items-center">
          <Switch
            checked={theme === 'dark'}
            color="primary"
          />
          <span className="inline-flex txt1 items-center">
            {theme === 'light' ? "Light Mode" : "Dark Mode"}
          </span>
        </div>
      ),
    },
    {
      id: 9,
      name: "Settings",
      path: "/help",
      icon: (
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_19214)">
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
      ),
      icon1: (
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_19214)">
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
      ),
      render: () => (
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_19214)">
                <rect
                  x="1"
                  y="1"
                  width="32"
                  height="32"
                  rx="16"
                  fill="#F3F4F6"
                />
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
                  <rect
                    x="1"
                    y="1"
                    width="32"
                    height="32"
                    rx="16"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="ml-4">
            <h1 className="txt text-lg font-medium">Rudra Devi</h1>
            <p className="txt text-sm">rudra.deviK@gmail.com</p>
          </div>
        </div>
      ),
    }, // Dark/Light mode toggle
  ];

  return (
    <div>
                  <ModalComponent open={isModalOpen} onClose={handleCloseModal} />
      <header className="flex fixed top-0 w-full z-10 justify-between items-center p-4 bg22 border-b-[1px] h-[64px] text-white">
        <div className="text-xl font-bold">
          <img alt="gg" src={logo}/>
        </div>

        <div className="relative z-20">
          {isDropdownOpen ? (
            <button onClick={handleClose}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="23"
                  height="23"
                  rx="11.5"
                  fill="white"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="23"
                  height="23"
                  rx="11.5"
                  stroke="#E2E8F0"
                />
                <path
                  d="M14.625 9.375L9.375 14.625"
                  stroke="#334155"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.375 9.375L14.625 14.625"
                  stroke="#334155"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          ) : (
            <button className="focus:outline-none" onClick={toggleDropdown}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 7H7M20 7H11M20 17H17M4 17H13M4 12H20"
                  className="bg6"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          )}
        </div>
      </header>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="fixed bg22 top-[64px] z-10 left-0 h-full w-full bg-white text-black p-4"
        >
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    item.action?.(); // Call the action if defined
                    // Remove the line below to keep the dropdown open
                    // setIsOpen(false);
                  }}
                  className={`block py-2 px-4 hover:bg-gray-300 transition-colors`}
                >
                   {item.render ? (
                    item.render()
                  ) : (
                  <div className="inline-flex txt1 items-center">
                    {item.icon1 && (
                      <span className="text-lg  mr-2">{item.icon1}</span>
                    )}
                    {item.name}
                  </div>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
