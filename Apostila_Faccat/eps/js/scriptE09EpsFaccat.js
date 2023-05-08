function salarioReajuste(){
    let salarioAtual= parseFloat(prompt('Digite o salário mensal atual do funcionário: '));
    let percentualReajuste= parseFloat(prompt('Digite o valor do percentual de reajuste: '));
    let reajuste= (percentualReajuste/100)*salarioAtual;
    let salarioFinal= salarioAtual+reajuste;

    alert('O salário final do funcionário é: R$ ' + salarioFinal)
}