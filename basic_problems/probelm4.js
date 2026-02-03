const prices = [20000, 16000 ,25000, 50000, 10200, 36222, 105780];

function getMin (numbers){
      let min = numbers[0];
      for (const number of numbers){
            if (number < min){
                  min = number;
            }
      }
      return min;
}

const total = getMin(prices);
console.log(total);