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

      <section className="pt-28 pb-36 bg-[#f5faf0] bg-team bg-no-repeat bg-right">
        <div className="wrapper">
          {/* Intro */}
          <div className="max-w-4xl mx-auto text-center mb-20">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-6xl bg-white p-12 flex items-center justify-center rounded-xl">
            {members?.length === 0 ? (
              <div className="col-span-full text-center text-xl font-medium text-gray-500">
                No Data!
              </div>
            ) : (
              members.map((member) => (
                <div key={member._id}>
                  <img
                    src={urlForImage(member.avatar).url()}
                    alt={member.name}
                    className="max-w-full h-auto rounded-full mx-auto"
                    width="200"
                  />
                  <div className="px-4 py-6 xl:px-6 text-center">
                    <h4 className="text-2xl font-medium mb-2 text-primary">
                      {member.name}
                    </h4>
                    <h6 className="font-medium text-neutral-600">
                      {member.position}
                    </h6>
                    {/* <p className="opacity-50 mb-0">{member.bio}</p> */}
                    {/* <div className="mt-6">
				{member.socialLinks.map((link, i) => (
					<a
						href={link.href}
						className="inline-block opacity-60 transition duration-300 hover:translate-y-1 hover:opacity-100 mr-4"
						key={i}
					>
						<FontAwesomeIcon icon={link.icon} />
					</a>
				))}
			</div> */}
                  </div>
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

/* 
                   <Image
                    src={urlForImage(member.avatar).url()}
                    alt={member.name}
                    className="max-w-full h-auto rounded-full mx-auto"
                    width={230}
                  />

*/
