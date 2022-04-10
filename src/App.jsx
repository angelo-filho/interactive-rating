import { useState } from "react";
import star from "../assets/icon-star.svg";
import RatingButton from "./RatingButton";

function App() {
  const [selected, setSelected] = useState();

  return (
    <div
      className="bg-primary-900 w-screen h-screen flex justify-center
    items-center"
    >
      <div className="w-[85%] desktop:w-[420px] bg-primary-500 rounded-2xl desktop:rounded-3xl px-5 desktop:px-9 py-9">
        <div className="mb-6">
          <div className="w-10 h-10 bg-primary-700 rounded-full flex items-center justify-center shadow">
            <img src={star} alt="Estrela" />
          </div>
        </div>
        <h2 className="text-2xl font-black text-white mb-4">How did we do?</h2>
        <p className="text-gray-light leading-6 mb-6">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="w-full flex justify-between mb-8">
          {[1, 2, 3, 4, 5].map((num) => (
            <RatingButton
              value={num}
              handleClick={() => setSelected(num)}
              isMarked={num === selected}
            />
          ))}
        </div>
        <button className="w-full h-12 bg-orange rounded-full text-white font-bold tracking-widest hover:bg-white hover:text-orange">
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default App;
