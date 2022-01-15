//caminho
import {caminho} from '../../js/js_caminho.js' 

import {capa_eps, capa_video} from './game_thrones_capa.js'

import {
    s1_eps_, s2_eps_, s3_eps_, s4_eps_, s5_eps_, s6_eps_, s7_eps_, s8_eps_, s9_eps_, s10_eps_,
} from './game_thrones_temp_eps.js'



// Triler

let triler = document.getElementById('triler')

    triler.poster = 'https://www.asiamediajournal.com/wp-content/uploads/2020/10/Index-Of-Game-Of-Thrones-696x399.png'

    triler.src = 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/13/09/30/16/19535228_l_013.mp4'

    triler.title = 'Game of Thrones'
    triler.alt = 'Game of Thrones'

// fim Triler

    
let eps = document.createElement('div')
eps.id = 'eps'
eps.className = 'eps'

let cont_temp = 0
let type_temp = 'temp'


let btn_fechar = document.getElementById('fechar')
btn_fechar.addEventListener('click', ()=>{

    let play_temporadas = document.getElementById('temporadas')
    let play_video = document.getElementById('play_video')
    
    btn_fechar.setAttribute('style','display:none')
    play_video.setAttribute('style','display:none')
    document.querySelector(".videoPlayer").pause()

    document.querySelector('.logo').setAttribute('style','display:block')

    triler.src = 'https://br.vid.web.acsta.net/uk/medias/nmedia/55/13/09/30/16/19535228_l_013.mp4'

    document.getElementById("triler").play()

    play_temporadas.setAttribute('style','display:block')

})

let btn_mute = document.getElementById('mute')
let mute = document.getElementById("triler")
let type_mute = 0
let off = document.getElementById('off')
let on = document.getElementById('on')
btn_mute.addEventListener('click', ()=>{

    if (type_mute == 0){

        mute.muted = true
        on.setAttribute('style','display:none')
        off.setAttribute('style','display:block')
        type_mute = 1

    }else if(type_mute == 1){

        mute.muted = false
        on.setAttribute('style','display:block')
        off.setAttribute('style','display:none')
        type_mute = 0
    }

})

let btn_volta = document.getElementById('x')
btn_volta.addEventListener('click',()=>{
    window.location.href='/pgs/home.php'
})


let myeps = document.getElementById('temp')
myeps.addEventListener('change',()=>{

    let selct_temp = document.getElementById('temp').selectedIndex
    let option_temp = document.getElementById('temp').options
    let temporada = document.getElementById('episodios')
    
    temporada.appendChild(eps)

    if(option_temp[selct_temp].value == 'temp'){

        //Aqui remove os epsodios
        if(type_temp == 'temp1'){

            eps.removeChild(s1btn_eps1)
            eps.removeChild(s1btn_eps2)

            cont_temp == 0

        }else if( type_temp == 'temp2'){

            eps.removeChild(document.getElementById('s2btn_eps2'))

            cont_temp == 0
           
        }cont_temp == 0
    

    /* TEMPORADA 01 */

    }else if (option_temp[selct_temp].value == 'temp1'){

        //Aqui remove os epsodios

        if(cont_temp == 1){

            if(type_temp == 'temp2'){

                let s2_btn_eps1 = document.getElementById('s2_btn_eps1')
                let s2_btn_eps2 = document.getElementById('s2_btn_eps2')
                let s2_btn_eps3 = document.getElementById('s2_btn_eps3')
                let s2_btn_eps4 = document.getElementById('s2_btn_eps4')
                let s2_btn_eps5 = document.getElementById('s2_btn_eps5')
                let s2_btn_eps6 = document.getElementById('s2_btn_eps6')
                let s2_btn_eps7 = document.getElementById('s2_btn_eps7')
                let s2_btn_eps8 = document.getElementById('s2_btn_eps8')
                let s2_btn_eps9 = document.getElementById('s2_btn_eps9')
                let s2_btn_eps10 = document.getElementById('s2_btn_eps10')

                eps.removeChild(s2_btn_eps1)
                eps.removeChild(s2_btn_eps2)
                eps.removeChild(s2_btn_eps3)
                eps.removeChild(s2_btn_eps4)
                eps.removeChild(s2_btn_eps5)
                eps.removeChild(s2_btn_eps6)
                eps.removeChild(s2_btn_eps7)
                eps.removeChild(s2_btn_eps8)
                eps.removeChild(s2_btn_eps9)
                eps.removeChild(s2_btn_eps10)

                cont_temp == 0
                
            }else if( type_temp == 'temp3'){

                let s3_btn_eps1 = document.getElementById('s3_btn_eps1')
                let s3_btn_eps2 = document.getElementById('s3_btn_eps2')
                let s3_btn_eps3 = document.getElementById('s3_btn_eps3')
                let s3_btn_eps4 = document.getElementById('s3_btn_eps4')
                let s3_btn_eps5 = document.getElementById('s3_btn_eps5')
                let s3_btn_eps6 = document.getElementById('s3_btn_eps6')
                let s3_btn_eps7 = document.getElementById('s3_btn_eps7')
                let s3_btn_eps8 = document.getElementById('s3_btn_eps8')
                let s3_btn_eps9 = document.getElementById('s3_btn_eps9')
                let s3_btn_eps10 = document.getElementById('s3_btn_eps10')

                eps.removeChild(s3_btn_eps1)
                eps.removeChild(s3_btn_eps2)
                eps.removeChild(s3_btn_eps3)
                eps.removeChild(s3_btn_eps4)
                eps.removeChild(s3_btn_eps5)
                eps.removeChild(s3_btn_eps6)
                eps.removeChild(s3_btn_eps7)
                eps.removeChild(s3_btn_eps8)
                eps.removeChild(s3_btn_eps9)
                eps.removeChild(s3_btn_eps10)

                cont_temp == 0

            }else if( type_temp == 'temp4'){

                let s4_btn_eps1 = document.getElementById('s4_btn_eps1')
                let s4_btn_eps2 = document.getElementById('s4_btn_eps2')
                let s4_btn_eps3 = document.getElementById('s4_btn_eps3')
                let s4_btn_eps4 = document.getElementById('s4_btn_eps4')
                let s4_btn_eps5 = document.getElementById('s4_btn_eps5')
                let s4_btn_eps6 = document.getElementById('s4_btn_eps6')
                let s4_btn_eps7 = document.getElementById('s4_btn_eps7')
                let s4_btn_eps8 = document.getElementById('s4_btn_eps8')
                let s4_btn_eps9 = document.getElementById('s4_btn_eps9')
                let s4_btn_eps10 = document.getElementById('s4_btn_eps10')

                eps.removeChild(s4_btn_eps1)
                eps.removeChild(s4_btn_eps2)
                eps.removeChild(s4_btn_eps3)
                eps.removeChild(s4_btn_eps4)
                eps.removeChild(s4_btn_eps5)
                eps.removeChild(s4_btn_eps6)
                eps.removeChild(s4_btn_eps7)
                eps.removeChild(s4_btn_eps8)
                eps.removeChild(s4_btn_eps9)
                eps.removeChild(s4_btn_eps10)

                cont_temp == 0

            }else if( type_temp == 'temp5'){

                let s5_btn_eps1 = document.getElementById('s5_btn_eps1')
                let s5_btn_eps2 = document.getElementById('s5_btn_eps2')
                let s5_btn_eps3 = document.getElementById('s5_btn_eps3')
                let s5_btn_eps4 = document.getElementById('s5_btn_eps4')
                let s5_btn_eps5 = document.getElementById('s5_btn_eps5')
                let s5_btn_eps6 = document.getElementById('s5_btn_eps6')
                let s5_btn_eps7 = document.getElementById('s5_btn_eps7')
                let s5_btn_eps8 = document.getElementById('s5_btn_eps8')
                let s5_btn_eps9 = document.getElementById('s5_btn_eps9')
                let s5_btn_eps10 = document.getElementById('s5_btn_eps10')
    
                eps.removeChild(s5_btn_eps1)
                eps.removeChild(s5_btn_eps2)
                eps.removeChild(s5_btn_eps3)
                eps.removeChild(s5_btn_eps4)
                eps.removeChild(s5_btn_eps5)
                eps.removeChild(s5_btn_eps6)
                eps.removeChild(s5_btn_eps7)
                eps.removeChild(s5_btn_eps8)
                eps.removeChild(s5_btn_eps9)
                eps.removeChild(s5_btn_eps10)
    
                cont_temp == 0

            }else if( type_temp == 'temp6'){

                let s6_btn_eps1 = document.getElementById('s6_btn_eps1')
                let s6_btn_eps2 = document.getElementById('s6_btn_eps2')
                let s6_btn_eps3 = document.getElementById('s6_btn_eps3')
                let s6_btn_eps4 = document.getElementById('s6_btn_eps4')
                let s6_btn_eps5 = document.getElementById('s6_btn_eps5')
                let s6_btn_eps6 = document.getElementById('s6_btn_eps6')
                let s6_btn_eps7 = document.getElementById('s6_btn_eps7')
                let s6_btn_eps8 = document.getElementById('s6_btn_eps8')
                let s6_btn_eps9 = document.getElementById('s6_btn_eps9')
                let s6_btn_eps10 = document.getElementById('s6_btn_eps10')
    
                eps.removeChild(s6_btn_eps1)
                eps.removeChild(s6_btn_eps2)
                eps.removeChild(s6_btn_eps3)
                eps.removeChild(s6_btn_eps4)
                eps.removeChild(s6_btn_eps5)
                eps.removeChild(s6_btn_eps6)
                eps.removeChild(s6_btn_eps7)
                eps.removeChild(s6_btn_eps8)
                eps.removeChild(s6_btn_eps9)
                eps.removeChild(s6_btn_eps10)
    
                cont_temp == 0

            }else if( type_temp == 'temp7'){

                let s7_btn_eps1 = document.getElementById('s7_btn_eps1')
                let s7_btn_eps2 = document.getElementById('s7_btn_eps2')
                let s7_btn_eps3 = document.getElementById('s7_btn_eps3')
                let s7_btn_eps4 = document.getElementById('s7_btn_eps4')
                let s7_btn_eps5 = document.getElementById('s7_btn_eps5')
                let s7_btn_eps6 = document.getElementById('s7_btn_eps6')
                let s7_btn_eps7 = document.getElementById('s7_btn_eps7')
    
                eps.removeChild(s7_btn_eps1)
                eps.removeChild(s7_btn_eps2)
                eps.removeChild(s7_btn_eps3)
                eps.removeChild(s7_btn_eps4)
                eps.removeChild(s7_btn_eps5)
                eps.removeChild(s7_btn_eps6)
                eps.removeChild(s7_btn_eps7)
    
                cont_temp == 0

            }else if( type_temp == 'temp8'){

                let s8_btn_eps1 = document.getElementById('s8_btn_eps1')
                let s8_btn_eps2 = document.getElementById('s8_btn_eps2')
                let s8_btn_eps3 = document.getElementById('s8_btn_eps3')
                let s8_btn_eps4 = document.getElementById('s8_btn_eps4')
                let s8_btn_eps5 = document.getElementById('s8_btn_eps5')
                let s8_btn_eps6 = document.getElementById('s8_btn_eps6')
    
                eps.removeChild(s8_btn_eps1)
                eps.removeChild(s8_btn_eps2)
                eps.removeChild(s8_btn_eps3)
                eps.removeChild(s8_btn_eps4)
                eps.removeChild(s8_btn_eps5)
                eps.removeChild(s8_btn_eps6)
    
                cont_temp == 0

            }else if( type_temp == 'temp'){

                eps.removeChild(s1_btn_eps1)
                eps.removeChild(s1_btn_eps2)

                cont_temp == 0
            }
        }

        /* EPS 01 */

        let s1_p1 = document.createElement('p')
        let s1_img1 = document.createElement('img')
        let s1_P1 = document.createElement('p')
        let s1_btn_eps1 = document.createElement('button')
            
        s1_btn_eps1.className = 'btn_eps'
        s1_btn_eps1.id = 's1_btn_eps1'
        s1_img1.className = 'logo_imperio'
        s1_img1.src = capa_eps[1]
        s1_img1.style = "width: 20%; opacity: 1;"

        s1_p1.innerHTML = '1'
        s1_P1.innerHTML = 'Epsódio 01'

        eps.appendChild(s1_btn_eps1)

        s1_btn_eps1.appendChild(s1_p1)
        s1_btn_eps1.appendChild(s1_img1)
        s1_btn_eps1.appendChild(s1_P1)

        s1_btn_eps1.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
            
            document.getElementById("triler").pause()

            document.querySelector('.logo').setAttribute('style','display:none')

            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[1]
            
            videoPlayer.src = caminho + s1_eps_[1] //AQUI TEM QUE MUDAR O INDECE DE ACORDO COM A TEMPORADA
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 01 */


        /* EPS 02 */

        let s1_p2 = document.createElement('p')
        let s1_btn_eps2 = document.createElement('button')
        let s1_img2 = document.createElement('img')
        let s1_P2 = document.createElement('p')
            
        s1_btn_eps2.className = 'btn_eps'
        s1_btn_eps2.id = 's1_btn_eps2'
        s1_img2.className = 'logo_imperio'
        s1_img2.src = capa_eps[1]
        s1_img2.style = "width: 20%; opacity: 1;"

        s1_p2.innerHTML = '2'
        s1_P2.innerHTML = 'Epsódio 02'

        eps.appendChild(s1_btn_eps2)

        s1_btn_eps2.appendChild(s1_p2)
        s1_btn_eps2.appendChild(s1_img2)
        s1_btn_eps2.appendChild(s1_P2)

        s1_btn_eps2.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
            
            document.getElementById("triler").pause()

            document.querySelector('.logo').setAttribute('style','display:none')

            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[1]
            
            videoPlayer.src = caminho + s1_eps_[2]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()
            
        }) /* FIM EPS 02 */

        /* EPS 03 */

        let s1_p3 = document.createElement('p')
        let s1_img3 = document.createElement('img')
        let s1_P3 = document.createElement('p')
        let s1_btn_eps3 = document.createElement('button')
            
        s1_btn_eps3.className = 'btn_eps'
        s1_btn_eps3.id = 's1_btn_eps3'
        s1_img3.className = 'logo_imperio'
        s1_img3.src = capa_eps[1]
        s1_img3.style = "width: 20%; opacity: 1;"

        s1_p3.innerHTML = '3'
        s1_P3.innerHTML = 'Epsódio 03'

        eps.appendChild(s1_btn_eps3)

        s1_btn_eps3.appendChild(s1_p3)
        s1_btn_eps3.appendChild(s1_img3)
        s1_btn_eps3.appendChild(s1_P3)

        s1_btn_eps3.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
            
            document.getElementById("triler").pause()

            document.querySelector('.logo').setAttribute('style','display:none')

            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[1]
            
            videoPlayer.src = caminho + s1_eps_[3]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 03 */

        /* EPS 04 */

        let s1_p4 = document.createElement('p')
        let s1_img4 = document.createElement('img')
        let s1_P4 = document.createElement('p')
        let s1_btn_eps4 = document.createElement('button')
            
        s1_btn_eps4.className = 'btn_eps'
        s1_btn_eps4.id = 's1_btn_eps4'
        s1_img4.className = 'logo_imperio'
        s1_img4.src = capa_eps[1]
        s1_img4.style = "width: 20%; opacity: 1;"

        s1_p4.innerHTML = '4'
        s1_P4.innerHTML = 'Epsódio 04'

        eps.appendChild(s1_btn_eps4)

        s1_btn_eps4.appendChild(s1_p4)
        s1_btn_eps4.appendChild(s1_img4)
        s1_btn_eps4.appendChild(s1_P4)

        s1_btn_eps4.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')

            document.getElementById("triler").pause()

            document.querySelector('.logo').setAttribute('style','display:none')

            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[1]
            
            videoPlayer.src = caminho + s1_eps_[4]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 04 */

        /* EPS 05 */

        let s1_p5 = document.createElement('p')
        let s1_img5 = document.createElement('img')
        let s1_P5 = document.createElement('p')
        let s1_btn_eps5 = document.createElement('button')
            
        s1_btn_eps5.className = 'btn_eps'
        s1_btn_eps5.id = 's1_btn_eps5'
        s1_img5.className = 'logo_imperio'
        s1_img5.src = capa_eps[1]
        s1_img5.style = "width: 20%; opacity: 1;"

        s1_p5.innerHTML = '5'
        s1_P5.innerHTML = 'Epsódio 05'

        eps.appendChild(s1_btn_eps5)

        s1_btn_eps5.appendChild(s1_p5)
        s1_btn_eps5.appendChild(s1_img5)
        s1_btn_eps5.appendChild(s1_P5)

        s1_btn_eps5.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
            
            document.getElementById("triler").pause()

            document.querySelector('.logo').setAttribute('style','display:none')

            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[1]
            
            videoPlayer.src = caminho + s1_eps_[5]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 05 */

        /* EPS 06 */

        let s1_p6 = document.createElement('p')
        let s1_img6 = document.createElement('img')
        let s1_P6 = document.createElement('p')
        let s1_btn_eps6 = document.createElement('button')
            
        s1_btn_eps6.className = 'btn_eps'
        s1_btn_eps6.id = 's1_btn_eps6'
        s1_img6.className = 'logo_imperio'
        s1_img6.src = capa_eps[1]
        s1_img6.style = "width: 20%; opacity: 1;"

        s1_p6.innerHTML = '6'
        s1_P6.innerHTML = 'Epsódio 06'

        eps.appendChild(s1_btn_eps6)

        s1_btn_eps6.appendChild(s1_p6)
        s1_btn_eps6.appendChild(s1_img6)
        s1_btn_eps6.appendChild(s1_P6)

        s1_btn_eps6.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
            
            document.getElementById("triler").pause()

            document.querySelector('.logo').setAttribute('style','display:none')

            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[1]
            
            videoPlayer.src = caminho + s1_eps_[6]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 06 */

        /* EPS 07 */

        let s1_p7 = document.createElement('p')
        let s1_img7 = document.createElement('img')
        let s1_P7 = document.createElement('p')
        let s1_btn_eps7 = document.createElement('button')
            
        s1_btn_eps7.className = 'btn_eps'
        s1_btn_eps7.id = 's1_btn_eps7'
        s1_img7.className = 'logo_imperio'
        s1_img7.src = capa_eps[1]
        s1_img7.style = "width: 20%; opacity: 1;"

        s1_p7.innerHTML = '7'
        s1_P7.innerHTML = 'Epsódio 07'

        eps.appendChild(s1_btn_eps7)

        s1_btn_eps7.appendChild(s1_p7)
        s1_btn_eps7.appendChild(s1_img7)
        s1_btn_eps7.appendChild(s1_P7)

        s1_btn_eps7.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
            
            document.getElementById("triler").pause()

            document.querySelector('.logo').setAttribute('style','display:none')

            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[1]
            
            videoPlayer.src = caminho + s1_eps_[7]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 07 */

        /* EPS 08 */

        let s1_p8 = document.createElement('p')
        let s1_img8 = document.createElement('img')
        let s1_P8 = document.createElement('p')
        let s1_btn_eps8 = document.createElement('button')
            
        s1_btn_eps8.className = 'btn_eps'
        s1_btn_eps8.id = 's1_btn_eps8'
        s1_img8.className = 'logo_imperio'
        s1_img8.src = capa_eps[1]
        s1_img8.style = "width: 20%; opacity: 1;"

        s1_p8.innerHTML = '8'
        s1_P8.innerHTML = 'Epsódio 08'

        eps.appendChild(s1_btn_eps8)

        s1_btn_eps8.appendChild(s1_p8)
        s1_btn_eps8.appendChild(s1_img8)
        s1_btn_eps8.appendChild(s1_P8)

        s1_btn_eps8.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
            
            document.getElementById("triler").pause()

            document.querySelector('.logo').setAttribute('style','display:none')

            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[1]
            
            videoPlayer.src = caminho + s1_eps_[8]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 08 */

        /* EPS 09 */

        let s1_p9 = document.createElement('p')
        let s1_img9 = document.createElement('img')
        let s1_P9 = document.createElement('p')
        let s1_btn_eps9 = document.createElement('button')
            
        s1_btn_eps9.className = 'btn_eps'
        s1_btn_eps9.id = 's1_btn_eps9'
        s1_img9.className = 'logo_imperio'
        s1_img9.src = capa_eps[1]
        s1_img9.style = "width: 20%; opacity: 1;"

        s1_p9.innerHTML = '9'
        s1_P9.innerHTML = 'Epsódio 09'

        eps.appendChild(s1_btn_eps9)

        s1_btn_eps9.appendChild(s1_p9)
        s1_btn_eps9.appendChild(s1_img9)
        s1_btn_eps9.appendChild(s1_P9)

        s1_btn_eps9.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
            
            document.getElementById("triler").pause()

            document.querySelector('.logo').setAttribute('style','display:none')

            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[1]
            
            videoPlayer.src = caminho + s1_eps_[9]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 09 */

        /* EPS 10 */

        let s1_p10 = document.createElement('p')
        let s1_img10 = document.createElement('img')
        let s1_P10 = document.createElement('p')
        let s1_btn_eps10 = document.createElement('button')
            
        s1_btn_eps10.className = 'btn_eps'
        s1_btn_eps10.id = 's1_btn_eps10'
        s1_img10.className = 'logo_imperio'
        s1_img10.src = capa_eps[1]
        s1_img10.style = "width: 20%; opacity: 1;"

        s1_p10.innerHTML = '10'
        s1_P10.innerHTML = 'Epsódio 10'

        eps.appendChild(s1_btn_eps10)

        s1_btn_eps10.appendChild(s1_p10)
        s1_btn_eps10.appendChild(s1_img10)
        s1_btn_eps10.appendChild(s1_P10)

        s1_btn_eps10.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
            
            document.getElementById("triler").pause()

            document.querySelector('.logo').setAttribute('style','display:none')

            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[1]
            
            videoPlayer.src = caminho + s1_eps_[10]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 10 */

        cont_temp = 1
        type_temp = 'temp1'
        console.log(type_temp)

    } /* FIM TEMPORADA 01 */

      /* TEMPORADA 02 */

    else if (option_temp[selct_temp].value == 'temp2'){

        //Aqui remove os epsodios

        if(cont_temp == 1){

            if(type_temp == 'temp1'){
                
                let s1_btn_eps1 = document.getElementById('s1_btn_eps1')
                let s1_btn_eps2 = document.getElementById('s1_btn_eps2')
                let s1_btn_eps3 = document.getElementById('s1_btn_eps3')
                let s1_btn_eps4 = document.getElementById('s1_btn_eps4')
                let s1_btn_eps5 = document.getElementById('s1_btn_eps5')
                let s1_btn_eps6 = document.getElementById('s1_btn_eps6')
                let s1_btn_eps7 = document.getElementById('s1_btn_eps7')
                let s1_btn_eps8 = document.getElementById('s1_btn_eps8')
                let s1_btn_eps9 = document.getElementById('s1_btn_eps9')
                let s1_btn_eps10 = document.getElementById('s1_btn_eps10')

                eps.removeChild(s1_btn_eps1)
                eps.removeChild(s1_btn_eps2)
                eps.removeChild(s1_btn_eps3)
                eps.removeChild(s1_btn_eps4)
                eps.removeChild(s1_btn_eps5)
                eps.removeChild(s1_btn_eps6)
                eps.removeChild(s1_btn_eps7)
                eps.removeChild(s1_btn_eps8)
                eps.removeChild(s1_btn_eps9)
                eps.removeChild(s1_btn_eps10)

                cont_temp == 0
        
            }else if( type_temp == 'temp3'){

                let s3_btn_eps1 = document.getElementById('s3_btn_eps1')
                let s3_btn_eps2 = document.getElementById('s3_btn_eps2')
                let s3_btn_eps3 = document.getElementById('s3_btn_eps3')
                let s3_btn_eps4 = document.getElementById('s3_btn_eps4')
                let s3_btn_eps5 = document.getElementById('s3_btn_eps5')
                let s3_btn_eps6 = document.getElementById('s3_btn_eps6')
                let s3_btn_eps7 = document.getElementById('s3_btn_eps7')
                let s3_btn_eps8 = document.getElementById('s3_btn_eps8')
                let s3_btn_eps9 = document.getElementById('s3_btn_eps9')
                let s3_btn_eps10 = document.getElementById('s3_btn_eps10')

                eps.removeChild(s3_btn_eps1)
                eps.removeChild(s3_btn_eps2)
                eps.removeChild(s3_btn_eps3)
                eps.removeChild(s3_btn_eps4)
                eps.removeChild(s3_btn_eps5)
                eps.removeChild(s3_btn_eps6)
                eps.removeChild(s3_btn_eps7)
                eps.removeChild(s3_btn_eps8)
                eps.removeChild(s3_btn_eps9)
                eps.removeChild(s3_btn_eps10)

                cont_temp == 0

            }else if( type_temp == 'temp4'){

                let s4_btn_eps1 = document.getElementById('s4_btn_eps1')
                let s4_btn_eps2 = document.getElementById('s4_btn_eps2')
                let s4_btn_eps3 = document.getElementById('s4_btn_eps3')
                let s4_btn_eps4 = document.getElementById('s4_btn_eps4')
                let s4_btn_eps5 = document.getElementById('s4_btn_eps5')
                let s4_btn_eps6 = document.getElementById('s4_btn_eps6')
                let s4_btn_eps7 = document.getElementById('s4_btn_eps7')
                let s4_btn_eps8 = document.getElementById('s4_btn_eps8')
                let s4_btn_eps9 = document.getElementById('s4_btn_eps9')
                let s4_btn_eps10 = document.getElementById('s4_btn_eps10')

                eps.removeChild(s4_btn_eps1)
                eps.removeChild(s4_btn_eps2)
                eps.removeChild(s4_btn_eps3)
                eps.removeChild(s4_btn_eps4)
                eps.removeChild(s4_btn_eps5)
                eps.removeChild(s4_btn_eps6)
                eps.removeChild(s4_btn_eps7)
                eps.removeChild(s4_btn_eps8)
                eps.removeChild(s4_btn_eps9)
                eps.removeChild(s4_btn_eps10)

                cont_temp == 0

            }else if( type_temp == 'temp5'){

                let s5_btn_eps1 = document.getElementById('s5_btn_eps1')
                let s5_btn_eps2 = document.getElementById('s5_btn_eps2')
                let s5_btn_eps3 = document.getElementById('s5_btn_eps3')
                let s5_btn_eps4 = document.getElementById('s5_btn_eps4')
                let s5_btn_eps5 = document.getElementById('s5_btn_eps5')
                let s5_btn_eps6 = document.getElementById('s5_btn_eps6')
                let s5_btn_eps7 = document.getElementById('s5_btn_eps7')
                let s5_btn_eps8 = document.getElementById('s5_btn_eps8')
                let s5_btn_eps9 = document.getElementById('s5_btn_eps9')
                let s5_btn_eps10 = document.getElementById('s5_btn_eps10')
    
                eps.removeChild(s5_btn_eps1)
                eps.removeChild(s5_btn_eps2)
                eps.removeChild(s5_btn_eps3)
                eps.removeChild(s5_btn_eps4)
                eps.removeChild(s5_btn_eps5)
                eps.removeChild(s5_btn_eps6)
                eps.removeChild(s5_btn_eps7)
                eps.removeChild(s5_btn_eps8)
                eps.removeChild(s5_btn_eps9)
                eps.removeChild(s5_btn_eps10)
    
                cont_temp == 0

            }else if( type_temp == 'temp6'){

                let s6_btn_eps1 = document.getElementById('s6_btn_eps1')
                let s6_btn_eps2 = document.getElementById('s6_btn_eps2')
                let s6_btn_eps3 = document.getElementById('s6_btn_eps3')
                let s6_btn_eps4 = document.getElementById('s6_btn_eps4')
                let s6_btn_eps5 = document.getElementById('s6_btn_eps5')
                let s6_btn_eps6 = document.getElementById('s6_btn_eps6')
                let s6_btn_eps7 = document.getElementById('s6_btn_eps7')
                let s6_btn_eps8 = document.getElementById('s6_btn_eps8')
                let s6_btn_eps9 = document.getElementById('s6_btn_eps9')
                let s6_btn_eps10 = document.getElementById('s6_btn_eps10')
    
                eps.removeChild(s6_btn_eps1)
                eps.removeChild(s6_btn_eps2)
                eps.removeChild(s6_btn_eps3)
                eps.removeChild(s6_btn_eps4)
                eps.removeChild(s6_btn_eps5)
                eps.removeChild(s6_btn_eps6)
                eps.removeChild(s6_btn_eps7)
                eps.removeChild(s6_btn_eps8)
                eps.removeChild(s6_btn_eps9)
                eps.removeChild(s6_btn_eps10)
    
                cont_temp == 0

            }else if( type_temp == 'temp7'){

                let s7_btn_eps1 = document.getElementById('s7_btn_eps1')
                let s7_btn_eps2 = document.getElementById('s7_btn_eps2')
                let s7_btn_eps3 = document.getElementById('s7_btn_eps3')
                let s7_btn_eps4 = document.getElementById('s7_btn_eps4')
                let s7_btn_eps5 = document.getElementById('s7_btn_eps5')
                let s7_btn_eps6 = document.getElementById('s7_btn_eps6')
                let s7_btn_eps7 = document.getElementById('s7_btn_eps7')
    
                eps.removeChild(s7_btn_eps1)
                eps.removeChild(s7_btn_eps2)
                eps.removeChild(s7_btn_eps3)
                eps.removeChild(s7_btn_eps4)
                eps.removeChild(s7_btn_eps5)
                eps.removeChild(s7_btn_eps6)
                eps.removeChild(s7_btn_eps7)
    
                cont_temp == 0

            }else if( type_temp == 'temp8'){

                let s8_btn_eps1 = document.getElementById('s8_btn_eps1')
                let s8_btn_eps2 = document.getElementById('s8_btn_eps2')
                let s8_btn_eps3 = document.getElementById('s8_btn_eps3')
                let s8_btn_eps4 = document.getElementById('s8_btn_eps4')
                let s8_btn_eps5 = document.getElementById('s8_btn_eps5')
                let s8_btn_eps6 = document.getElementById('s8_btn_eps6')
    
                eps.removeChild(s8_btn_eps1)
                eps.removeChild(s8_btn_eps2)
                eps.removeChild(s8_btn_eps3)
                eps.removeChild(s8_btn_eps4)
                eps.removeChild(s8_btn_eps5)
                eps.removeChild(s8_btn_eps6)
    
                cont_temp == 0

            }else if( type_temp == 'temp'){
        
                eps.removeChild(s2_btn_eps2)
                
                cont_temp == 0

            }  
        }

        /* EPS 01 */

        let s2_p1 = document.createElement('p')
        let s2_img1 = document.createElement('img')
        let s2_P1 = document.createElement('p')
        let s2_btn_eps1 = document.createElement('button')
            
        s2_btn_eps1.className = 'btn_eps'
        s2_btn_eps1.id = 's2_btn_eps1'
        s2_img1.className = 'logo_imperio'
        s2_img1.src = capa_eps[2]
        s2_img1.style = "width: 20%; opacity: 1;"

        s2_p1.innerHTML = '1'
        s2_P1.innerHTML = 'Epsódio 01'

        eps.appendChild(s2_btn_eps1)

        s2_btn_eps1.appendChild(s2_p1)
        s2_btn_eps1.appendChild(s2_img1)
        s2_btn_eps1.appendChild(s2_P1)

        s2_btn_eps1.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
            
            document.getElementById("triler").pause()

            document.querySelector('.logo').setAttribute('style','display:none')

            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[2]
            
            videoPlayer.src = caminho + s2_eps_[1]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 01 */


        /* EPS 02 */

        let s2_p2 = document.createElement('p')
        let s2_btn_eps2 = document.createElement('button')
        let s2_img2 = document.createElement('img')
        let s2_P2 = document.createElement('p')
            
        s2_btn_eps2.className = 'btn_eps'
        s2_btn_eps2.id = 's2_btn_eps2'
        s2_img2.className = 'logo_imperio'
        s2_img2.src = capa_eps[2]
        s2_img2.style = "width: 20%; opacity: 1;"

        s2_p2.innerHTML = '2'
        s2_P2.innerHTML = 'Epsódio 02'

        eps.appendChild(s2_btn_eps2)

        s2_btn_eps2.appendChild(s2_p2)
        s2_btn_eps2.appendChild(s2_img2)
        s2_btn_eps2.appendChild(s2_P2)

        s2_btn_eps2.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
            
            document.getElementById("triler").pause()

            document.querySelector('.logo').setAttribute('style','display:none')

            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[2]
            
            videoPlayer.src = caminho + s2_eps_[2]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()
            
        }) /* FIM EPS 02 */

        /* EPS 03 */

        let s2_p3 = document.createElement('p')
        let s2_img3 = document.createElement('img')
        let s2_P3 = document.createElement('p')
        let s2_btn_eps3 = document.createElement('button')
            
        s2_btn_eps3.className = 'btn_eps'
        s2_btn_eps3.id = 's2_btn_eps3'
        s2_img3.className = 'logo_imperio'
        s2_img3.src = capa_eps[2]
        s2_img3.style = "width: 20%; opacity: 1;"

        s2_p3.innerHTML = '3'
        s2_P3.innerHTML = 'Epsódio 03'

        eps.appendChild(s2_btn_eps3)

        s2_btn_eps3.appendChild(s2_p3)
        s2_btn_eps3.appendChild(s2_img3)
        s2_btn_eps3.appendChild(s2_P3)

        s2_btn_eps3.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
            
            document.getElementById("triler").pause()

            document.querySelector('.logo').setAttribute('style','display:none')

            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[2]
            
            videoPlayer.src = caminho + s2_eps_[3]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 03 */

        /* EPS 04 */

        let s2_p4 = document.createElement('p')
        let s2_img4 = document.createElement('img')
        let s2_P4 = document.createElement('p')
        let s2_btn_eps4 = document.createElement('button')
            
        s2_btn_eps4.className = 'btn_eps'
        s2_btn_eps4.id = 's2_btn_eps4'
        s2_img4.className = 'logo_imperio'
        s2_img4.src = capa_eps[2]
        s2_img4.style = "width: 20%; opacity: 1;"

        s2_p4.innerHTML = '4'
        s2_P4.innerHTML = 'Epsódio 04'

        eps.appendChild(s2_btn_eps4)

        s2_btn_eps4.appendChild(s2_p4)
        s2_btn_eps4.appendChild(s2_img4)
        s2_btn_eps4.appendChild(s2_P4)

        s2_btn_eps4.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
            
            document.getElementById("triler").pause()

            document.querySelector('.logo').setAttribute('style','display:none')

            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[2]
            
            videoPlayer.src = caminho + s2_eps_[4]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 04 */

        /* EPS 05 */

        let s2_p5 = document.createElement('p')
        let s2_img5 = document.createElement('img')
        let s2_P5 = document.createElement('p')
        let s2_btn_eps5 = document.createElement('button')
            
        s2_btn_eps5.className = 'btn_eps'
        s2_btn_eps5.id = 's2_btn_eps5'
        s2_img5.className = 'logo_imperio'
        s2_img5.src = capa_eps[2]
        s2_img5.style = "width: 20%; opacity: 1;"

        s2_p5.innerHTML = '5'
        s2_P5.innerHTML = 'Epsódio 05'

        eps.appendChild(s2_btn_eps5)

        s2_btn_eps5.appendChild(s2_p5)
        s2_btn_eps5.appendChild(s2_img5)
        s2_btn_eps5.appendChild(s2_P5)

        s2_btn_eps5.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
            
            document.getElementById("triler").pause()

            document.querySelector('.logo').setAttribute('style','display:none')

            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[2]
            
            videoPlayer.src = caminho + s2_eps_[5]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 05 */

        /* EPS 06 */

        let s2_p6 = document.createElement('p')
        let s2_img6 = document.createElement('img')
        let s2_P6 = document.createElement('p')
        let s2_btn_eps6 = document.createElement('button')
            
        s2_btn_eps6.className = 'btn_eps'
        s2_btn_eps6.id = 's2_btn_eps6'
        s2_img6.className = 'logo_imperio'
        s2_img6.src = capa_eps[2]
        s2_img6.style = "width: 20%; opacity: 1;"

        s2_p6.innerHTML = '6'
        s2_P6.innerHTML = 'Epsódio 06'

        eps.appendChild(s2_btn_eps6)

        s2_btn_eps6.appendChild(s2_p6)
        s2_btn_eps6.appendChild(s2_img6)
        s2_btn_eps6.appendChild(s2_P6)

        s2_btn_eps6.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
            
            document.getElementById("triler").pause()

            document.querySelector('.logo').setAttribute('style','display:none')

            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[2]
            
            videoPlayer.src = caminho + s2_eps_[6]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 06 */

        /* EPS 07 */

        let s2_p7 = document.createElement('p')
        let s2_img7 = document.createElement('img')
        let s2_P7 = document.createElement('p')
        let s2_btn_eps7 = document.createElement('button')
            
        s2_btn_eps7.className = 'btn_eps'
        s2_btn_eps7.id = 's2_btn_eps7'
        s2_img7.className = 'logo_imperio'
        s2_img7.src = capa_eps[2]
        s2_img7.style = "width: 20%; opacity: 1;"

        s2_p7.innerHTML = '7'
        s2_P7.innerHTML = 'Epsódio 07'

        eps.appendChild(s2_btn_eps7)

        s2_btn_eps7.appendChild(s2_p7)
        s2_btn_eps7.appendChild(s2_img7)
        s2_btn_eps7.appendChild(s2_P7)

        s2_btn_eps7.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
            
            document.getElementById("triler").pause()

            document.querySelector('.logo').setAttribute('style','display:none')

            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[2]
            
            videoPlayer.src = caminho + s2_eps_[7]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 07 */

        /* EPS 08 */

        let s2_p8 = document.createElement('p')
        let s2_img8 = document.createElement('img')
        let s2_P8 = document.createElement('p')
        let s2_btn_eps8 = document.createElement('button')
            
        s2_btn_eps8.className = 'btn_eps'
        s2_btn_eps8.id = 's2_btn_eps8'
        s2_img8.className = 'logo_imperio'
        s2_img8.src = capa_eps[2]
        s2_img8.style = "width: 20%; opacity: 1;"

        s2_p8.innerHTML = '8'
        s2_P8.innerHTML = 'Epsódio 08'

        eps.appendChild(s2_btn_eps8)

        s2_btn_eps8.appendChild(s2_p8)
        s2_btn_eps8.appendChild(s2_img8)
        s2_btn_eps8.appendChild(s2_P8)

        s2_btn_eps8.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
            
            document.getElementById("triler").pause()

            document.querySelector('.logo').setAttribute('style','display:none')

            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[2]
            
            videoPlayer.src = caminho + s2_eps_[8]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 08 */

        /* EPS 09 */

        let s2_p9 = document.createElement('p')
        let s2_img9 = document.createElement('img')
        let s2_P9 = document.createElement('p')
        let s2_btn_eps9 = document.createElement('button')
            
        s2_btn_eps9.className = 'btn_eps'
        s2_btn_eps9.id = 's2_btn_eps9'
        s2_img9.className = 'logo_imperio'
        s2_img9.src = capa_eps[2]
        s2_img9.style = "width: 20%; opacity: 1;"

        s2_p9.innerHTML = '9'
        s2_P9.innerHTML = 'Epsódio 09'

        eps.appendChild(s2_btn_eps9)

        s2_btn_eps9.appendChild(s2_p9)
        s2_btn_eps9.appendChild(s2_img9)
        s2_btn_eps9.appendChild(s2_P9)

        s2_btn_eps9.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
            
            document.getElementById("triler").pause()

            document.querySelector('.logo').setAttribute('style','display:none')

            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[2]
            
            videoPlayer.src = caminho + s2_eps_[9]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 09 */

        /* EPS 10 */

        let s2_p10 = document.createElement('p')
        let s2_img10 = document.createElement('img')
        let s2_P10 = document.createElement('p')
        let s2_btn_eps10 = document.createElement('button')
            
        s2_btn_eps10.className = 'btn_eps'
        s2_btn_eps10.id = 's2_btn_eps10'
        s2_img10.className = 'logo_imperio'
        s2_img10.src = capa_eps[2]
        s2_img10.style = "width: 20%; opacity: 1;"

        s2_p10.innerHTML = '10'
        s2_P10.innerHTML = 'Epsódio 10'

        eps.appendChild(s2_btn_eps10)

        s2_btn_eps10.appendChild(s2_p10)
        s2_btn_eps10.appendChild(s2_img10)
        s2_btn_eps10.appendChild(s2_P10)

        s2_btn_eps10.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
            
            document.getElementById("triler").pause()

            document.querySelector('.logo').setAttribute('style','display:none')

            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[2]
            
            videoPlayer.src = caminho + s2_eps_[10]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 10 */

        cont_temp = 1
        type_temp = 'temp2'
        console.log(type_temp)

    } /* FIM TEMPORADA 02 */

    /* TEMPORADA 03 */

    else if (option_temp[selct_temp].value == 'temp3'){

    //Aqui remove os epsodios

    if(cont_temp == 1){

        if(type_temp == 'temp1'){

            let s1_btn_eps1 = document.getElementById('s1_btn_eps1')
            let s1_btn_eps2 = document.getElementById('s1_btn_eps2')
            let s1_btn_eps3 = document.getElementById('s1_btn_eps3')
            let s1_btn_eps4 = document.getElementById('s1_btn_eps4')
            let s1_btn_eps5 = document.getElementById('s1_btn_eps5')
            let s1_btn_eps6 = document.getElementById('s1_btn_eps6')
            let s1_btn_eps7 = document.getElementById('s1_btn_eps7')
            let s1_btn_eps8 = document.getElementById('s1_btn_eps8')
            let s1_btn_eps9 = document.getElementById('s1_btn_eps9')
            let s1_btn_eps10 = document.getElementById('s1_btn_eps10')

            eps.removeChild(s1_btn_eps1)
            eps.removeChild(s1_btn_eps2)
            eps.removeChild(s1_btn_eps3)
            eps.removeChild(s1_btn_eps4)
            eps.removeChild(s1_btn_eps5)
            eps.removeChild(s1_btn_eps6)
            eps.removeChild(s1_btn_eps7)
            eps.removeChild(s1_btn_eps8)
            eps.removeChild(s1_btn_eps9)
            eps.removeChild(s1_btn_eps10)

            cont_temp == 0
            
        }else if(type_temp == 'temp2'){

            let s2_btn_eps1 = document.getElementById('s2_btn_eps1')
            let s2_btn_eps2 = document.getElementById('s2_btn_eps2')
            let s2_btn_eps3 = document.getElementById('s2_btn_eps3')
            let s2_btn_eps4 = document.getElementById('s2_btn_eps4')
            let s2_btn_eps5 = document.getElementById('s2_btn_eps5')
            let s2_btn_eps6 = document.getElementById('s2_btn_eps6')
            let s2_btn_eps7 = document.getElementById('s2_btn_eps7')
            let s2_btn_eps8 = document.getElementById('s2_btn_eps8')
            let s2_btn_eps9 = document.getElementById('s2_btn_eps9')
            let s2_btn_eps10 = document.getElementById('s2_btn_eps10')

            eps.removeChild(s2_btn_eps1)
            eps.removeChild(s2_btn_eps2)
            eps.removeChild(s2_btn_eps3)
            eps.removeChild(s2_btn_eps4)
            eps.removeChild(s2_btn_eps5)
            eps.removeChild(s2_btn_eps6)
            eps.removeChild(s2_btn_eps7)
            eps.removeChild(s2_btn_eps8)
            eps.removeChild(s2_btn_eps9)
            eps.removeChild(s2_btn_eps10)

            cont_temp == 0
            

        }else if( type_temp == 'temp4'){

            let s4_btn_eps1 = document.getElementById('s4_btn_eps1')
            let s4_btn_eps2 = document.getElementById('s4_btn_eps2')
            let s4_btn_eps3 = document.getElementById('s4_btn_eps3')
            let s4_btn_eps4 = document.getElementById('s4_btn_eps4')
            let s4_btn_eps5 = document.getElementById('s4_btn_eps5')
            let s4_btn_eps6 = document.getElementById('s4_btn_eps6')
            let s4_btn_eps7 = document.getElementById('s4_btn_eps7')
            let s4_btn_eps8 = document.getElementById('s4_btn_eps8')
            let s4_btn_eps9 = document.getElementById('s4_btn_eps9')
            let s4_btn_eps10 = document.getElementById('s4_btn_eps10')

            eps.removeChild(s4_btn_eps1)
            eps.removeChild(s4_btn_eps2)
            eps.removeChild(s4_btn_eps3)
            eps.removeChild(s4_btn_eps4)
            eps.removeChild(s4_btn_eps5)
            eps.removeChild(s4_btn_eps6)
            eps.removeChild(s4_btn_eps7)
            eps.removeChild(s4_btn_eps8)
            eps.removeChild(s4_btn_eps9)
            eps.removeChild(s4_btn_eps10)

            cont_temp == 0

        }else if( type_temp == 'temp5'){

            let s5_btn_eps1 = document.getElementById('s5_btn_eps1')
            let s5_btn_eps2 = document.getElementById('s5_btn_eps2')
            let s5_btn_eps3 = document.getElementById('s5_btn_eps3')
            let s5_btn_eps4 = document.getElementById('s5_btn_eps4')
            let s5_btn_eps5 = document.getElementById('s5_btn_eps5')
            let s5_btn_eps6 = document.getElementById('s5_btn_eps6')
            let s5_btn_eps7 = document.getElementById('s5_btn_eps7')
            let s5_btn_eps8 = document.getElementById('s5_btn_eps8')
            let s5_btn_eps9 = document.getElementById('s5_btn_eps9')
            let s5_btn_eps10 = document.getElementById('s5_btn_eps10')

            eps.removeChild(s5_btn_eps1)
            eps.removeChild(s5_btn_eps2)
            eps.removeChild(s5_btn_eps3)
            eps.removeChild(s5_btn_eps4)
            eps.removeChild(s5_btn_eps5)
            eps.removeChild(s5_btn_eps6)
            eps.removeChild(s5_btn_eps7)
            eps.removeChild(s5_btn_eps8)
            eps.removeChild(s5_btn_eps9)
            eps.removeChild(s5_btn_eps10)

            cont_temp == 0

        }else if( type_temp == 'temp6'){

            let s6_btn_eps1 = document.getElementById('s6_btn_eps1')
            let s6_btn_eps2 = document.getElementById('s6_btn_eps2')
            let s6_btn_eps3 = document.getElementById('s6_btn_eps3')
            let s6_btn_eps4 = document.getElementById('s6_btn_eps4')
            let s6_btn_eps5 = document.getElementById('s6_btn_eps5')
            let s6_btn_eps6 = document.getElementById('s6_btn_eps6')
            let s6_btn_eps7 = document.getElementById('s6_btn_eps7')
            let s6_btn_eps8 = document.getElementById('s6_btn_eps8')
            let s6_btn_eps9 = document.getElementById('s6_btn_eps9')
            let s6_btn_eps10 = document.getElementById('s6_btn_eps10')

            eps.removeChild(s6_btn_eps1)
            eps.removeChild(s6_btn_eps2)
            eps.removeChild(s6_btn_eps3)
            eps.removeChild(s6_btn_eps4)
            eps.removeChild(s6_btn_eps5)
            eps.removeChild(s6_btn_eps6)
            eps.removeChild(s6_btn_eps7)
            eps.removeChild(s6_btn_eps8)
            eps.removeChild(s6_btn_eps9)
            eps.removeChild(s6_btn_eps10)

            cont_temp == 0

        }else if( type_temp == 'temp7'){

            let s7_btn_eps1 = document.getElementById('s7_btn_eps1')
            let s7_btn_eps2 = document.getElementById('s7_btn_eps2')
            let s7_btn_eps3 = document.getElementById('s7_btn_eps3')
            let s7_btn_eps4 = document.getElementById('s7_btn_eps4')
            let s7_btn_eps5 = document.getElementById('s7_btn_eps5')
            let s7_btn_eps6 = document.getElementById('s7_btn_eps6')
            let s7_btn_eps7 = document.getElementById('s7_btn_eps7')

            eps.removeChild(s7_btn_eps1)
            eps.removeChild(s7_btn_eps2)
            eps.removeChild(s7_btn_eps3)
            eps.removeChild(s7_btn_eps4)
            eps.removeChild(s7_btn_eps5)
            eps.removeChild(s7_btn_eps6)
            eps.removeChild(s7_btn_eps7)

            cont_temp == 0

        }else if( type_temp == 'temp8'){

            let s8_btn_eps1 = document.getElementById('s8_btn_eps1')
            let s8_btn_eps2 = document.getElementById('s8_btn_eps2')
            let s8_btn_eps3 = document.getElementById('s8_btn_eps3')
            let s8_btn_eps4 = document.getElementById('s8_btn_eps4')
            let s8_btn_eps5 = document.getElementById('s8_btn_eps5')
            let s8_btn_eps6 = document.getElementById('s8_btn_eps6')

            eps.removeChild(s8_btn_eps1)
            eps.removeChild(s8_btn_eps2)
            eps.removeChild(s8_btn_eps3)
            eps.removeChild(s8_btn_eps4)
            eps.removeChild(s8_btn_eps5)
            eps.removeChild(s8_btn_eps6)

            cont_temp == 0

        }else if( type_temp == 'temp'){

            eps.removeChild(s3_btn_eps1)
            eps.removeChild(s3_btn_eps2)

            cont_temp == 0
        }
    }

    /* EPS 01 */

    let s3_p1 = document.createElement('p')
    let s3_img1 = document.createElement('img')
    let s3_P1 = document.createElement('p')
    let s3_btn_eps1 = document.createElement('button')
        
    s3_btn_eps1.className = 'btn_eps'
    s3_btn_eps1.id = 's3_btn_eps1'
    s3_img1.className = 'logo_imperio'
    s3_img1.src = capa_eps[3] //AQUI TEM QUE MUDAR O NUMERO DE ACORDO COM A TEMPORADA
    s3_img1.style = "width: 20%; opacity: 1;"

    s3_p1.innerHTML = '1'
    s3_P1.innerHTML = 'Epsódio 01'

    eps.appendChild(s3_btn_eps1)

    s3_btn_eps1.appendChild(s3_p1)
    s3_btn_eps1.appendChild(s3_img1)
    s3_btn_eps1.appendChild(s3_P1)

    s3_btn_eps1.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[3]//AQUI TEM QUE MUDAR O NUMERO DE ACORDO COM A TEMPORADA
        
        videoPlayer.src = caminho + s3_eps_[1]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 01 */


    /* EPS 02 */

    let s3_p2 = document.createElement('p')
    let s3_btn_eps2 = document.createElement('button')
    let s3_img2 = document.createElement('img')
    let s3_P2 = document.createElement('p')
        
    s3_btn_eps2.className = 'btn_eps'
    s3_btn_eps2.id = 's3_btn_eps2'
    s3_img2.className = 'logo_imperio'
    s3_img2.src = capa_eps[3]
    s3_img2.style = "width: 20%; opacity: 1;"

    s3_p2.innerHTML = '2'
    s3_P2.innerHTML = 'Epsódio 02'

    eps.appendChild(s3_btn_eps2)

    s3_btn_eps2.appendChild(s3_p2)
    s3_btn_eps2.appendChild(s3_img2)
    s3_btn_eps2.appendChild(s3_P2)

    s3_btn_eps2.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[3]
        
        videoPlayer.src = caminho + s3_eps_[2]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()
        
    }) /* FIM EPS 02 */

    /* EPS 03 */

    let s3_p3 = document.createElement('p')
    let s3_img3 = document.createElement('img')
    let s3_P3 = document.createElement('p')
    let s3_btn_eps3 = document.createElement('button')
        
    s3_btn_eps3.className = 'btn_eps'
    s3_btn_eps3.id = 's3_btn_eps3'
    s3_img3.className = 'logo_imperio'
    s3_img3.src = capa_eps[3]
    s3_img3.style = "width: 20%; opacity: 1;"

    s3_p3.innerHTML = '3'
    s3_P3.innerHTML = 'Epsódio 03'

    eps.appendChild(s3_btn_eps3)

    s3_btn_eps3.appendChild(s3_p3)
    s3_btn_eps3.appendChild(s3_img3)
    s3_btn_eps3.appendChild(s3_P3)

    s3_btn_eps3.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[3]
        
        videoPlayer.src = caminho + s3_eps_[3]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 03 */

    /* EPS 04 */

    let s3_p4 = document.createElement('p')
    let s3_img4 = document.createElement('img')
    let s3_P4 = document.createElement('p')
    let s3_btn_eps4 = document.createElement('button')
        
    s3_btn_eps4.className = 'btn_eps'
    s3_btn_eps4.id = 's3_btn_eps4'
    s3_img4.className = 'logo_imperio'
    s3_img4.src = capa_eps[3]
    s3_img4.style = "width: 20%; opacity: 1;"

    s3_p4.innerHTML = '4'
    s3_P4.innerHTML = 'Epsódio 04'

    eps.appendChild(s3_btn_eps4)

    s3_btn_eps4.appendChild(s3_p4)
    s3_btn_eps4.appendChild(s3_img4)
    s3_btn_eps4.appendChild(s3_P4)

    s3_btn_eps4.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[3]
        
        videoPlayer.src = caminho + s3_eps_[4]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 04 */

    /* EPS 05 */

    let s3_p5 = document.createElement('p')
    let s3_img5 = document.createElement('img')
    let s3_P5 = document.createElement('p')
    let s3_btn_eps5 = document.createElement('button')
        
    s3_btn_eps5.className = 'btn_eps'
    s3_btn_eps5.id = 's3_btn_eps5'
    s3_img5.className = 'logo_imperio'
    s3_img5.src = capa_eps[3]
    s3_img5.style = "width: 20%; opacity: 1;"

    s3_p5.innerHTML = '5'
    s3_P5.innerHTML = 'Epsódio 05'

    eps.appendChild(s3_btn_eps5)

    s3_btn_eps5.appendChild(s3_p5)
    s3_btn_eps5.appendChild(s3_img5)
    s3_btn_eps5.appendChild(s3_P5)

    s3_btn_eps5.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[3]
        
        videoPlayer.src = caminho + s3_eps_[5]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 05 */

    /* EPS 06 */

    let s3_p6 = document.createElement('p')
    let s3_img6 = document.createElement('img')
    let s3_P6 = document.createElement('p')
    let s3_btn_eps6 = document.createElement('button')
        
    s3_btn_eps6.className = 'btn_eps'
    s3_btn_eps6.id = 's3_btn_eps6'
    s3_img6.className = 'logo_imperio'
    s3_img6.src = capa_eps[3]
    s3_img6.style = "width: 20%; opacity: 1;"

    s3_p6.innerHTML = '6'
    s3_P6.innerHTML = 'Epsódio 06'

    eps.appendChild(s3_btn_eps6)

    s3_btn_eps6.appendChild(s3_p6)
    s3_btn_eps6.appendChild(s3_img6)
    s3_btn_eps6.appendChild(s3_P6)

    s3_btn_eps6.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[3]
        
        videoPlayer.src = caminho + s3_eps_[6]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 06 */

    /* EPS 07 */

    let s3_p7 = document.createElement('p')
    let s3_img7 = document.createElement('img')
    let s3_P7 = document.createElement('p')
    let s3_btn_eps7 = document.createElement('button')
        
    s3_btn_eps7.className = 'btn_eps'
    s3_btn_eps7.id = 's3_btn_eps7'
    s3_img7.className = 'logo_imperio'
    s3_img7.src = capa_eps[3]
    s3_img7.style = "width: 20%; opacity: 1;"

    s3_p7.innerHTML = '7'
    s3_P7.innerHTML = 'Epsódio 07'

    eps.appendChild(s3_btn_eps7)

    s3_btn_eps7.appendChild(s3_p7)
    s3_btn_eps7.appendChild(s3_img7)
    s3_btn_eps7.appendChild(s3_P7)

    s3_btn_eps7.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[3]
        
        videoPlayer.src = caminho + s3_eps_[7]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 07 */

    /* EPS 08 */

    let s3_p8 = document.createElement('p')
    let s3_img8 = document.createElement('img')
    let s3_P8 = document.createElement('p')
    let s3_btn_eps8 = document.createElement('button')
        
    s3_btn_eps8.className = 'btn_eps'
    s3_btn_eps8.id = 's3_btn_eps8'
    s3_img8.className = 'logo_imperio'
    s3_img8.src = capa_eps[3]
    s3_img8.style = "width: 20%; opacity: 1;"

    s3_p8.innerHTML = '8'
    s3_P8.innerHTML = 'Epsódio 08'

    eps.appendChild(s3_btn_eps8)

    s3_btn_eps8.appendChild(s3_p8)
    s3_btn_eps8.appendChild(s3_img8)
    s3_btn_eps8.appendChild(s3_P8)

    s3_btn_eps8.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[3]
        
        videoPlayer.src = caminho + s3_eps_[8]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 08 */

    /* EPS 09 */

    let s3_p9 = document.createElement('p')
    let s3_img9 = document.createElement('img')
    let s3_P9 = document.createElement('p')
    let s3_btn_eps9 = document.createElement('button')
        
    s3_btn_eps9.className = 'btn_eps'
    s3_btn_eps9.id = 's3_btn_eps9'
    s3_img9.className = 'logo_imperio'
    s3_img9.src = capa_eps[3]
    s3_img9.style = "width: 20%; opacity: 1;"

    s3_p9.innerHTML = '9'
    s3_P9.innerHTML = 'Epsódio 09'

    eps.appendChild(s3_btn_eps9)

    s3_btn_eps9.appendChild(s3_p9)
    s3_btn_eps9.appendChild(s3_img9)
    s3_btn_eps9.appendChild(s3_P9)

    s3_btn_eps9.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[3]
        
        videoPlayer.src = caminho + s3_eps_[9]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 09 */

    /* EPS 10 */

    let s3_p10 = document.createElement('p')
    let s3_img10 = document.createElement('img')
    let s3_P10 = document.createElement('p')
    let s3_btn_eps10 = document.createElement('button')
        
    s3_btn_eps10.className = 'btn_eps'
    s3_btn_eps10.id = 's3_btn_eps10'
    s3_img10.className = 'logo_imperio'
    s3_img10.src = capa_eps[3]
    s3_img10.style = "width: 20%; opacity: 1;"

    s3_p10.innerHTML = '10'
    s3_P10.innerHTML = 'Epsódio 10'

    eps.appendChild(s3_btn_eps10)

    s3_btn_eps10.appendChild(s3_p10)
    s3_btn_eps10.appendChild(s3_img10)
    s3_btn_eps10.appendChild(s3_P10)

    s3_btn_eps10.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[3]
        
        videoPlayer.src = caminho + s3_eps_[10]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 10 */

    cont_temp = 1
    type_temp = 'temp3'
    console.log(type_temp)

    } /* FIM TEMPORADA 03 */

/* TEMPORADA 04 */

else if (option_temp[selct_temp].value == 'temp4'){

    //Aqui remove os epsodios

    if(cont_temp == 1){

    if(type_temp == 'temp1'){

            let s1_btn_eps1 = document.getElementById('s1_btn_eps1')
            let s1_btn_eps2 = document.getElementById('s1_btn_eps2')
            let s1_btn_eps3 = document.getElementById('s1_btn_eps3')
            let s1_btn_eps4 = document.getElementById('s1_btn_eps4')
            let s1_btn_eps5 = document.getElementById('s1_btn_eps5')
            let s1_btn_eps6 = document.getElementById('s1_btn_eps6')
            let s1_btn_eps7 = document.getElementById('s1_btn_eps7')
            let s1_btn_eps8 = document.getElementById('s1_btn_eps8')
            let s1_btn_eps9 = document.getElementById('s1_btn_eps9')
            let s1_btn_eps10 = document.getElementById('s1_btn_eps10')

            eps.removeChild(s1_btn_eps1)
            eps.removeChild(s1_btn_eps2)
            eps.removeChild(s1_btn_eps3)
            eps.removeChild(s1_btn_eps4)
            eps.removeChild(s1_btn_eps5)
            eps.removeChild(s1_btn_eps6)
            eps.removeChild(s1_btn_eps7)
            eps.removeChild(s1_btn_eps8)
            eps.removeChild(s1_btn_eps9)
            eps.removeChild(s1_btn_eps10)

            cont_temp == 0

        }else if(type_temp == 'temp2'){

            let s2_btn_eps1 = document.getElementById('s2_btn_eps1')
            let s2_btn_eps2 = document.getElementById('s2_btn_eps2')
            let s2_btn_eps3 = document.getElementById('s2_btn_eps3')
            let s2_btn_eps4 = document.getElementById('s2_btn_eps4')
            let s2_btn_eps5 = document.getElementById('s2_btn_eps5')
            let s2_btn_eps6 = document.getElementById('s2_btn_eps6')
            let s2_btn_eps7 = document.getElementById('s2_btn_eps7')
            let s2_btn_eps8 = document.getElementById('s2_btn_eps8')
            let s2_btn_eps9 = document.getElementById('s2_btn_eps9')
            let s2_btn_eps10 = document.getElementById('s2_btn_eps10')

            eps.removeChild(s2_btn_eps1)
            eps.removeChild(s2_btn_eps2)
            eps.removeChild(s2_btn_eps3)
            eps.removeChild(s2_btn_eps4)
            eps.removeChild(s2_btn_eps5)
            eps.removeChild(s2_btn_eps6)
            eps.removeChild(s2_btn_eps7)
            eps.removeChild(s2_btn_eps8)
            eps.removeChild(s2_btn_eps9)
            eps.removeChild(s2_btn_eps10)

            cont_temp == 0
            
        }else if( type_temp == 'temp3'){

            let s3_btn_eps1 = document.getElementById('s3_btn_eps1')
            let s3_btn_eps2 = document.getElementById('s3_btn_eps2')
            let s3_btn_eps3 = document.getElementById('s3_btn_eps3')
            let s3_btn_eps4 = document.getElementById('s3_btn_eps4')
            let s3_btn_eps5 = document.getElementById('s3_btn_eps5')
            let s3_btn_eps6 = document.getElementById('s3_btn_eps6')
            let s3_btn_eps7 = document.getElementById('s3_btn_eps7')
            let s3_btn_eps8 = document.getElementById('s3_btn_eps8')
            let s3_btn_eps9 = document.getElementById('s3_btn_eps9')
            let s3_btn_eps10 = document.getElementById('s3_btn_eps10')

            eps.removeChild(s3_btn_eps1)
            eps.removeChild(s3_btn_eps2)
            eps.removeChild(s3_btn_eps3)
            eps.removeChild(s3_btn_eps4)
            eps.removeChild(s3_btn_eps5)
            eps.removeChild(s3_btn_eps6)
            eps.removeChild(s3_btn_eps7)
            eps.removeChild(s3_btn_eps8)
            eps.removeChild(s3_btn_eps9)
            eps.removeChild(s3_btn_eps10)

            cont_temp == 0

        }else if( type_temp == 'temp5'){

            let s5_btn_eps1 = document.getElementById('s5_btn_eps1')
            let s5_btn_eps2 = document.getElementById('s5_btn_eps2')
            let s5_btn_eps3 = document.getElementById('s5_btn_eps3')
            let s5_btn_eps4 = document.getElementById('s5_btn_eps4')
            let s5_btn_eps5 = document.getElementById('s5_btn_eps5')
            let s5_btn_eps6 = document.getElementById('s5_btn_eps6')
            let s5_btn_eps7 = document.getElementById('s5_btn_eps7')
            let s5_btn_eps8 = document.getElementById('s5_btn_eps8')
            let s5_btn_eps9 = document.getElementById('s5_btn_eps9')
            let s5_btn_eps10 = document.getElementById('s5_btn_eps10')

            eps.removeChild(s5_btn_eps1)
            eps.removeChild(s5_btn_eps2)
            eps.removeChild(s5_btn_eps3)
            eps.removeChild(s5_btn_eps4)
            eps.removeChild(s5_btn_eps5)
            eps.removeChild(s5_btn_eps6)
            eps.removeChild(s5_btn_eps7)
            eps.removeChild(s5_btn_eps8)
            eps.removeChild(s5_btn_eps9)
            eps.removeChild(s5_btn_eps10)

            cont_temp == 0

        }else if( type_temp == 'temp6'){

            let s6_btn_eps1 = document.getElementById('s6_btn_eps1')
            let s6_btn_eps2 = document.getElementById('s6_btn_eps2')
            let s6_btn_eps3 = document.getElementById('s6_btn_eps3')
            let s6_btn_eps4 = document.getElementById('s6_btn_eps4')
            let s6_btn_eps5 = document.getElementById('s6_btn_eps5')
            let s6_btn_eps6 = document.getElementById('s6_btn_eps6')
            let s6_btn_eps7 = document.getElementById('s6_btn_eps7')
            let s6_btn_eps8 = document.getElementById('s6_btn_eps8')
            let s6_btn_eps9 = document.getElementById('s6_btn_eps9')
            let s6_btn_eps10 = document.getElementById('s6_btn_eps10')

            eps.removeChild(s6_btn_eps1)
            eps.removeChild(s6_btn_eps2)
            eps.removeChild(s6_btn_eps3)
            eps.removeChild(s6_btn_eps4)
            eps.removeChild(s6_btn_eps5)
            eps.removeChild(s6_btn_eps6)
            eps.removeChild(s6_btn_eps7)
            eps.removeChild(s6_btn_eps8)
            eps.removeChild(s6_btn_eps9)
            eps.removeChild(s6_btn_eps10)

            cont_temp == 0

        }else if( type_temp == 'temp7'){

            let s7_btn_eps1 = document.getElementById('s7_btn_eps1')
            let s7_btn_eps2 = document.getElementById('s7_btn_eps2')
            let s7_btn_eps3 = document.getElementById('s7_btn_eps3')
            let s7_btn_eps4 = document.getElementById('s7_btn_eps4')
            let s7_btn_eps5 = document.getElementById('s7_btn_eps5')
            let s7_btn_eps6 = document.getElementById('s7_btn_eps6')
            let s7_btn_eps7 = document.getElementById('s7_btn_eps7')

            eps.removeChild(s7_btn_eps1)
            eps.removeChild(s7_btn_eps2)
            eps.removeChild(s7_btn_eps3)
            eps.removeChild(s7_btn_eps4)
            eps.removeChild(s7_btn_eps5)
            eps.removeChild(s7_btn_eps6)
            eps.removeChild(s7_btn_eps7)

            cont_temp == 0

        }else if( type_temp == 'temp8'){

            let s8_btn_eps1 = document.getElementById('s8_btn_eps1')
            let s8_btn_eps2 = document.getElementById('s8_btn_eps2')
            let s8_btn_eps3 = document.getElementById('s8_btn_eps3')
            let s8_btn_eps4 = document.getElementById('s8_btn_eps4')
            let s8_btn_eps5 = document.getElementById('s8_btn_eps5')
            let s8_btn_eps6 = document.getElementById('s8_btn_eps6')

            eps.removeChild(s8_btn_eps1)
            eps.removeChild(s8_btn_eps2)
            eps.removeChild(s8_btn_eps3)
            eps.removeChild(s8_btn_eps4)
            eps.removeChild(s8_btn_eps5)
            eps.removeChild(s8_btn_eps6)

            cont_temp == 0

        }else if( type_temp == 'temp'){

            cont_temp == 0
        }
    }

    /* EPS 01 */

    let s4_p1 = document.createElement('p')
    let s4_img1 = document.createElement('img')
    let s4_P1 = document.createElement('p')
    let s4_btn_eps1 = document.createElement('button')
        
    s4_btn_eps1.className = 'btn_eps'
    s4_btn_eps1.id = 's4_btn_eps1'
    s4_img1.className = 'logo_imperio'
    s4_img1.src = capa_eps[4]
    s4_img1.style = "width: 20%; opacity: 1;"

    s4_p1.innerHTML = '1'
    s4_P1.innerHTML = 'Epsódio 01'

    eps.appendChild(s4_btn_eps1)

    s4_btn_eps1.appendChild(s4_p1)
    s4_btn_eps1.appendChild(s4_img1)
    s4_btn_eps1.appendChild(s4_P1)

    s4_btn_eps1.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[4]
        
        videoPlayer.src = caminho + s4_eps_[1] //AQUI TEM QUE MUDAR O INDECE DE ACORDO COM A TEMPORADA
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 01 */


    /* EPS 02 */

    let s4_p2 = document.createElement('p')
    let s4_btn_eps2 = document.createElement('button')
    let s4_img2 = document.createElement('img')
    let s4_P2 = document.createElement('p')
        
    s4_btn_eps2.className = 'btn_eps'
    s4_btn_eps2.id = 's4_btn_eps2'
    s4_img2.className = 'logo_imperio'
    s4_img2.src = capa_eps[4]
    s4_img2.style = "width: 20%; opacity: 1;"

    s4_p2.innerHTML = '2'
    s4_P2.innerHTML = 'Epsódio 02'

    eps.appendChild(s4_btn_eps2)

    s4_btn_eps2.appendChild(s4_p2)
    s4_btn_eps2.appendChild(s4_img2)
    s4_btn_eps2.appendChild(s4_P2)

    s4_btn_eps2.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[4]
        
        videoPlayer.src = caminho + s4_eps_[2]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()
        
    }) /* FIM EPS 02 */

    /* EPS 03 */

    let s4_p3 = document.createElement('p')
    let s4_img3 = document.createElement('img')
    let s4_P3 = document.createElement('p')
    let s4_btn_eps3 = document.createElement('button')
        
    s4_btn_eps3.className = 'btn_eps'
    s4_btn_eps3.id = 's4_btn_eps3'
    s4_img3.className = 'logo_imperio'
    s4_img3.src = capa_eps[4]
    s4_img3.style = "width: 20%; opacity: 1;"

    s4_p3.innerHTML = '3'
    s4_P3.innerHTML = 'Epsódio 03'

    eps.appendChild(s4_btn_eps3)

    s4_btn_eps3.appendChild(s4_p3)
    s4_btn_eps3.appendChild(s4_img3)
    s4_btn_eps3.appendChild(s4_P3)

    s4_btn_eps3.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[4]
        
        videoPlayer.src = caminho + s4_eps_[3]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 03 */

    /* EPS 04 */

    let s4_p4 = document.createElement('p')
    let s4_img4 = document.createElement('img')
    let s4_P4 = document.createElement('p')
    let s4_btn_eps4 = document.createElement('button')
        
    s4_btn_eps4.className = 'btn_eps'
    s4_btn_eps4.id = 's4_btn_eps4'
    s4_img4.className = 'logo_imperio'
    s4_img4.src = capa_eps[4]
    s4_img4.style = "width: 20%; opacity: 1;"

    s4_p4.innerHTML = '4'
    s4_P4.innerHTML = 'Epsódio 04'

    eps.appendChild(s4_btn_eps4)

    s4_btn_eps4.appendChild(s4_p4)
    s4_btn_eps4.appendChild(s4_img4)
    s4_btn_eps4.appendChild(s4_P4)

    s4_btn_eps4.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')

        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[4]
        
        videoPlayer.src = caminho + s4_eps_[4]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 04 */

    /* EPS 05 */

    let s4_p5 = document.createElement('p')
    let s4_img5 = document.createElement('img')
    let s4_P5 = document.createElement('p')
    let s4_btn_eps5 = document.createElement('button')
        
    s4_btn_eps5.className = 'btn_eps'
    s4_btn_eps5.id = 's4_btn_eps5'
    s4_img5.className = 'logo_imperio'
    s4_img5.src = capa_eps[4]
    s4_img5.style = "width: 20%; opacity: 1;"

    s4_p5.innerHTML = '5'
    s4_P5.innerHTML = 'Epsódio 05'

    eps.appendChild(s4_btn_eps5)

    s4_btn_eps5.appendChild(s4_p5)
    s4_btn_eps5.appendChild(s4_img5)
    s4_btn_eps5.appendChild(s4_P5)

    s4_btn_eps5.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[4]
        
        videoPlayer.src = caminho + s4_eps_[5]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 05 */

    /* EPS 06 */

    let s4_p6 = document.createElement('p')
    let s4_img6 = document.createElement('img')
    let s4_P6 = document.createElement('p')
    let s4_btn_eps6 = document.createElement('button')
        
    s4_btn_eps6.className = 'btn_eps'
    s4_btn_eps6.id = 's4_btn_eps6'
    s4_img6.className = 'logo_imperio'
    s4_img6.src = capa_eps[4]
    s4_img6.style = "width: 20%; opacity: 1;"

    s4_p6.innerHTML = '6'
    s4_P6.innerHTML = 'Epsódio 06'

    eps.appendChild(s4_btn_eps6)

    s4_btn_eps6.appendChild(s4_p6)
    s4_btn_eps6.appendChild(s4_img6)
    s4_btn_eps6.appendChild(s4_P6)

    s4_btn_eps6.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[4]
        
        videoPlayer.src = caminho + s4_eps_[6]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 06 */

    /* EPS 07 */

    let s4_p7 = document.createElement('p')
    let s4_img7 = document.createElement('img')
    let s4_P7 = document.createElement('p')
    let s4_btn_eps7 = document.createElement('button')
        
    s4_btn_eps7.className = 'btn_eps'
    s4_btn_eps7.id = 's4_btn_eps7'
    s4_img7.className = 'logo_imperio'
    s4_img7.src = capa_eps[4]
    s4_img7.style = "width: 20%; opacity: 1;"

    s4_p7.innerHTML = '7'
    s4_P7.innerHTML = 'Epsódio 07'

    eps.appendChild(s4_btn_eps7)

    s4_btn_eps7.appendChild(s4_p7)
    s4_btn_eps7.appendChild(s4_img7)
    s4_btn_eps7.appendChild(s4_P7)

    s4_btn_eps7.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[4]
        
        videoPlayer.src = caminho + s4_eps_[7]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 07 */

    /* EPS 08 */

    let s4_p8 = document.createElement('p')
    let s4_img8 = document.createElement('img')
    let s4_P8 = document.createElement('p')
    let s4_btn_eps8 = document.createElement('button')
        
    s4_btn_eps8.className = 'btn_eps'
    s4_btn_eps8.id = 's4_btn_eps8'
    s4_img8.className = 'logo_imperio'
    s4_img8.src = capa_eps[4]
    s4_img8.style = "width: 20%; opacity: 1;"

    s4_p8.innerHTML = '8'
    s4_P8.innerHTML = 'Epsódio 08'

    eps.appendChild(s4_btn_eps8)

    s4_btn_eps8.appendChild(s4_p8)
    s4_btn_eps8.appendChild(s4_img8)
    s4_btn_eps8.appendChild(s4_P8)

    s4_btn_eps8.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[4]
        
        videoPlayer.src = caminho + s4_eps_[8]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 08 */

    /* EPS 09 */

    let s4_p9 = document.createElement('p')
    let s4_img9 = document.createElement('img')
    let s4_P9 = document.createElement('p')
    let s4_btn_eps9 = document.createElement('button')
        
    s4_btn_eps9.className = 'btn_eps'
    s4_btn_eps9.id = 's4_btn_eps9'
    s4_img9.className = 'logo_imperio'
    s4_img9.src = capa_eps[4]
    s4_img9.style = "width: 20%; opacity: 1;"

    s4_p9.innerHTML = '9'
    s4_P9.innerHTML = 'Epsódio 09'

    eps.appendChild(s4_btn_eps9)

    s4_btn_eps9.appendChild(s4_p9)
    s4_btn_eps9.appendChild(s4_img9)
    s4_btn_eps9.appendChild(s4_P9)

    s4_btn_eps9.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[4]
        
        videoPlayer.src = caminho + s4_eps_[9]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 09 */

    /* EPS 10 */

    let s4_p10 = document.createElement('p')
    let s4_img10 = document.createElement('img')
    let s4_P10 = document.createElement('p')
    let s4_btn_eps10 = document.createElement('button')
        
    s4_btn_eps10.className = 'btn_eps'
    s4_btn_eps10.id = 's4_btn_eps10'
    s4_img10.className = 'logo_imperio'
    s4_img10.src = capa_eps[4]
    s4_img10.style = "width: 20%; opacity: 1;"

    s4_p10.innerHTML = '10'
    s4_P10.innerHTML = 'Epsódio 10'

    eps.appendChild(s4_btn_eps10)

    s4_btn_eps10.appendChild(s4_p10)
    s4_btn_eps10.appendChild(s4_img10)
    s4_btn_eps10.appendChild(s4_P10)

    s4_btn_eps10.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[4]
        
        videoPlayer.src = caminho + s4_eps_[10]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 10 */

    cont_temp = 1
    type_temp = 'temp4'
    console.log(type_temp)

} /* FIM TEMPORADA 04 */


/* TEMPORADA 05 */

else if (option_temp[selct_temp].value == 'temp5'){

    //Aqui remove os epsodios

    if(cont_temp == 1){

    if(type_temp == 'temp1'){

            let s1_btn_eps1 = document.getElementById('s1_btn_eps1')
            let s1_btn_eps2 = document.getElementById('s1_btn_eps2')
            let s1_btn_eps3 = document.getElementById('s1_btn_eps3')
            let s1_btn_eps4 = document.getElementById('s1_btn_eps4')
            let s1_btn_eps5 = document.getElementById('s1_btn_eps5')
            let s1_btn_eps6 = document.getElementById('s1_btn_eps6')
            let s1_btn_eps7 = document.getElementById('s1_btn_eps7')
            let s1_btn_eps8 = document.getElementById('s1_btn_eps8')
            let s1_btn_eps9 = document.getElementById('s1_btn_eps9')
            let s1_btn_eps10 = document.getElementById('s1_btn_eps10')

            eps.removeChild(s1_btn_eps1)
            eps.removeChild(s1_btn_eps2)
            eps.removeChild(s1_btn_eps3)
            eps.removeChild(s1_btn_eps4)
            eps.removeChild(s1_btn_eps5)
            eps.removeChild(s1_btn_eps6)
            eps.removeChild(s1_btn_eps7)
            eps.removeChild(s1_btn_eps8)
            eps.removeChild(s1_btn_eps9)
            eps.removeChild(s1_btn_eps10)

            cont_temp == 0

        }else if(type_temp == 'temp2'){

            let s2_btn_eps1 = document.getElementById('s2_btn_eps1')
            let s2_btn_eps2 = document.getElementById('s2_btn_eps2')
            let s2_btn_eps3 = document.getElementById('s2_btn_eps3')
            let s2_btn_eps4 = document.getElementById('s2_btn_eps4')
            let s2_btn_eps5 = document.getElementById('s2_btn_eps5')
            let s2_btn_eps6 = document.getElementById('s2_btn_eps6')
            let s2_btn_eps7 = document.getElementById('s2_btn_eps7')
            let s2_btn_eps8 = document.getElementById('s2_btn_eps8')
            let s2_btn_eps9 = document.getElementById('s2_btn_eps9')
            let s2_btn_eps10 = document.getElementById('s2_btn_eps10')

            eps.removeChild(s2_btn_eps1)
            eps.removeChild(s2_btn_eps2)
            eps.removeChild(s2_btn_eps3)
            eps.removeChild(s2_btn_eps4)
            eps.removeChild(s2_btn_eps5)
            eps.removeChild(s2_btn_eps6)
            eps.removeChild(s2_btn_eps7)
            eps.removeChild(s2_btn_eps8)
            eps.removeChild(s2_btn_eps9)
            eps.removeChild(s2_btn_eps10)

            cont_temp == 0
            
        }else if( type_temp == 'temp3'){

            let s3_btn_eps1 = document.getElementById('s3_btn_eps1')
            let s3_btn_eps2 = document.getElementById('s3_btn_eps2')
            let s3_btn_eps3 = document.getElementById('s3_btn_eps3')
            let s3_btn_eps4 = document.getElementById('s3_btn_eps4')
            let s3_btn_eps5 = document.getElementById('s3_btn_eps5')
            let s3_btn_eps6 = document.getElementById('s3_btn_eps6')
            let s3_btn_eps7 = document.getElementById('s3_btn_eps7')
            let s3_btn_eps8 = document.getElementById('s3_btn_eps8')
            let s3_btn_eps9 = document.getElementById('s3_btn_eps9')
            let s3_btn_eps10 = document.getElementById('s3_btn_eps10')

            eps.removeChild(s3_btn_eps1)
            eps.removeChild(s3_btn_eps2)
            eps.removeChild(s3_btn_eps3)
            eps.removeChild(s3_btn_eps4)
            eps.removeChild(s3_btn_eps5)
            eps.removeChild(s3_btn_eps6)
            eps.removeChild(s3_btn_eps7)
            eps.removeChild(s3_btn_eps8)
            eps.removeChild(s3_btn_eps9)
            eps.removeChild(s3_btn_eps10)

            cont_temp == 0

        }else if( type_temp == 'temp4'){

            let s4_btn_eps1 = document.getElementById('s4_btn_eps1')
            let s4_btn_eps2 = document.getElementById('s4_btn_eps2')
            let s4_btn_eps3 = document.getElementById('s4_btn_eps3')
            let s4_btn_eps4 = document.getElementById('s4_btn_eps4')
            let s4_btn_eps5 = document.getElementById('s4_btn_eps5')
            let s4_btn_eps6 = document.getElementById('s4_btn_eps6')
            let s4_btn_eps7 = document.getElementById('s4_btn_eps7')
            let s4_btn_eps8 = document.getElementById('s4_btn_eps8')
            let s4_btn_eps9 = document.getElementById('s4_btn_eps9')
            let s4_btn_eps10 = document.getElementById('s4_btn_eps10')

            eps.removeChild(s4_btn_eps1)
            eps.removeChild(s4_btn_eps2)
            eps.removeChild(s4_btn_eps3)
            eps.removeChild(s4_btn_eps4)
            eps.removeChild(s4_btn_eps5)
            eps.removeChild(s4_btn_eps6)
            eps.removeChild(s4_btn_eps7)
            eps.removeChild(s4_btn_eps8)
            eps.removeChild(s4_btn_eps9)
            eps.removeChild(s4_btn_eps10)

            cont_temp == 0

        }else if( type_temp == 'temp6'){

            let s6_btn_eps1 = document.getElementById('s6_btn_eps1')
            let s6_btn_eps2 = document.getElementById('s6_btn_eps2')
            let s6_btn_eps3 = document.getElementById('s6_btn_eps3')
            let s6_btn_eps4 = document.getElementById('s6_btn_eps4')
            let s6_btn_eps5 = document.getElementById('s6_btn_eps5')
            let s6_btn_eps6 = document.getElementById('s6_btn_eps6')
            let s6_btn_eps7 = document.getElementById('s6_btn_eps7')
            let s6_btn_eps8 = document.getElementById('s6_btn_eps8')
            let s6_btn_eps9 = document.getElementById('s6_btn_eps9')
            let s6_btn_eps10 = document.getElementById('s6_btn_eps10')

            eps.removeChild(s6_btn_eps1)
            eps.removeChild(s6_btn_eps2)
            eps.removeChild(s6_btn_eps3)
            eps.removeChild(s6_btn_eps4)
            eps.removeChild(s6_btn_eps5)
            eps.removeChild(s6_btn_eps6)
            eps.removeChild(s6_btn_eps7)
            eps.removeChild(s6_btn_eps8)
            eps.removeChild(s6_btn_eps9)
            eps.removeChild(s6_btn_eps10)

            cont_temp == 0

        }else if( type_temp == 'temp7'){

            let s7_btn_eps1 = document.getElementById('s7_btn_eps1')
            let s7_btn_eps2 = document.getElementById('s7_btn_eps2')
            let s7_btn_eps3 = document.getElementById('s7_btn_eps3')
            let s7_btn_eps4 = document.getElementById('s7_btn_eps4')
            let s7_btn_eps5 = document.getElementById('s7_btn_eps5')
            let s7_btn_eps6 = document.getElementById('s7_btn_eps6')
            let s7_btn_eps7 = document.getElementById('s7_btn_eps7')

            eps.removeChild(s7_btn_eps1)
            eps.removeChild(s7_btn_eps2)
            eps.removeChild(s7_btn_eps3)
            eps.removeChild(s7_btn_eps4)
            eps.removeChild(s7_btn_eps5)
            eps.removeChild(s7_btn_eps6)
            eps.removeChild(s7_btn_eps7)

            cont_temp == 0

        }else if( type_temp == 'temp8'){

            let s8_btn_eps1 = document.getElementById('s8_btn_eps1')
            let s8_btn_eps2 = document.getElementById('s8_btn_eps2')
            let s8_btn_eps3 = document.getElementById('s8_btn_eps3')
            let s8_btn_eps4 = document.getElementById('s8_btn_eps4')
            let s8_btn_eps5 = document.getElementById('s8_btn_eps5')
            let s8_btn_eps6 = document.getElementById('s8_btn_eps6')

            eps.removeChild(s8_btn_eps1)
            eps.removeChild(s8_btn_eps2)
            eps.removeChild(s8_btn_eps3)
            eps.removeChild(s8_btn_eps4)
            eps.removeChild(s8_btn_eps5)
            eps.removeChild(s8_btn_eps6)

            cont_temp == 0

        }else if( type_temp == 'temp'){

            cont_temp == 0
        }
    }

    /* EPS 01 */

    let s5_p1 = document.createElement('p')
    let s5_img1 = document.createElement('img')
    let s5_P1 = document.createElement('p')
    let s5_btn_eps1 = document.createElement('button')
        
    s5_btn_eps1.className = 'btn_eps'
    s5_btn_eps1.id = 's5_btn_eps1'
    s5_img1.className = 'logo_imperio'
    s5_img1.src = capa_eps[5]
    s5_img1.style = "width: 20%; opacity: 1;"

    s5_p1.innerHTML = '1'
    s5_P1.innerHTML = 'Epsódio 01'

    eps.appendChild(s5_btn_eps1)

    s5_btn_eps1.appendChild(s5_p1)
    s5_btn_eps1.appendChild(s5_img1)
    s5_btn_eps1.appendChild(s5_P1)

    s5_btn_eps1.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[5]
        
        videoPlayer.src = caminho + s5_eps_[1] //AQUI TEM QUE MUDAR O INDECE DE ACORDO COM A TEMPORADA
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 01 */


    /* EPS 02 */

    let s5_p2 = document.createElement('p')
    let s5_btn_eps2 = document.createElement('button')
    let s5_img2 = document.createElement('img')
    let s5_P2 = document.createElement('p')
        
    s5_btn_eps2.className = 'btn_eps'
    s5_btn_eps2.id = 's5_btn_eps2'
    s5_img2.className = 'logo_imperio'
    s5_img2.src = capa_eps[5]
    s5_img2.style = "width: 20%; opacity: 1;"

    s5_p2.innerHTML = '2'
    s5_P2.innerHTML = 'Epsódio 02'

    eps.appendChild(s5_btn_eps2)

    s5_btn_eps2.appendChild(s5_p2)
    s5_btn_eps2.appendChild(s5_img2)
    s5_btn_eps2.appendChild(s5_P2)

    s5_btn_eps2.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[5]
        
        videoPlayer.src = caminho + s5_eps_[2]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()
        
    }) /* FIM EPS 02 */

    /* EPS 03 */

    let s5_p3 = document.createElement('p')
    let s5_img3 = document.createElement('img')
    let s5_P3 = document.createElement('p')
    let s5_btn_eps3 = document.createElement('button')
        
    s5_btn_eps3.className = 'btn_eps'
    s5_btn_eps3.id = 's5_btn_eps3'
    s5_img3.className = 'logo_imperio'
    s5_img3.src = capa_eps[5]
    s5_img3.style = "width: 20%; opacity: 1;"

    s5_p3.innerHTML = '3'
    s5_P3.innerHTML = 'Epsódio 03'

    eps.appendChild(s5_btn_eps3)

    s5_btn_eps3.appendChild(s5_p3)
    s5_btn_eps3.appendChild(s5_img3)
    s5_btn_eps3.appendChild(s5_P3)

    s5_btn_eps3.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[5]
        
        videoPlayer.src = caminho + s5_eps_[3]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 03 */

    /* EPS 04 */

    let s5_p4 = document.createElement('p')
    let s5_img4 = document.createElement('img')
    let s5_P4 = document.createElement('p')
    let s5_btn_eps4 = document.createElement('button')
        
    s5_btn_eps4.className = 'btn_eps'
    s5_btn_eps4.id = 's5_btn_eps4'
    s5_img4.className = 'logo_imperio'
    s5_img4.src = capa_eps[5]
    s5_img4.style = "width: 20%; opacity: 1;"

    s5_p4.innerHTML = '4'
    s5_P4.innerHTML = 'Epsódio 04'

    eps.appendChild(s5_btn_eps4)

    s5_btn_eps4.appendChild(s5_p4)
    s5_btn_eps4.appendChild(s5_img4)
    s5_btn_eps4.appendChild(s5_P4)

    s5_btn_eps4.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')

        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[5]
        
        videoPlayer.src = caminho + s5_eps_[4]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 04 */

    /* EPS 05 */

    let s5_p5 = document.createElement('p')
    let s5_img5 = document.createElement('img')
    let s5_P5 = document.createElement('p')
    let s5_btn_eps5 = document.createElement('button')
        
    s5_btn_eps5.className = 'btn_eps'
    s5_btn_eps5.id = 's5_btn_eps5'
    s5_img5.className = 'logo_imperio'
    s5_img5.src = capa_eps[5]
    s5_img5.style = "width: 20%; opacity: 1;"

    s5_p5.innerHTML = '5'
    s5_P5.innerHTML = 'Epsódio 05'

    eps.appendChild(s5_btn_eps5)

    s5_btn_eps5.appendChild(s5_p5)
    s5_btn_eps5.appendChild(s5_img5)
    s5_btn_eps5.appendChild(s5_P5)

    s5_btn_eps5.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[5]
        
        videoPlayer.src = caminho + s5_eps_[5]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 05 */

    /* EPS 06 */

    let s5_p6 = document.createElement('p')
    let s5_img6 = document.createElement('img')
    let s5_P6 = document.createElement('p')
    let s5_btn_eps6 = document.createElement('button')
        
    s5_btn_eps6.className = 'btn_eps'
    s5_btn_eps6.id = 's5_btn_eps6'
    s5_img6.className = 'logo_imperio'
    s5_img6.src = capa_eps[5]
    s5_img6.style = "width: 20%; opacity: 1;"

    s5_p6.innerHTML = '6'
    s5_P6.innerHTML = 'Epsódio 06'

    eps.appendChild(s5_btn_eps6)

    s5_btn_eps6.appendChild(s5_p6)
    s5_btn_eps6.appendChild(s5_img6)
    s5_btn_eps6.appendChild(s5_P6)

    s5_btn_eps6.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[5]
        
        videoPlayer.src = caminho + s5_eps_[6]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 06 */

    /* EPS 07 */

    let s5_p7 = document.createElement('p')
    let s5_img7 = document.createElement('img')
    let s5_P7 = document.createElement('p')
    let s5_btn_eps7 = document.createElement('button')
        
    s5_btn_eps7.className = 'btn_eps'
    s5_btn_eps7.id = 's5_btn_eps7'
    s5_img7.className = 'logo_imperio'
    s5_img7.src = capa_eps[5]
    s5_img7.style = "width: 20%; opacity: 1;"

    s5_p7.innerHTML = '7'
    s5_P7.innerHTML = 'Epsódio 07'

    eps.appendChild(s5_btn_eps7)

    s5_btn_eps7.appendChild(s5_p7)
    s5_btn_eps7.appendChild(s5_img7)
    s5_btn_eps7.appendChild(s5_P7)

    s5_btn_eps7.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[5]
        
        videoPlayer.src = caminho + s5_eps_[7]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 07 */

    /* EPS 08 */

    let s5_p8 = document.createElement('p')
    let s5_img8 = document.createElement('img')
    let s5_P8 = document.createElement('p')
    let s5_btn_eps8 = document.createElement('button')
        
    s5_btn_eps8.className = 'btn_eps'
    s5_btn_eps8.id = 's5_btn_eps8'
    s5_img8.className = 'logo_imperio'
    s5_img8.src = capa_eps[5]
    s5_img8.style = "width: 20%; opacity: 1;"

    s5_p8.innerHTML = '8'
    s5_P8.innerHTML = 'Epsódio 08'

    eps.appendChild(s5_btn_eps8)

    s5_btn_eps8.appendChild(s5_p8)
    s5_btn_eps8.appendChild(s5_img8)
    s5_btn_eps8.appendChild(s5_P8)

    s5_btn_eps8.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[5]
        
        videoPlayer.src = caminho + s5_eps_[8]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 08 */

    /* EPS 09 */

    let s5_p9 = document.createElement('p')
    let s5_img9 = document.createElement('img')
    let s5_P9 = document.createElement('p')
    let s5_btn_eps9 = document.createElement('button')
        
    s5_btn_eps9.className = 'btn_eps'
    s5_btn_eps9.id = 's5_btn_eps9'
    s5_img9.className = 'logo_imperio'
    s5_img9.src = capa_eps[5]
    s5_img9.style = "width: 20%; opacity: 1;"

    s5_p9.innerHTML = '9'
    s5_P9.innerHTML = 'Epsódio 09'

    eps.appendChild(s5_btn_eps9)

    s5_btn_eps9.appendChild(s5_p9)
    s5_btn_eps9.appendChild(s5_img9)
    s5_btn_eps9.appendChild(s5_P9)

    s5_btn_eps9.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[5]
        
        videoPlayer.src = caminho + s5_eps_[9]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 09 */

    /* EPS 10 */

    let s5_p10 = document.createElement('p')
    let s5_img10 = document.createElement('img')
    let s5_P10 = document.createElement('p')
    let s5_btn_eps10 = document.createElement('button')
        
    s5_btn_eps10.className = 'btn_eps'
    s5_btn_eps10.id = 's5_btn_eps10'
    s5_img10.className = 'logo_imperio'
    s5_img10.src = capa_eps[5]
    s5_img10.style = "width: 20%; opacity: 1;"

    s5_p10.innerHTML = '10'
    s5_P10.innerHTML = 'Epsódio 10'

    eps.appendChild(s5_btn_eps10)

    s5_btn_eps10.appendChild(s5_p10)
    s5_btn_eps10.appendChild(s5_img10)
    s5_btn_eps10.appendChild(s5_P10)

    s5_btn_eps10.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[5]
        
        videoPlayer.src = caminho + s5_eps_[10]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 10 */

    cont_temp = 1
    type_temp = 'temp5'
    console.log(type_temp)

} /* FIM TEMPORADA 05 */


/* TEMPORADA 06 */

else if (option_temp[selct_temp].value == 'temp6'){

    //Aqui remove os epsodios

    if(cont_temp == 1){

    if(type_temp == 'temp1'){

            let s1_btn_eps1 = document.getElementById('s1_btn_eps1')
            let s1_btn_eps2 = document.getElementById('s1_btn_eps2')
            let s1_btn_eps3 = document.getElementById('s1_btn_eps3')
            let s1_btn_eps4 = document.getElementById('s1_btn_eps4')
            let s1_btn_eps5 = document.getElementById('s1_btn_eps5')
            let s1_btn_eps6 = document.getElementById('s1_btn_eps6')
            let s1_btn_eps7 = document.getElementById('s1_btn_eps7')
            let s1_btn_eps8 = document.getElementById('s1_btn_eps8')
            let s1_btn_eps9 = document.getElementById('s1_btn_eps9')
            let s1_btn_eps10 = document.getElementById('s1_btn_eps10')

            eps.removeChild(s1_btn_eps1)
            eps.removeChild(s1_btn_eps2)
            eps.removeChild(s1_btn_eps3)
            eps.removeChild(s1_btn_eps4)
            eps.removeChild(s1_btn_eps5)
            eps.removeChild(s1_btn_eps6)
            eps.removeChild(s1_btn_eps7)
            eps.removeChild(s1_btn_eps8)
            eps.removeChild(s1_btn_eps9)
            eps.removeChild(s1_btn_eps10)

            cont_temp == 0

        }else if(type_temp == 'temp2'){

            let s2_btn_eps1 = document.getElementById('s2_btn_eps1')
            let s2_btn_eps2 = document.getElementById('s2_btn_eps2')
            let s2_btn_eps3 = document.getElementById('s2_btn_eps3')
            let s2_btn_eps4 = document.getElementById('s2_btn_eps4')
            let s2_btn_eps5 = document.getElementById('s2_btn_eps5')
            let s2_btn_eps6 = document.getElementById('s2_btn_eps6')
            let s2_btn_eps7 = document.getElementById('s2_btn_eps7')
            let s2_btn_eps8 = document.getElementById('s2_btn_eps8')
            let s2_btn_eps9 = document.getElementById('s2_btn_eps9')
            let s2_btn_eps10 = document.getElementById('s2_btn_eps10')

            eps.removeChild(s2_btn_eps1)
            eps.removeChild(s2_btn_eps2)
            eps.removeChild(s2_btn_eps3)
            eps.removeChild(s2_btn_eps4)
            eps.removeChild(s2_btn_eps5)
            eps.removeChild(s2_btn_eps6)
            eps.removeChild(s2_btn_eps7)
            eps.removeChild(s2_btn_eps8)
            eps.removeChild(s2_btn_eps9)
            eps.removeChild(s2_btn_eps10)

            cont_temp == 0
            
        }else if( type_temp == 'temp3'){

            let s3_btn_eps1 = document.getElementById('s3_btn_eps1')
            let s3_btn_eps2 = document.getElementById('s3_btn_eps2')
            let s3_btn_eps3 = document.getElementById('s3_btn_eps3')
            let s3_btn_eps4 = document.getElementById('s3_btn_eps4')
            let s3_btn_eps5 = document.getElementById('s3_btn_eps5')
            let s3_btn_eps6 = document.getElementById('s3_btn_eps6')
            let s3_btn_eps7 = document.getElementById('s3_btn_eps7')
            let s3_btn_eps8 = document.getElementById('s3_btn_eps8')
            let s3_btn_eps9 = document.getElementById('s3_btn_eps9')
            let s3_btn_eps10 = document.getElementById('s3_btn_eps10')

            eps.removeChild(s3_btn_eps1)
            eps.removeChild(s3_btn_eps2)
            eps.removeChild(s3_btn_eps3)
            eps.removeChild(s3_btn_eps4)
            eps.removeChild(s3_btn_eps5)
            eps.removeChild(s3_btn_eps6)
            eps.removeChild(s3_btn_eps7)
            eps.removeChild(s3_btn_eps8)
            eps.removeChild(s3_btn_eps9)
            eps.removeChild(s3_btn_eps10)

            cont_temp == 0

        }else if( type_temp == 'temp4'){

            let s4_btn_eps1 = document.getElementById('s4_btn_eps1')
            let s4_btn_eps2 = document.getElementById('s4_btn_eps2')
            let s4_btn_eps3 = document.getElementById('s4_btn_eps3')
            let s4_btn_eps4 = document.getElementById('s4_btn_eps4')
            let s4_btn_eps5 = document.getElementById('s4_btn_eps5')
            let s4_btn_eps6 = document.getElementById('s4_btn_eps6')
            let s4_btn_eps7 = document.getElementById('s4_btn_eps7')
            let s4_btn_eps8 = document.getElementById('s4_btn_eps8')
            let s4_btn_eps9 = document.getElementById('s4_btn_eps9')
            let s4_btn_eps10 = document.getElementById('s4_btn_eps10')

            eps.removeChild(s4_btn_eps1)
            eps.removeChild(s4_btn_eps2)
            eps.removeChild(s4_btn_eps3)
            eps.removeChild(s4_btn_eps4)
            eps.removeChild(s4_btn_eps5)
            eps.removeChild(s4_btn_eps6)
            eps.removeChild(s4_btn_eps7)
            eps.removeChild(s4_btn_eps8)
            eps.removeChild(s4_btn_eps9)
            eps.removeChild(s4_btn_eps10)

            cont_temp == 0

        }else if( type_temp == 'temp5'){

            let s5_btn_eps1 = document.getElementById('s5_btn_eps1')
            let s5_btn_eps2 = document.getElementById('s5_btn_eps2')
            let s5_btn_eps3 = document.getElementById('s5_btn_eps3')
            let s5_btn_eps4 = document.getElementById('s5_btn_eps4')
            let s5_btn_eps5 = document.getElementById('s5_btn_eps5')
            let s5_btn_eps6 = document.getElementById('s5_btn_eps6')
            let s5_btn_eps7 = document.getElementById('s5_btn_eps7')
            let s5_btn_eps8 = document.getElementById('s5_btn_eps8')
            let s5_btn_eps9 = document.getElementById('s5_btn_eps9')
            let s5_btn_eps10 = document.getElementById('s5_btn_eps10')

            eps.removeChild(s5_btn_eps1)
            eps.removeChild(s5_btn_eps2)
            eps.removeChild(s5_btn_eps3)
            eps.removeChild(s5_btn_eps4)
            eps.removeChild(s5_btn_eps5)
            eps.removeChild(s5_btn_eps6)
            eps.removeChild(s5_btn_eps7)
            eps.removeChild(s5_btn_eps8)
            eps.removeChild(s5_btn_eps9)
            eps.removeChild(s5_btn_eps10)

            cont_temp == 0

        }else if( type_temp == 'temp7'){

            let s7_btn_eps1 = document.getElementById('s7_btn_eps1')
            let s7_btn_eps2 = document.getElementById('s7_btn_eps2')
            let s7_btn_eps3 = document.getElementById('s7_btn_eps3')
            let s7_btn_eps4 = document.getElementById('s7_btn_eps4')
            let s7_btn_eps5 = document.getElementById('s7_btn_eps5')
            let s7_btn_eps6 = document.getElementById('s7_btn_eps6')
            let s7_btn_eps7 = document.getElementById('s7_btn_eps7')

            eps.removeChild(s7_btn_eps1)
            eps.removeChild(s7_btn_eps2)
            eps.removeChild(s7_btn_eps3)
            eps.removeChild(s7_btn_eps4)
            eps.removeChild(s7_btn_eps5)
            eps.removeChild(s7_btn_eps6)
            eps.removeChild(s7_btn_eps7)

            cont_temp == 0

        }else if( type_temp == 'temp8'){

            let s8_btn_eps1 = document.getElementById('s8_btn_eps1')
            let s8_btn_eps2 = document.getElementById('s8_btn_eps2')
            let s8_btn_eps3 = document.getElementById('s8_btn_eps3')
            let s8_btn_eps4 = document.getElementById('s8_btn_eps4')
            let s8_btn_eps5 = document.getElementById('s8_btn_eps5')
            let s8_btn_eps6 = document.getElementById('s8_btn_eps6')

            eps.removeChild(s8_btn_eps1)
            eps.removeChild(s8_btn_eps2)
            eps.removeChild(s8_btn_eps3)
            eps.removeChild(s8_btn_eps4)
            eps.removeChild(s8_btn_eps5)
            eps.removeChild(s8_btn_eps6)

            cont_temp == 0

        }else if( type_temp == 'temp'){

            cont_temp == 0
        }
    }

    /* EPS 01 */

    let s6_p1 = document.createElement('p')
    let s6_img1 = document.createElement('img')
    let s6_P1 = document.createElement('p')
    let s6_btn_eps1 = document.createElement('button')
        
    s6_btn_eps1.className = 'btn_eps'
    s6_btn_eps1.id = 's6_btn_eps1'
    s6_img1.className = 'logo_imperio'
    s6_img1.src = capa_eps[6]
    s6_img1.style = "width: 20%; opacity: 1;"

    s6_p1.innerHTML = '1'
    s6_P1.innerHTML = 'Epsódio 01'

    eps.appendChild(s6_btn_eps1)

    s6_btn_eps1.appendChild(s6_p1)
    s6_btn_eps1.appendChild(s6_img1)
    s6_btn_eps1.appendChild(s6_P1)

    s6_btn_eps1.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[6]
        
        videoPlayer.src = caminho + s6_eps_[1] //AQUI TEM QUE MUDAR O INDECE DE ACORDO COM A TEMPORADA
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 01 */


    /* EPS 02 */

    let s6_p2 = document.createElement('p')
    let s6_btn_eps2 = document.createElement('button')
    let s6_img2 = document.createElement('img')
    let s6_P2 = document.createElement('p')
        
    s6_btn_eps2.className = 'btn_eps'
    s6_btn_eps2.id = 's6_btn_eps2'
    s6_img2.className = 'logo_imperio'
    s6_img2.src = capa_eps[6]
    s6_img2.style = "width: 20%; opacity: 1;"

    s6_p2.innerHTML = '2'
    s6_P2.innerHTML = 'Epsódio 02'

    eps.appendChild(s6_btn_eps2)

    s6_btn_eps2.appendChild(s6_p2)
    s6_btn_eps2.appendChild(s6_img2)
    s6_btn_eps2.appendChild(s6_P2)

    s6_btn_eps2.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[6]
        
        videoPlayer.src = caminho + s6_eps_[2]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()
        
    }) /* FIM EPS 02 */

    /* EPS 03 */

    let s6_p3 = document.createElement('p')
    let s6_img3 = document.createElement('img')
    let s6_P3 = document.createElement('p')
    let s6_btn_eps3 = document.createElement('button')
        
    s6_btn_eps3.className = 'btn_eps'
    s6_btn_eps3.id = 's6_btn_eps3'
    s6_img3.className = 'logo_imperio'
    s6_img3.src = capa_eps[6]
    s6_img3.style = "width: 20%; opacity: 1;"

    s6_p3.innerHTML = '3'
    s6_P3.innerHTML = 'Epsódio 03'

    eps.appendChild(s6_btn_eps3)

    s6_btn_eps3.appendChild(s6_p3)
    s6_btn_eps3.appendChild(s6_img3)
    s6_btn_eps3.appendChild(s6_P3)

    s6_btn_eps3.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[6]
        
        videoPlayer.src = caminho + s6_eps_[3]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 03 */

    /* EPS 04 */

    let s6_p4 = document.createElement('p')
    let s6_img4 = document.createElement('img')
    let s6_P4 = document.createElement('p')
    let s6_btn_eps4 = document.createElement('button')
    
    s6_btn_eps4.className = 'btn_eps'
    s6_btn_eps4.id = 's6_btn_eps4'
    s6_img4.className = 'logo_imperio'
    s6_img4.src = capa_eps[6]
    s6_img4.style = "width: 20%; opacity: 1;"

    s6_p4.innerHTML = '4'
    s6_P4.innerHTML = 'Epsódio 04'

    eps.appendChild(s6_btn_eps4)

    s6_btn_eps4.appendChild(s6_p4)
    s6_btn_eps4.appendChild(s6_img4)
    s6_btn_eps4.appendChild(s6_P4)

    s6_btn_eps4.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')

        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[6]
        
        videoPlayer.src = caminho + s6_eps_[4]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 04 */

    /* EPS 05 */

    let s6_p5 = document.createElement('p')
    let s6_img5 = document.createElement('img')
    let s6_P5 = document.createElement('p')
    let s6_btn_eps5 = document.createElement('button')
        
    s6_btn_eps5.className = 'btn_eps'
    s6_btn_eps5.id = 's6_btn_eps5'
    s6_img5.className = 'logo_imperio'
    s6_img5.src = capa_eps[6]
    s6_img5.style = "width: 20%; opacity: 1;"

    s6_p5.innerHTML = '5'
    s6_P5.innerHTML = 'Epsódio 05'

    eps.appendChild(s6_btn_eps5)

    s6_btn_eps5.appendChild(s6_p5)
    s6_btn_eps5.appendChild(s6_img5)
    s6_btn_eps5.appendChild(s6_P5)

    s6_btn_eps5.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[6]
        
        videoPlayer.src = caminho + s6_eps_[5]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 05 */

    /* EPS 06 */

    let s6_p6 = document.createElement('p')
    let s6_img6 = document.createElement('img')
    let s6_P6 = document.createElement('p')
    let s6_btn_eps6 = document.createElement('button')
    
    s6_btn_eps6.className = 'btn_eps'
    s6_btn_eps6.id = 's6_btn_eps6'
    s6_img6.className = 'logo_imperio'
    s6_img6.src = capa_eps[6]
    s6_img6.style = "width: 20%; opacity: 1;"

    s6_p6.innerHTML = '6'
    s6_P6.innerHTML = 'Epsódio 06'

    eps.appendChild(s6_btn_eps6)

    s6_btn_eps6.appendChild(s6_p6)
    s6_btn_eps6.appendChild(s6_img6)
    s6_btn_eps6.appendChild(s6_P6)

    s6_btn_eps6.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[6]
        
        videoPlayer.src = caminho + s6_eps_[6]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 06 */

    /* EPS 07 */

    let s6_p7 = document.createElement('p')
    let s6_img7 = document.createElement('img')
    let s6_P7 = document.createElement('p')
    let s6_btn_eps7 = document.createElement('button')
        
    s6_btn_eps7.className = 'btn_eps'
    s6_btn_eps7.id = 's6_btn_eps7'
    s6_img7.className = 'logo_imperio'
    s6_img7.src = capa_eps[6]
    s6_img7.style = "width: 20%; opacity: 1;"

    s6_p7.innerHTML = '7'
    s6_P7.innerHTML = 'Epsódio 07'

    eps.appendChild(s6_btn_eps7)

    s6_btn_eps7.appendChild(s6_p7)
    s6_btn_eps7.appendChild(s6_img7)
    s6_btn_eps7.appendChild(s6_P7)

    s6_btn_eps7.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[6]
        
        videoPlayer.src = caminho + s6_eps_[7]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 07 */

    /* EPS 08 */

    let s6_p8 = document.createElement('p')
    let s6_img8 = document.createElement('img')
    let s6_P8 = document.createElement('p')
    let s6_btn_eps8 = document.createElement('button')
        
    s6_btn_eps8.className = 'btn_eps'
    s6_btn_eps8.id = 's6_btn_eps8'
    s6_img8.className = 'logo_imperio'
    s6_img8.src = capa_eps[6]
    s6_img8.style = "width: 20%; opacity: 1;"

    s6_p8.innerHTML = '8'
    s6_P8.innerHTML = 'Epsódio 08'

    eps.appendChild(s6_btn_eps8)

    s6_btn_eps8.appendChild(s6_p8)
    s6_btn_eps8.appendChild(s6_img8)
    s6_btn_eps8.appendChild(s6_P8)

    s6_btn_eps8.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[6]
        
        videoPlayer.src = caminho + s6_eps_[8]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 08 */

    /* EPS 09 */

    let s6_p9 = document.createElement('p')
    let s6_img9 = document.createElement('img')
    let s6_P9 = document.createElement('p')
    let s6_btn_eps9 = document.createElement('button')
        
    s6_btn_eps9.className = 'btn_eps'
    s6_btn_eps9.id = 's6_btn_eps9'
    s6_img9.className = 'logo_imperio'
    s6_img9.src = capa_eps[6]
    s6_img9.style = "width: 20%; opacity: 1;"

    s6_p9.innerHTML = '9'
    s6_P9.innerHTML = 'Epsódio 09'

    eps.appendChild(s6_btn_eps9)

    s6_btn_eps9.appendChild(s6_p9)
    s6_btn_eps9.appendChild(s6_img9)
    s6_btn_eps9.appendChild(s6_P9)

    s6_btn_eps9.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[6]
        
        videoPlayer.src = caminho + s6_eps_[9]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 09 */

    /* EPS 10 */

    let s6_p10 = document.createElement('p')
    let s6_img10 = document.createElement('img')
    let s6_P10 = document.createElement('p')
    let s6_btn_eps10 = document.createElement('button')
        
    s6_btn_eps10.className = 'btn_eps'
    s6_btn_eps10.id = 's6_btn_eps10'
    s6_img10.className = 'logo_imperio'
    s6_img10.src = capa_eps[6]
    s6_img10.style = "width: 20%; opacity: 1;"

    s6_p10.innerHTML = '10'
    s6_P10.innerHTML = 'Epsódio 10'

    eps.appendChild(s6_btn_eps10)

    s6_btn_eps10.appendChild(s6_p10)
    s6_btn_eps10.appendChild(s6_img10)
    s6_btn_eps10.appendChild(s6_P10)

    s6_btn_eps10.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[6]
        
        videoPlayer.src = caminho + s6_eps_[10]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 10 */

    cont_temp = 1
    type_temp = 'temp6'
    console.log(type_temp)

} /* FIM TEMPORADA 06 */


/* TEMPORADA 07 */

else if (option_temp[selct_temp].value == 'temp7'){

    //Aqui remove os epsodios

    if(cont_temp == 1){

        if(type_temp == 'temp1'){

            let s1_btn_eps1 = document.getElementById('s1_btn_eps1')
            let s1_btn_eps2 = document.getElementById('s1_btn_eps2')
            let s1_btn_eps3 = document.getElementById('s1_btn_eps3')
            let s1_btn_eps4 = document.getElementById('s1_btn_eps4')
            let s1_btn_eps5 = document.getElementById('s1_btn_eps5')
            let s1_btn_eps6 = document.getElementById('s1_btn_eps6')
            let s1_btn_eps7 = document.getElementById('s1_btn_eps7')
            let s1_btn_eps8 = document.getElementById('s1_btn_eps8')
            let s1_btn_eps9 = document.getElementById('s1_btn_eps9')
            let s1_btn_eps10 = document.getElementById('s1_btn_eps10')

            eps.removeChild(s1_btn_eps1)
            eps.removeChild(s1_btn_eps2)
            eps.removeChild(s1_btn_eps3)
            eps.removeChild(s1_btn_eps4)
            eps.removeChild(s1_btn_eps5)
            eps.removeChild(s1_btn_eps6)
            eps.removeChild(s1_btn_eps7)
            eps.removeChild(s1_btn_eps8)
            eps.removeChild(s1_btn_eps9)
            eps.removeChild(s1_btn_eps10)

            cont_temp == 0

        }else if(type_temp == 'temp2'){

            let s2_btn_eps1 = document.getElementById('s2_btn_eps1')
            let s2_btn_eps2 = document.getElementById('s2_btn_eps2')
            let s2_btn_eps3 = document.getElementById('s2_btn_eps3')
            let s2_btn_eps4 = document.getElementById('s2_btn_eps4')
            let s2_btn_eps5 = document.getElementById('s2_btn_eps5')
            let s2_btn_eps6 = document.getElementById('s2_btn_eps6')
            let s2_btn_eps7 = document.getElementById('s2_btn_eps7')
            let s2_btn_eps8 = document.getElementById('s2_btn_eps8')
            let s2_btn_eps9 = document.getElementById('s2_btn_eps9')
            let s2_btn_eps10 = document.getElementById('s2_btn_eps10')

            eps.removeChild(s2_btn_eps1)
            eps.removeChild(s2_btn_eps2)
            eps.removeChild(s2_btn_eps3)
            eps.removeChild(s2_btn_eps4)
            eps.removeChild(s2_btn_eps5)
            eps.removeChild(s2_btn_eps6)
            eps.removeChild(s2_btn_eps7)
            eps.removeChild(s2_btn_eps8)
            eps.removeChild(s2_btn_eps9)
            eps.removeChild(s2_btn_eps10)

            cont_temp == 0
                
        }else if( type_temp == 'temp3'){

            let s3_btn_eps1 = document.getElementById('s3_btn_eps1')
            let s3_btn_eps2 = document.getElementById('s3_btn_eps2')
            let s3_btn_eps3 = document.getElementById('s3_btn_eps3')
            let s3_btn_eps4 = document.getElementById('s3_btn_eps4')
            let s3_btn_eps5 = document.getElementById('s3_btn_eps5')
            let s3_btn_eps6 = document.getElementById('s3_btn_eps6')
            let s3_btn_eps7 = document.getElementById('s3_btn_eps7')
            let s3_btn_eps8 = document.getElementById('s3_btn_eps8')
            let s3_btn_eps9 = document.getElementById('s3_btn_eps9')
            let s3_btn_eps10 = document.getElementById('s3_btn_eps10')

            eps.removeChild(s3_btn_eps1)
            eps.removeChild(s3_btn_eps2)
            eps.removeChild(s3_btn_eps3)
            eps.removeChild(s3_btn_eps4)
            eps.removeChild(s3_btn_eps5)
            eps.removeChild(s3_btn_eps6)
            eps.removeChild(s3_btn_eps7)
            eps.removeChild(s3_btn_eps8)
            eps.removeChild(s3_btn_eps9)
            eps.removeChild(s3_btn_eps10)

            cont_temp == 0

        }else if( type_temp == 'temp4'){

            let s4_btn_eps1 = document.getElementById('s4_btn_eps1')
            let s4_btn_eps2 = document.getElementById('s4_btn_eps2')
            let s4_btn_eps3 = document.getElementById('s4_btn_eps3')
            let s4_btn_eps4 = document.getElementById('s4_btn_eps4')
            let s4_btn_eps5 = document.getElementById('s4_btn_eps5')
            let s4_btn_eps6 = document.getElementById('s4_btn_eps6')
            let s4_btn_eps7 = document.getElementById('s4_btn_eps7')
            let s4_btn_eps8 = document.getElementById('s4_btn_eps8')
            let s4_btn_eps9 = document.getElementById('s4_btn_eps9')
            let s4_btn_eps10 = document.getElementById('s4_btn_eps10')

            eps.removeChild(s4_btn_eps1)
            eps.removeChild(s4_btn_eps2)
            eps.removeChild(s4_btn_eps3)
            eps.removeChild(s4_btn_eps4)
            eps.removeChild(s4_btn_eps5)
            eps.removeChild(s4_btn_eps6)
            eps.removeChild(s4_btn_eps7)
            eps.removeChild(s4_btn_eps8)
            eps.removeChild(s4_btn_eps9)
            eps.removeChild(s4_btn_eps10)

            cont_temp == 0

        }else if( type_temp == 'temp5'){

            let s5_btn_eps1 = document.getElementById('s5_btn_eps1')
            let s5_btn_eps2 = document.getElementById('s5_btn_eps2')
            let s5_btn_eps3 = document.getElementById('s5_btn_eps3')
            let s5_btn_eps4 = document.getElementById('s5_btn_eps4')
            let s5_btn_eps5 = document.getElementById('s5_btn_eps5')
            let s5_btn_eps6 = document.getElementById('s5_btn_eps6')
            let s5_btn_eps7 = document.getElementById('s5_btn_eps7')
            let s5_btn_eps8 = document.getElementById('s5_btn_eps8')
            let s5_btn_eps9 = document.getElementById('s5_btn_eps9')
            let s5_btn_eps10 = document.getElementById('s5_btn_eps10')

            eps.removeChild(s5_btn_eps1)
            eps.removeChild(s5_btn_eps2)
            eps.removeChild(s5_btn_eps3)
            eps.removeChild(s5_btn_eps4)
            eps.removeChild(s5_btn_eps5)
            eps.removeChild(s5_btn_eps6)
            eps.removeChild(s5_btn_eps7)
            eps.removeChild(s5_btn_eps8)
            eps.removeChild(s5_btn_eps9)
            eps.removeChild(s5_btn_eps10)

            cont_temp == 0

        }else if( type_temp == 'temp6'){

            let s6_btn_eps1 = document.getElementById('s6_btn_eps1')
            let s6_btn_eps2 = document.getElementById('s6_btn_eps2')
            let s6_btn_eps3 = document.getElementById('s6_btn_eps3')
            let s6_btn_eps4 = document.getElementById('s6_btn_eps4')
            let s6_btn_eps5 = document.getElementById('s6_btn_eps5')
            let s6_btn_eps6 = document.getElementById('s6_btn_eps6')
            let s6_btn_eps7 = document.getElementById('s6_btn_eps7')
            let s6_btn_eps8 = document.getElementById('s6_btn_eps8')
            let s6_btn_eps9 = document.getElementById('s6_btn_eps9')
            let s6_btn_eps10 = document.getElementById('s6_btn_eps10')

            eps.removeChild(s6_btn_eps1)
            eps.removeChild(s6_btn_eps2)
            eps.removeChild(s6_btn_eps3)
            eps.removeChild(s6_btn_eps4)
            eps.removeChild(s6_btn_eps5)
            eps.removeChild(s6_btn_eps6)
            eps.removeChild(s6_btn_eps7)
            eps.removeChild(s6_btn_eps8)
            eps.removeChild(s6_btn_eps9)
            eps.removeChild(s6_btn_eps10)

            cont_temp == 0

        }else if( type_temp == 'temp8'){

            let s8_btn_eps1 = document.getElementById('s8_btn_eps1')
            let s8_btn_eps2 = document.getElementById('s8_btn_eps2')
            let s8_btn_eps3 = document.getElementById('s8_btn_eps3')
            let s8_btn_eps4 = document.getElementById('s8_btn_eps4')
            let s8_btn_eps5 = document.getElementById('s8_btn_eps5')
            let s8_btn_eps6 = document.getElementById('s8_btn_eps6')

            eps.removeChild(s8_btn_eps1)
            eps.removeChild(s8_btn_eps2)
            eps.removeChild(s8_btn_eps3)
            eps.removeChild(s8_btn_eps4)
            eps.removeChild(s8_btn_eps5)
            eps.removeChild(s8_btn_eps6)

            cont_temp == 0

        }else if( type_temp == 'temp'){

            cont_temp == 0
        }
    }

    /* EPS 01 */

    let s7_p1 = document.createElement('p')
    let s7_img1 = document.createElement('img')
    let s7_P1 = document.createElement('p')
    let s7_btn_eps1 = document.createElement('button')
        
    s7_btn_eps1.className = 'btn_eps'
    s7_btn_eps1.id = 's7_btn_eps1'
    s7_img1.className = 'logo_imperio'
    s7_img1.src = capa_eps[7]
    s7_img1.style = "width: 20%; opacity: 1;"

    s7_p1.innerHTML = '1'
    s7_P1.innerHTML = 'Epsódio 01'

    eps.appendChild(s7_btn_eps1)

    s7_btn_eps1.appendChild(s7_p1)
    s7_btn_eps1.appendChild(s7_img1)
    s7_btn_eps1.appendChild(s7_P1)

    s7_btn_eps1.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[7]
        
        videoPlayer.src = caminho + s7_eps_[1] //AQUI TEM QUE MUDAR O INDECE DE ACORDO COM A TEMPORADA
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 01 */


    /* EPS 02 */

    let s7_p2 = document.createElement('p')
    let s7_btn_eps2 = document.createElement('button')
    let s7_img2 = document.createElement('img')
    let s7_P2 = document.createElement('p')
        
    s7_btn_eps2.className = 'btn_eps'
    s7_btn_eps2.id = 's7_btn_eps2'
    s7_img2.className = 'logo_imperio'
    s7_img2.src = capa_eps[7]
    s7_img2.style = "width: 20%; opacity: 1;"

    s7_p2.innerHTML = '2'
    s7_P2.innerHTML = 'Epsódio 02'

    eps.appendChild(s7_btn_eps2)

    s7_btn_eps2.appendChild(s7_p2)
    s7_btn_eps2.appendChild(s7_img2)
    s7_btn_eps2.appendChild(s7_P2)

    s7_btn_eps2.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[7]
        
        videoPlayer.src = caminho + s7_eps_[2]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()
        
    }) /* FIM EPS 02 */

    /* EPS 03 */

    let s7_p3 = document.createElement('p')
    let s7_img3 = document.createElement('img')
    let s7_P3 = document.createElement('p')
    let s7_btn_eps3 = document.createElement('button')
        
    s7_btn_eps3.className = 'btn_eps'
    s7_btn_eps3.id = 's7_btn_eps3'
    s7_img3.className = 'logo_imperio'
    s7_img3.src = capa_eps[7]
    s7_img3.style = "width: 20%; opacity: 1;"

    s7_p3.innerHTML = '3'
    s7_P3.innerHTML = 'Epsódio 03'

    eps.appendChild(s7_btn_eps3)

    s7_btn_eps3.appendChild(s7_p3)
    s7_btn_eps3.appendChild(s7_img3)
    s7_btn_eps3.appendChild(s7_P3)

    s7_btn_eps3.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[7]
        
        videoPlayer.src = caminho + s7_eps_[3]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 03 */

    /* EPS 04 */

    let s7_p4 = document.createElement('p')
    let s7_img4 = document.createElement('img')
    let s7_P4 = document.createElement('p')
    let s7_btn_eps4 = document.createElement('button')
    
    s7_btn_eps4.className = 'btn_eps'
    s7_btn_eps4.id = 's7_btn_eps4'
    s7_img4.className = 'logo_imperio'
    s7_img4.src = capa_eps[7]
    s7_img4.style = "width: 20%; opacity: 1;"

    s7_p4.innerHTML = '4'
    s7_P4.innerHTML = 'Epsódio 04'

    eps.appendChild(s7_btn_eps4)

    s7_btn_eps4.appendChild(s7_p4)
    s7_btn_eps4.appendChild(s7_img4)
    s7_btn_eps4.appendChild(s7_P4)

    s7_btn_eps4.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')

        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[7]
        
        videoPlayer.src = caminho + s7_eps_[4]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 04 */

    /* EPS 05 */

    let s7_p5 = document.createElement('p')
    let s7_img5 = document.createElement('img')
    let s7_P5 = document.createElement('p')
    let s7_btn_eps5 = document.createElement('button')
        
    s7_btn_eps5.className = 'btn_eps'
    s7_btn_eps5.id = 's7_btn_eps5'
    s7_img5.className = 'logo_imperio'
    s7_img5.src = capa_eps[7]
    s7_img5.style = "width: 20%; opacity: 1;"

    s7_p5.innerHTML = '5'
    s7_P5.innerHTML = 'Epsódio 05'

    eps.appendChild(s7_btn_eps5)

    s7_btn_eps5.appendChild(s7_p5)
    s7_btn_eps5.appendChild(s7_img5)
    s7_btn_eps5.appendChild(s7_P5)

    s7_btn_eps5.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[7]
        
        videoPlayer.src = caminho + s7_eps_[5]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 05 */

    /* EPS 06 */

    let s7_p6 = document.createElement('p')
    let s7_img6 = document.createElement('img')
    let s7_P6 = document.createElement('p')
    let s7_btn_eps6 = document.createElement('button')
    
    s7_btn_eps6.className = 'btn_eps'
    s7_btn_eps6.id = 's7_btn_eps6'
    s7_img6.className = 'logo_imperio'
    s7_img6.src = capa_eps[7]
    s7_img6.style = "width: 20%; opacity: 1;"

    s7_p6.innerHTML = '6'
    s7_P6.innerHTML = 'Epsódio 06'

    eps.appendChild(s7_btn_eps6)

    s7_btn_eps6.appendChild(s7_p6)
    s7_btn_eps6.appendChild(s7_img6)
    s7_btn_eps6.appendChild(s7_P6)

    s7_btn_eps6.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[7]
        
        videoPlayer.src = caminho + s7_eps_[6]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 06 */

    /* EPS 07 */

    let s7_p7 = document.createElement('p')
    let s7_img7 = document.createElement('img')
    let s7_P7 = document.createElement('p')
    let s7_btn_eps7 = document.createElement('button')
        
    s7_btn_eps7.className = 'btn_eps'
    s7_btn_eps7.id = 's7_btn_eps7'
    s7_img7.className = 'logo_imperio'
    s7_img7.src = capa_eps[7]
    s7_img7.style = "width: 20%; opacity: 1;"

    s7_p7.innerHTML = '7'
    s7_P7.innerHTML = 'Epsódio 07'

    eps.appendChild(s7_btn_eps7)

    s7_btn_eps7.appendChild(s7_p7)
    s7_btn_eps7.appendChild(s7_img7)
    s7_btn_eps7.appendChild(s7_P7)

    s7_btn_eps7.addEventListener('click',()=>{

        let btn_fechar = document.getElementById('fechar')
        let play_temporadas = document.getElementById('temporadas')
        let play_video = document.getElementById('play_video')

        play_temporadas.setAttribute('style','display:none')
        btn_fechar.setAttribute('style','display:block')
        play_video.setAttribute('style','display:block')
        
        document.getElementById("triler").pause()

        document.querySelector('.logo').setAttribute('style','display:none')

        let videoPlayer = document.querySelector(".videoPlayer")

        videoPlayer.poster =  capa_video[7]
        
        videoPlayer.src = caminho + s7_eps_[7]
        
        videoPlayer.setAttribute('style', 'display:block')
        
        document.querySelector(".videoPlayer").play()

    }) /* FIM EPS 07 */

    cont_temp = 1
    type_temp = 'temp7'
    console.log(type_temp)

} /* FIM TEMPORADA 07 */


/* TEMPORADA 08 */

    else if (option_temp[selct_temp].value == 'temp8'){

        //Aqui remove os epsodios

        if(cont_temp == 1){

            if(type_temp == 'temp1'){

                let s1_btn_eps1 = document.getElementById('s1_btn_eps1')
                let s1_btn_eps2 = document.getElementById('s1_btn_eps2')
                let s1_btn_eps3 = document.getElementById('s1_btn_eps3')
                let s1_btn_eps4 = document.getElementById('s1_btn_eps4')
                let s1_btn_eps5 = document.getElementById('s1_btn_eps5')
                let s1_btn_eps6 = document.getElementById('s1_btn_eps6')
                let s1_btn_eps7 = document.getElementById('s1_btn_eps7')
                let s1_btn_eps8 = document.getElementById('s1_btn_eps8')
                let s1_btn_eps9 = document.getElementById('s1_btn_eps9')
                let s1_btn_eps10 = document.getElementById('s1_btn_eps10')

                eps.removeChild(s1_btn_eps1)
                eps.removeChild(s1_btn_eps2)
                eps.removeChild(s1_btn_eps3)
                eps.removeChild(s1_btn_eps4)
                eps.removeChild(s1_btn_eps5)
                eps.removeChild(s1_btn_eps6)
                eps.removeChild(s1_btn_eps7)
                eps.removeChild(s1_btn_eps8)
                eps.removeChild(s1_btn_eps9)
                eps.removeChild(s1_btn_eps10)

                cont_temp == 0

            }else if(type_temp == 'temp2'){

                let s2_btn_eps1 = document.getElementById('s2_btn_eps1')
                let s2_btn_eps2 = document.getElementById('s2_btn_eps2')
                let s2_btn_eps3 = document.getElementById('s2_btn_eps3')
                let s2_btn_eps4 = document.getElementById('s2_btn_eps4')
                let s2_btn_eps5 = document.getElementById('s2_btn_eps5')
                let s2_btn_eps6 = document.getElementById('s2_btn_eps6')
                let s2_btn_eps7 = document.getElementById('s2_btn_eps7')
                let s2_btn_eps8 = document.getElementById('s2_btn_eps8')
                let s2_btn_eps9 = document.getElementById('s2_btn_eps9')
                let s2_btn_eps10 = document.getElementById('s2_btn_eps10')

                eps.removeChild(s2_btn_eps1)
                eps.removeChild(s2_btn_eps2)
                eps.removeChild(s2_btn_eps3)
                eps.removeChild(s2_btn_eps4)
                eps.removeChild(s2_btn_eps5)
                eps.removeChild(s2_btn_eps6)
                eps.removeChild(s2_btn_eps7)
                eps.removeChild(s2_btn_eps8)
                eps.removeChild(s2_btn_eps9)
                eps.removeChild(s2_btn_eps10)

                cont_temp == 0
                    
            }else if( type_temp == 'temp3'){

                let s3_btn_eps1 = document.getElementById('s3_btn_eps1')
                let s3_btn_eps2 = document.getElementById('s3_btn_eps2')
                let s3_btn_eps3 = document.getElementById('s3_btn_eps3')
                let s3_btn_eps4 = document.getElementById('s3_btn_eps4')
                let s3_btn_eps5 = document.getElementById('s3_btn_eps5')
                let s3_btn_eps6 = document.getElementById('s3_btn_eps6')
                let s3_btn_eps7 = document.getElementById('s3_btn_eps7')
                let s3_btn_eps8 = document.getElementById('s3_btn_eps8')
                let s3_btn_eps9 = document.getElementById('s3_btn_eps9')
                let s3_btn_eps10 = document.getElementById('s3_btn_eps10')

                eps.removeChild(s3_btn_eps1)
                eps.removeChild(s3_btn_eps2)
                eps.removeChild(s3_btn_eps3)
                eps.removeChild(s3_btn_eps4)
                eps.removeChild(s3_btn_eps5)
                eps.removeChild(s3_btn_eps6)
                eps.removeChild(s3_btn_eps7)
                eps.removeChild(s3_btn_eps8)
                eps.removeChild(s3_btn_eps9)
                eps.removeChild(s3_btn_eps10)

                cont_temp == 0

            }else if( type_temp == 'temp4'){

                let s4_btn_eps1 = document.getElementById('s4_btn_eps1')
                let s4_btn_eps2 = document.getElementById('s4_btn_eps2')
                let s4_btn_eps3 = document.getElementById('s4_btn_eps3')
                let s4_btn_eps4 = document.getElementById('s4_btn_eps4')
                let s4_btn_eps5 = document.getElementById('s4_btn_eps5')
                let s4_btn_eps6 = document.getElementById('s4_btn_eps6')
                let s4_btn_eps7 = document.getElementById('s4_btn_eps7')
                let s4_btn_eps8 = document.getElementById('s4_btn_eps8')
                let s4_btn_eps9 = document.getElementById('s4_btn_eps9')
                let s4_btn_eps10 = document.getElementById('s4_btn_eps10')

                eps.removeChild(s4_btn_eps1)
                eps.removeChild(s4_btn_eps2)
                eps.removeChild(s4_btn_eps3)
                eps.removeChild(s4_btn_eps4)
                eps.removeChild(s4_btn_eps5)
                eps.removeChild(s4_btn_eps6)
                eps.removeChild(s4_btn_eps7)
                eps.removeChild(s4_btn_eps8)
                eps.removeChild(s4_btn_eps9)
                eps.removeChild(s4_btn_eps10)

                cont_temp == 0

            }else if( type_temp == 'temp5'){

                let s5_btn_eps1 = document.getElementById('s5_btn_eps1')
                let s5_btn_eps2 = document.getElementById('s5_btn_eps2')
                let s5_btn_eps3 = document.getElementById('s5_btn_eps3')
                let s5_btn_eps4 = document.getElementById('s5_btn_eps4')
                let s5_btn_eps5 = document.getElementById('s5_btn_eps5')
                let s5_btn_eps6 = document.getElementById('s5_btn_eps6')
                let s5_btn_eps7 = document.getElementById('s5_btn_eps7')
                let s5_btn_eps8 = document.getElementById('s5_btn_eps8')
                let s5_btn_eps9 = document.getElementById('s5_btn_eps9')
                let s5_btn_eps10 = document.getElementById('s5_btn_eps10')

                eps.removeChild(s5_btn_eps1)
                eps.removeChild(s5_btn_eps2)
                eps.removeChild(s5_btn_eps3)
                eps.removeChild(s5_btn_eps4)
                eps.removeChild(s5_btn_eps5)
                eps.removeChild(s5_btn_eps6)
                eps.removeChild(s5_btn_eps7)
                eps.removeChild(s5_btn_eps8)
                eps.removeChild(s5_btn_eps9)
                eps.removeChild(s5_btn_eps10)

                cont_temp == 0

            }else if( type_temp == 'temp6'){

                let s6_btn_eps1 = document.getElementById('s6_btn_eps1')
                let s6_btn_eps2 = document.getElementById('s6_btn_eps2')
                let s6_btn_eps3 = document.getElementById('s6_btn_eps3')
                let s6_btn_eps4 = document.getElementById('s6_btn_eps4')
                let s6_btn_eps5 = document.getElementById('s6_btn_eps5')
                let s6_btn_eps6 = document.getElementById('s6_btn_eps6')
                let s6_btn_eps7 = document.getElementById('s6_btn_eps7')
                let s6_btn_eps8 = document.getElementById('s6_btn_eps8')
                let s6_btn_eps9 = document.getElementById('s6_btn_eps9')
                let s6_btn_eps10 = document.getElementById('s6_btn_eps10')

                eps.removeChild(s6_btn_eps1)
                eps.removeChild(s6_btn_eps2)
                eps.removeChild(s6_btn_eps3)
                eps.removeChild(s6_btn_eps4)
                eps.removeChild(s6_btn_eps5)
                eps.removeChild(s6_btn_eps6)
                eps.removeChild(s6_btn_eps7)
                eps.removeChild(s6_btn_eps8)
                eps.removeChild(s6_btn_eps9)
                eps.removeChild(s6_btn_eps10)

                cont_temp == 0

            }else if( type_temp == 'temp7'){

                let s7_btn_eps1 = document.getElementById('s7_btn_eps1')
                let s7_btn_eps2 = document.getElementById('s7_btn_eps2')
                let s7_btn_eps3 = document.getElementById('s7_btn_eps3')
                let s7_btn_eps4 = document.getElementById('s7_btn_eps4')
                let s7_btn_eps5 = document.getElementById('s7_btn_eps5')
                let s7_btn_eps6 = document.getElementById('s7_btn_eps6')
                let s7_btn_eps7 = document.getElementById('s7_btn_eps7')

                eps.removeChild(s7_btn_eps1)
                eps.removeChild(s7_btn_eps2)
                eps.removeChild(s7_btn_eps3)
                eps.removeChild(s7_btn_eps4)
                eps.removeChild(s7_btn_eps5)
                eps.removeChild(s7_btn_eps6)
                eps.removeChild(s7_btn_eps7)

                cont_temp == 0

            }else if( type_temp == 'temp'){

                cont_temp == 0
            }
        }

        /* EPS 01 */

        let s8_p1 = document.createElement('p')
        let s8_img1 = document.createElement('img')
        let s8_P1 = document.createElement('p')
        let s8_btn_eps1 = document.createElement('button')
            
        s8_btn_eps1.className = 'btn_eps'
        s8_btn_eps1.id = 's8_btn_eps1'
        s8_img1.className = 'logo_imperio'
        s8_img1.src = capa_eps[8]
        s8_img1.style = "width: 20%; opacity: 1;"

        s8_p1.innerHTML = '1'
        s8_P1.innerHTML = 'Epsódio 01'

        eps.appendChild(s8_btn_eps1)

        s8_btn_eps1.appendChild(s8_p1)
        s8_btn_eps1.appendChild(s8_img1)
        s8_btn_eps1.appendChild(s8_P1)

        s8_btn_eps1.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
            
            document.getElementById("triler").pause()

            document.querySelector('.logo').setAttribute('style','display:none')

            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[8]
            
            videoPlayer.src = caminho + s8_eps_[1] //AQUI TEM QUE MUDAR O INDECE DE ACORDO COM A TEMPORADA
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 01 */


        /* EPS 02 */

        let s8_p2 = document.createElement('p')
        let s8_btn_eps2 = document.createElement('button')
        let s8_img2 = document.createElement('img')
        let s8_P2 = document.createElement('p')
            
        s8_btn_eps2.className = 'btn_eps'
        s8_btn_eps2.id = 's8_btn_eps2'
        s8_img2.className = 'logo_imperio'
        s8_img2.src = capa_eps[8]
        s8_img2.style = "width: 20%; opacity: 1;"

        s8_p2.innerHTML = '2'
        s8_P2.innerHTML = 'Epsódio 02'

        eps.appendChild(s8_btn_eps2)

        s8_btn_eps2.appendChild(s8_p2)
        s8_btn_eps2.appendChild(s8_img2)
        s8_btn_eps2.appendChild(s8_P2)

        s8_btn_eps2.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
            
            document.getElementById("triler").pause()

            document.querySelector('.logo').setAttribute('style','display:none')

            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[8]
            
            videoPlayer.src = caminho + s8_eps_[2]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()
            
        }) /* FIM EPS 02 */

        /* EPS 03 */

        let s8_p3 = document.createElement('p')
        let s8_img3 = document.createElement('img')
        let s8_P3 = document.createElement('p')
        let s8_btn_eps3 = document.createElement('button')
            
        s8_btn_eps3.className = 'btn_eps'
        s8_btn_eps3.id = 's8_btn_eps3'
        s8_img3.className = 'logo_imperio'
        s8_img3.src = capa_eps[8]
        s8_img3.style = "width: 20%; opacity: 1;"

        s8_p3.innerHTML = '3'
        s8_P3.innerHTML = 'Epsódio 03'

        eps.appendChild(s8_btn_eps3)

        s8_btn_eps3.appendChild(s8_p3)
        s8_btn_eps3.appendChild(s8_img3)
        s8_btn_eps3.appendChild(s8_P3)

        s8_btn_eps3.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
            
            document.getElementById("triler").pause()

            document.querySelector('.logo').setAttribute('style','display:none')

            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[8]
            
            videoPlayer.src = caminho + s8_eps_[3]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 03 */

        /* EPS 04 */

        let s8_p4 = document.createElement('p')
        let s8_img4 = document.createElement('img')
        let s8_P4 = document.createElement('p')
        let s8_btn_eps4 = document.createElement('button')
        
        s8_btn_eps4.className = 'btn_eps'
        s8_btn_eps4.id = 's8_btn_eps4'
        s8_img4.className = 'logo_imperio'
        s8_img4.src = capa_eps[8]
        s8_img4.style = "width: 20%; opacity: 1;"

        s8_p4.innerHTML = '4'
        s8_P4.innerHTML = 'Epsódio 04'

        eps.appendChild(s8_btn_eps4)

        s8_btn_eps4.appendChild(s8_p4)
        s8_btn_eps4.appendChild(s8_img4)
        s8_btn_eps4.appendChild(s8_P4)

        s8_btn_eps4.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')

            document.getElementById("triler").pause()

            document.querySelector('.logo').setAttribute('style','display:none')

            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[8]
            
            videoPlayer.src = caminho + s8_eps_[4]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 04 */

        /* EPS 05 */

        let s8_p5 = document.createElement('p')
        let s8_img5 = document.createElement('img')
        let s8_P5 = document.createElement('p')
        let s8_btn_eps5 = document.createElement('button')
            
        s8_btn_eps5.className = 'btn_eps'
        s8_btn_eps5.id = 's8_btn_eps5'
        s8_img5.className = 'logo_imperio'
        s8_img5.src = capa_eps[8]
        s8_img5.style = "width: 20%; opacity: 1;"

        s8_p5.innerHTML = '5'
        s8_P5.innerHTML = 'Epsódio 05'

        eps.appendChild(s8_btn_eps5)

        s8_btn_eps5.appendChild(s8_p5)
        s8_btn_eps5.appendChild(s8_img5)
        s8_btn_eps5.appendChild(s8_P5)

        s8_btn_eps5.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
            
            document.getElementById("triler").pause()

            document.querySelector('.logo').setAttribute('style','display:none')

            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[8]
            
            videoPlayer.src = caminho + s8_eps_[5]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 05 */

        /* EPS 06 */

        let s8_p6 = document.createElement('p')
        let s8_img6 = document.createElement('img')
        let s8_P6 = document.createElement('p')
        let s8_btn_eps6 = document.createElement('button')
        
        s8_btn_eps6.className = 'btn_eps'
        s8_btn_eps6.id = 's8_btn_eps6'
        s8_img6.className = 'logo_imperio'
        s8_img6.src = capa_eps[8]
        s8_img6.style = "width: 20%; opacity: 1;"

        s8_p6.innerHTML = '6'
        s8_P6.innerHTML = 'Epsódio 06'

        eps.appendChild(s8_btn_eps6)

        s8_btn_eps6.appendChild(s8_p6)
        s8_btn_eps6.appendChild(s8_img6)
        s8_btn_eps6.appendChild(s8_P6)

        s8_btn_eps6.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
            
            document.getElementById("triler").pause()

            document.querySelector('.logo').setAttribute('style','display:none')

            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[8]
            
            videoPlayer.src = caminho + s8_eps_[6]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 06 */

        cont_temp = 1
        type_temp = 'temp8'
        console.log(type_temp)

    } /* FIM TEMPORADA 08 */

}) /* FIM FUNCTION myeps */