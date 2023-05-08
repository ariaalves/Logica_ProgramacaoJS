function divisaoInteira(){

    let dividendo = parseInt(prompt("Digite o dividendo: "));
    let divisor = parseInt(prompt("Digite o divisor: "));
    let quociente = 0;

        do {
            dividendo-=divisor;
            quociente++;
        } while (dividendo >= divisor);

    alert("O resultado inteiro da divisão é: " + quociente);
}
