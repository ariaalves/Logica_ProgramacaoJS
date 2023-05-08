function imparFatorial(){
    let contadora=1;
    let fatorial=1;
    let contFatorial=0;
    let resto=0;
    
    do{
       resto=contadora%2;
        if(resto==1){
            contFatorial=contadora;  
                while(contFatorial>1){
                    fatorial=fatorial*contFatorial
                    contFatorial--
                    }
            console.log(fatorial)
            fatorial=1;
            }
        contadora++
    }while(contadora<11)
}