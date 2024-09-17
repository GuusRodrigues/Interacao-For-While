//Escreva um programa que leia dois números inteiros positivos (M, N) que formarão pares. Para cada par de números, 
//calcule e exiba a soma de todos os números inteiros de M até N.
// O programa deve continuar solicitando um par de cada vez até que M seja maior que N, momento em que deve ser encerrado.
function somarNumerosEntreMeN(M: number, N: number) {
    if (M < 0 || N < 0) {
        console.log("Os números devem ser inteiros positivos.");
        return;
    }

    if (!Number.isInteger(M) || !Number.isInteger(N)) {
        console.log("Os números devem ser inteiros.");
        return;
    }

    for(let i = M; N >= i; i++){
            console.log(i);  
        }
    }
somarNumerosEntreMeN(9,-8)