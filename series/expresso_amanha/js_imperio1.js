
//import {caminho}  from './js_caminho.js' 
//import {eps_} from './js_s1_eps_imperio.js'

//const capa = 'http://www.bocaonews.com.br/fotos/noticias/107362/mg/001.jpg'


/*Botao temporada 01*/


    let temporada = document.get

    let select_temporada = document.getElementById('lista')

    temporada.appendChild(select_temporada)


    //ops 1

    let option_temporada1 = document.createElement('option')

    select_temporada.appendChild(option_temporada1)

    option_temporada1.selected = 'selected'
    option_temporada1.value = 'temp1'
    option_temporada1.innerHTML='Temporada 01'

    //ops2

    let option_temporada2 = document.createElement('option')

    option_temporada2.value = 'temp2'
    option_temporada2.innerHTML='Temporada 02'

    select_temporada.appendChild(option_temporada2)

    function update(){


        var sel = document.getElementById('lista')
        var opt = sel.options[sel.selectedIndex]

        var tx = document.getElementById('tx').value = opt.value
        
        console.log(tx)

    } update()

/*let linha = document.createElement('tr')

option_temporada1.addEventListener('click',()=>{
    
    let eps = document.getElementById('eps')

    if( eps.innerHTML === '' ){

        eps.appendChild(linha)

        /*Botao Epsodio 01

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

        /*Botao Epsodio 02

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

        }) /* FIM Botao Epsodio 02


    } // fim IF

}) /* FIM Botao temporada 01*/ 
