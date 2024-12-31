import React, { Fragment, useState } from "react";
import Link from "next/link";
import { Logo, MenuIcon } from "../icons";
import { useRouter } from "next/router";
import { useMediaQuery } from "@/hooks";
import DropdownMenu from "./dropdownMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const toggleDropdown = (value?: boolean) => {
    if (value) {
      setIsOpen(value);
      document.body.style.overflow = "hidden";
    } else {
      setIsOpen((open) => !open);
      document.body.style.overflow = "auto";
    }
  };

  const mapBtnColor: Record<string, string> = {
    default: "bg-primary text-white",
    "/investors": "bg-primary text-white",
    "/conducts": "bg-white text-primary font-medium",
    "/conducts/[slug]": "bg-white text-primary font-medium",
    "/partners": "bg-[#2F80ED] text-white",
    "/terms": "bg-[#AA916A]",
    "/privacy-policy": "bg-[#AA916A]",
    "/team": "bg-[#9A4151]",
    "/careers": "bg-[#06813E]",
  };

  const mapLogoMode: Record<string, "light" | "dark"> = {
    "/conducts": "light",
    "/conducts/[slug]": "light",
    "/partners": isMobile ? "dark" : "light",
  };

  const mapBgColor: Record<string, string> = {
    default: "bg-[#EBF2EF]",
    "/investors": "bg-white",
    "/conducts": "bg-primary",
    "/conducts/[slug]": "bg-primary",
    "/partners": "bg-transparent",
    "/privacy-policy": "bg-white",
    "/team": "bg-white",
    "/404": "bg-white",
    "/500": "bg-white",
  };

  const router = useRouter();

  const menuColor =
    router.pathname === "/conducts" || router.pathname === "/conducts/[slug]"
      ? "text-white"
      : "text-black";

  return (
    <Fragment>
      <header
        className={
          (mapBgColor[router.pathname] ?? mapBgColor["default"]) +
          " relative z-[5]"
        }
      >
        <nav className="wrapper py-6 flex items-center justify-between">
          <Link href="/">
            <Logo mode={mapLogoMode[router.pathname] ?? "dark"} />
          </Link>

          <button
            className="border-none text-black rounded-lg"
            onClick={() => toggleDropdown()}
          >
            <MenuIcon className={`w-8 h-8 ${menuColor}`} />
          </button>

          {/* <Link href="/investors">
          <Button className={`w-[107px] ${mapBtnColor[router.pathname]}`}>
            Investors
          </Button>
        </Link> */}
        </nav>
      </header>

      <DropdownMenu
        isOpen={isOpen}
        closeDropdown={() => toggleDropdown(false)}
      />
    </Fragment>
  );
};

export default Navbar;
