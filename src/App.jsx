import { useState } from "react";
import RatingFace from "./RatingFace";
import ThanksFace from "./ThanksFace";

function App() {
  const [selected, setSelected] = useState();
  const [wasSent, setWasSent] = useState(false);

  return (
    <div
      className="bg-primary-900 w-screen h-screen flex justify-center
    items-center"
    >
      <div className="w-[85%] desktop:w-[420px] bg-primary-500 rounded-2xl desktop:rounded-3xl px-5 desktop:px-9 py-9">
        {wasSent ? (
          <ThanksFace selected={selected} />
        ) : (
          <RatingFace
            selected={selected}
            setSelected={setSelected}
            handleSent={setWasSent}
          />
        )}
      </div>
    </div>
  );
}

export default App;
