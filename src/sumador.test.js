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
});

describe("Restar", () => {
  it("deberia Restar dos numeros", () => {
    expect(restar(3,2)).toEqual(1);
  });
});

describe("Multiplicar", () => {
  it("deberia multiplicar dos numeros", () => {
    expect(multiplicar(3,1)).toEqual(3);
  });
});

