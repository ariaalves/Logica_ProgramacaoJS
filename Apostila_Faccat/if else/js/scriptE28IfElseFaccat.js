function numeroMaior(){
    let numero01=Number(prompt('Digite o primeiro número: '));
    let numero02=Number(prompt('Digite o segundo número: '));
    let numero03=Number(prompt('Digite o terceiro número: '));

        if(numero01==numero02 || numero02==numero03 || numero03==numero01){
            console.log('Os números não podem ser iguais. Tente novamente');
        }

        else if(numero01>numero02 && numero01>numero03){
            console.log('O maior número é: ' + numero01);
        }

        else if(numero02>numero01 && numero02>numero03){
            console.log('O maior número é: ' + numero02);
        }

        else{
            console.log('O maior número é: ' + numero03);
        }
}