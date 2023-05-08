function somaFatorial(){
    let numero;
    let contadora=1;
    let somaFat=0;
    let fatorial=1;
    let contFatorial=0;
    do{
       numero=parseInt(prompt('Digite um número:'));
         contFatorial=numero;

            while(contFatorial>1){
                  fatorial=fatorial*contFatorial
                  contFatorial--
            }
            
        somaFat=somaFat+fatorial
        contadora++
        fatorial=1;
    }while(contadora<16)
    console.log('A soma fatorial dos números é: '+somaFat)
}