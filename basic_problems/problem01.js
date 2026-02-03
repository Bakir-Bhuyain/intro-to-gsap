const jim =  56;
const tim = 89;
const kim = 65;
if (jim>tim && jim > kim){
      console.log('jim is the ultimate boss');
}else if (tim >jim && jim > kim) {
      console.log('tim is the ultimate boss');
}else{
      console.log('kim is the kardashian Boss');
}


function maxOfThree (num1, num2, num3){
      if(num1 > num2 && num1 > num3){
            console.log('number 1 is one');
      }else if(num2 > num1 && num2 >num3){
            console.log('number 2 is one');
      }
}

const max = Math.max(12, 25, 22, 32 ,41, 26);
console.log(max);