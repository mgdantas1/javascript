// function parimpar(n) {
//     if (n % 2 == 0) {
//         return 'par'
//     } else {
//         return 'ímpar'
//     }
// }

// let res = parimpar(5)
// console.log(`O número é ${res}!`)


// function soma(n1 = 0, n2 = 0) {
//     return n1 + n2
// }

// console.log(soma(1, 3))


// var dobro = function(x) {
//     return x * 2
// }

// console.log(dobro(5))

// var num = 3
// var cont = 1

// while (num >= 1) {
//     cont *= num
//     num -= 1 
// }

// console.log(cont)


// function fatorial(n) {
//     var fat = 1
//     for (var num = n; num >= 1; num--) {
//         fat *= num
//     }
//     return fat
// }

// console.log(fatorial(5))


/* 5! = 5 X 4 X 3 X 2 X 1
5! = 5 X 4!
n! = n X (n-1)! */

/* RECURSIVIDADE */
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(3))
