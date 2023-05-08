function custoCarro(){
    let custoFabrica= parseFloat(prompt('Digite o custo de fábrica do carro: '));
    let imposto= (custoFabrica*45)/100;
    let distribuidor= (custoFabrica*28)/100;
    let custoFinal= custoFabrica+distribuidor+imposto

    alert('O custo total para ter um carro novo é: R$ ' + custoFinal)
}