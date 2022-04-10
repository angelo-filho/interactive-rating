import React from "react";

const RatingButton = ({ value, isMarked = false, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={`w-10 desktop:w-14 h-10 desktop:h-14 ${
        isMarked ? "bg-gray-light text-white" : "bg-primary-700 text-gray-light"
      } rounded-full shadow flex justify-center items-center desktop:hover:bg-orange desktop:hover:text-white`}
    >
      {value}
    </button>
  );
};

export default RatingButton;
