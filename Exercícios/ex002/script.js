function clicar() {
    var ano = (document.getElementById('nascimento'))
    var ano_atual = new Date().getFullYear()

    if (ano.value.length == 0 || ano.value > ano_atual) {
        alert('Preencha os dados corretamente.')
    } else {
        var idade =  ano_atual - ano.value
        var txt = document.getElementById('txt')
        var sexo = document.querySelector('input[name="sexo"]:checked').value
        var foto = document.createElement('img')
        foto.setAttribute('id', 'img')
    }
    if (sexo == 'feminino') {
        if (idade <= 11) {
            foto.setAttribute('src', 'menina.jpg')
        } else if (idade <= 20) {
            foto.setAttribute('src', 'moça.jpg')
        } else if (idade <= 55) {
            foto.setAttribute('src', 'adulta.jpg')
        } else {
            foto.setAttribute('src', 'idosa.jpg')
        }
    } else { 
        if (idade <= 11) {
            foto.setAttribute('src', 'menino.jpg')
        } else if (idade <= 20) {
            foto.setAttribute('src', 'moço.jpg')
        } else if (idade <= 55) {
            foto.setAttribute('src', 'adulto.jpg')
        } else {
            foto.setAttribute('src', 'idoso.jpg')
        }
        
    }
    txt.innerHTML = `Você tem <strong>${idade} anos</strong> e é do sexo <strong>${sexo}</strong>.`
    txt.style.textAlign = 'center'
    txt.appendChild(foto)
}