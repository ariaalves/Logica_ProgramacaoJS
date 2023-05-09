function maiorNumero(){
    let numero01=Number(prompt('Digite o primeiro número: '));
    let numero02=Number(prompt('Digite o segundo número: '));
    let maior='Nenhum dos dois é, pois são iguais';

        if(numero01==numero02){
            alert('Os números são iguais, precisamos que sejam diferentes para comparar qual é o maior. Por favor, tente novamente!')
        }

        else if(numero01>numero02){
            maior=numero01
        }

        else{
            maior=numero02
        }

    alert('O maior número é: ' + maior)
}