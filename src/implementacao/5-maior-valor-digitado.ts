function mostrarMaiorValor(numeros: number[]){
    let maior = 0;
    for(let i = 0; i <= numeros.length; i++){
        if(numeros[i] > maior){
            maior = numeros[i];
        }
    }
    console.log(maior);
}
mostrarMaiorValor([4,2,1,9]);