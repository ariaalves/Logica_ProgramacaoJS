function ordemCrescente(){
    let numero01=Number(prompt('Digite o primeiro número: '));
    let numero02=Number(prompt('Digite o segundo número: '))

        if(numero01==numero02){
            console.log('Os números precisam ser diferentes. Por favor, tente novamente!')
        }

        else if(numero01>numero02){
            console.log(numero02 + ','+ numero01)
        }

        else{
            console.log(numero01 +',' + numero02)
        }
}