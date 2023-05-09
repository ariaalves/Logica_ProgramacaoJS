function macas(){
    let numero=parseInt(prompt("Digite o número de maçãs compradas: "))
    let menosDuzia= numero*1.30
    let duzia= numero*1

            if (numero>=12){
            alert('O custo total é de: R$ ' + duzia)
             }

            else{
                alert('O custo total é de: R$ ' + menosDuzia)
            }
}