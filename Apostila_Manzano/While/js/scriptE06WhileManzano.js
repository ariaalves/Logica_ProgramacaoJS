function potencia(){
    let base=parseInt(prompt('Digite o número da base'));
    let expoente=parseInt(prompt('Digite o número do expoente'))
    let resultado=1;
    let contadora=1;
    
        while(contadora<=expoente){
            resultado=resultado*base
            contadora++
        }
        
    alert('A potência de '+base+' elevado a '+expoente+' é igual: '+resultado)
}