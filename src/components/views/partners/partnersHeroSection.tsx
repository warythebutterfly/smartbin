import React from "react";
import Image from "next/image";
import PartnersHero from "@/assets/img/partners.png";
import PartnershipGrowth from "@/assets/img/partnership-growth.png";
import { Heading, Text } from "@/components/ui";
import Link from "next/link";

const PartnersHeroSectionOld = () => {
  return (
    <div className="relative z-[1] mt-[-88px]">
      <div className="flex flex-col md:flex-row min-h-[767px]">
        <div className="hidden md:block w-full md:w-1/2 relative">
          <Image src={PartnersHero} alt="Partners Hero" fill />
        </div>
        <div className="w-full md:w-1/2 bg-white bg-team bg-right bg-no-repeat">
          <div className="pt-[calc(88px_+_96px)] px-4 md:px-16 pb-8 max-w-[630px]">
            <Heading className="text-[66px] leading-[72px] mb-6">
              Partners
            </Heading>
            <Text className="text-[#374151] leading-8">
              <Link
                href="https://www.linkedin.com/company/#/"
                target="_blank"
                rel="noreferrer noopener"
                className="text-primary underline font-medium"
              >
                YabaTech PlastoGas Hub
              </Link>{" "}
              focuses on innovative plastic waste management through recycling,
              upcycling, and smart waste collection technologies. We collaborate
              with partners to develop and scale sustainable waste solutions,
              leveraging cutting-edge technology while ensuring efficiency and
              impact.
            </Text>

            <div className="mt-[42px]">
              <Text className="text-[#1F2937] font-semibold leading-8">
                Partnership growth:
              </Text>

              <div className="mt-6">
                <Image src={PartnershipGrowth} alt="Partnership Growth" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PartnersHeroSection = () => {
  return (
    <>
      <div className="relative bg-white px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl mt-10">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content">
                <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-dark  sm:text-[42px] lg:text-[40px] xl:text-5xl text-primary">
                  Partners
                </h1>
                <Text className="text-[#374151] leading-8 mb-4">
                  <Link
                    href="https://www.linkedin.com/company/#/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-primary underline font-medium"
                  >
                    YabaTech PlastoGas Hub
                  </Link>{" "}
                  focuses on innovative plastic waste management through
                  recycling, upcycling, and smart waste collection technologies.
                  We collaborate with partners to develop and scale sustainable
                  waste solutions, leveraging cutting-edge technology while
                  ensuring efficiency and impact.
                </Text>
                <ul className="flex flex-wrap items-center">
                  <li>
                    <Link
                      href="/partners#partner"
                      scroll={true}
                      className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-dark lg:px-7"
                    >
                      Become a partner
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://bine.yctplastogashub.com"
                      className="inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium text-[#464646] hover:text-primary"
                    >
                      <span className="mr-2">
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="12" cy="12.6152" r="12" fill="#3758F9" />
                          <rect
                            x="7.99893"
                            y="14.979"
                            width="8.18182"
                            height="1.63636"
                            fill="white"
                          />
                          <rect
                            x="11.2717"
                            y="7.61523"
                            width="1.63636"
                            height="4.09091"
                            fill="white"
                          />
                          <path
                            d="M12.0898 14.1606L14.9241 11.0925H9.25557L12.0898 14.1606Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      Go to app
                    </a>
                  </li>
                </ul>
                <div className="clients pt-8">
                  {/* <h6 className="mb-6 flex items-center text-xs font-normal text-body-color dark:text-dark-6">
                    Some Of Our Clients
                    <span className="ml-3 inline-block h-px w-8 bg-body-color"></span>
                  </h6> */}

                  <div className="flex items-center space-x-4">
                    <SingleImage
                      href="#"
                      imgSrc="https://cdn.who.int/media/images/default-source/ihs/quality-health-services/twinning-partnerships-for-improvement/tpi-objectives-ft.tmb-1920v.jpg?sfvrsn=56cc9a73_5"
                    />

                    {/* <SingleImage
                      href="#"
                      imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg"
                    />

                    <SingleImage
                      href="#"
                      imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0 hide-on-tablet">
                  <Image
                    src={PartnersHero}
                    alt="Partners Hero"
                    className="max-w-full lg:ml-auto"
                  />
                  <span className="absolute -bottom-8 -left-8 z-[-1]">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SingleImage = ({ href, imgSrc }: { href: string; imgSrc: string }) => {
  return (
    <>
      <a href={href} className="flex w-full items-center justify-center">
        <Image
          src={imgSrc}
          alt="brand image"
          width={756}
          height={521}
          className="h-50 w-full"
          priority
        />
      </a>
    </>
  );
};

export default PartnersHeroSection;
