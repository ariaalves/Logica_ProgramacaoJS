function divisao(){
    let valor1 = parseInt(prompt("Digite o primeiro valor: "));
    let valor2 = parseInt(prompt("Digite o segundo valor (não pode ser zero): "));

        while (valor2 === 0) {
        valor2 = parseInt(prompt("Valor inválido. Digite um valor diferente de zero: "));
        }

    let resultado = valor1 / valor2;
    
    console.log(`O resultado da divisão é ${resultado}`);

}