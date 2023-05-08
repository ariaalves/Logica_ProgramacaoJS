function idadeDias(){
    let anos= parseInt(prompt('Digite a quantidade de anos completos que você possui: '));
    let meses= parseInt(prompt('Digite a quantidade de meses que passou do seu último aniversário: '));
    let dias= parseInt(prompt('Digite a quantidade de dias que passou do seu último mesversário: '));
    let resultado=(anos*365)+(meses*30)+dias

    alert('A sua idade em dias é: '+ resultado + ' dias')
}