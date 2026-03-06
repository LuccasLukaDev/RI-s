import Calculo from "./calculo.js"

export default class Radiciacao implements Calculo{
    public calcular(number1: number, number2: number): number {
        let radicando = number1
        let raiz = number2

        return Math.pow(radicando, 1 / raiz)
    }
}