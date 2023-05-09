function precoCombustivel(){
    let litros=Number(prompt('Digite a quantidade de litros vendidos: '));
    let tipoCombustivel=prompt('Informe o tipo de combustível (A-álccol,G-gasolina): ');
    let valorLitro=0;
    let valorTotal=0;

        if(tipoCombustivel=='A' || tipoCombustivel=='a'){
            if(litros<=20){
                valorLitro=2.9*0.97
            }
            else{
                valorLitro=2.9*0.95
            }
        }

        if(tipoCombustivel=='G' || tipoCombustivel=='g'){
            if(litros<=20){
                valorLitro=2.9*0.96
            }
            else{
                valorLitro=2.9*0.94
            }
        }

    valorTotal=litros*valorLitro

    alert('O valor a ser pago será de: R$ ' + valorTotal)
}
