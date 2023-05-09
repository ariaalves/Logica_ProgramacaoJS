function login(){
    
let codigo = prompt("Digite o código de usuário:");


    if (codigo != "1234") {
        alert("Usuário inválido!");
    } else {
        let senha = prompt("Digite a senha:");

    if (senha != "9999") {
        alert("Senha incorreta!");
    } else {
        alert("Acesso permitido!");
    }
    }

}