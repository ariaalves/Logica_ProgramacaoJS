function somaPares(){
    let soma=0;
    let contadora=1;
    let resto=0;

        while(contadora<501){
            resto=contadora%2
                if(resto==0){
                    soma=soma+contadora
                }
            contadora++
        }
        
    console.log('A soma dos números pares entre 1 e 500 é:'+soma)
}