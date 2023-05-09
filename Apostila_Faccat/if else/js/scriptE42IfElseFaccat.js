function aposentadoria(){
    let codigo = prompt("Informe o código do empregado:");
    let anoNascimento = parseInt(prompt("Informe o ano de nascimento do empregado:"));
    let anoIngresso = parseInt(prompt("Informe o ano de ingresso do empregado na empresa:"));


    let idade = new Date().getFullYear() - anoNascimento;
    let tempoTrabalho = new Date().getFullYear() - anoIngresso;


        if (idade >= 65 || tempoTrabalho >= 30 || (idade >= 60 && tempoTrabalho >= 25)) {
            console.log(`Código: ${codigo}`);
            console.log(`Idade: ${idade} anos`);
            console.log(`Tempo de trabalho: ${tempoTrabalho} anos`);
            console.log("Requerer aposentadoria");
        } else {
            console.log(`Código: ${codigo}`);
            console.log(`Idade: ${idade} anos`);
            console.log(`Tempo de trabalho: ${tempoTrabalho} anos`);
            console.log("Não requerer");
        }

}