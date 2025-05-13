import { persons, pets } from "../datos/datosEnunciados.js";

export const persoasEspanhoisConCan = [];

for (let contador = 0; contador < persons.length; contador++) {
  let person = persons[contador];
  if (person.country === "ES") {
    for (let contador = 0; contador < pets.length; contador++) {
      if (
        person.pet === pets[contador].name &&
        pets[contador].type === "perro"
      ) {
        persoasEspanhoisConCan.push(person.name);
      }
    }
  }
}
