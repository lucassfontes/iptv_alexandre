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

    if( eps.innerHTML === '' ){

        eps.appendChild(linha)

        linha.appendChild(btn_epsodio1)
        btn_epsodio1.innerHTML='Epsódio 01 s1'

        linha.appendChild(btn_epsodio2)
        btn_epsodio2.innerHTML='Epsódio 02 s1'


    }

    console.log(linha)

    /*Botao Epsodio 01*/

    btn_epsodio1.addEventListener('click',()=>{

        let play_list = document.getElementById('play-list')
        let play_video = document.getElementById('play_video')

        play_list.setAttribute('style','display:none')
        play_video.setAttribute('style','display:block')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  'http://www.bocaonews.com.br/fotos/noticias/107362/mg/001.jpg'
    
        videoPlayer.src = 'http://cdn99.one:80/series/lucassfontessantos/br48936/50939.mp4'
    
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

        videoPlayer.poster =  'http://www.bocaonews.com.br/fotos/noticias/107362/mg/001.jpg'
    
        videoPlayer.src = 'http://cdn99.one:80/series/lucassfontessantos/br48936/50940.mp4'
    
        videoPlayer.setAttribute('style', 'display:block')
    
        document.querySelector(".videoPlayer").play()

    }) /* FIM Botao Epsodio 02*/
    
}) /* FIM Botao temporada 01*/


/*Botao temporada 02*/

let li_2 = document.createElement('li')
let btn_temporada2 = document.createElement('button')

temporada.appendChild(li_2)
li_2.appendChild(btn_temporada2)
btn_temporada2.type='submit'
btn_temporada2.innerHTML='Temporada 02'


btn_temporada2.addEventListener('click',()=>{

    let eps = document.getElementById('eps')

    let btn_epsodio1 = document.createElement('button')

    let btn_epsodio2 = document.createElement('button')
    

   if( eps.innerHTML === '' ){
        
        eps.appendChild(linha)

        linha.appendChild(btn_epsodio1)
        btn_epsodio1.innerHTML='Epsódio 03 s2'

        linha.appendChild(btn_epsodio2)
        btn_epsodio2.innerHTML='Epsódio 04 s2'
        
    }
    linha.remove()
    linha.value = ''
    console.log(linha)



    /*Botao Epsodio 01*/

    btn_epsodio1.addEventListener('click',()=>{

        let play_list = document.getElementById('play-list')
        let play_video = document.getElementById('play_video')

        play_list.setAttribute('style','display:none')
        play_video.setAttribute('style','display:block')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  'http://www.bocaonews.com.br/fotos/noticias/107362/mg/001.jpg'
    
        videoPlayer.src = 'http://cdn99.one:80/series/lucassfontessantos/br48936/50938.mp4'
    
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

        videoPlayer.poster =  'http://www.bocaonews.com.br/fotos/noticias/107362/mg/001.jpg'
    
        videoPlayer.src = 'http://cdn99.one:80/series/lucassfontessantos/br48936/50938.mp4'
    
        videoPlayer.setAttribute('style', 'display:block')
    
        document.querySelector(".videoPlayer").play()

    }) /* FIM Botao Epsodio 02*/

}) /* FIM Botao temporada 02*/