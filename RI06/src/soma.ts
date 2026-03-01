import Calculo from "./calculo.js";

export default class Soma extends Calculo{
    public calcular(number1: number, number2: number): number {
        let result = number1 + number2
        return result
    }
}