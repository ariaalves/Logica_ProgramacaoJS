function serieFibonacci(){
    let atual=1;
    let antecessor=0;
    let soma=0;

        for(let i=1; i<15; i++){
            soma=atual+antecessor
            console.log(soma)
            antecessor=atual
            atual=soma
        }
}