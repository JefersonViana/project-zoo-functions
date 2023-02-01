const { employees, species } = require('../data/zoo_data');

const oneEmployee = (object) => {
  const value = Object.values(object)[0];
  const employee = employees.find(({ id, firstName, lastName }) =>
    id === value || firstName === value || lastName === value);
  const { id, firstName, lastName, responsibleFor } = employee;
  const animals = species.filter(({ id: animal }) => responsibleFor
    .some((idAnimal) => animal === idAnimal));
  const objectReturn = {
    id,
    fullName: `${firstName} ${lastName}`,
    species: [],
    locations: [],
  };
  animals.forEach(({ name, location }) => {
    objectReturn.species.push(name);
    objectReturn.locations.push(location);
  });
  return objectReturn;
};

const allEmployees = () => {
  const employee = employees.map(({ id, firstName, lastName, responsibleFor }) => {
    const animals = species.filter(({ id: animal }) => responsibleFor
      .some((idAnimal) => animal === idAnimal));
    const arrayObjects = {
      id,
      fullName: `${firstName} ${lastName}`,
      species: [],
      locations: [],
    };
    animals.forEach(({ name, location }) => {
      arrayObjects.species.push(name);
      arrayObjects.locations.push(location);
    });
    return arrayObjects;
  });
  return employee;
};

const getEmployeesCoverage = (object) => {
  if (!object) {
    return allEmployees();
  }
  const value = Object.values(object)[0];
  console.log(value);
  const employee = employees.some(({ id, firstName, lastName }) =>
    id === value || firstName === value || lastName === value);
  if (employee === false) {
    throw new Error('Informações inválidas');
  }
  return oneEmployee(object);
};

module.exports = getEmployeesCoverage;
