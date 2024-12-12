import sumar from "./sumador.js";
import restar from "./restar.js"
import multiplicar from "./multiplicar.js";

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

