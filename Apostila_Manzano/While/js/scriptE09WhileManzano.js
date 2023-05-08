function somaAritmetica(){
    let valor = 0;
    let contadora = 1;
    let media = 0;

        while(contadora<11){
            let numero = Number(prompt('Digite um número:'))   
                valor = valor + numero
            contadora++
        }

    media = valor/10
    
    console.log('A soma dos 10 valores é ' + valor + 'e a média aritmetica ' + media + '.')    
 }