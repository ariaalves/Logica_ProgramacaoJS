function mediaAluno(){
    let nome=prompt('Digite o nome do aluno: ');
    let nota01=Number(prompt('Digite a nota da avaliação 1: '));
    let nota02=Number(prompt('Digite a nota da avaliação 2: '));
    let mediaAritmetica=(nota01+nota02)/2

        if(mediaAritmetica>=6){
            alert(nome + ' foi aprovado(a) com uma média de: ' + mediaAritmetica)
        }

        else{
            alert(nome + ' foi reprovado(a) com uma média de: ' + mediaAritmetica)
        }
}