import React from "react";
import { Heading, RichText, Text } from "@/components/ui";
import { Landing } from "~/sanity/lib";
import styles from "./styles.module.css";

const VisionMission = ({ data }: { data: Landing["visionSection"] }) => {
  return (
    <section id="vision" className="pt-[80px] pb-[96px] bg-[#010206]">
      <div className="wrapper">
        <div className="w-full md:max-w-[432px]">
          <Heading
            as="h4"
            className="text-white text-4xl md:text-[64px] font-bold md:leading-[88px] tracking-[1.6px]"
          >
            OUR VISION, MISSION AND
          </Heading>
          <Heading className="text-4xl md:text-[64px] font-bold md:leading-[88px] tracking-[1.6px]">
            <span className="bg-gradient-to-br from-[#2DBE60] via-[#003464] to-[#2DBE60] bg-clip-text text-transparent">
              VALUES
            </span>
          </Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-32 px-4 md:px-16">
          {/* Vision Card */}
          <div
            className="relative group rounded-2xl overflow-hidden transition-transform duration-700 transform hover:scale-[1.03] shadow-lg"
            style={{
              backgroundImage: "url(/img/mission.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-[rgba(0,52,100,0.85)] group-hover:bg-[rgba(0,52,100,0.9)] transition-colors duration-700 z-10"></div>
            <div className="relative z-20 p-6 md:p-10 text-white">
              <Heading
                as="h6"
                className="text-white font-bold text-3xl md:text-[48px] leading-tight tracking-wide mb-6"
              >
                Our Vision
              </Heading>
              <RichText className={styles.vision} content={data?.vision} />
            </div>
          </div>

          {/* Mission Card */}
          <div
            className="relative group rounded-2xl overflow-hidden transition-transform duration-700 transform hover:scale-[1.03] shadow-lg"
            style={{
              backgroundImage: "url(/img/vision.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-[rgba(0,52,100,0.85)] group-hover:bg-[rgba(0,52,100,0.9)] transition-colors duration-700 z-10"></div>
            <div className="relative z-20 p-6 md:p-10 text-white">
              <Heading
                as="h6"
                className="text-white font-bold text-3xl md:text-[48px] leading-tight tracking-wide mb-6"
              >
                Our Mission
              </Heading>
              <RichText className={styles.mission} content={data?.mission} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
