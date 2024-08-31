import React, { useEffect } from "react";
import { education } from "../constrant";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import EducationCard from "./EducationCard";
import Border from "./Border";
import AOS from "aos";
import "aos/dist/aos.css";

const Education = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <h1 className=" uppercase font-['Libre_Franklin'] mt-8 text-3xl font-bold justify-center item-center flex underline text-gray-800">
        Education
      </h1>
      <div
        id="education"
        className="container flex flex-col justify-center relative z-1 items-center py-[40px] max-[960px]:p-0 ] ">
        <div className="wrapper relative flex justify-between items-center flex-col w-full max-w-[1350px] py-5 gap-12px max-[960px]:flex-col "  >
          <div
            className="timelinesection w-full max-w-5xl mt-[10px] flex flex-col items-center justify-center gap-[12px]"
            key={education.id} data-aos="fade-up" data-aos-anchor-placement="top-center">
            <Timeline>
              {education.map((education, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                    {index !== education.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <EducationCard education={education} />
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </div>
      </div>
      <Border />
    </div>
  );
};

export default Education;
