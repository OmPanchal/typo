export const occurs = (array, value) => {
  var count = 0;
  array.forEach((v) => v === value && count++);
  return count;
};
