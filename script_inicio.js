let userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.querySelector('#logado')

logado.innerHTML = `Olá ${userLogado.nome} <br>Você está logado!`

if(localStorage.getItem('token') == null){
    alert('Você não está logado!')
    window.location.href='index.html'
}

function sair(){
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href='index.html'
}
