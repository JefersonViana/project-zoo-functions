const data = require('../data/zoo_data');

const functionAux = (chave, value) => {
  const arrayDoObjetoFiltrado = data.species.filter((fullObjeto) => fullObjeto.name === chave);
  const quantAnimals = arrayDoObjetoFiltrado[0].residents.filter((animal) => animal.sex === value);
  return quantAnimals.length;
};

const countAnimals = (animal) => {
  const allSpecies = {};
  if (!animal) {
    data.species.forEach((objeto) => {
      allSpecies[objeto.name] = objeto.residents.length;
    });
    return allSpecies;
  }
  let retornoEmQuantidade;
  const key = Object.keys(animal);
  if (key.length > 1) {
    retornoEmQuantidade = functionAux(animal[key[0]], animal[key[1]]);
  } else {
    const specie = animal.species;
    const arrayDoObjetoFiltrado = data.species
      .filter((fullObjeto) => fullObjeto.name === specie);
    retornoEmQuantidade = arrayDoObjetoFiltrado[0].residents.length;
  }
  return retornoEmQuantidade;
};

module.exports = countAnimals;
