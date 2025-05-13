import { countries } from "../datos/datosEnunciados.js";

export function PaisConMaisInfectados() {
  let PaisConMaisInfectados = countries[0];
  for (let contador = 0; contador < countries.length; contador++) {
    if (countries[contador].infected > PaisConMaisInfectados.infected) {
      PaisConMaisInfectados = countries[contador];
    }
  }
  return PaisConMaisInfectados;
}
