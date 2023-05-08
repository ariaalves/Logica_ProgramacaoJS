function salarioFinal(){
    let carrosVendidos=parseInt(prompt('Digite o número de carros vendidos pelo vendedor: '));
    let totalVendas=parseFloat(prompt('Digite o valor total das vendas que o vendedor fez: '));
    let salarioFixo=parseFloat(prompt('Digite o valor do salário fixo mensal do vendedor: '));
    let valorComissao=parseFloat(prompt('Digite o valor da comissão que o vendedor recebe por carro vendido: '));
    let salarioFinal=salarioFixo+(carrosVendidos*valorComissao)+((totalVendas*5)/100);

    alert('O salário final do vendedor é: R$ ' + salarioFinal)
}