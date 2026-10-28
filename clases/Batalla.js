import Guerrero from "personajesEspeciales/Guerrero.js";
class Batalla {
    #casa;
    #guerreros;
    #muertos;
    #vivos;
  
    constructor(casa){
        this.#casa = casa;
        this.#guerreros = [];
        this.#muertos = [];
        this.#vivos = [];
    }

    get casaA() {
        return this.#casaA;
    }
    set casaA(in_casaA) {
        this.#casaA = in_casaA;
    }

    get casaB() {
        return this.#casaB;
    }
    set casaB(in_casaB) {
        this.#casaB = in_casaB;
    }

    get guerreros() {
        return this.#guerreros;
    }

    set guerreros(in_guerreros) {
        this.#guerreros = in_guerreros;
    }


    get muertos() {
        return this.#muertos;
    }

    set muertos(in_muertos) {
        this.#muertos = in_muertos;
    }

    get vivos() {
        return this.#vivos;
    }

    set vivos(in_vivos) {
        this.#vivos = in_vivos;
    }

    iniciarBatalla(casaA, casaB){
        console.log("Iniciamos la lucha...");
        console.log("Los guerreros que pelearán de la casa " + casaA.nombre + "serán los siguientes:");
        for( let guerrero of casaA.arrayPersonajes){
            if(guerrero instanceof Guerrero){
            }
        }
    }
}