import React, { Fragment, useState } from "react";
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

      <section className="pt-28 pb-36 bg-[#f5faf0] bg-team bg-no-repeat bg-right">
        <div className="wrapper">
          {/* Intro */}
          <div className="max-w-4xl mx-auto text-center mb-20 px-4">
            <Heading className="text-3xl md:text-5xl font-bold text-primary leading-tight mb-8">
              Meet Our Team
            </Heading>
            <p className="text-[#374151] text-lg leading-7">
              A team of dedicated and committed individuals supporting our
              mission and partners across all projects.
            </p>

            <div className="relative inline-flex items-center justify-center mt-8 group">
              <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-[#003464] to-[#2DBE60] group-hover:shadow-lg group-hover:shadow-green-500/50"></div>
              <Link
                href="/partners"
                className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-primary border border-transparent rounded-full"
                role="button"
              >
                Explore Partnerships
              </Link>
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-auto max-w-7xl bg-white p-8 md:p-12 rounded-xl">
            {members?.length === 0 ? (
              <div className="col-span-full text-center text-xl font-medium text-gray-500">
                No Data!
              </div>
            ) : (
              [...members]
                .sort((a, b) => parseInt(a.order) - parseInt(b.order))
                .map((member) => <TeamCard key={member._id} member={member} />)
            )}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

const TeamCard = ({ member }: { member: Team }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center text-center px-4 py-6 rounded-lg hover:shadow-md transition">
      {/* Avatar */}
      <div className="w-40 h-40 rounded-full overflow-hidden mb-6">
        {member.avatar && (
          <Image
            src={urlForImage(member.avatar).url()}
            alt={member.name}
            width={160}
            height={160}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Name & Role */}
      <h4 className="text-xl font-semibold mb-1 text-primary">{member.name}</h4>
      <p className="text-sm font-medium text-neutral-600 mb-3">
        {member.position}
      </p>

      {/* Bio Toggle */}
      {member.bio && (
        <>
          <button
            onClick={() => setOpen(!open)}
            className="text-sm font-medium text-[#012147] underline underline-offset-4 mb-2"
          >
            {open ? "Hide role" : "Read role"}
          </button>

          {open && (
            <div className="text-sm text-gray-500 space-y-2">
              {member.bio.split("\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default TeamView;
