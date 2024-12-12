import sumar from "./sumador.js";
import restar from "./restar.js"

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


