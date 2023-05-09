function media(){
    let resposta = 'S';

        while (resposta === 'S') {
            let nota1 = Number(prompt("Digite a nota da primeira avaliação:"));
                    while (nota1 < 0 || nota1 > 10) {
                        nota1 = Number(prompt("Digite uma nota válida (0 a 10) para a primeira avaliação:"));
                    }
                let nota2 = Number(prompt("Digite a nota da segunda avaliação:"));
                    while (nota2 < 0 || nota2 > 10) {
                        nota2 = Number(prompt("Digite uma nota válida (0 a 10) para a segunda avaliação:"));
                    }
                let media = (nota1 + nota2) / 2;
                console.log("A média do aluno é: " + media.toFixed(2));
                resposta = prompt("NOVO CÁLCULO (S/N)?");
        }
        

}