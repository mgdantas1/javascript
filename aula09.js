// var idade = 17
// console.log(`Você tem ${idade}.`)
// if (idade < 16) {
//     console.log('Não vota.')
// } else { 
//     if (idade < 18 || idade > 65) {
//     console.log('Voto opcional')
//     } else {
//         console.log('Voto obrigatório')
//     }
// }

// var data = new Date()
// var h = data.getHours()

// console.log(`Agora são exatamente ${h} horas.`)

// if (h < 12) {
//     if (h >= 1) {
//         if (h < 6) {
//             console.log('Olá, boa madrugada.')
//         } else {
//             console.log('Olá, bom dia.')
//         }
//     } else {
//         console.log('Olá, boa noite.')
//     }
// } else {
//     if (h <= 18) {
//         console.log('Olá, boa tarde.')
//     } else {
//         console.log('Olá, boa noite.')
//     }
// }

var agora = new Date()
var diaSem = agora.getDay()

/*  Domingo -> 0
    Segunda -> 1
    Terça -> 2
    Quarta -> 3
    Quinta -> 4
    Sexta -> 5
    Sábado -> 6
*/

switch (diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
}
