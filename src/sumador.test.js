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
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2, 200)).toEqual(205);
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
  it("deberia multiplicar dos numeros", () => {
    expect(multiplicar(2,30)).toEqual(60);
  });
  it("deberia multiplicar dos numeros", () => {
    expect(multiplicar(2,30)).toEqual(60);
  });
  it("deberia multiplicar dos numeros", () => {
    expect(multiplicar(4,30)).toEqual(120);
  });
  it("deberia multiplicar dos numeros", () => {
    expect(multiplicar(2,30)).toEqual(60);
  });
  it("deberia multiplicar dos numeros", () => {
    expect(multiplicar(2,120)).toEqual(240);
  });
  it("deberia multiplicar dos numeros", () => {
    expect(multiplicar(2,500)).toEqual(1000);
  });
  it("deberia multiplicar dos numeros", () => {
    expect(multiplicar(2,213)).toEqual(426);
  });
  it("deberia multiplicar dos numeros", () => {
    expect(multiplicar(2,21)).toEqual(42);
  });
  it("deberia multiplicar dos numeros", () => {
    expect(multiplicar(2,15)).toEqual(30);
  });
  it("deberia multiplicar dos numeros", () => {
    expect(multiplicar(2,10)).toEqual(20);
  });
});

