const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Caso a função seja chamada sem parametro deve retornar um objeto com os dias e horarios de funcionamento.', () => {
    const object = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 }
    }
    expect(getOpeningHours()).toEqual(object);
  }); 
  // it('Recebe throw', () => {
  //   try {
  //     getOpeningHours('segunda', '10:00-AM')
  //   } catch (error) {
  //     expect(error.message).toBe('The day must be valid. Example: Monday');
  //   }
  // }); 
  it('Caso o primeiro parametro não seja um dia da semana em Inglês retorne um Erro!', () => {
    expect(() => { getOpeningHours('segunda', '10:00-AM') }).toThrow('The day must be valid. Example: Monday');
  }); 
  it('Caso o segundo parametro receba em horas valor menor que 0 ou maior que 12 retorne um Erro!', () => {
    expect(() => { getOpeningHours('Monday', '13:00-AM') }).toThrow('The hour must be between 0 and 12');
  }); 
  it('Caso o segundo parametro receba em minutos valor menor que 0 ou maior que 59 retorne um Erro!', () => {
    expect(() => { getOpeningHours('Monday', '12:60-AM') }).toThrow('The minutes must be between 0 and 59');
  }); 
  it('Caso o segundo parametro não receba AM ou PM retorne um Erro!', () => {
    expect(() => { getOpeningHours('Monday', '12:10-AB') }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  }); 
  it('Caso o segundo parametro não tenha o formato entre "00:00-AM" entre "12:00-AM" retorne um Erro!', () => {
    expect(() => { getOpeningHours('Monday', 'dez:10-AM') }).toThrow('The hour should represent a number');
  }); 
  it('Caso seja passado "Monday, 08:00-AM" retorne The zoo is closed!', () => {
    expect(getOpeningHours('Monday', '08:00-AM')).toBe('The zoo is closed');
  }); 
  it('Caso seja passado "Sunday, 08:00-AM" retorne The zoo is open!', () => {
    expect(getOpeningHours('Sunday', '08:00-AM')).toBe('The zoo is open');
  }); 
});
