function eleitores(){
    let totalEleitores=parseInt(prompt('Digite o número total de eleitores no município: '));
    let votoBranco=parseInt(prompt('Digite o total de votos brancos: '));
    let votoNulo=parseInt(prompt('Digite o total de votos nulos: '));
    let votoValido=parseInt(prompt('Digite o total de votos válidos: '));
    let percentualBranco= (votoBranco*100)/totalEleitores;
    let percentualNulo= (votoNulo*100)/totalEleitores;
    let percentualValido= (votoValido*100)/totalEleitores;

    alert('O percentual de votos brancos é: ' + percentualBranco + '%');
    alert('O percentual de votos nulos é: ' + percentualNulo + '%');
    alert('O percentual de votos válidos é: ' + percentualValido + '%');
}