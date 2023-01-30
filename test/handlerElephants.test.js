const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Ao chamar a funcão handlerElephants() sem parametro o retorno esperado é undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('Ao chamar a funcão handlerElephants() passando como parametro um NUMBER o retorno esperado é "Parâmetro inválido, é necessário uma string"', () => {
    expect(handlerElephants(5)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Ao chamar a funcão handlerElephants() passando "popularity" como parametro o retorno esperado é 5', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Ao chamar a funcão handlerElephants() passando "count" como parametro o retorno esperado é 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Ao chamar a funcão handlerElephants() passando "location" como parametro o retorno esperado é "NW"', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Ao chamar a funcão handlerElephants() passando "availability" como parametro o retorno esperado é "NW"', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Ao chamar a funcão handlerElephants() passando "names" como parametro o retorno esperado é um array com o nome dos elefantes ["Ilana", "Orval", "Bea", "Jefferson"] ', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Ao chamar a funcão handlerElephants() passando "averageAge" como parametro o retorno esperado é 10.5', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Ao chamar a funcão handlerElephants() passando "lions" como parametro o retorno esperado é "null"', () => {
    expect(handlerElephants('lions')).toBe(null);
  });
});
