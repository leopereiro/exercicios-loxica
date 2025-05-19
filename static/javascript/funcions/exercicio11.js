import { persons, animals } from "../datos/datosEnunciados.js";

export function persoasConAnimaisConCatroPatas () {
    let persoasConAnimaisConMaisDeCatroPatas = [];
    for(let contador=0; contador < persons.length; contador++) {
        for(let contador=0; contador < animals.length; contador++) {
        if(persons[contador].pet === animals[contador].name &&
            typeof animals[contador].legs === "number" && 
            animals[contador].legs > 4
        ) {
            persoasConAnimaisConMaisDeCatroPatas.push(persons[contador]);
            console.log("persoasConAnimaisConMaisDeCatroPatas ",persoasConAnimaisConMaisDeCatroPatas)
        }
    }
}

return persoasConAnimaisConMaisDeCatroPatas;
}