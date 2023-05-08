function comodo() {
    let area = 0;
    let areaTotal = 0;
    let resposta = 'S';

        while (resposta != "N") {
            let nome = (prompt('Digite o nome do cômodo'));
            let largura = parseInt(prompt('Digite a largura do cômodo'));
            let comprimento = parseInt(prompt('Digite o comprimento do cômodo'));

            area = largura * comprimento
            areaTotal = areaTotal + area
            
            alert("A área do " + nome + " é de " + area + " m².")
            
            resposta = (prompt('Deseja adicionar mais um cômodo S/N'));
        }

    alert("A área total da residência é de: " + areaTotal + " m².")
}