function salarioTotal(){
    let salarioFixo=Number(prompt('Digite o salário fixo do vendedor: '));
    let vendasTotal=Number(prompt('Digite o valor total das vendas do vendedor: '));
    let comissao01=(vendasTotal*3)/100;
    let comissao02=(1500*3/100)+((vendasTotal-1500)*5/100);
    let salarioFinal01=salarioFixo+comissao01;
    let salarioFinal02=salarioFixo+comissao02;

        if(vendasTotal<=1500){
            alert('O salário final do vendedor é: R$ ' + salarioFinal01)
        }

        else{
            alert('O salário final do vendedor é: R$ ' + salarioFinal02)
        }
}