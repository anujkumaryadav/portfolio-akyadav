import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Aspiring Software Engineer",
          "Frontend Avenger",
          "Upcoming Full Stack Cyclone",
          "Trying to be an Entrepreneur",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
