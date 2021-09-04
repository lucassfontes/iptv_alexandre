
/*Botao Epsodio 10*/

let btn_epsodio10 = document.createElement('button')

linha.appendChild(btn_epsodio10)
btn_epsodio10.innerHTML='Epsódio 10'

export default btn_epsodio10.addEventListener('click',()=>{

    let play_list = document.getElementById('play-list')
    let play_video = document.getElementById('play_video')

    play_list.setAttribute('style','display:none')
    play_video.setAttribute('style','display:block')

    let videoPlayer = document.querySelector(".videoPlayer")

    videoPlayer.poster =  capa
    
    videoPlayer.src = caminho + eps_10
    
    videoPlayer.setAttribute('style', 'display:block')
    
    document.querySelector(".videoPlayer").play()

}) /* FIM Botao Epsodio 10*/

