function potencia(){
    let base=parseInt(prompt('Digite o número da base: '));
    let expoente=parseInt(prompt('Digite o número do expoente: '));
    let resultado= 1;

        for(let i=1; i<=expoente; i++){
            if(expoente!=0){
                resultado=resultado*base
            }

            else{
                console.log('1')
            }
        }

    console.log(resultado)
}