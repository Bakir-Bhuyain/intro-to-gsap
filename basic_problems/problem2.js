const heights = [25, 45, 25, 36, 75, 14, 85, 21];
function getMax(number) {
  let max = number[0];
  for (const num of number) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
