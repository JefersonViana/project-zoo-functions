const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const species = [];
  ids.forEach((elemento) => {
    data.species.forEach((id) => {
      if (id.id === elemento) {
        species.push(id);
      }
    });
  });
  return species;
};
module.exports = getSpeciesByIds;
