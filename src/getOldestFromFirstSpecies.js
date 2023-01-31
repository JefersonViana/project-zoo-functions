const { species, employees } = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const idAnimals = employees.find(({ id: employeesId }) => employeesId === id).responsibleFor[0];
  const arrayAnimals = species.find(({ id: specieId }) => specieId === idAnimals).residents;
  let animalOlde = 0;
  const objectReturn = {};
  arrayAnimals.forEach((object) => {
    const { age, sex, name } = object;
    if (age > animalOlde) {
      animalOlde = age;
      objectReturn.name = name;
      objectReturn.sex = sex;
      objectReturn.age = age;
    }
  });
  return [objectReturn.name, objectReturn.sex, objectReturn.age];
};

module.exports = getOldestFromFirstSpecies;
