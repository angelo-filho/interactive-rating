import React from "react";
import phone from "../../assets/illustration-thank-you.svg";

const ThanksFace = ({ selected }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <img className="w-48 mb-7" src={phone} alt="Celular" />
      <div className="flex justify-center mb-7">
        <p className="px-4 py-2 h-9 rounded-full bg-primary-700 text-orange ">
          You selected {selected} out of 5
        </p>
      </div>
      <h2 className="text-2xl font-black text-white mb-4">Thank you!</h2>
      <p className="text-gray-dark text-sm desktop:text-base">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch
      </p>
    </div>
  );
};

export default ThanksFace;
