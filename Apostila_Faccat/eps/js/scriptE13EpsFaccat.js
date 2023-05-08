function mediaFinal(){
    let nome=prompt('Digite o nome do aluno: ');
    let nota01=parseInt(prompt('Digite a primeira nota de aluno: '));
    let nota02=parseInt(prompt('Digite a segunda nota do aluno: '));
    let nota03=parseInt(prompt('Digite a terceira nota do aluno: '));
    let mediaFinal=((nota01*2)+(nota02*3)+(nota03*5))/10

    alert('A média final de ' + nome + ' é: ' + mediaFinal)
}