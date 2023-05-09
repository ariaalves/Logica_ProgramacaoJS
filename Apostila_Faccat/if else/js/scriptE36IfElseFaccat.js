function idade(){
    let idadeHomem1=Number(prompt('Digite a idade do primeiro homem:'));
    let idadeHomem2=Number(prompt('Digite a idade do segundo homem: '));
    let idadeMaisVelho=0;
    let idadeMaisNovo=0;
    
    
    
    let idadeMulher1=Number(prompt('Digite a idade da primeira mulher: '));
    let idadeMulher2=Number(prompt('Digite a idade da segunda mulher: '));

        if(idadeHomem1>idadeHomem2){
            idadeMaisVelho=idadeHomem1;
        }

        else{
            idadeMaisVelho=idadeHomem2;
        }

       if(idadeMulher1<idadeMulher2){
            idadeMaisNovo=idadeMulher1;
       }

       else{
            idadeMaisNovo=idadeMulher2;
       }

    let somaIdades=idadeMaisVelho+idadeMaisNovo;
       console.log('A soma das idades do homem mais velho com a mulher mais nova é: ' + somaIdades)

    
       if(idadeHomem1<idadeHomem2){
            idadeMaisNovo=idadeHomem1;
       }

       else{
            idadeMaisNovo=idadeHomem2;
       }

       if(idadeMulher1>idadeMulher2){
            idadeMaisVelho=idadeMulher1;
       }

       else{
            idadeMaisVelho=idadeMulher2;
       }

    let produtoIdades=idadeMaisNovo*idadeMaisVelho

    console.log('O produto das idades do homem mais novo com a mulher mais velha é: ' + produtoIdades)
}