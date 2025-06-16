import React, { useState, useMemo } from "react";
import markImage from "./../../assets/images/mark.png";

export const FramePreview = (): JSX.Element => {

  return (
    <div
      className="w-full h-full flex items-center justify-center" style={{height: "100%", textAlign: "center", alignContent: "center"}}
    >
      <img
        className="w-[271px] h-[271px] object-cover"
        alt="Santium logo"
        src={markImage}
      />
    </div>
  );
};