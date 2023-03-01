const numero = prompt("Olá, eu sou o Robô da Tabuada!\n" +
    "Informe o número que você deseja calcular a tabuada:")

let resultado = ""

for (let i = 0; i <= 10; i++) {
    resultado += numero + " X " + i + " = " + (numero * i) + "\n"
}

alert("Resultado da tabuada de " + numero + ":\n\n" + resultado)