function celsiusFahrenheit(){
    let celsius=10;
    let contadora=1;
    let soma=0;
    let fahrenheit=0;
    
        while(contadora<11){
            soma=soma+celsius
            fahrenheit=((9*soma)+160)/5
            console.log(fahrenheit+' F')
            contadora++
        }
}