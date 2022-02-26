import { useCtx } from "../context/GeneralContext";
import CrownIcon from "../icons/StarIcon";
import Score from "./Score";

const ModalContent = () => {
  const { score, time, text, high, setHigh, isPb, setIsPb } = useCtx();

  const raw = text.length / ((time.end - time.start) / 60);

  const acc =
    score.correct /
    (score.correct + score.incorrect + score.extra + score.missed);

  const wpm = raw * acc;

  if (wpm > high) {
    setHigh(Math.round(wpm));
    localStorage.setItem("High", Math.round(wpm));
    console.log(localStorage.getItem("High"));
    setIsPb(true);
  }

  return (
    <div className="grid place-content-center items-center justify-center h-full w-full select-none text-[60px]">
      <div className="flex w-full flex-row items-center justify-evenly -mt-4">
        {isPb && (
          <div className="absolute top-[52px] text-secondary-100 transition-all hover:text-primary">
            <div className="relative w-min h-min group text-secondary-200 transition-all hover:text-primary">
              <CrownIcon />
              <div className="-translate-x-1/2 -translate-y-1/2 -top-6 left-1/2 absolute bg-secondary-200 w-max px-2 py-1 text-secondary-100 transition-all rounded-lg text-[18px] duration-200 scale-0 group-hover:scale-100 select-none font-sans">
                new personal best
              </div>
            </div>
          </div>
        )}
        <Score
          className="text-[90px] mx-6"
          score={Math.round(wpm) || 0}
          lable="wpm"
          big={true}
        />
        <Score
          className="text-[90px] mx-6"
          score={Math.round(acc * 100) || 0}
          lable="accuracy"
          big={true}
        />
      </div>

      <div className="flex mt-4">
        <div className="flex flex-row items-center justify-center mx-5">
          <Score big={false} score={score.correct} lable="correct" />
          <p className="text-secondary-200">-</p>
          <Score big={false} score={score.incorrect} lable="incorrect" />
          <p className="text-secondary-200">-</p>
          <Score big={false} score={score.missed} lable="missed" />
          <p className="text-secondary-200">-</p>
          <Score big={false} score={score.extra} lable="extra" />
        </div>
        <Score
          className="mx-4"
          score={Math.round(raw) === Infinity ? 0 : Math.round(raw)}
          lable="raw wpm"
        />
      </div>

      {/* <button onClick={reset}>close</button> */}
    </div>
  );
};

export default ModalContent;
