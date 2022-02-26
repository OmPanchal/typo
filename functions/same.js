export const same = (actual, input) => {
  const act = actual.split("");
  const inp = input.split("");

  const max = Math.max(act.length, inp.length);
  let output = [];

  for (let idx = 0; idx < max; idx++) {
    if (input[idx] === undefined) {
      output.push(undefined);
    } else if (actual[idx] !== input[idx]) {
      output.push(false);
    } else if (actual[idx] === input[idx]) {
      output.push(true);
    }
  }

  return output;
};
