function media(){
    let soma = 0;


        for (let i = 1; i <= 10; i++) {
            const valor = Number(prompt(`Digite o ${i}º valor:`));
            soma += valor;
        }


    const media = soma / 10;


    console.log(`A média aritmética dos valores lidos é ${media}.`);

}