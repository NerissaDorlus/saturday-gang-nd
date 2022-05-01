// edibit question

function futurePeople(population, newPeople) {
  const months = 12 * 30;
  const numPeople = months * newPeople;
  const res = population + numPeople;
  return res;
}
console.log(futurePeople(700, 8));
