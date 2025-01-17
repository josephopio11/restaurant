"use client";

import Countdown from "react-countdown";

const endingDate = new Date("2025-01-27");

const Countdowner = () => {
  return (
    <Countdown
      className="text-5xl font-bold text-yellow-300"
      date={endingDate}
    />
  );
};

export default Countdowner;
