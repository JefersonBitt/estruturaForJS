const word = prompt("Informe uma Palvra:")

let invertword = ""

for (let i = word.length - 1; i >= 0; i--) {
    invertword += word[i]
}

if (word === invertword) {
    alert("A palavra " + word + " é um Palindromo!\n\n" +
        word + " = " + invertword)
} else {
    alert(
        word + " não é um palindromo!\n\n" +
        word + " != " + invertword
    )
}