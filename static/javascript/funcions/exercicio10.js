import { animals } from "../datos/datosEnunciados.js";
export function patasAnimais() {
    let patasAnimais = 0;
    for(let contador=0; contador < animals.length; contador++) {
        if(typeof animals[contador].legs === "number") {
            patasAnimais+= animals[contador].legs;
        } 
    }
    return patasAnimais;
} 