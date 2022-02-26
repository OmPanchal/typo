import { useContext, useState, useEffect } from "react";
import { createContext } from "react";
import { generate } from "../functions/generate";

const GeneralContext = createContext();

export const useCtx = () => {
  return useContext(GeneralContext);
};

const GeneralContextProvider = ({ children }) => {
  const [score, setScore] = useState({
    correct: 0,
    incorrect: 0,
    missed: 0,
    extra: 0,
  });

  const [isFinished, setIsFinished] = useState(false);
  const [count, setCount] = useState(0);
  const [pos, setPos] = useState([undefined, undefined]);

  const [text, setText] = useState(generate(0, 99, 20));
  const [time, setTime] = useState({ start: 0, end: 0 });
  const [input, setInput] = useState("");

  const [start, setStart] = useState(false);

  const [high, setHigh] = useState(0);

  const [isPb, setIsPb] = useState(false);

  useEffect(() => {
    const high = localStorage.getItem("High");
    if (high !== null) setHigh(high);
    if (high === null) setHigh(0);
  }, []);

  const value = {
    score,
    setScore,
    isFinished,
    setIsFinished,
    count,
    setCount,
    pos,
    setPos,
    text,
    setText,
    time,
    setTime,
    input,
    setInput,
    start,
    setStart,
    high,
    setHigh,
    isPb,
    setIsPb,
  };

  return (
    <GeneralContext.Provider value={value}>{children}</GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
