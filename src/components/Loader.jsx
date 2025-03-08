import React from "react";
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress(); // Tracks loading progress

  return (
    <Html center>
      <div className="loader-container">
        <div className="loader"></div>
        <p className="loading-text">{progress.toFixed(2)}% Loaded</p>
      </div>
    </Html>
  );
};

export default Loader;
