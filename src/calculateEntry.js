const { prices } = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const child = entrants.filter(({ age }) => age < 18);
  const adult = entrants.filter(({ age }) => age >= 18 && age < 50);
  const senior = entrants.filter(({ age }) => age >= 50);
  const objVisitor = {
    child: child.length,
    adult: adult.length,
    senior: senior.length,
  };
  return objVisitor;
};

const calculateEntry = (entrants) => {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const objectEntrants = countEntrants(entrants);
  const { child: quantChild, adult: quantAdult, senior: quantSenior } = objectEntrants;
  const { child, adult, senior } = prices;
  return (child * quantChild) + (adult * quantAdult) + (senior * quantSenior);
};

module.exports = { calculateEntry, countEntrants };
