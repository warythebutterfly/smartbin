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

      <section className="pt-28 pb-36 bg-gradient-to-br from-[#F9FAFB] to-[#EEF2F6]">
        <div className="wrapper">
          {/* Intro */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <Heading className="text-3xl md:text-5xl font-bold text-primary leading-tight mb-8">
              Meet Our Team
            </Heading>
            <p className="text-[#4B5563] text-lg leading-7">
              A team of dedicated and committed individuals supporting our
              mission and partners across all projects.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/careers">
                <Button variant="secondary" className="h-12 px-6">
                  Join our team
                </Button>
              </Link>
              <Link href="/partners">
                <Button
                  variant="outline"
                  className="h-12 px-6 border-[#D1D5DB] text-primary"
                >
                  Become a partner
                </Button>
              </Link>
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {members?.length === 0 ? (
              <div className="col-span-full text-center text-xl font-medium text-gray-500">
                No Data!
              </div>
            ) : (
              members.map((member) => (
                <div
                  key={member._id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center px-6 py-10 text-center"
                >
                  {member?.avatar && (
                    <div className="w-[140px] h-[140px] rounded-full overflow-hidden relative mb-6">
                      <Image
                        src={urlForImage(member.avatar).url()}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  {member?.name && (
                    <p className="text-primary text-xl font-semibold mb-1">
                      {member.name}
                    </p>
                  )}

                  {member?.position && (
                    <p className="text-[#6B7280] text-sm">{member.position}</p>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default TeamView;
