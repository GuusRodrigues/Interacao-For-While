import * as readline from 'readline';

// readline é uma funcionalidade nativa do Node.js para interagir com o terminal.
const lerterminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function fazerPergunta(pergunta: string): Promise<string> {
    return new Promise(resolve => lerterminal.question(pergunta, resolve));
}

// Usamos uma função assíncrona (async ) que encapsula o readline.question() em uma Promise.
// Isso nos permite esperar pela resposta do usuário antes de continuar.
async function mediaNotas(): Promise<void> {
    for (let i = 1; i <= 3; i++) {
        console.log(`Aluno ${i}:`);

        //O async exige o uso await. O loop for agora utiliza await,
        // o que garante que o código espere o usuário responder às perguntas antes de passar para o próximo aluno

        const inputNota1 = await fazerPergunta("Digite a primeira nota: ");
        const nota1: number = parseFloat(inputNota1 || "0");

        const inputNota2 = await fazerPergunta("Digite a segunda nota: ");
        const nota2: number = parseFloat(inputNota2 || "0");

        const inputNota3 = await fazerPergunta("Digite a terceira nota: ");
        const nota3: number = parseFloat(inputNota3 || "0");

        let media = (nota1 + nota2 + nota3) / 3;

        if (media >= 7) {
            console.log("PASSOU");
        } else if (media > 4 && media < 7) {
            console.log("RECUPERAÇÃO");
        } else {
            console.log("REPROVOU");
        }
    }
    lerterminal.close(); // Fecha o readline após processar todos os alunos
}

mediaNotas();
