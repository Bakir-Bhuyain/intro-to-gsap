const mobiles = [
      {name: 'samsung1', price : 20000, camera:'12mp'},
      {name: 'samsung2', price : 1000, camera:'12mp'},
      {name: 'samsung3', price : 12000, camera:'12mp'},
      {name: 'samsung4', price : 22000, camera:'12mp'},
      {name: 'samsung5', price : 30000, camera:'12mp'},
]

function getCheapPhone(mobiles){
      let cheap = mobiles[0]
      for (const phone of mobiles){
            if(phone.price < cheap.price){
                  cheap = phone;
            }
      }
      return cheap;
};
const cheapest = getCheapPhone(mobiles);
console.log(cheapest);