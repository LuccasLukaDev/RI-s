import Calculo from "./calculo.js"

export default class Soma implements Calculo{
    public calcular(number1: number, number2: number): number {
        let result = number1 + number2
        return result
    }
}