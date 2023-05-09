function totalPagar(){
    let descricao = prompt("Digite a descrição do produto:");
    let quantidade = Number(prompt("Digite a quantidade adquirida:"));
    let precoUnitario = Number(prompt("Digite o preço unitário:"));


    let total = quantidade * precoUnitario;


    let desconto=0;

        if (quantidade <= 5) {
            desconto = total * 0.02;
        } else if (quantidade <= 10) {
            desconto = total * 0.03;
        } else {
            desconto = total * 0.05;
        }


    let totalAPagar = total - desconto;


    console.log("Descrição do produto:", descricao);
    console.log("Quantidade adquirida:", quantidade);
    console.log("Preço unitário:", precoUnitario);
    console.log("Total:", total.toFixed(2));
    console.log("Desconto:", desconto.toFixed(2));
    console.log("Total a pagar:", totalAPagar.toFixed(2));

}