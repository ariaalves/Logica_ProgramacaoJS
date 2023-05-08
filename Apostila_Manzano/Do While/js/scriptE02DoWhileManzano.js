function somaPares(){
    let contadora=1;
    let resto=0;
    let soma=0;

    do{
        resto=contadora%2
        if(resto==0){
            soma=soma+contadora
        }
        contadora++
    }while(contadora<501)
    console.log('A soma dos números pares entre 1 e 500 é: '+soma);
}