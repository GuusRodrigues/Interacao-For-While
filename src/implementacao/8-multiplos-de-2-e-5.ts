//Faça um programa no qual o usuário insira valores numéricos positivos até digitar -1 e ao final
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

    let i = 0;

    while(i > 0){

        const numeros = await fazerPergunta("Digite a primeira nota: ");
        const numero: number = parseFloat(numeros || "0");

        if (numero < 0){
            if(numero % 2 === 0 && numero % 5 === 0){
                console.log('múltiplos de 2 e 5')
            }
        }

    }
}
