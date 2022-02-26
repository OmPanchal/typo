import { words } from "../wordlist";

export const generate = (min, max, len) => {
  const output = [];

  for (let i = 0; i < len; i++) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const idx = Math.floor(Math.random() * (max - min) + min);
    output.push(words[idx]);
    if (i === len - 1) {
      output.push("");
    }
  }

  return output;
};
