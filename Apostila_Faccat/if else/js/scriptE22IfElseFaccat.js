function salarioFinal(){
    let horaTrabalhada=Number(prompt('Digite o número de horas trabalhadas no mês pelo funcionário: '));
    let valorHora=Number(prompt('Digite o valor da hora trabalhada: '));
    let acrescimo=(valorHora*50)/100;
    let salarioTotal01=valorHora*horaTrabalhada;
    let salarioTotal02=salarioTotal01+acrescimo;

        if(horaTrabalhada>40){
            alert('O funcionário trabalhou ' + horaTrabalhada + 'h e seu salário final vai ser: R$ ' + salarioTotal02)
        }

        else{
            alert('O funcionário trabalhou ' + horaTrabalhada + 'h e seu salário final vai ser: R$ ' + salarioTotal01)
        }
}