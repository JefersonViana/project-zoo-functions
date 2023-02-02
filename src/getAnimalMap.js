const { species } = require('../data/zoo_data');

const paramEmply = () => {
  const objArrays = species.reduce((acc, objAtual) => {
    acc[objAtual.location] = [];
    species.forEach((animal) => {
      if (animal.location === objAtual.location) {
        acc[objAtual.location].push(animal.name);
      }
    });
    return acc;
  }, {});
  return objArrays;
};

const nameTrue = () => {
  const objArrays = {};
  species.forEach((objAtual) => {
    objArrays[objAtual.location] = [];
    species.forEach((elemento) => {
      if (objAtual.location === elemento.location) {
        objArrays[objAtual.location].push({
          [elemento.name]: elemento.residents
            .map((resident) => resident.name),
        });
      }
    });
  });
  return objArrays;
};

const sortedTrue = () => {
  const objArrays = {};
  species.forEach((objAtual) => {
    objArrays[objAtual.location] = [];
    species.forEach((elemento) => {
      if (objAtual.location === elemento.location) {
        objArrays[objAtual.location].push({
          [elemento.name]: elemento.residents
            .map((resident) => resident.name).sort(),
        });
      }
    });
  });
  return objArrays;
};
const sexAnimal = (elemento, sex) => {
  const arrayAnimalsSex = [];
  elemento.residents.forEach((animal) => {
    if (animal.sex === sex) {
      arrayAnimalsSex.push(animal.name);
    }
  });
  return arrayAnimalsSex;
};
const sexAnimalSorted = (elemento, sex) => {
  const arrayAnimalsSex1 = [];
  elemento.residents.forEach((animal) => {
    if (animal.sex === sex) {
      arrayAnimalsSex1.push(animal.name);
    }
  });
  return arrayAnimalsSex1.sort();
};
const sexTrue = (param) => {
  const objArrays = {};
  species.forEach((objAtual) => {
    objArrays[objAtual.location] = [];
    species.forEach((elemento) => {
      if (objAtual.location === elemento.location) {
        objArrays[objAtual.location].push({ [elemento.name]: sexAnimal(elemento, param) });
      }
    });
  });
  return objArrays;
};
const sexTrueSorted = (param) => {
  const objArrays = {};
  species.forEach((objAtual) => {
    objArrays[objAtual.location] = [];
    species.forEach((elemento) => {
      if (objAtual.location === elemento.location) {
        objArrays[objAtual.location].push({ [elemento.name]: sexAnimalSorted(elemento, param) });
      }
    });
  });
  return objArrays;
};

const validation2 = (includeNames, sex, sorted) => {
  if (includeNames === true && sorted === undefined && typeof sex === 'string') {
    return sexTrue(sex);
  }
  return sexTrueSorted(sex);
};

const validation1 = (includeNames, sex, sorted) => {
  if (includeNames === true && sex === undefined && sorted === true) {
    return sortedTrue();
  }
  return validation2(includeNames, sex, sorted);
};

const validation = (includeNames, sex, sorted) => {
  if (includeNames === true && sex === undefined && sorted === undefined) {
    return nameTrue();
  }
  return validation1(includeNames, sex, sorted);
};

const getAnimalMap = (options) => {
  if (!options) {
    return paramEmply();
  }
  const { includeNames, sex, sorted } = options;
  if (includeNames === undefined) {
    return paramEmply();
  }
  return validation(includeNames, sex, sorted);
};

module.exports = getAnimalMap;
