//Faça um programa que leia dois números M e N, e mostre apenas os números ímpares do intervalo.
function mostrarImparesEntreMeN(M: number, N: number) {
    for(let i = M + 1; N > i; i++){
        if(i % 2 != 0){
            console.log(i);  
        }
    }
}
mostrarImparesEntreMeN(5,15);
