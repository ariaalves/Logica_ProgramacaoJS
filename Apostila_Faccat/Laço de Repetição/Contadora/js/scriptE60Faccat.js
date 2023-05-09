function numIntervalo(){
    let valoresDentroIntervalo = 0;
    let valoresForaIntervalo = 0;

        for (let i = 0; i < 10; i++) {
            let valor = prompt("Digite um valor:");
        
                if (valor >= 10 && valor <= 20) {
                    valoresDentroIntervalo++;
                } else {
                    valoresForaIntervalo++;
                }
        }

    console.log(`Valores dentro do intervalo: ${valoresDentroIntervalo}`);
    console.log(`Valores fora do intervalo: ${valoresForaIntervalo}`);

}