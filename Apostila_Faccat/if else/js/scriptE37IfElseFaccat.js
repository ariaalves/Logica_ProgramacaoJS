function feira(){
    let qtdMorangos = parseFloat(prompt("Digite a quantidade de morangos em Kg:"));
    let qtdMacas = parseFloat(prompt("Digite a quantidade de maçãs em Kg:"));

    let precoMorangos = 0;
        if (qtdMorangos <= 5) {
        precoMorangos = qtdMorangos * 2.5;
        } else {
        precoMorangos = qtdMorangos * 2.2;
        }


    let precoMacas = 0;
        if (qtdMacas <= 5) {
        precoMacas = qtdMacas * 1.8;
        } else {
        precoMacas = qtdMacas * 1.5;
        }


    let precoTotal = precoMorangos + precoMacas;

        if (precoTotal > 25 || (qtdMorangos + qtdMacas) > 8) {
        precoTotal *= 0.9;
        }


    alert(`O preço total a ser pago é: R$ ${precoTotal.toFixed(2)}`);

}