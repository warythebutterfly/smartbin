import React, { Fragment, useState } from "react";
import Link from "next/link";
import { Logo, MenuIcon } from "../icons";
import { useRouter } from "next/router";
import { useMediaQuery } from "@/hooks";
import DropdownMenu from "./dropdownMenu";

const NavbarOld = () => {
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
    "/blog": "bg-primary text-white",
    "/conducts": "bg-white text-primary font-medium",
    "/conducts/[slug]": "bg-white text-primary font-medium",
    "/partners": "bg-[#2F80ED] text-white",
    "/terms": "bg-[#AA916A]",
    "/privacy-policy": "bg-[#AA916A]",
    "/team": "bg-[#1F2937]",
    "/careers": "bg-[#06813E]",
  };

  const mapLogoMode: Record<string, "light" | "dark"> = {
    "/conducts": "dark",
    "/conducts/[slug]": "dark",
    "/partners": isMobile ? "dark" : "light",
  };

  const mapBgColor: Record<string, string> = {
    default: "bg-[#daffd6]",
    "/blog": "bg-white",
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
            <Logo />
          </Link>
          <button
            className="border-none text-black rounded-lg"
            onClick={() => toggleDropdown()}
          >
            <MenuIcon className={`w-8 h-8 ${menuColor}`} />
          </button>
          {/* <Link href="/blog">
      <Button className={`w-[107px] ${mapBtnColor[router.pathname]}`}> blog </Button>
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

export const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const router = useRouter();

  const mapBgColor: Record<string, string> = {
    default: "bg-white",
    "/blog": "bg-white",
    "/conducts": "bg-white",
    "/conducts/[slug]": "bg-white",
    // "/conducts": "bg-[#daffd6]",
    // "/conducts/[slug]": "bg-[#daffd6]",
    "/partners": "bg-transparent",
    "/privacy-policy": "bg-white",
    "/team": "bg-white",
    "/404": "bg-white",
    "/500": "bg-white",
  };

  return (
    <header
      className={
        (mapBgColor[router.pathname] ?? mapBgColor["default"]) + " py-4 sm:py-6"
      }
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="shrink-0">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="text-white"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
            >
              {!expanded ? (
                <span aria-hidden="true">
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </span>
              ) : (
                <span aria-hidden="true">
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              )}
            </button>
          </div>

          <nav className="hidden md:flex md:items-center md:justify-end md:space-x-12">
            {/* <Link
              href={"/conducts"}
              className="text-base font-normal transition-all duration-200 text-[#003464] hover:text-blue-500 focus:text-blue-500"
            >
              Conducts
            </Link> */}
            <Link
              href={"/"}
              className="text-base font-normal transition-all duration-200 text-[#003464] hover:text-blue-500 focus:text-blue-500"
            >
              Home
            </Link>
            <Link
              href={"/partners"}
              className="text-base font-normal transition-all duration-200 text-[#003464] hover:text-blue-500 focus:text-blue-500"
            >
              Partners
            </Link>
            <Link
              href={"/team"}
              className="text-base font-normal transition-all duration-200 text-[#003464] hover:text-blue-500 focus:text-blue-500"
            >
              Team
            </Link>
            <Link
              href={"/blog"}
              className="text-base font-normal transition-all duration-200 text-[#003464] hover:text-blue-500 focus:text-blue-500"
            >
              Blog
            </Link>
            <Link
              href={"https://bine.yctplastogashub.com"}
              className="text-base font-normal transition-all duration-200 text-[#003464] hover:text-blue-500 focus:text-blue-500"
            >
              Our app
            </Link>
          </nav>
        </div>

        {expanded && (
          <nav>
            <div className="flex flex-col pt-8 pb-4 space-y-6">
              <Link
                href={"/"}
                className="text-base font-normal transition-all duration-200 text-[#003464] hover:text-blue-500 focus:text-blue-500"
              >
                Home
              </Link>
              {/* <Link
                href={"/conducts"}
                className="text-base font-normal transition-all duration-200 text-[#003464] hover:text-blue-500 focus:text-blue-500"
              >
                Conducts
              </Link> */}
              <Link
                href={"/partners"}
                className="text-base font-normal transition-all duration-200 text-[#003464] hover:text-blue-500 focus:text-blue-500"
              >
                Partners
              </Link>
              <Link
                href={"/team"}
                className="text-base font-normal transition-all duration-200 text-[#003464] hover:text-blue-500 focus:text-blue-500"
              >
                Team
              </Link>
              <Link
                href={"/blog"}
                className="text-base font-normal transition-all duration-200 text-[#003464] hover:text-blue-500 focus:text-blue-500"
              >
                Blog
              </Link>
              <Link
                href={"https://bine.yctplastogashub.com"}
                className="text-base font-normal transition-all duration-200 text-[#003464] hover:text-blue-500 focus:text-blue-500"
              >
                Our app
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
