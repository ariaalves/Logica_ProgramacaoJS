function idadeVoto(){
    let nome=prompt('Digite o seu nome: ');
    let anoAtual=Number(prompt('Digite o ano atual em que você está: '));
    let anoNascimento=Number(prompt('Digite o ano em que você nasceu: '));
    let idade=anoAtual-anoNascimento;

        if(idade>=16){
            alert(nome + ', você tem ' + idade + ' anos e já pode votar aqui no Brasil!')
        }

        else{
            alert(nome + '. você tem ' + idade + ' anos e ainda não pode votar aqui no Brasil!')
        }
}