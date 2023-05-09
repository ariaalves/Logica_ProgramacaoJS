function somaMaiores(){
    let numero01=Number(prompt('Digite o primeiro número: '));
    let numero02=Number(prompt('Digite o segundo número: '));
    let numero03=Number(prompt('Digite o terceiro número: '));

    //possibilidades de soma

    let soma01=numero01+numero02;
    let soma02=numero02+numero03;
    let soma03=numero01+numero03;

    //validação

        if(numero01==numero02 || numero02==numero03 || numero01==numero03){
            console.log('Os números não podem ser iguais. Tente novamente');
        }

        else if(numero01>numero03 && numero02>numero03){
            console.log('A soma dos dois maiores números é: ' + soma01);
        }

        else if(numero02>numero01 && numero03>numero01){
            console.log('A soma dos dois maiores números é: ' + soma02);
        }

        else{
            console.log('A soma dos dois maiores números é: ' + soma03);
        }
}