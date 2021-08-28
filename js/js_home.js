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

/*Lista de conteudo*/

function list_imperio(){

    let conteudo = document.getElementById('conteudo')
    let play_list = document.getElementById('play-list')
    let titulo = document.getElementById('titulo')
    let temporada = document.getElementById('temporada')

    conteudo.setAttribute('style','display:none')
    play_list.setAttribute('style','display:flex')
    titulo.innerHTML = "Império"

    /*Botao temporada 01*/

    let li_1 = document.createElement('li')
    let btn_temporada1 = document.createElement('button')

    temporada.appendChild(li_1)
    li_1.appendChild(btn_temporada1)
    btn_temporada1.type='submit'
    btn_temporada1.innerHTML='Temporada 01'

    btn_temporada1.addEventListener('click',()=>{
        
        let eps = document.getElementById('eps')
        let li_eps1 = document.createElement('li')
        let btn_epsodio1 = document.createElement('button')
    
        eps.appendChild(li_eps1)
        li_eps1.appendChild(btn_epsodio1)
        btn_epsodio1.innerHTML='Epsódio 01'

        btn_epsodio1.addEventListener('click',()=>{

            let play_list = document.getElementById('play-list')
            let play_video = document.getElementById('play_video')

            play_list.setAttribute('style','display:none')
            play_video.setAttribute('style','display:block')

            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster = 'https://imgr.cineserie.com/2020/12/narcos-secrets-de-serie.jpg?imgeng=/f_jpg/cmpr_0/w_660/h_370/m_cropbox&ver=1'
        
            videoPlayer.src = 'http://cdn99.one:80/series/lucassfontessantos/br48936/10454'
        
            videoPlayer.setAttribute('style', 'display:block')
        
            document.querySelector(".videoPlayer").play()

        })
        
    })

    /*Botao temporada 02*/
    
    let li_2 = document.createElement('li')
    let btn_temporada2 = document.createElement('button')
        
    temporada.appendChild(li_2)
    li_2.appendChild(btn_temporada2)
    btn_temporada2.innerHTML='Temporada 02'
    


}   

/* Narcos serie  */

function btn_narcos(){

    let videoPlayer = document.querySelector(".videoPlayer")

    videoPlayer.poster = 'https://imgr.cineserie.com/2020/12/narcos-secrets-de-serie.jpg?imgeng=/f_jpg/cmpr_0/w_660/h_370/m_cropbox&ver=1'

    videoPlayer.src = 'http://cdn99.one:80/series/lucassfontessantos/br48936/10454'

    videoPlayer.setAttribute('style', 'display:block')

    document.querySelector(".videoPlayer").play()

}

/*Supernatura*/

function btn_supernatura(){

    let videoPlayer = document.querySelector(".videoPlayer")
    
    videoPlayer.setAttribute('style', 'display:block')

    videoPlayer.poster = 'https://ntvb.tmsimg.com/assets/p17057825_i_h11_aa.jpg'

    videoPlayer.src = 'http://cdn99.one:80/series/lucassfontessantos/br48936/91939.mp4'

    videoPlayer.setAttribute('style', 'display:block')
    
    document.querySelector(".videoPlayer").play()
    
}