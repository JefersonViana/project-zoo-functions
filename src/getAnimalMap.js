const { species } = require('../data/zoo_data');

const emplyParam = () => {
  const objeto = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  species.forEach((object) => {
    switch (true) {
      case object.location === 'NE':
        objeto[object.location].push(object.name);
        break;
      case object.location === 'NW':
        objeto[object.location].push(object.name);
        break;
      case object.location === 'SE':
        objeto[object.location].push(object.name);
        break;
      case object.location === 'SW':
        objeto[object.location].push(object.name);
        break;
      default:
        break;
    }
  })
  return objeto;
};

const getAnimalMap = (options) => {
  if (!options) {
    return emplyParam();
  }
  const keys = Object.keys(options);
  const validation = keys.includes('includeNames');
  console.log(validation);
  if (keys.length === 1 && keys[0] === 'sex' || validation === false) {
    return emplyParam();
  }
  return 'aconteceu nenhum if por isso cheguei aqui!';
};
console.log(getAnimalMap({ includeNames: 'teste', sex: 'female', sorted: true }));
module.exports = getAnimalMap;
