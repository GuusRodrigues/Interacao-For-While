function somarNumerosEntreMeN(M: number, N: number) {
    if (M < 0 || N < 0) {
        console.log("Os números devem ser inteiros positivos.");
        return;
    }

    if (!Number.isInteger(M) || !Number.isInteger(N)) {
        console.log("Os números devem ser inteiros.");
        return;
    }
    
    if (M > N) {
        console.log("M deve ser menor a N.");
        return;
    }

    let soma = 0;
    for(let i = M; i <= N ; i++){
        soma += i; //soma = soma+i
        }
        console.log(soma);
    }

somarNumerosEntreMeN(10,10)