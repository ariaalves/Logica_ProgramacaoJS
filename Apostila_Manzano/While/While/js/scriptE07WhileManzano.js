function serieFibonacci(){
    let atual=1;
    let antecessor=0;
    let soma=0;
    let contadora=1;

        console.log(atual)
        
            while(contadora<15){
                soma=atual+antecessor
                console.log(soma)
                antecessor=atual
                atual=soma
                contadora++
            }

}