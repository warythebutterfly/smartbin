import Link from "next/link";
import React from "react";
import {
  EnvelopeIcon,
  InstagramIcon,
  LinkedinIcon,
  Logo,
  PhoneIcon,
} from "../icons";

const FooterOld = () => {
  const menus = [
    // {
    //   title: "Mission statement",
    //   href: "/#vision",
    // },
    {
      title: "Blog",
      href: "/blog",
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
    // {
    //   title: "Privacy Policy and Terms",
    //   href: "/privacy-policy",
    // },
  ];

  return (
    <footer className="bg-[#003464] flex items-center justify-between pt-8 lg:pt-0">
      <nav className="wrapper py-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-0">
        <div className="flex flex-col w-full lg:flex-row lg:items-center gap-8 lg:gap-16 text-white">
          <Link href="/" className="pl-[10px] lg:pl-0">
            <Logo />
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

const Footer = () => {
  const menus = [
    {
      title: "Home",
      href: "/",
    },
    // {
    //   title: "Mission statement",
    //   href: "/#vision",
    // },

    // {
    //   title: "Conducts",
    //   href: "/conducts",
    // },
    {
      title: "Partners",
      href: "/partners",
    },
    // {
    //   title: "Terms",
    //   href: "/privacy-policy?tab=2",
    // },
    // {
    //   title: "Careers",
    //   href: "/careers",
    // },
    // {
    //   title: "Products",
    //   href: "/products",
    // },
    {
      title: "Team",
      href: "/team",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Training",
      href: "https://yctplastogastraininghub.com/lms",
    },
    {
      title: "Our app",
      href: "https://bine.yctplastogashub.com",
    },
    // {
    //   title: "Privacy Policy and Terms",
    //   href: "/privacy-policy",
    // },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="wrapper py-6">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <Link href={"/"}>
          <Logo />
        </Link>

        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          {menus.map((menu) => (
            <li key={menu.title}>
              <Link
                href={menu.href}
                className="text-base font-normal transition-all duration-200 text-[#003464] hover:text-blue-500 focus:text-blue-500"
              >
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
        <p className="mb-4 text-center font-normal text-primary md:mb-0">
          &copy; 2025{" "}
          <a href="https://material-tailwind.com/">Yct PlastoGas Hub</a>. All
          Rights Reserved.
        </p>
        <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
          <Link
            href="mailto:yctplastogashub@gmail.com"
            className="opacity-80 transition-opacity hover:opacity-100"
          >
            <EnvelopeIcon className="h-6 w-6" />
          </Link>
          <Link
            href="callto:+234 8183964263"
            className="opacity-80 transition-opacity hover:opacity-100"
          >
            <PhoneIcon className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/#/"
            className="opacity-80 transition-opacity hover:opacity-100"
          >
            <LinkedinIcon className="h-5 w-5" />
          </Link>
          <Link
            href="https://instagram.com/#"
            className="opacity-80 transition-opacity hover:opacity-100"
          >
            <InstagramIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
