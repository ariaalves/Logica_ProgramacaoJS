function media(){
    let numAlunos = prompt("Digite o número de alunos na turma:");
    let somaNotas = 0;


    for (let i = 1; i <= numAlunos; i++) {
        let nota = parseFloat(prompt("Digite a nota do aluno " + i));
        somaNotas += nota;
    }


    let media = somaNotas / numAlunos;


    console.log("A média aritmética das notas é: " + media.toFixed(2));

}