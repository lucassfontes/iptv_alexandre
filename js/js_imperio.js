//caminho

let servidor = 'http://cdn99.one:80'
let pasta = '/series' 
let usuario = '/lucassfontessantos'
let senha = '/br48936/'
let caminho = (servidor + pasta + usuario + senha)

let capa = 'http://www.bocaonews.com.br/fotos/noticias/107362/mg/001.jpg'

//FIM caminho


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

    let btn_epsodio1 = document.createElement('button')

    let btn_epsodio2 = document.createElement('button')

    let btn_epsodio3 = document.createElement('button')

    if( eps.innerHTML === '' ){

        eps.appendChild(linha)

        linha.appendChild(btn_epsodio1)
        btn_epsodio1.innerHTML='Epsódio 01 s1'

        linha.appendChild(btn_epsodio2)
        btn_epsodio2.innerHTML='Epsódio 02 s1'

        linha.appendChild(btn_epsodio3)
        btn_epsodio3.innerHTML='Epsódio 03 s1'


    }

    console.log(linha)

    /*Botao Epsodio 01*/

    btn_epsodio1.addEventListener('click',()=>{

        let play_list = document.getElementById('play-list')
        let play_video = document.getElementById('play_video')

        play_list.setAttribute('style','display:none')
        play_video.setAttribute('style','display:block')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa
    
        videoPlayer.src = caminho + '50939.mp4'
    
        videoPlayer.setAttribute('style', 'display:block')
    
        document.querySelector(".videoPlayer").play()

    }) /* FIM Botao Epsodio 01*/

    /*Botao Epsodio 02*/

    btn_epsodio2.addEventListener('click',()=>{

        let play_list = document.getElementById('play-list')
        let play_video = document.getElementById('play_video')

        play_list.setAttribute('style','display:none')
        play_video.setAttribute('style','display:block')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa
    
        videoPlayer.src = caminho + '50940.mp4'
    
        videoPlayer.setAttribute('style', 'display:block')
    
        document.querySelector(".videoPlayer").play()

    }) /* FIM Botao Epsodio 02*/

        /*Botao Epsodio 03*/

        btn_epsodio3.addEventListener('click',()=>{

            let play_list = document.getElementById('play-list')
            let play_video = document.getElementById('play_video')
    
            play_list.setAttribute('style','display:none')
            play_video.setAttribute('style','display:block')
    
            let videoPlayer = document.querySelector(".videoPlayer")
    
            videoPlayer.poster =  capa
        
            videoPlayer.src = caminho + '50941.mp4'
        
            videoPlayer.setAttribute('style', 'display:block')
        
            document.querySelector(".videoPlayer").play()
    
        }) /* FIM Botao Epsodio 03*/
    
}) /* FIM Botao temporada 01*/
