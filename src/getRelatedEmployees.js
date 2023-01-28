const data = require('../data/zoo_data');

const isManager = (id) => data.employees.some((objeto) => objeto
  .managers[0] === id || objeto.managers[1] === id);

const functionAux = (managerId) => {
  const arrayColaboradores = [];
  data.employees.forEach((objeto) => {
    objeto.managers.forEach((elemento) => {
      if (elemento === managerId) {
        arrayColaboradores.push(`${objeto.firstName} ${objeto.lastName}`);
      }
    });
  });
  return arrayColaboradores;
};

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    return functionAux(managerId);
  }
};
module.exports = { isManager, getRelatedEmployees };
