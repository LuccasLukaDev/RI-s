import * as readline from "readline";
import Divisao from "./divisao.js";
import Soma from "./soma.js";
import Subtracao from "./subtracao.js";
import Multiplicacao from "./multiplicacao.js";
import Potencia from "./potencia.js";
let iniciar = () => {
    let leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    function perguntar() {
        leitor.question(`Quais são os seus numeros e a operação desejada ?\n`, (valor) => {
            console.clear();
            let instrucoes = valor.trim().split(' ');
            if (instrucoes[0].toLowerCase() === 'sair') {
                console.log('Saindo...');
                leitor.close();
                return;
            }
            let numero1 = Number(instrucoes[0]);
            let numero2 = Number(instrucoes[1]);
            let operacao = instrucoes[2];
            if (isNaN(numero1) || isNaN(numero2) || !operacao) {
                console.log('Entrada Invalida! Tente Novamente !\n');
                return perguntar();
            }
            console.log(`Estas foram suas instruções: ${instrucoes}`);
            switch (operacao.toLowerCase()) {
                case 'somar':
                    let soma = new Soma();
                    console.log(`Resultado: ${soma.calcular(numero1, numero2)}\n`);
                    break;
                case 'subtrair':
                    let subtracao = new Subtracao();
                    console.log(`Resultado: ${subtracao.calcular(numero1, numero2)}`);
                    break;
                case 'multiplicar':
                    let multiplicacao = new Multiplicacao();
                    console.log(`Resultado: ${multiplicacao.calcular(numero1, numero2)}`);
                    break;
                case 'dividir':
                    let divisao = new Divisao();
                    console.log(`Resultado ${divisao.calcular(numero1, numero2)}`);
                    break;
                case 'potencializar':
                    let potencia = new Potencia();
                    console.log(`Resultado ${potencia.calcular(numero1, numero2)}`);
                    break;
                case 'sair':
                    console.clear();
                    console.log('Saindo...');
                    break;
                default:
                    console.log('Operação Invalida !');
            }
            perguntar();
        });
    }
    perguntar();
};
iniciar();
