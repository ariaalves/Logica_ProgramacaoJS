function divisao(){
    let valor1, valor2, resultado;

    do {
      valor1 = parseFloat(prompt("Digite o primeiro valor:"));
      valor2 = parseFloat(prompt("Digite o segundo valor:"));
    
      if (valor2 === 0) {
        alert("VALOR INVÁLIDO: O segundo valor não pode ser zero!");
      }
    
    } while (valor2 === 0);
    
    resultado = valor1 / valor2;
    
    alert("O resultado da divisão é: " + resultado);
    

}