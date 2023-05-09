function negativos(){
    let countNegativos = 0;


        for (let i = 1; i <= 10; i++) {
        
            let valor = prompt("Insira um valor:");

       
                if (valor < 0) {
                    countNegativos++;
                }
        }


    console.log("Foram lidos " + countNegativos + " valores negativos.");

}