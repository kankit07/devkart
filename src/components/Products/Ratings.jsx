import React from "react";
import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as SolidStartIcon } from "@heroicons/react/24/solid";

const Ratings = ({ rating, onClick, style }) => {
  return (
    <span style={{ display: "!inline-block" }}>
      {[...Array(5)].map((_, i) => (
        <span className="" key={i} onClick={() => onClick(i)} style={style}>
          {rating > i ? (
            <SolidStartIcon style={{ display: "inline-block" }} height={16} />
          ) : (
            <StarIcon style={{ display: "inline-block" }} height={16} />
          )}
        </span>
      ))}
    </span>
  );
};

export default Ratings;
