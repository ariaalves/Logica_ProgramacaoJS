function areaComodo(){
    let resposta;
    let nome;
    let largura;
    let comprimento;
    let areaIndividual=0;
    let areaTotal=0;
        do{
            nome=prompt('Digite o nome do cômodo:')
            largura=parseInt(prompt('Digite a largura do cômodo:'))
            comprimento=parseInt(prompt('Digite o comprimento do cômodo'))
            areaIndividual=largura*comprimento
            console.log(nome+' tem uma área de '+areaIndividual+' m²')
            areaTotal=areaTotal+areaIndividual
            resposta=prompt('Deseja continuar [S/N]?')
        }while(resposta!='N')

    console.log('A área total é: '+areaTotal+' m²')

}