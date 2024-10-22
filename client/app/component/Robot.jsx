"use client";

import React, { useState } from "react";
import { global } from "styled-jsx/css";

const Robot = () => {
  const [isWalking, setIsWalking] = useState(false);

  // Toggle walking state
  const handleToggleWalk = () => {
    setIsWalking(!isWalking);
  };

  return (
    <div className={global.container}>
      <div className={`${global.robot} ${isWalking ? global.walking : ""}`}>
        <div className={global.head}></div>
        <div className={global.body}></div>
        <div className={global.armLeft}></div>
        <div className={global.armRight}></div>
        <div className={global.legLeft}></div>
        <div className={global.legRight}></div>
      </div>
      <button className={global.walkButton} onClick={handleToggleWalk}>
        {isWalking ? "Stop Walking" : "Start Walking"}
      </button>
    </div>
  );
};

export default Robot;
