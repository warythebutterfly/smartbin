import Link from "next/link";
import React from "react";
import { InstagramIcon, LinkedinIcon, Logo } from "../icons";

const Footer = () => {
  const menus = [
    // {
    //   title: "Mission statement",
    //   href: "/#vision",
    // },
    {
      title: "Conducts",
      href: "/conducts",
    },
    {
      title: "Partners",
      href: "/partners",
    },
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
    {
      title: "Privacy Policy and Terms",
      href: "/privacy-policy",
    },
  ];

  return (
    <footer className="bg-[#252422] flex items-center justify-between pt-8 lg:pt-0">
      <nav className="wrapper py-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-0">
        <div className="flex flex-col w-full lg:flex-row lg:items-center gap-8 lg:gap-16 text-white">
          <Link href="/" className="pl-[10px] lg:pl-0">
            <Logo variant="small" />
          </Link>

          <ul className="flex lg:items-center gap-2 md:gap-4 text-sm font-normal leading-6">
            {menus.map((menu) => (
              <li key={menu.title}>
                <Link href={menu.href} className="block px-[10px] lg:py-2">
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-6 pl-[10px] lg:pl-0">
          <Link
            href="https://www.linkedin.com/company/#/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-white"
          >
            <LinkedinIcon />
          </Link>

          <Link
            href="https://instagram.com/#"
            target="_blank"
            rel="noreferrer noopener"
            className="text-white"
          >
            <InstagramIcon />
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
