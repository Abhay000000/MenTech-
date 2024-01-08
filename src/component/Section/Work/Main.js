import React from "react";
import { GiCrystalGrowth, GiPodiumWinner, GiTeamIdea } from "react-icons/gi";
import { SiDsautomobiles } from "react-icons/si";
import CountUp from "react-countup";

const Work = () => {
  return (
    <>
      <div className="relative h-full lg:h-[20vh] items-center flex work-img text-white">
        {/* Overlay */}
        <div className="lg:absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 grid place-items-center">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 m-auto lg:w-[60%] sd:w-[75%]  ">
            <div className="m-auto my-5">
              <GiCrystalGrowth className="text-5xl" />
              <h1>
                <span className="text-5xl font-extrabold">
                  <CountUp end={50} duration={4} />{" "}
                </span>{" "}
                +
              </h1>
              <p className="font-semibold">Project Done</p>
            </div>
            <div className="m-auto my-5">
              <SiDsautomobiles className="text-5xl" />
              <h1>
                {" "}
                <span className="text-5xl font-extrabold">
                  <CountUp end={75} duration={4} />{" "}
                </span>{" "}
                +
              </h1>
              <p className="font-semibold">Happy Customer</p>
            </div>
            <div className="m-auto my-5">
              <GiPodiumWinner className="text-5xl" />
              <h1>
                {" "}
                <span className="text-5xl font-extrabold">
                  <CountUp end={20} duration={4} />{" "}
                </span>{" "}
                +
              </h1>
              <p className="font-semibold">Award Winning</p>
            </div>
            <div className="m-auto my-5">
              <GiTeamIdea className="text-5xl" />
              <h1>
                <span className="text-5xl font-extrabold">
                  <CountUp end={45} duration={4} />{" "}
                </span>{" "}
                +
              </h1>
              <p className="font-semibold">Team Member</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
