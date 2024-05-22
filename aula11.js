var num = [2, 1, 3]

/* console.log(num)       //mostra com os colchetes
   console.log(`${num}`) //mostra sem os colchetes */


/* acrescentar valores */

/* num[5] = 6 // troca/adiciona qualquer valor */
num.push(6)  // adiciona um valor no final

console.log(num)

console.log(num.length) // mostra o tamanho do array

console.log(num.sort()) 

console.log('Printando os números:')
// for (var pos = 0; pos < num.length; pos++) {
//     console.log(`Posição ${pos}: ${num[pos]}`)
// }

// var pos = 0
// while (pos < num.length) {
//     console.log(`Posição ${pos}: ${num[pos]}`)
//     pos++
// }

for (var pos in num) {
    console.log(`Posição ${pos}: ${num[pos]}`)
}

var pos = num.indexOf(4)

if (pos == -1) {
    console.log('O valor não foi encontrado.')
} else {
    console.log(`O valor está na posição ${pos}`)
}

