function tabuada(){
    let numero=parseInt(prompt("Digite um número"))
    let contadora=1;
    let multiplicacao=1;

        while(contadora<11){
            multiplicacao= numero*contadora;
            console.log(numero+' x '+contadora+' = '+multiplicacao);
            contadora++
        }
   
}