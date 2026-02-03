//feet to cm
// kilo to meter

/**
 * chair - 3 cft
 * table - 10 cft
 * bed - 50 cft
 */

function woodCalc(chair, table, bed) {
  const perChairWood = 3;
  const perTableWod = 10;
  const perBedWood = 50;
  const allChairWood = chair * perChairWood;
  const allTableWood = table * perTableWod;
  const allBedWood = bed * perBedWood;

  const allWood = allBedWood + allChairWood + allTableWood;
  return allWood;
}
const wood = woodCalc(5, 2, 7);
console.log(wood);