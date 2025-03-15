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
          <Heading className="text-4xl md:text-[64px] font-bold md:leading-[88px] tracking-[1.6px] text-[#60B58A]">
            VALUES
          </Heading>
        </div>

        <div className="flex flex-col flex-1 md:flex-row justify-center mt-[8rem]">
          <div
            className="v-content bg-no-repeat bg-cover bg-center p-4 md:p-8 w-full md:w-1/2 z-[2] relative hover:scale-[1.1] hover:z-[2] transition-transform duration-700"
            style={{ backgroundImage: "url(/img/mission.png)" }}
          >
            <div className="p-6 bg-[rgba(0,1,3,0.90)]">
              <Heading
                as="h6"
                className="text-white mb-8 font-bold text-2xl md:text-[56px] md:leading-[80px] tracking-[1.4px]"
              >
                Our Vision
              </Heading>
              <RichText className={styles.vision} content={data?.vision} />
            </div>
          </div>

          <div
            className="m-content group bg-no-repeat bg-cover bg-center p-4 md:p-8 w-full md:w-1/2 z-[1] relative hover:scale-[1.1] hover:z-[2] transition-transform duration-700"
            style={{ backgroundImage: "url(/img/vision.png)" }}
          >
            <div className="p-6 bg-[rgba(0,1,3,0.90)]">
              <Heading
                as="h6"
                className="text-white mb-8 font-bold text-2xl md:text-[56px] md:leading-[80px] tracking-[1.4px]"
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
