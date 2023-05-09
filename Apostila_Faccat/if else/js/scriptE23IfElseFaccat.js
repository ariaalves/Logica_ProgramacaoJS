function pesoIdeal(){
    let nome=prompt('Digite o seu nome: ');
    let altura=Number(prompt('Digite a sua altura: '));
    let sexo=prompt('O seu sexo é feminino ou masculino: ');
    let sexoFeminino='feminino';
    let sexoMasculino='masculino';
    let pesoFeminino=(62.1*altura)-44.7;
    let pesoMasculino=(72.7*altura)-68;

        if(sexo==sexoFeminino){
            alert(nome + ' o seu peso ideal é: ' + pesoFeminino)
        }

        else if(sexo==sexoMasculino){
            alert(nome + ' o seu peso ideal é: ' + pesoMasculino)
        }

        else{
            alert('Informe novamente seu sexo')
        }
}