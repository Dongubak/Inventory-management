import { validateId, validCategory, validName, validPrice, validQuantity } from './validation.js';
// import { jest } from '@jest/globals';

describe('단위 모듈 검증', () => {
  test('id 검증 #1', () => {
    const input = '';
    const output = validateId(input);

    expect(output).toBe(false);
  });

  test('id 검증 #2', () => {
    const input = 'P-001';
    const output = validateId(input);

    expect(output).toBe(true);
  });

  test('name 검증 #1', () => {
    const input = '';
    const output = validName(input);

    expect(output).toBe(false);
  });

  test('name 검증 #2', () => {
    const input =
      'asdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdff';
    const output = validName(input);

    expect(output).toBe(false);
  });

  test('name 검증 #3', () => {
    const input = 'Chocolate';
    const output = validName(input);

    expect(output).toBe(true);
  });

  test('price 검증 #1', () => {
    const input = 'a';
    const output = validPrice(input);

    expect(output).toBe(false);
  });

  test('price 검증 #2', () => {
    const input = 123;
    const output = validPrice(input);

    expect(output).toBe(true);
  });

  test('price 검증 #3', () => {
    const input = -1;
    const output = validPrice(input);

    expect(output).toBe(false);
  });

  test('quantity 검증 #1', () => {
    const input = 'a';
    const output = validQuantity(input);

    expect(output).toBe(false);
  });

  test('quantity 검증 #2', () => {
    const input = 123;
    const output = validQuantity(input);

    expect(output).toBe(true);
  });

  test('quantity 검증 #3', () => {
    const input = -1;
    const output = validQuantity(input);

    expect(output).toBe(false);
  });

  test('category 검증 #1', () => {
    const input = 'asdf';
    const output = validCategory(input);

    expect(output).toBe(true);
  });

  test('category 검증 #2', () => {
    const input = '';
    const output = validCategory(input);

    expect(output).toBe(false);
  });
});
