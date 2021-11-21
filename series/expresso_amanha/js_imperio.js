
import {caminho}  from './js_caminho.js' 


const capa = 'http://www.bocaonews.com.br/fotos/noticias/107362/mg/001.jpg'


/*Botao temporada 01*/

let li_1 = document.createElement('li')
let btn_temporada1 = document.createElement('button')

let linha = document.createElement('tr');

temporada.appendChild(li_1)
li_1.appendChild(btn_temporada1)
btn_temporada1.type='submit'
btn_temporada1.innerHTML='Temporada 01'

btn_temporada1.addEventListener('click',()=>{
    
    let eps = document.getElementById('eps')

    if( eps.innerHTML === '' ){

        eps.appendChild(linha)

        /*Botao Epsodio 01*/

        let btn_epsodio1 = document.createElement('button')

        linha.appendChild(btn_epsodio1)
        btn_epsodio1.innerHTML='Epsódio 01'

        btn_epsodio1.addEventListener('click',()=>{

            let play_list = document.getElementById('play-list')
            let play_video = document.getElementById('play_video')

            play_list.setAttribute('style','display:none')
            play_video.setAttribute('style','display:block')

            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa
        
            videoPlayer.src = caminho + eps_[1]
        
            videoPlayer.setAttribute('style', 'display:block')
        
            document.querySelector(".videoPlayer").play()

        }) /* FIM Botao Epsodio 01*/

        /*Botao Epsodio 02*/

        let btn_epsodio2 = document.createElement('button')

        linha.appendChild(btn_epsodio2)
        btn_epsodio2.innerHTML='Epsódio 02'

        btn_epsodio2.addEventListener('click',()=>{

            let play_list = document.getElementById('play-list')
            let play_video = document.getElementById('play_video')

            play_list.setAttribute('style','display:none')
            play_video.setAttribute('style','display:block')

            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa
        
            videoPlayer.src = caminho + eps_[2]
        
            videoPlayer.setAttribute('style', 'display:block')
        
            document.querySelector(".videoPlayer").play()

        }) /* FIM Botao Epsodio 02*/

        /*Botao Epsodio 03*/

        let btn_epsodio3 = document.createElement('button')

        linha.appendChild(btn_epsodio3)
        btn_epsodio3.innerHTML='Epsódio 03'

        btn_epsodio3.addEventListener('click',()=>{

            let play_list = document.getElementById('play-list')
            let play_video = document.getElementById('play_video')
        
            play_list.setAttribute('style','display:none')
            play_video.setAttribute('style','display:block')
        
            let videoPlayer = document.querySelector(".videoPlayer")
        
            videoPlayer.poster =  capa
            
            videoPlayer.src = caminho + eps_[3]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()
        
        }) /* FIM Botao Epsodio 03*/

        /*Botao Epsodio 04*/

        let btn_epsodio4 = document.createElement('button')

        linha.appendChild(btn_epsodio4)
        btn_epsodio4.innerHTML='Epsódio 04'

        btn_epsodio4.addEventListener('click',()=>{

            let play_list = document.getElementById('play-list')
            let play_video = document.getElementById('play_video')
        
            play_list.setAttribute('style','display:none')
            play_video.setAttribute('style','display:block')
        
            let videoPlayer = document.querySelector(".videoPlayer")
        
            videoPlayer.poster =  capa
            
            videoPlayer.src = caminho + eps_[4]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()
        
        }) /* FIM Botao Epsodio 04*/

        /*Botao Epsodio 05*/

        let btn_epsodio5 = document.createElement('button')

        linha.appendChild(btn_epsodio5)
        btn_epsodio5.innerHTML='Epsódio 05'

        btn_epsodio5.addEventListener('click',()=>{

            let play_list = document.getElementById('play-list')
            let play_video = document.getElementById('play_video')
        
            play_list.setAttribute('style','display:none')
            play_video.setAttribute('style','display:block')
        
            let videoPlayer = document.querySelector(".videoPlayer")
        
            videoPlayer.poster =  capa
            
            videoPlayer.src = caminho + eps_[5]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()
        
        }) /* FIM Botao Epsodio 05*/

        /*Botao Epsodio 06*/

        let btn_epsodio6 = document.createElement('button')

        linha.appendChild(btn_epsodio6)
        btn_epsodio6.innerHTML='Epsódio 06'

        btn_epsodio6.addEventListener('click',()=>{

            let play_list = document.getElementById('play-list')
            let play_video = document.getElementById('play_video')
        
            play_list.setAttribute('style','display:none')
            play_video.setAttribute('style','display:block')
        
            let videoPlayer = document.querySelector(".videoPlayer")
        
            videoPlayer.poster =  capa
            
            videoPlayer.src = caminho + eps_[6]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()
        
        }) /* FIM Botao Epsodio 06*/

        /*Botao Epsodio 04*/

        let btn_epsodio7 = document.createElement('button')

        linha.appendChild(btn_epsodio7)
        btn_epsodio7.innerHTML='Epsódio 07'

        btn_epsodio7.addEventListener('click',()=>{

            let play_list = document.getElementById('play-list')
            let play_video = document.getElementById('play_video')
        
            play_list.setAttribute('style','display:none')
            play_video.setAttribute('style','display:block')
        
            let videoPlayer = document.querySelector(".videoPlayer")
        
            videoPlayer.poster =  capa
            
            videoPlayer.src = caminho + eps_[7]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()
        
        }) /* FIM Botao Epsodio 07*/

        /*Botao Epsodio 08*/

        let btn_epsodio8 = document.createElement('button')

        linha.appendChild(btn_epsodio8)
        btn_epsodio8.innerHTML='Epsódio 08'

        btn_epsodio8.addEventListener('click',()=>{

            let play_list = document.getElementById('play-list')
            let play_video = document.getElementById('play_video')
        
            play_list.setAttribute('style','display:none')
            play_video.setAttribute('style','display:block')
        
            let videoPlayer = document.querySelector(".videoPlayer")
        
            videoPlayer.poster =  capa
            
            videoPlayer.src = caminho + eps_[8]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()
        
        }) /* FIM Botao Epsodio 08*/

        /*Botao Epsodio 09*/

        let btn_epsodio9 = document.createElement('button')

        linha.appendChild(btn_epsodio9)
        btn_epsodio9.innerHTML='Epsódio 09'

        btn_epsodio9.addEventListener('click',()=>{

            let play_list = document.getElementById('play-list')
            let play_video = document.getElementById('play_video')
        
            play_list.setAttribute('style','display:none')
            play_video.setAttribute('style','display:block')
        
            let videoPlayer = document.querySelector(".videoPlayer")
        
            videoPlayer.poster =  capa
            
            videoPlayer.src = caminho + eps_[9]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()
        
        }) /* FIM Botao Epsodio 09*/

        /*Botao Epsodio 10*/

        let btn_epsodio10 = document.createElement('button')

        linha.appendChild(btn_epsodio10)
        btn_epsodio10.innerHTML='Epsódio 10'

        btn_epsodio10.addEventListener('click',()=>{

            let play_list = document.getElementById('play-list')
            let play_video = document.getElementById('play_video')
        
            play_list.setAttribute('style','display:none')
            play_video.setAttribute('style','display:block')
        
            let videoPlayer = document.querySelector(".videoPlayer")
        
            videoPlayer.poster =  capa
            
            videoPlayer.src = caminho + eps_[10]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()
        
        }) /* FIM Botao Epsodio 10*/


    } // fim IF

}) /* FIM Botao temporada 01*/
