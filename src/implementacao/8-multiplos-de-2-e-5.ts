// Faça um programa no qual o usuário insira valores numéricos positivos até digitar -1 e ao final
// informe entre os números digitados quantos são:
// (a) múltiplos de 2 e 5, simultaneamente; (b) múltiplos de 2 e 3.

import * as readline from 'readline';

// readline é uma funcionalidade nativa do Node.js para interagir com o terminal.
const lerterminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function fazerPergunta(pergunta: string): Promise<string> {
    return new Promise(resolve => lerterminal.question(pergunta, resolve));
}

async function analiseMultiplos(): Promise<void> {

    let multiplosDe2e5 = 0;
    let multiplosDe2e3 = 0;
    let numero: number;

    console.log("Digite -1 para encerrar a entrada de dados");

    // Loop para continuar recebendo entradas até que -1 seja digitado
    do {
        const numeros = await fazerPergunta("Digite um número: ");
        numero = parseFloat(numeros || "0");

        if (numero >= 0) {
            if (numero % 2 === 0 && numero % 5 === 0) {
                multiplosDe2e5++;
            }
            if (numero % 2 === 0 && numero % 3 === 0) {
                multiplosDe2e3++;
            }
        }

    } while (numero !== -1);

    // Fecha o readline após o fim da coleta de dados
    lerterminal.close();

    // Exibindo o resultado
    console.log(`${multiplosDe2e5} são múltiplos de 2 e 5`);
    console.log(`${multiplosDe2e3} são múltiplos de 2 e 3`);
}

analiseMultiplos();