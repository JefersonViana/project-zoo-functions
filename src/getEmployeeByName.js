const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => (!employeeName ? {} : data.employees
  .find((pessoa) => pessoa.firstName === employeeName || pessoa.lastName === employeeName));
module.exports = getEmployeeByName;
