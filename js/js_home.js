
let userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.querySelector('#logado')

if(localStorage.getItem('token') == null){

    window.location.href='../index.html'

}else{

    logado.innerHTML = `Olá ${userLogado.nome}`
}

function sair(){
    
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href='../index.html'
}

function fecha_video(){

    let play_list = document.getElementById('play-list')
    let play_video = document.getElementById('play_video')
    let videoPlayer = document.querySelector(".videoPlayer")

    videoPlayer.src = ''
    videoPlayer.poster = ''

    document.querySelector(".videoPlayer").pause()

    play_list.setAttribute('style','display:flex')
    play_video.setAttribute('style','display:none')
    
}

function fecha_list(){

    let play_list = document.getElementById('play-list')
    let conteudo = document.getElementById('conteudo')

    play_list.setAttribute('style','display:none')
    conteudo.setAttribute('style','display:block') 
}


/*Lista de conteudo*/

function list_imperio(){

    let conteudo = document.getElementById('conteudo')
    let play_list = document.getElementById('play-list')
    let titulo = document.getElementById('titulo')

    conteudo.setAttribute('style','display:none')
    play_list.setAttribute('style','display:flex')
    titulo.innerHTML = "Expresso do Amanhã"

} 


function expresso_amanha(){
    window.location.href = '../series/expresso_amanha/expresso_amanha.html'
}

function game_of_thrones(){
    window.location.href = '../series/game_of_thrones/game_of_thrones.html'
}

