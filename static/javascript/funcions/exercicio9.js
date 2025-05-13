import { persons, pets } from "../datos/datosEnunciados.js";

export function animalMaisComun() {
    let animalMaisComun = pets[0];
    for(let contador = 0; contador < persons.length; contador++) {
        for(let contador = 0; contador < pets.length; contador++) {
            if(persons[contador].pet === pets[contador].type) {
                pets[contador].pets++;
            }
        if(pets[contador].pets > animalMaisComun.pets) {
            animalMaisComun = pets[contador];
            }
        }
    }   
        return animalMaisComun.type;
}
