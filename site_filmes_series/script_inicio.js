let userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.querySelector('#logado')

if(localStorage.getItem('token') == null){

    //alert('Você não está logado!')
    window.location.href='/index.html'

}else{

    logado.innerHTML = `Olá ${userLogado.nome}`
}

function sair(){
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href='/index.html'
}



/* Narcos serie  */

function btn_narcos(){

    let videoPlayer = document.getElementById("videoPlayer")

    videoPlayer.poster = 'https://imgr.cineserie.com/2020/12/narcos-secrets-de-serie.jpg?imgeng=/f_jpg/cmpr_0/w_660/h_370/m_cropbox&ver=1'

    videoPlayer.src = 'http://cdn99.one:80/series/lucassfontessantos/br48936/10454.mp4'

    document.getElementById("videoPlayer").play()

}

/*Supernatura*/

function btn_supernatura(){

    videoPlayer.setAttribute('style', 'display:block')

    videoPlayer.poster = 'https://ntvb.tmsimg.com/assets/p17057825_i_h11_aa.jpg'

    videoPlayer.src = 'http://cdn99.one:80/series/lucassfontessantos/br48936/91939.mp4'

    document.getElementById('videoPlayer').play()
    
}