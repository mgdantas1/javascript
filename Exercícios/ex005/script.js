// var lista = []
// var num = document.getElementById('núm')
// var numeros = document.getElementById('números')
// var txt = document.getElementById('text')
// function clicar() {
//     if (num.value.length == 0) {
//         window.alert('Digite um número.')
//     } else {
//         var n = Number(num.value)
//         if (n >= 1 && n <= 100) {
//             var pos = lista.indexOf(n)
//             if (pos == -1) {
//                 lista.push(n)
//                 var item = document.createElement('option')
//                 item.innerHTML = `Valor ${lista[lista.length - 1]} adicionado.`
//                 numeros.appendChild(item)
//             } else {
//                 window.alert('Número já adicionado.')
//             }
//         } else {
//             window.alert('Apenas números entre 1 e 100.')
//         }
//     }
// }

// function analisar() {
//     txt.innerHTML = ''
//     if (num.value.length == 0) {
//         window.alert('Digite um número.')
//     } else {
//         maior = menor = soma = 0
//         for (var cont = 0; cont < lista.length; cont++) {
//             soma += lista[cont]
//             if (cont == 0) {
//                 maior = lista[cont]
//                 menor = lista[cont]
//             } else if (lista[cont] > maior) {
//                 maior = lista[cont]
//             } if (lista[cont] < menor) {
//                 menor = lista[cont]
//             }
//         }
//         txt.innerHTML += `<p>Foram digitados ${lista.length} números.</p>`
//         txt.innerHTML += `<p>O maior número é ${maior}.</p>`
//         txt.innerHTML += `<p>O menor número é ${menor}.</p>`
//         txt.innerHTML += `<p>Somando tudo, temos: ${soma}.</p>`
//         txt.innerHTML += `<p>A média entre os números é ${soma/lista.length}.</p>`
//     }
// }

var lista = []
var num = document.getElementById('núm')
var numeros = document.getElementById('números')
var txt = document.getElementById('text')

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) == -1) {
        return true
    } else {
        return false
    }
}

function clicar() {
    if (isNumero(num.value) && inLista(num.value, lista)) {
        lista.push(Number(num.value))
        var item = document.createElement('option')
        item.innerHTML = `Valor ${lista[lista.length - 1]} adicionado.`
        numeros.appendChild(item)
        txt.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já existe na lista')
    }
    num.value = ''
    num.focus()
}

function analisar() {
    if (lista.length == 0) {
        window.alert('Digite um número para analisar.')
    } else {
        maior = menor = soma = 0
        for (var cont = 0; cont < lista.length; cont++) {
            soma += lista[cont]
            if (cont == 0) {
                maior = lista[cont]
                menor = lista[cont]
            } else if (lista[cont] > maior) {
                maior = lista[cont]
            } if (lista[cont] < menor) {
                menor = lista[cont]
            }
        }
        txt.innerHTML += `<p>Foram digitados ${lista.length} números.</p>`
        txt.innerHTML += `<p>O maior número é ${maior}.</p>`
        txt.innerHTML += `<p>O menor número é ${menor}.</p>`
        txt.innerHTML += `<p>Somando tudo, temos: ${soma}.</p>`
        txt.innerHTML += `<p>A média entre os números é ${soma/lista.length}.</p>`
    }
}