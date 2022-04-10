import { useState } from "react";
import star from "../../assets/icon-star.svg";
import RatingButton from "../RatingButton";

const RatingFace = ({ selected, setSelected, handleSent }) => {
  return (
    <div>
      <div className="mb-6">
        <div className="w-10 h-10 bg-primary-700 rounded-full flex items-center justify-center shadow">
          <img src={star} alt="Estrela" />
        </div>
      </div>
      <h2 className="text-2xl font-black text-white mb-4">How did we do?</h2>
      <p className="text-gray-light leading-6 text-sm desktop:text-base mb-6">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="w-full flex justify-between mb-8">
        {[1, 2, 3, 4, 5].map((num) => (
          <RatingButton
            key={num}
            value={num}
            handleClick={() => setSelected(num)}
            isMarked={num === selected}
          />
        ))}
      </div>
      <button
        onClick={() => handleSent(true)}
        className="w-full h-12 bg-orange rounded-full text-white font-bold tracking-widest hover:bg-white hover:text-orange"
      >
        SUBMIT
      </button>
    </div>
  );
};

export default RatingFace;
