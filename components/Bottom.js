import { useState } from "react";
import { useCtx } from "../context/GeneralContext.js";
import { generate } from "../functions/generate.js";
import CapsIcon from "../icons/CapsIcon.js";
import RedoIcon from "../icons/RedoIcon.js";
import Modal from "./Modal.js";
import ModalContent from "./ModalContent.js";

// TODO: Animate the bar to show results

const Bottom = ({ input, wrong, caps }) => {
  const { isFinished } = useCtx();
  const [focussed, setFocussed] = useState(false);

  const {
    setIsFinished,
    setCount,
    setPos,
    setScore,
    setText,
    setTime,
    setInput,
    setStart,
    setIsPb,
  } = useCtx();

  const reset = () => {
    // ~ Reset all the global variables
    // ~ set colour of all characters to white
    const letters = document.getElementsByClassName("letter");
    for (let i = 0; i < letters.length; i++) {
      letters[i].style.color = "white";
    }
    // ~ reset position of the caret
    const initial = document.getElementsByClassName("letter")[0];
    setPos([initial.offsetTop, initial.offsetLeft]);

    // ~ reset the count
    setCount(0);
    // ~ reset the score
    setScore({ correct: 0, incorrect: 0, missed: 0, extra: 0 });

    // ~ reset the value of the text
    setText(generate(0, 99, 21));

    // ~ reset the time
    setTime({ start: 0, end: 0 });

    // ~ reset the input
    setInput("");

    // ~ set the finish state to false, close the modal
    setIsFinished(false);

    // ~ reset value of start
    setStart(false);

    // ~ reset value of isPb
    setIsPb(false);

    // ~ focus the input after reste
    document.getElementById("Hinput").focus();
  };

  return (
    <div className="w-fit flex justify-center items-center flex-col">
      {/* Bar */}
      <div
        className={`w-[400px] -m-4 h-2 ${
          wrong ? "bg-error" : "bg-secondary-100"
        } rounded-full transition-all `}
      ></div>

      {/* Modal */}
      <Modal finished={isFinished}>
        <ModalContent />
      </Modal>

      {/* Text Display (mapped to input) */}
      <div className="flex flex-row items-center justify-evenly">
        {/* Capslock icons with tooltip */}
        <div className="relative w-min h-min group">
          <CapsIcon capsOn={caps} />
          <div className="-translate-x-1/2 -translate-y-1/2 top-14 left-1/2 absolute bg-secondary-100 w-max px-2 py-1 text-secondary-200 transition-all rounded-lg text-[18px] duration-200 scale-0 group-hover:scale-100 select-none">
            capslock is on
          </div>
        </div>
        <div
          tabIndex="1"
          className="m-4 h-12 font-mono text-white text-[32px] w-full"
        >
          {input}
        </div>
        <div
          onClick={reset}
          onKeyUp={reset}
          tabIndex="0"
          className="relative w-min h-min group outline-none"
          onFocus={() => {
            setFocussed(true);
          }}
          onBlur={() => {
            setFocussed(false);
          }}
        >
          <RedoIcon isFocussed={focussed} />
          <div className="flex flex-row items-center -translate-x-1/2 -translate-y-1/2 top-14 left-1/2 absolute bg-secondary-100 w-max px-2 py-1 text-secondary-200 transition-all rounded-lg text-[18px] duration-200 scale-0 group-hover:scale-100 select-none">
            press
            <p className="w-min px-1.5 mx-1 bg-secondary-200 rounded-lg text-secondary-100">
              tab
            </p>
            for next set of text
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
