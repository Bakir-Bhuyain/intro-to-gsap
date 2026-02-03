/* 
first 100 you need to pay 100 tk for each 
for the second 100 you have to pay 90 tk for each product
for up for the 200 then you have to pay for the 70 tk for each product
*/

function layeredDiscountTotal (quantity){
 const first100Price = 100;
 const second100Price = 90;
 const upTo200 = 70;

 if(quantity <= 100){
      const firstTotal = quantity * first100Price;
      return firstTotal;
 }else if (quantity <= 200){
      const first100Total = 100 * first100Price;
      const remainingTotal = quantity * second100Price;
      const total = first100Total + remainingTotal;
      return total;
 }else{
      const first100Total = 100 * first100Price;
      const second100Total = 100 * second100Price;
      const remainingQuantity = quantity - 200;
      const remainingTotal = remainingQuantity * upTo200;
      const total = first100Total + second100Total + remainingTotal;
      return total;
 }
}