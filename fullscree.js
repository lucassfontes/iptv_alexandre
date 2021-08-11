
function launchFullscreen(element){

    if(element.requestFullscreen){
        element.requestFullscreen();

    } else if(element.mozRequestFullScreen){
        element.mozRequestFullScreen();

    } else if(element.webkitRequestFullscreen){
        element.webkitRequestFullscreen();

    } else if(element.msRequestFullscreen){
        element.msRequestFullscreen();
    }

    document.getElementById('player').play()
    document.getElementById('player').setAttribute('style', 'display:block')

    
}

/* Narcos serie*/

let videoPlayer = document.getElementById("videoPlayer") 

function btn_narcos(){

    videoPlayer.setAttribute('style', 'display:block')

    videoPlayer.poster = 'https://imgr.cineserie.com/2020/12/narcos-secrets-de-serie.jpg?imgeng=/f_jpg/cmpr_0/w_660/h_370/m_cropbox&ver=1'

    videoPlayer.src = 'http://cdn99.one:80/series/lucassfontessantos/br48936/10454.mp4'

    document.getElementById('videoPlayer').play()

}

/*Supernatura*/

function btn_supernatura(){

    videoPlayer.setAttribute('style', 'display:block')

    videoPlayer.poster = 'https://ntvb.tmsimg.com/assets/p17057825_i_h11_aa.jpg'

    videoPlayer.src = 'http://cdn99.one:80/series/lucassfontessantos/br48936/91939.mp4'

    document.getElementById('videoPlayer').play()
    
}