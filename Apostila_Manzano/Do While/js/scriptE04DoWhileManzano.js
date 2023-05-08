function somaGraos(){
    let graos= 1;
    let soma=graos;
    let contadora=1;
    do{
        graos=graos*2
        soma=soma+graos
        contadora++
    }while(contadora<64)
    console.log('A soma dos grãos é: '+soma)
}