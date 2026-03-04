import Calculo from "./calculo.js";
export default class Radiciacao extends Calculo {
    calcular(number1, number2) {
        let radicando = number1;
        let raiz = number2;
        return Math.pow(radicando, 1 / raiz);
    }
}
