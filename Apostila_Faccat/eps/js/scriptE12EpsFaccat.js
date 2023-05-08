function fahrenheitCelsius(){
    let fahrenheit=parseFloat(prompt('Digite o valor da temperatura em graus Fahrenheit: '));
    let celsius=((fahrenheit-32)*5)/9

    alert(fahrenheit + 'F equivale a: ' + celsius + '°C')
}