function somaMedia(){
    let numero=0;
    let soma=0;
    let mediaAritmetica=0;
    let totalNum=0;
    let contadora=0;
    do{
        numero=parseInt(prompt('Digite um número positivo(ou negativo para sair)'))
        if(numero>0){
            soma=soma+numero;
            totalNum++
        }
        mediaAritmetica=soma/totalNum;
        contadora++
    }while(contadora<=numero)
    alert('A soma dos números é: '+soma);
    alert('O total de números inseridos é: '+totalNum);
    alert('A média aritmética é: '+mediaAritmetica)
}