import Calculo from "./calculo.js";
export default class Divisao extends Calculo {
    calcular(number1, number2) {
        let result = number1 / number2;
        return result;
    }
}
