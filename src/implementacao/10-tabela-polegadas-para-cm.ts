//Faça um programa que gera uma tabela de conversão de polegadas para centímetros,
// de 1 a 20. Considere 1 pol = 2.54cm.
function tabelaConversao() {
    let i = 0;
    let polegadas = 2.54
    while(i <= 20){
        let conversor = polegadas * i;
        console.log(`| ${i} cm   | ${conversor} pol  |`);
        i++
    }
}
tabelaConversao();