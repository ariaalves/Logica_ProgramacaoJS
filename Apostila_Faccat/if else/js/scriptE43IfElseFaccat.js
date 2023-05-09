function triangulo(){
    let a, b, c;
    a = Number(prompt("Digite o valor de a:"));
    b = Number(prompt("Digite o valor de b:"));
    c = Number(prompt("Digite o valor de c:"));

        if ((a < b+c) && (b < a+c) && (c < a+b)) {
            if (a == b && b == c) {
                console.log("Triângulo Equilátero");
            } else if (a == b || b == c || a == c) {
                console.log("Triângulo Isósceles");
            } else {
                console.log("Triângulo Escaleno");
            }
        } else {
        console.log("Não é possível formar um triângulo");
        }

}