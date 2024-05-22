function clicar() {
    var txti = document.getElementById('txti')
    var txtf = document.getElementById('txtf')
    var txtp = document.getElementById('txtp')
    var res = document.getElementById('txt')

    if (txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: </br>'
        var i = Number(txti.value)
        var f = Number(txtf.value)
        var p = Number(txtp.value)

        if (p == 0 || p > f) {
            alert('Passo inválido. Considerando PASSO 1.')
            p = 1
        }

        if (p < 0) {
            p *= -1
        }
        
        if (i < f) {
            for (var cont = i; cont <= f; cont += p) {
                res.innerHTML += `${cont} \u{1F449} `
            }
        } else {
            for (var cont = i; cont >= f; cont -= p) {
                res.innerHTML += `${cont} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}