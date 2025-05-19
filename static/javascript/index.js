import { numAfectados } from "./funcions/exercicio1.js";
import { numPersoasSanas } from "./funcions/exercicio2.js";
import { numPersoasInfectadasPais } from "./funcions/exercicio3.js";
import { PaisConMaisInfectados } from "./funcions/exercicio4.js";
import { NomesMascotas } from "./funcions/exercicio5.js";
import { NomePersoasInfectadas } from "./funcions/exercicio6.js";
import { persoasEspanhoisConCan } from "./funcions/exercicio7.js";
import { persoasConMascotas } from "./funcions/exercicio8.js";
import { animalMaisComun } from "./funcions/exercicio9.js"
import { patasAnimais } from "./funcions/exercicio10.js"
import { persoasConAnimaisConCatroPatas } from "./funcions/exercicio11.js"

let numAfectadosExer1 = numAfectados();
let numPersoasSanasExer2 = numPersoasSanas();
console.log("Exercicio 1: Número de persoas infectadas ", numAfectadosExer1);
console.log(
  "Exercicio 2: Número de persoas non infectadas ",
  numPersoasSanasExer2
);

let numPersoasInfectadasPorPais = numPersoasInfectadasPais();
console.log(
  "Exercicio 3: Número de persoas infectadas nos países do array ",
  numPersoasInfectadasPorPais
);

let PaisConMaisInfectadosExer4 = PaisConMaisInfectados();
console.log(
  "Exercicio 4: País con máis infectados: ",
  PaisConMaisInfectadosExer4.name
);

let NomesMascotasExer5 = NomesMascotas();
console.log("Exercicio 5: ", NomesMascotasExer5);

let NomePersoasInfectadasExer6 = NomePersoasInfectadas();
console.log(
  "Exercicio 6: O nome das persoas infectadas é: ",
  NomePersoasInfectadasExer6
);

let persoasEspanhoisExer7 = persoasEspanhoisConCan;
console.log("Exercicio 7: ", persoasEspanhoisExer7);

let persoasConMascotasExer8 = persoasConMascotas();
console.log(
  "Exercicio 8: Os datos das mascotas son: ", persoasConMascotasExer8
);

let animalMaisComunExer9 = animalMaisComun();
console.log(
  "Exercicio 9: A mascota máis común é: ", animalMaisComunExer9
);

let patasAnimaisExer10 = patasAnimais();
console.log(
  "Exercicio 10: O número de patas dos animais é: ", patasAnimaisExer10
);

let persoasConAnimaisConCatroPatasExer11 = persoasConAnimaisConCatroPatas();
console.log("Exercicio 11: As persoas con animais de catro patas son: ",
  persoasConAnimaisConCatroPatasExer11
);


let refExer1 = document.querySelector(`[name='exer-1']`);
let refExer2 = document.querySelector(`[name='exer-2']`);
let refExer3 = document.querySelector(`[name='exer-3']`);
let refExer4 = document.querySelector(`[name='exer-4']`);
let refExer5 = document.querySelector(`[name='exer-5']`);
let refExer6 = document.querySelector(`[name='exer-6']`);
let refExer7 = document.querySelector(`[name='exer-7']`);
let refExer8 = document.querySelector(`[name='exer-8']`);
let refExer9 = document.querySelector(`[name='exer-9']`);
let refExer10 = document.querySelector(`[name='exer-10']`);
let refExer11 = document.querySelector(`[name='exer-11']`)

refExer1.after(`${numAfectadosExer1}`);
refExer2.after(numPersoasSanasExer2);
refExer3.after(numPersoasInfectadasPorPais);
refExer4.after(PaisConMaisInfectadosExer4.name);
refExer5.after(NomesMascotasExer5);
refExer6.after(NomePersoasInfectadasExer6);
refExer7.after(persoasEspanhoisExer7);
refExer8.after(persoasConMascotasExer8);
refExer9.after(animalMaisComunExer9);
refExer10.after(patasAnimaisExer10);
refExer11.after(persoasConAnimaisConCatroPatasExer11);
