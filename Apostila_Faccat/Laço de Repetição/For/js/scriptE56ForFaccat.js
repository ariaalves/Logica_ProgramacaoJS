function tabuada(){
    let valor = parseInt(prompt("Digite um valor entre 1 e 10:"));

        if (valor >= 1 && valor <= 10) {
            for (let i = 1; i <= 10; i++) {
                let resultado = valor * i;
                console.log(`${valor} x ${i} = ${resultado}`);
            }
        } else {
        console.log("Valor inválido. Digite um valor entre 1 e 10.");
        }

}