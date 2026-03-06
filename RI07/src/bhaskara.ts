import Calculo from "./calculo.js"

export default class Bhaskara implements Calculo{
    public calcular(a: number, b: number, c = 0): number[] {
        if (a === 0) {
            throw new Error(`O coeficiente 'a' não pode ser 0 !`) 
        }

        const delta = (b * b) - (4 *  a * c)

        if (delta < 0 ){
            throw new Error(`A equação não possui raízes reais (delta negativo)`)
        }

        const x1 = (-b + Math.sqrt(delta)) / 2 * a
        const x2 = (-b - Math.sqrt(delta)) / 2 * a

        if (delta != 0){
            return [delta, x1, x2]
        }

        throw new Error(`A equação não possui uma raiz real (delta zero): x = ${x1.toFixed(2)}`)
    }
}