function clicar() {
    var num = document.getElementById('txtn').value
    var tab = document.getElementById('tabuada')

    if (num.length == 0) {
        alert('Por favor. Digite um número.')
    } else {
        var n = Number(num)
        cont = 0
        tab.innerHTML = ''
        while (cont <= 10){
            var item = document.createElement('option')
            item.text = `${n} X ${cont} = ${n*cont}`
            tab.appendChild(item)
            cont ++
        }
    }
}