function reporEstoque(){
    let quantAtual=Number(prompt('Digite a quantidade atual do estoque: '));
    let quantMax=Number(prompt('Digite a quantidade máxima do estoque: '));
    let quanMin=Number(prompt('Digite a quantidade mínima do estoque: '));
    let quantMedia=(quantMax+quanMin)/2;

        if(quantAtual>=quantMedia){
            alert('NÃO EFETUAR COMPRA')
        }

        else{
            alert('EFETUAR COMPRA')
        }
}