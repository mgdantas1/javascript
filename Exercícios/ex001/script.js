function carregar() {
    var corpo = document.body
    var msg = document.getElementById('texto')
    var foto = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    if (hora >= 0 && hora < 12) {
        var horário = 'Bom dia'
        foto.src = 'manha.jpg'
        corpo.style.background = '#e2cd9f'
    } else { if (hora >= 12 && hora < 18) {
        var horário = 'Boa tarde'
        foto.src = 'tarde.jpg'
        corpo.style.background = '#b9846f'
    } else {
        var horário = 'Boa noite'
        foto.src = 'noite.jpg'
        corpo.style.background = '#515154'
    }
    }
    msg.innerHTML = `${horário}! Agora são ${hora}h.`
}