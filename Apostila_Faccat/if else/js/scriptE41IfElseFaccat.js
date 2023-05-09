function mediaAproveitamento(){
    let n1 = parseFloat(prompt("Digite a primeira nota:"));
    let n2 = parseFloat(prompt("Digite a segunda nota:"));
    let n3 = parseFloat(prompt("Digite a terceira nota:"));
    let mediaExercicios = parseFloat(prompt("Digite a média dos exercícios:"));

    let mediaAproveitamento = (n1 + n2*2 + n3*3 + mediaExercicios) / 7;

    let conceito;
        if (mediaAproveitamento >= 9.0) {
            conceito = "A";
        } else if (mediaAproveitamento >= 7.5 && mediaAproveitamento < 9.0) {
            conceito = "B";
        } else if (mediaAproveitamento >= 6.0 && mediaAproveitamento < 7.5) {
            conceito = "C";
        } else {
            conceito = "D";
        }

    
    alert(`Média de aproveitamento: ${mediaAproveitamento.toFixed(1)}\nConceito: ${conceito}`);

}