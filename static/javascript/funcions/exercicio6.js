import { persons } from "../datos/datosEnunciados.js";

export function NomePersoasInfectadas() {
  let NomePersoasInfectadas = [];
  for (let contador = 0; contador < persons.length; contador++) {
    if (persons[contador].infected == true) {
      NomePersoasInfectadas.push(persons[contador].name);
    }
  }

  return NomePersoasInfectadas;
}
