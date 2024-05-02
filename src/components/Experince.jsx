import React from "react";
import { experiences } from "../constrant";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ExperienceCard from "./ExperienceCard";

const Experince = () => {
  return (
    <div>
        <h1 className=" wrapper uppercase mt-8 text-3xl font-bold justify-center item-center flex underline text-gray-800">
          Experience
        </h1>
      <div id="experience" className="container">
        <div className="timelinesection w-full max-w-5xl mt-2 flex flex-col items-center justify-center gap-[12px]" key={experiences.id}>
            <Timeline >
              {experiences.map((experience, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                    {index !== experiences.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <ExperienceCard experience={experience} />
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
        </div>
      </div>
    </div>
  );
};

export default Experince;
