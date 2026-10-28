
import Personaje from "../Personaje.js";

class Guerrero extends Personaje {
    #arma;

    constructor(nombre, edad, casa, arma = null) {
        super(nombre, edad, casa);
        this.#arma = arma;
    }

    get arma() {
        return this.#arma;
    }

    set arma(in_arma) {
        this.#arma = in_arma;
    }

    luchar() {
        if (!this.#arma) {
            console.log(this.nombre + " no tiene un arma equipada.");
            return;
        }

        console.log(
            this.nombre + " ataca con su " +
            this.#arma.nombre + ", causando " +
            this.#arma.daño + " puntos."
        );
    }

    entrenar() {
        console.log(
            this.nombre +
            " se entrena sin descanso para la próxima batalla."
        );
    }
}

export default Guerrero;
