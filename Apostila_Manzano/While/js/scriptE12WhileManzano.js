function numeroPositivo(){
    let numero= parseInt(prompt('Digite um número positivo(ou um negativo para sair):'));
    let maior=numero;
    let menor=numero;

        while(numero>=0){
            numero= parseInt(prompt('Digite um número positivo(ou um negativo para sair):'));
                if(numero>maior){
                    maior=valor;
                }
                if(numero<menor && numero>0){
                    menor=numero;
                }
        }

    alert('O maior número é: '+maior);
    alert('O menor número é: '+menor);
}