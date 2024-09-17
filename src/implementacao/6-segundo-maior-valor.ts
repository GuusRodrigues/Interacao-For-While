//Faça um programa que leia N números e mostre o segundo maior valor digitado.
function mostrarSegundoMaiorValor(numeros: number[]) {
    let maior = 0;
    let segundoMaior = 0;
    for(let i = 0; i <= numeros.length; i++){
        if(numeros[i] > maior){
            segundoMaior = maior;
            maior = numeros[i];
        }
    }
    console.log(segundoMaior);
}
mostrarSegundoMaiorValor([4,8,1,12]);