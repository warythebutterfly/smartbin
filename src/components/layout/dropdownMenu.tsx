import React, { useEffect } from "react";
import { CloseIcon, InstagramIcon, LinkedinIcon, Logo } from "../icons";
import Link from "next/link";

interface IDropdownMenuProps {
  className?: string;
  isOpen: boolean;
  closeDropdown: () => void;
}

const DropdownMenu = ({
  className,
  isOpen,
  closeDropdown,
}: IDropdownMenuProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const menus = [
    // {
    //   title: "Mission statement",
    //   href: "/#vision",
    // },
    {
      title: "News",
      href: "/news",
    },
    {
      title: "Conducts",
      href: "/conducts",
    },
    {
      title: "Partners",
      href: "/partners",
    },
    // {
    //   title: "Privacy",
    //   href: "/privacy-policy",
    // },
    // {
    //   title: "Terms",
    //   href: "/privacy-policy?tab=2",
    // },
    {
      title: "Careers",
      href: "/careers",
    },
    // {
    //   title: "Products",
    //   href: "/products",
    // },
    {
      title: "Team",
      href: "/team",
    },
  ];

  return (
    <div
      className={`bg-white fixed top-0 left-0 right-0 bottom-0 z-20 transition-transform duration-300 ease-in ${
        isOpen ? "translate-y-[0%]" : "-translate-y-[100%]"
      } h-screen landscape:h-full`}
    >
      <div className="overflow-scroll h-full">
        <div>
          <div className="py-10 flex justify-end items-center px-4 md:px-10">
            <button
              className="border-none text-black rounded-lg"
              onClick={closeDropdown}
            >
              <CloseIcon className="text-black w-10 h-10" />
            </button>
          </div>
          <div className="max-w-2xl mx-auto pt-6 landscape:pb-8 flex flex-col items-center">
            <div className="mb-10">
              <Link href="/" onClick={closeDropdown}>
                <Logo className="w-60 h-12" />
              </Link>
            </div>

            <ul>
              {menus.map((menu) => (
                <li key={menu.title} className="text-center">
                  <Link
                    href={menu.href}
                    onClick={closeDropdown}
                    className="block px-[10px] py-6 text-primary hover:text-[#06813E] transition-colors text-3xl"
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex items-center gap-6 pl-[10px] lg:pl-0">
              <Link
                href="https://www.linkedin.com/company/#"
                target="_blank"
                rel="noreferrer noopener"
                className="text-primary hover:text-[#06813E] transition-colors"
              >
                <LinkedinIcon mode="dark" className="w-8 h-8" />
              </Link>

              <Link
                href="https://instagram.com/#"
                target="_blank"
                rel="noreferrer noopener"
                className="text-primary hover:text-[#06813E] transition-colors"
              >
                <InstagramIcon className="w-8 h-8" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
