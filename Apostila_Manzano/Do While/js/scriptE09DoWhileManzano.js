function menorMaior(){
    let numero=parseInt(prompt('Digite um número positivo (ou um valor negativo para sair)'));
        if(numero>0){
            let maior=numero;
            let menor=numero;
                do{
                    numero=prompt('Digite um número positivo (ou um valor negativo para sair):')
                    if(numero>maior){
                        maior=numero
                    }
                    if(numero<menor && numero>0){
                        menor=numero
                    }
                }while(numero>0)
            alert('O maior número é: '+maior)
            alert('O menor número é: '+menor)
        }
        else{
            alert('Você precisa inserir um número positivo para saber qual é o maior e o menor')
        }
}