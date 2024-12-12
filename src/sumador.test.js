import sumar from "./sumador.js";
import restar from "./restar.js"
import multiplicar from "./multiplicar.js";

import calcularIMC from './imc.js';

describe('Calculadora de IMC', () => {
  it('debería calcular el IMC correctamente para un caso básico', () => {
    expect(calcularIMC(70, 1.75)).toBeCloseTo(22.86, 2);
  });
});

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2, 1)).toEqual(6);
  });
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2, 20)).toEqual(25);
  });
});

describe("Restar", () => {
  it("deberia Restar dos numeros", () => {
    expect(restar(3,2)).toEqual(1);
  });
  it("deberia Restar dos numeros", () => {
    expect(restar(10,2)).toEqual(8);
  });
  it("deberia Restar dos numeros", () => {
    expect(restar(100,2)).toEqual(98);
  });
});

describe("Multiplicar", () => {
  it("deberia multiplicar dos numeros", () => {
    expect(multiplicar(3,1)).toEqual(3);
  });
  it("deberia multiplicar dos numeros", () => {
    expect(multiplicar(3,12)).toEqual(36);
  });
  it("deberia multiplicar dos numeros", () => {
    expect(multiplicar(3,30)).toEqual(90);
  });
});

