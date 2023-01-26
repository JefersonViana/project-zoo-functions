const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  let result = '';
  data.species.forEach((elemento) => {
    if (elemento.name === animal) {
      result = elemento.residents.every((teste) => teste.age > age);
    }
  });
  return result;
};
module.exports = getAnimalsOlderThan;
