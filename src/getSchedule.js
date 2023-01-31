const { species, hours } = require('../data/zoo_data');

const animals = (param) => {
  const arrayAnimals = ['lions', 'tigers', 'bears', 'penguins', 'otters', 'frogs',
    'snakes', 'elephants', 'giraffes'];
  return arrayAnimals.some((index) => index === param);
};

const dayWeek = (param) => {
  const arrayDayWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday', 'Sunday'];
  return arrayDayWeek.some((index) => index === param);
};

const getSchedule = (scheduleTarget) => {
  const visitacao = {};
  const arrayTheDayWeek = Object.keys(hours);
  arrayTheDayWeek.forEach((index) => {
    const teste = species.filter(({ availability }) => availability
      .some((elemento) => elemento === index)).map((object) => object.name);
    visitacao[index] = {
      officeHour: `Open from ${hours[index].open}am until ${hours[index].close}pm`,
      exhibition: teste,
    };
  });
  visitacao.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  if (animals(scheduleTarget) === true) {
    return species.find(({ name }) => name === scheduleTarget).availability;
  }
  if (dayWeek(scheduleTarget) === true) {
    return { [scheduleTarget]: visitacao[scheduleTarget] };
  }
  return visitacao;
};

module.exports = getSchedule;
