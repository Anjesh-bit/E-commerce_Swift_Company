import React from "react";
import { CircleLoader } from "react-spinners";

const LoadingIcon = ({ title, color, size }) => {
  return (
    <div className="app__loader">
      <h2>{`${title} is Loading`}</h2>
      <CircleLoader color={color} size={size} />
    </div>
  );
};

export default LoadingIcon;
