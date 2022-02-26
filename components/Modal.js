import { useCtx } from "../context/GeneralContext";
import { generate } from "../functions/generate";

const Modal = ({ finished, children }) => {
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

    // ~ set the finish state to false, close the modal
    setIsFinished(false);

    // ~ reset the input
    setInput("");

    // ~ reset value of start
    setStart(false);

    // ~ reset value of isPb
    setIsPb(false);

    // ~ focus the input after reste
    document.getElementById("Hinput").focus();
  };

  return (
    <>
      <div
        className={`fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-screen h-screen z-[148] ${
          finished
            ? "z-[148] scale-100 opacity-100"
            : "scale-0 -z-[150] opacity-0"
        }`}
        onClick={() => {
          setIsFinished(false);
          reset();
        }}
      ></div>
      <div
        className={`fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-secondary-100 p-4 w-[480px] h-72 transition-all rounded-lg duration-300  ${
          finished
            ? "z-[150] scale-100 opacity-100"
            : "scale-0 -z-[150] opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
