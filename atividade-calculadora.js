/**********************************************************
 * Pedro Ribeiro
 * Versão: 1.0
 * Data: 10/11/26
 * Projeto: Calculadora básica de 4 operações em Node.js
 *********************************************************/

const teclado = require("prompt-sync")();
let continuar;

function Somar(a, b){
    let resultado = a + b;
    return resultado;
}

function Subtracao(a, b){
    let resultado = a - b;
    return resultado;
}

function Multiplicacao(a, b){
    let resultado = a * b;
    return resultado;
}

function Divisao(a, b){
    let resultado = a / b;
    return resultado;
}

function Potencia(a, b){
    let resultado = a ** b;
    return resultado;
}

function Resto(a, b  ){
    let resultado = a % b;
    return resultado;
}

do{
    console.log("Digite uma opção");
    let opcao = Number(teclado("1-Soma 2-Subtração 3-Multiplicação 4-Divisão 5-Potencia 6-Resto: "));

    switch(opcao){
        case 1:
            // pegar do usuario os valores de x e y
            x = Number(teclado("Digite um valor: "));
            y = Number(teclado("Digite outro valor: "));
            // fazer o retorno da funcao e mostrar pro usuario
            console.log("R:", x, "+", y, "=", Somar(x, y));
            break;
        case 2:
            x = Number(teclado("Digite um valor: "));
            y = Number(teclado("Digite outro valor: "));
            console.log("R:", x, "-", y, "=", Subtracao(x, y));
            break;
        case 3:
            x = Number(teclado("Digite um valor: "));
            y = Number(teclado("Digite outro valor: "));
            console.log("R:", x, "x", y, "=", Multiplicacao(x, y));
            break;
        case 4:
            x = Number(teclado("Digite um valor: "));
            y = Number(teclado("Digite outro valor: "));
            console.log("R:", x, "/", y, "=", Divisao(x, y));
            break;
        case 5:
            x = Number(teclado("Digite um valor: "));
            y = Number(teclado("Digite outro valor: "));
            console.log("R:", x, "^", y, "=", Potencia(x, y));
            break;
        case 6:
            x = Number(teclado("Digite um valor: "));
            y = Number(teclado("Digite outro valor: "));
            console.log("R:", x, "%", y, "=", Resto(x, y));
            break;
        default:
            console.log("Nenhuma opção escolhida, SOMA selecionada")
            x = Number(teclado("Digite um valor: "));
            y = Number(teclado("Digite outro valor: "));
            console.log(Somar(x, y));
            break;
        }
        // pergunta se quer fazer outra operação e repete o bloco acima caso true
        continuar = teclado(console.log("Deseja fazer outra operação? (s/n)"))
    }while(continuar == "s");