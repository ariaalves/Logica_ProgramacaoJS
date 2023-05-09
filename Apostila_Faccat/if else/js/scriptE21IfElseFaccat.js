function duracaoPartida(){
    let horaInicio=Number(prompt('Digite a hora de ínicio da partida de xadrez: '));
    let horaFim=Number(prompt('Digite a hora do fim da partida de xadrez: '));
    let duracao01=(24-horaFim)+horaFim
    let duracao02=horaFim-horaInicio

        if(horaFim<=horaInicio){
            console.log('A partida de xadrez durou: ' + duracao01 + 'h');
        }

        else{
            console.log('A partida de xadrez durou: ' + duracao02 + 'h')
        }
}