import { pets } from "../datos/datosEnunciados.js";

export function NomesMascotas() {
  let NomesMascotas = [];
  for (let contador = 0; contador < pets.length; contador++) {
    NomesMascotas.push(pets[contador].name);
  }

  return NomesMascotas;
}
