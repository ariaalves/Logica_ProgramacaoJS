function mediaPares () {
    let numero = 50;
    let acumuladora = 0;
    let pares= 0;

        while(numero<71) {
            if (numero%2==0) {
                  acumuladora = acumuladora+numero;
                  pares += 1
            }  
            
            numero ++
        }

     let media = acumuladora/pares;

     console.log("Esses são os números pares: " + pares + "Esse é o resultado da soma: " + media)
}