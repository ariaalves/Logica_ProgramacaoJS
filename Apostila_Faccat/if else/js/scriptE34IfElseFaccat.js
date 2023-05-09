function testeVariaveis(){
    let x=Number(prompt('Digite o valor de x: '));
    let y=Number(prompt('Digite o valor de y: '));
    let z=(x*y)+5
    let resposta

        if(z<=0){
            resposta='A'
        }

        else if(z<=100){
            resposta='B'
        }

        else{
            resposta='C'
        }

    console.log('Z: ' + z + ' Resposta: ' + resposta)
}