"use client";

import Countdown from "react-countdown";

const endingDate = new Date("2025-01-20");
// const Completionist = () => (
//   <span className="text-5xl font-bold text-yellow-300">
//     You are good to go!
//   </span>
// );

const Countdowner = () => {
  return (
    <Countdown
      className="text-5xl font-bold text-yellow-300"
      // date={Date.now() + 10000}
      date={endingDate}
    />
  );
};

export default Countdowner;
