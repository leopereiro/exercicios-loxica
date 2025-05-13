import {persons, pets} from "../datos/datosEnunciados.js";
export function persoasConMascotas() {
    let persoasConMascotas = [];
    for (let contador=0; contador < persons.length; contador++) {
            if(persons[contador]) {
                persoasConMascotas.push(persons[contador].name);
            }
    }
    for (let contador=0; contador < pets.length; contador++) {
        if(pets[contador]) {
            persoasConMascotas.push(pets[contador].name && pets[contador].type);
        }
}
return persoasConMascotas;
}
