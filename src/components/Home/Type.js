import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "I am not just a Developer",
          "I am an architect of solutions",
          "I am a versatile and experienced software engineer, specializing in full-stack development",
          " I bring a wealth of expertise in both frontend and backend technologies",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
