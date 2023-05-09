function numInteiro(){
    let n = 0;
        while (n <= 0) {
            n = Number(prompt("Digite um valor maior que zero para N:"));
        }
        
        for (let i = 1; i <= n; i++) {
             console.log(i);
        }
}