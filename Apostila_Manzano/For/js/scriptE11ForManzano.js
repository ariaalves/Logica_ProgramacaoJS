function imparFatorial(){
    let fatorial=1;
    let contFatorial=0;
    let resto=0;

        for(let i=1; i<11; i++){
            resto=i%2
                if(resto==1){
                    contFatorial=i;
                        
                        while(contFatorial>1){
                            fatorial=fatorial*contFatorial
                            contFatorial--
                        }
                    console.log(fatorial)

                    fatorial=1;
                }
        }
}