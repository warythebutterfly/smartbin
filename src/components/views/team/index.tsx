import React, { Fragment } from "react";
import { Button, Heading } from "@/components/ui";
import Image from "next/image";
import { Team, urlForImage } from "~/sanity/lib";
import Link from "next/link";
import Head from "next/head";

const TeamView = ({ members }: { members: Team[] }) => {
  return (
    <Fragment>
      <Head>
        <title>Team | YabaTech PlastoGas Hub</title>
      </Head>
      <section className="pt-[96px] pb-[172px] bg-team bg-right bg-no-repeat">
        <div className="wrapper">
          <div className="w-full max-w-[1067px] mx-auto px-0 md:px-8">
            <div className="mb-20 flex flex-col items-center text-center">
              <Heading className="mb-12 text-2xl md:text-[48px] font-medium leading-9 md:leading-[72px] text-primary">
                We have a team of dedicated and committed individuals that
                support our business and partners.
              </Heading>
              <div className="flex items-center gap-4">
                <Link href="/careers">
                  <Button variant="primary" className="w-fit h-12">
                    Join our team
                  </Button>
                </Link>
                <Link href="/partners">
                  <Button
                    variant="outline"
                    className="w-fit h-12 border-[#D1D5DB] text-primary"
                  >
                    Become a partner
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {members?.length === 0 ? (
                <h3 className="col-span-full py-10 text-center text-2xl font-medium leading-6">
                  No Data!
                </h3>
              ) : (
                members?.map((member) => (
                  <div key={member._id}>
                    <div
                      className="py-[29px] bg-white flex flex-col gap-[18.17px] items-center h-[273px]"
                      style={{
                        boxShadow:
                          "3.30333px 12.3875px 26.42666px 1.65167px rgba(30, 30, 30, 0.08)",
                      }}
                    >
                      {member?.avatar ? (
                        <div className="w-[153px] h-[153px] relative">
                          <Image
                            src={urlForImage(member.avatar).url()}
                            alt={member.name}
                            className="rounded-full"
                            fill
                          />
                        </div>
                      ) : null}

                      <div className="text-center">
                        {member?.name ? (
                          <p className="text-primary font-semibold">
                            {member.name}
                          </p>
                        ) : null}

                        {member?.position ? (
                          <p className="text-[#9CA3AF] text-sm">
                            {member.position}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default TeamView;
