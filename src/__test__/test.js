import Validator from '../js/Validator';

test('check Symbol', () => {
  const value = new Validator('gjki#@hjk');
  const result = () => value.validateUsername();
  expect(result).toThrow('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
});

test('check first character', () => {
  const value = new Validator('Lnalen');
  const result = () => value.validateUsername();
  expect(result).toThrow('Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире.');
});

test('check last character', () => {
  const value = new Validator('Lnalen');
  const result = () => value.validateUsername();
  expect(result).toThrow('Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире.');
});

test('check 4 and more number', () => {
  const value = new Validator('vam4958jfyx');
  const result = () => value.validateUsername();
  expect(result).toThrow('Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире.');
});
