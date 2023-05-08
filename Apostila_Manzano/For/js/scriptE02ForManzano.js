function tabuada(){
    let numero= parseInt(prompt('Insira o número que deseja saber a tabuada: '));
        for(let i=1; i<11; i++){
            resultado= numero*i;
            console.log(numero+ ' x ' + i + ' = ' + resultado)
        }
}