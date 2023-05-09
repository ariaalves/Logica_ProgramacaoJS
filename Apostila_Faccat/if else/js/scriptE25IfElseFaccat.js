function saldoConta(){
    let numeroConta=Number(prompt('Digite o número da sua conta: '));
    let saldo=Number(prompt('Digite o saldo da conta: '));
    let debito=Number(prompt('Digite o valor que foi retirado dela: '));
    let credito=Number(prompt('Digite o valor que vai ser depositado nela: '));
    let saldoAtual=(saldo-debito)+credito;

        if(saldoAtual>=0){
            alert(numeroConta + ' o seu saldo é de: R$ ' + saldoAtual + ' e está POSITIVO!');
        }

        else{
            alert(numeroConta + ' o seu saldo é de: R$ ' + saldoAtual + ' e está NEGATIVO!');
        }
}