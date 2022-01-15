//Caminho
import {caminho} from '../../js/js_caminho.js'

import {capa_eps, capa_video} from './ultimo_dragao_capa.js'

import {s1_eps_, s2_eps_} from './ultimo_dragao_temp_eps.js'

// Triler

let triler = document.getElementById('triler')

    triler.poster = 'https://oc2-0-767-1335.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYO87kXbQVXax8hu8CL-El-jx8WSx3Sf9V821jC5HxiMBCzZFh6l0heT9bVGOAU2nSE3dUsUz9jkB1epFS9vwucQVABEjhcDkxR3EfHlrZlGVUkMFxK_YB0DH6mj.jpg?r=e2e'

    triler.src = ''

    triler.title = 'O Último Dragão'
    triler.alt = 'O Último Dragão'

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

    triler.src = ''

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
                let s2_btn_eps11 = document.getElementById('s2_btn_eps11')
                let s2_btn_eps12 = document.getElementById('s2_btn_eps12')
                let s2_btn_eps13 = document.getElementById('s2_btn_eps13')
                let s2_btn_eps14 = document.getElementById('s2_btn_eps14')
                let s2_btn_eps15 = document.getElementById('s2_btn_eps15')
                let s2_btn_eps16 = document.getElementById('s2_btn_eps16')
                let s2_btn_eps17 = document.getElementById('s2_btn_eps17')
                let s2_btn_eps18 = document.getElementById('s2_btn_eps18')
                let s2_btn_eps19 = document.getElementById('s2_btn_eps19')
                let s2_btn_eps20 = document.getElementById('s2_btn_eps20')
                let s2_btn_eps21 = document.getElementById('s2_btn_eps21')
                let s2_btn_eps22 = document.getElementById('s2_btn_eps22')
                let s2_btn_eps23 = document.getElementById('s2_btn_eps23')
                let s2_btn_eps24 = document.getElementById('s2_btn_eps24')
                let s2_btn_eps25 = document.getElementById('s2_btn_eps25')
                let s2_btn_eps26 = document.getElementById('s2_btn_eps26')
                let s2_btn_eps27 = document.getElementById('s2_btn_eps27')
                let s2_btn_eps28 = document.getElementById('s2_btn_eps28')
                let s2_btn_eps29 = document.getElementById('s2_btn_eps29')
                let s2_btn_eps30 = document.getElementById('s2_btn_eps30')
                let s2_btn_eps31 = document.getElementById('s2_btn_eps31')
                let s2_btn_eps32 = document.getElementById('s2_btn_eps32')
                let s2_btn_eps33 = document.getElementById('s2_btn_eps33')
                let s2_btn_eps34 = document.getElementById('s2_btn_eps34')
                let s2_btn_eps35 = document.getElementById('s2_btn_eps35')
                let s2_btn_eps36 = document.getElementById('s2_btn_eps36')
                let s2_btn_eps37 = document.getElementById('s2_btn_eps37')
                let s2_btn_eps38 = document.getElementById('s2_btn_eps38')
                let s2_btn_eps39 = document.getElementById('s2_btn_eps39')
                let s2_btn_eps40 = document.getElementById('s2_btn_eps40')
                let s2_btn_eps41 = document.getElementById('s2_btn_eps41')
                let s2_btn_eps42 = document.getElementById('s2_btn_eps42')
                let s2_btn_eps43 = document.getElementById('s2_btn_eps43')
                let s2_btn_eps44 = document.getElementById('s2_btn_eps44')

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
                eps.removeChild(s2_btn_eps11)
                eps.removeChild(s2_btn_eps12)
                eps.removeChild(s2_btn_eps13)
                eps.removeChild(s2_btn_eps14)
                eps.removeChild(s2_btn_eps15)
                eps.removeChild(s2_btn_eps16)
                eps.removeChild(s2_btn_eps17)
                eps.removeChild(s2_btn_eps18)
                eps.removeChild(s2_btn_eps19)
                eps.removeChild(s2_btn_eps20)
                eps.removeChild(s2_btn_eps21)
                eps.removeChild(s2_btn_eps22)
                eps.removeChild(s2_btn_eps23)
                eps.removeChild(s2_btn_eps24)
                eps.removeChild(s2_btn_eps25)
                eps.removeChild(s2_btn_eps26)
                eps.removeChild(s2_btn_eps27)
                eps.removeChild(s2_btn_eps28)
                eps.removeChild(s2_btn_eps29)
                eps.removeChild(s2_btn_eps30)
                eps.removeChild(s2_btn_eps31)
                eps.removeChild(s2_btn_eps32)
                eps.removeChild(s2_btn_eps33)
                eps.removeChild(s2_btn_eps34)
                eps.removeChild(s2_btn_eps35)
                eps.removeChild(s2_btn_eps36)
                eps.removeChild(s2_btn_eps37)
                eps.removeChild(s2_btn_eps38)
                eps.removeChild(s2_btn_eps39)
                eps.removeChild(s2_btn_eps40)
                eps.removeChild(s2_btn_eps41)
                eps.removeChild(s2_btn_eps42)
                eps.removeChild(s2_btn_eps43)
                eps.removeChild(s2_btn_eps44)

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
            
            videoPlayer.src = caminho + s1_eps_[1]
            
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


        /* EPS 11 */

        let s1_p11 = document.createElement('p')
        let s1_img11 = document.createElement('img')
        let s1_P11 = document.createElement('p')
        let s1_btn_eps11 = document.createElement('button')
            
        s1_btn_eps11.className = 'btn_eps'
        s1_btn_eps11.id = 's1_btn_eps11'
        s1_img11.className = 'logo_imperio'
        s1_img11.src = capa_eps[1]
        s1_img11.style = "width: 20%; opacity: 1;"

        s1_p11.innerHTML = '11'
        s1_P11.innerHTML = 'Epsódio 11'

        eps.appendChild(s1_btn_eps11)

        s1_btn_eps11.appendChild(s1_p11)
        s1_btn_eps11.appendChild(s1_img11)
        s1_btn_eps11.appendChild(s1_P11)

        s1_btn_eps11.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s1_eps_[11]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 11 */


        /* EPS 12 */

        let s1_p12 = document.createElement('p')
        let s1_img12 = document.createElement('img')
        let s1_P12 = document.createElement('p')
        let s1_btn_eps12 = document.createElement('button')
            
        s1_btn_eps12.className = 'btn_eps'
        s1_btn_eps12.id = 's1_btn_eps12'
        s1_img12.className = 'logo_imperio'
        s1_img12.src = capa_eps[1]
        s1_img12.style = "width: 20%; opacity: 1;"

        s1_p12.innerHTML = '12'
        s1_P12.innerHTML = 'Epsódio 12'

        eps.appendChild(s1_btn_eps12)

        s1_btn_eps12.appendChild(s1_p12)
        s1_btn_eps12.appendChild(s1_img12)
        s1_btn_eps12.appendChild(s1_P12)

        s1_btn_eps12.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s1_eps_[12]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 12 */


        /* EPS 13 */

        let s1_p13 = document.createElement('p')
        let s1_img13 = document.createElement('img')
        let s1_P13 = document.createElement('p')
        let s1_btn_eps13 = document.createElement('button')
            
        s1_btn_eps13.className = 'btn_eps'
        s1_btn_eps13.id = 's1_btn_eps13'
        s1_img13.className = 'logo_imperio'
        s1_img13.src = capa_eps[1]
        s1_img13.style = "width: 20%; opacity: 1;"

        s1_p13.innerHTML = '13'
        s1_P13.innerHTML = 'Epsódio 13'

        eps.appendChild(s1_btn_eps13)

        s1_btn_eps13.appendChild(s1_p13)
        s1_btn_eps13.appendChild(s1_img13)
        s1_btn_eps13.appendChild(s1_P13)

        s1_btn_eps13.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s1_eps_[13]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 13 */

        /* EPS 14 */

        let s1_p14 = document.createElement('p')
        let s1_img14 = document.createElement('img')
        let s1_P14 = document.createElement('p')
        let s1_btn_eps14 = document.createElement('button')
            
        s1_btn_eps14.className = 'btn_eps'
        s1_btn_eps14.id = 's1_btn_eps14'
        s1_img14.className = 'logo_imperio'
        s1_img14.src = capa_eps[1]
        s1_img14.style = "width: 20%; opacity: 1;"

        s1_p14.innerHTML = '14'
        s1_P14.innerHTML = 'Epsódio 14'

        eps.appendChild(s1_btn_eps14)

        s1_btn_eps14.appendChild(s1_p14)
        s1_btn_eps14.appendChild(s1_img14)
        s1_btn_eps14.appendChild(s1_P14)

        s1_btn_eps14.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s1_eps_[14]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 14 */


        /* EPS 15 */

        let s1_p15 = document.createElement('p')
        let s1_img15 = document.createElement('img')
        let s1_P15 = document.createElement('p')
        let s1_btn_eps15 = document.createElement('button')
            
        s1_btn_eps15.className = 'btn_eps'
        s1_btn_eps15.id = 's1_btn_eps15'
        s1_img15.className = 'logo_imperio'
        s1_img15.src = capa_eps[1]
        s1_img15.style = "width: 20%; opacity: 1;"

        s1_p15.innerHTML = '15'
        s1_P15.innerHTML = 'Epsódio 15'

        eps.appendChild(s1_btn_eps15)

        s1_btn_eps15.appendChild(s1_p15)
        s1_btn_eps15.appendChild(s1_img15)
        s1_btn_eps15.appendChild(s1_P15)

        s1_btn_eps15.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s1_eps_[15]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 15 */


        /* EPS 16 */

        let s1_p16 = document.createElement('p')
        let s1_img16 = document.createElement('img')
        let s1_P16 = document.createElement('p')
        let s1_btn_eps16 = document.createElement('button')
            
        s1_btn_eps16.className = 'btn_eps'
        s1_btn_eps16.id = 's1_btn_eps16'
        s1_img16.className = 'logo_imperio'
        s1_img16.src = capa_eps[1]
        s1_img16.style = "width: 20%; opacity: 1;"

        s1_p16.innerHTML = '16'
        s1_P16.innerHTML = 'Epsódio 16'

        eps.appendChild(s1_btn_eps16)

        s1_btn_eps16.appendChild(s1_p16)
        s1_btn_eps16.appendChild(s1_img16)
        s1_btn_eps16.appendChild(s1_P16)

        s1_btn_eps16.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s1_eps_[16]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 16 */


        /* EPS 17 */

        let s1_p17 = document.createElement('p')
        let s1_img17 = document.createElement('img')
        let s1_P17 = document.createElement('p')
        let s1_btn_eps17 = document.createElement('button')
            
        s1_btn_eps17.className = 'btn_eps'
        s1_btn_eps17.id = 's1_btn_eps17'
        s1_img17.className = 'logo_imperio'
        s1_img17.src = capa_eps[1]
        s1_img17.style = "width: 20%; opacity: 1;"

        s1_p17.innerHTML = '17'
        s1_P17.innerHTML = 'Epsódio 17'

        eps.appendChild(s1_btn_eps17)

        s1_btn_eps17.appendChild(s1_p17)
        s1_btn_eps17.appendChild(s1_img17)
        s1_btn_eps17.appendChild(s1_P17)

        s1_btn_eps17.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s1_eps_[17]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 17 */


        /* EPS 18 */

        let s1_p18 = document.createElement('p')
        let s1_img18 = document.createElement('img')
        let s1_P18 = document.createElement('p')
        let s1_btn_eps18 = document.createElement('button')
            
        s1_btn_eps18.className = 'btn_eps'
        s1_btn_eps18.id = 's1_btn_eps18'
        s1_img18.className = 'logo_imperio'
        s1_img18.src = capa_eps[1]
        s1_img18.style = "width: 20%; opacity: 1;"

        s1_p18.innerHTML = '18'
        s1_P18.innerHTML = 'Epsódio 18'

        eps.appendChild(s1_btn_eps18)

        s1_btn_eps18.appendChild(s1_p18)
        s1_btn_eps18.appendChild(s1_img18)
        s1_btn_eps18.appendChild(s1_P18)

        s1_btn_eps18.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s1_eps_[18]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 18 */


        /* EPS 19 */

        let s1_p19 = document.createElement('p')
        let s1_img19 = document.createElement('img')
        let s1_P19 = document.createElement('p')
        let s1_btn_eps19 = document.createElement('button')
            
        s1_btn_eps19.className = 'btn_eps'
        s1_btn_eps19.id = 's1_btn_eps19'
        s1_img19.className = 'logo_imperio'
        s1_img19.src = capa_eps[1]
        s1_img19.style = "width: 20%; opacity: 1;"

        s1_p19.innerHTML = '19'
        s1_P19.innerHTML = 'Epsódio 19'

        eps.appendChild(s1_btn_eps19)

        s1_btn_eps19.appendChild(s1_p19)
        s1_btn_eps19.appendChild(s1_img19)
        s1_btn_eps19.appendChild(s1_P19)

        s1_btn_eps19.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s1_eps_[19]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 19 */


        /* EPS 20 */

        let s1_p20 = document.createElement('p')
        let s1_img20 = document.createElement('img')
        let s1_P20 = document.createElement('p')
        let s1_btn_eps20 = document.createElement('button')
            
        s1_btn_eps20.className = 'btn_eps'
        s1_btn_eps20.id = 's1_btn_eps20'
        s1_img20.className = 'logo_imperio'
        s1_img20.src = capa_eps[1]
        s1_img20.style = "width: 20%; opacity: 1;"

        s1_p20.innerHTML = '20'
        s1_P20.innerHTML = 'Epsódio 20'

        eps.appendChild(s1_btn_eps20)

        s1_btn_eps20.appendChild(s1_p20)
        s1_btn_eps20.appendChild(s1_img20)
        s1_btn_eps20.appendChild(s1_P20)

        s1_btn_eps20.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s1_eps_[20]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 20 */


        /* EPS 21 */

        let s1_p21 = document.createElement('p')
        let s1_img21 = document.createElement('img')
        let s1_P21 = document.createElement('p')
        let s1_btn_eps21 = document.createElement('button')
            
        s1_btn_eps21.className = 'btn_eps'
        s1_btn_eps21.id = 's1_btn_eps21'
        s1_img21.className = 'logo_imperio'
        s1_img21.src = capa_eps[1]
        s1_img21.style = "width: 20%; opacity: 1;"

        s1_p21.innerHTML = '21'
        s1_P21.innerHTML = 'Epsódio 21'

        eps.appendChild(s1_btn_eps21)

        s1_btn_eps21.appendChild(s1_p21)
        s1_btn_eps21.appendChild(s1_img21)
        s1_btn_eps21.appendChild(s1_P21)

        s1_btn_eps21.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s1_eps_[21]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 21 */


        /* EPS 22 */

        let s1_p22 = document.createElement('p')
        let s1_img22 = document.createElement('img')
        let s1_P22 = document.createElement('p')
        let s1_btn_eps22 = document.createElement('button')
            
        s1_btn_eps22.className = 'btn_eps'
        s1_btn_eps22.id = 's1_btn_eps22'
        s1_img22.className = 'logo_imperio'
        s1_img22.src = capa_eps[1]
        s1_img22.style = "width: 20%; opacity: 1;"

        s1_p22.innerHTML = '22'
        s1_P22.innerHTML = 'Epsódio 22'

        eps.appendChild(s1_btn_eps22)

        s1_btn_eps22.appendChild(s1_p22)
        s1_btn_eps22.appendChild(s1_img22)
        s1_btn_eps22.appendChild(s1_P22)

        s1_btn_eps22.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s1_eps_[22]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 22 */


        /* EPS 23 */

        let s1_p23 = document.createElement('p')
        let s1_img23 = document.createElement('img')
        let s1_P23 = document.createElement('p')
        let s1_btn_eps23 = document.createElement('button')
            
        s1_btn_eps23.className = 'btn_eps'
        s1_btn_eps23.id = 's1_btn_eps23'
        s1_img23.className = 'logo_imperio'
        s1_img23.src = capa_eps[1]
        s1_img23.style = "width: 20%; opacity: 1;"

        s1_p23.innerHTML = '23'
        s1_P23.innerHTML = 'Epsódio 23'

        eps.appendChild(s1_btn_eps23)

        s1_btn_eps23.appendChild(s1_p23)
        s1_btn_eps23.appendChild(s1_img23)
        s1_btn_eps23.appendChild(s1_P23)

        s1_btn_eps23.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s1_eps_[23]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 23 */


        /* EPS 24 */

        let s1_p24 = document.createElement('p')
        let s1_img24 = document.createElement('img')
        let s1_P24 = document.createElement('p')
        let s1_btn_eps24 = document.createElement('button')
            
        s1_btn_eps24.className = 'btn_eps'
        s1_btn_eps24.id = 's1_btn_eps24'
        s1_img24.className = 'logo_imperio'
        s1_img24.src = capa_eps[1]
        s1_img24.style = "width: 20%; opacity: 1;"

        s1_p24.innerHTML = '24'
        s1_P24.innerHTML = 'Epsódio 24'

        eps.appendChild(s1_btn_eps24)

        s1_btn_eps24.appendChild(s1_p24)
        s1_btn_eps24.appendChild(s1_img24)
        s1_btn_eps24.appendChild(s1_P24)

        s1_btn_eps24.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s1_eps_[24]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 24 */


        /* EPS 25 */

        let s1_p25 = document.createElement('p')
        let s1_img25 = document.createElement('img')
        let s1_P25 = document.createElement('p')
        let s1_btn_eps25 = document.createElement('button')
            
        s1_btn_eps25.className = 'btn_eps'
        s1_btn_eps25.id = 's1_btn_eps25'
        s1_img25.className = 'logo_imperio'
        s1_img25.src = capa_eps[1]
        s1_img25.style = "width: 20%; opacity: 1;"

        s1_p25.innerHTML = '25'
        s1_P25.innerHTML = 'Epsódio 25'

        eps.appendChild(s1_btn_eps25)

        s1_btn_eps25.appendChild(s1_p25)
        s1_btn_eps25.appendChild(s1_img25)
        s1_btn_eps25.appendChild(s1_P25)

        s1_btn_eps25.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s1_eps_[25]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 25 */


        /* EPS 26 */

        let s1_p26 = document.createElement('p')
        let s1_img26 = document.createElement('img')
        let s1_P26 = document.createElement('p')
        let s1_btn_eps26 = document.createElement('button')
            
        s1_btn_eps26.className = 'btn_eps'
        s1_btn_eps26.id = 's1_btn_eps26'
        s1_img26.className = 'logo_imperio'
        s1_img26.src = capa_eps[1]
        s1_img26.style = "width: 20%; opacity: 1;"

        s1_p26.innerHTML = '26'
        s1_P26.innerHTML = 'Epsódio 26'

        eps.appendChild(s1_btn_eps26)

        s1_btn_eps26.appendChild(s1_p26)
        s1_btn_eps26.appendChild(s1_img26)
        s1_btn_eps26.appendChild(s1_P26)

        s1_btn_eps26.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s1_eps_[26]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 26 */


        /* EPS 27 */

        let s1_p27 = document.createElement('p')
        let s1_img27 = document.createElement('img')
        let s1_P27 = document.createElement('p')
        let s1_btn_eps27 = document.createElement('button')
            
        s1_btn_eps27.className = 'btn_eps'
        s1_btn_eps27.id = 's1_btn_eps27'
        s1_img27.className = 'logo_imperio'
        s1_img27.src = capa_eps[1]
        s1_img27.style = "width: 20%; opacity: 1;"

        s1_p27.innerHTML = '27'
        s1_P27.innerHTML = 'Epsódio 27'

        eps.appendChild(s1_btn_eps27)

        s1_btn_eps27.appendChild(s1_p27)
        s1_btn_eps27.appendChild(s1_img27)
        s1_btn_eps27.appendChild(s1_P27)

        s1_btn_eps27.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s1_eps_[27]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 27 */


        /* EPS 28 */

        let s1_p28 = document.createElement('p')
        let s1_img28 = document.createElement('img')
        let s1_P28 = document.createElement('p')
        let s1_btn_eps28 = document.createElement('button')
            
        s1_btn_eps28.className = 'btn_eps'
        s1_btn_eps28.id = 's1_btn_eps28'
        s1_img28.className = 'logo_imperio'
        s1_img28.src = capa_eps[1]
        s1_img28.style = "width: 20%; opacity: 1;"

        s1_p28.innerHTML = '28'
        s1_P28.innerHTML = 'Epsódio 28'

        eps.appendChild(s1_btn_eps28)

        s1_btn_eps28.appendChild(s1_p28)
        s1_btn_eps28.appendChild(s1_img28)
        s1_btn_eps28.appendChild(s1_P28)

        s1_btn_eps28.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s1_eps_[28]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 28 */


        /* EPS 29 */

        let s1_p29 = document.createElement('p')
        let s1_img29 = document.createElement('img')
        let s1_P29 = document.createElement('p')
        let s1_btn_eps29 = document.createElement('button')
            
        s1_btn_eps29.className = 'btn_eps'
        s1_btn_eps29.id = 's1_btn_eps29'
        s1_img29.className = 'logo_imperio'
        s1_img29.src = capa_eps[1]
        s1_img29.style = "width: 20%; opacity: 1;"

        s1_p29.innerHTML = '29'
        s1_P29.innerHTML = 'Epsódio 29'

        eps.appendChild(s1_btn_eps29)

        s1_btn_eps29.appendChild(s1_p29)
        s1_btn_eps29.appendChild(s1_img29)
        s1_btn_eps29.appendChild(s1_P29)

        s1_btn_eps29.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s1_eps_[29]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 29 */
        

        /* EPS 30 */

        let s1_p30 = document.createElement('p')
        let s1_img30 = document.createElement('img')
        let s1_P30 = document.createElement('p')
        let s1_btn_eps30 = document.createElement('button')
            
        s1_btn_eps30.className = 'btn_eps'
        s1_btn_eps30.id = 's1_btn_eps30'
        s1_img30.className = 'logo_imperio'
        s1_img30.src = capa_eps[1]
        s1_img30.style = "width: 20%; opacity: 1;"

        s1_p30.innerHTML = '30'
        s1_P30.innerHTML = 'Epsódio 30'

        eps.appendChild(s1_btn_eps30)

        s1_btn_eps30.appendChild(s1_p30)
        s1_btn_eps30.appendChild(s1_img30)
        s1_btn_eps30.appendChild(s1_P30)

        s1_btn_eps30.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s1_eps_[30]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 30 */


        /* EPS 31 */

        let s1_p31 = document.createElement('p')
        let s1_img31 = document.createElement('img')
        let s1_P31 = document.createElement('p')
        let s1_btn_eps31 = document.createElement('button')
            
        s1_btn_eps31.className = 'btn_eps'
        s1_btn_eps31.id = 's1_btn_eps31'
        s1_img31.className = 'logo_imperio'
        s1_img31.src = capa_eps[1]
        s1_img31.style = "width: 20%; opacity: 1;"

        s1_p31.innerHTML = '31'
        s1_P31.innerHTML = 'Epsódio 31'

        eps.appendChild(s1_btn_eps31)

        s1_btn_eps31.appendChild(s1_p31)
        s1_btn_eps31.appendChild(s1_img31)
        s1_btn_eps31.appendChild(s1_P31)

        s1_btn_eps31.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s1_eps_[31]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 31 */


        /* EPS 32 */

        let s1_p32 = document.createElement('p')
        let s1_img32 = document.createElement('img')
        let s1_P32 = document.createElement('p')
        let s1_btn_eps32 = document.createElement('button')
            
        s1_btn_eps32.className = 'btn_eps'
        s1_btn_eps32.id = 's1_btn_eps32'
        s1_img32.className = 'logo_imperio'
        s1_img32.src = capa_eps[1]
        s1_img32.style = "width: 20%; opacity: 1;"

        s1_p32.innerHTML = '32'
        s1_P32.innerHTML = 'Epsódio 32'

        eps.appendChild(s1_btn_eps32)

        s1_btn_eps32.appendChild(s1_p32)
        s1_btn_eps32.appendChild(s1_img32)
        s1_btn_eps32.appendChild(s1_P32)

        s1_btn_eps32.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s1_eps_[32]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 32 */


        /* EPS 33 */

        let s1_p33 = document.createElement('p')
        let s1_img33 = document.createElement('img')
        let s1_P33 = document.createElement('p')
        let s1_btn_eps33 = document.createElement('button')
            
        s1_btn_eps33.className = 'btn_eps'
        s1_btn_eps33.id = 's1_btn_eps33'
        s1_img33.className = 'logo_imperio'
        s1_img33.src = capa_eps[1]
        s1_img33.style = "width: 20%; opacity: 1;"

        s1_p33.innerHTML = '33'
        s1_P33.innerHTML = 'Epsódio 33'

        eps.appendChild(s1_btn_eps33)

        s1_btn_eps33.appendChild(s1_p33)
        s1_btn_eps33.appendChild(s1_img33)
        s1_btn_eps33.appendChild(s1_P33)

        s1_btn_eps33.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s1_eps_[33]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 33 */


        /* EPS 34 */

        let s1_p34 = document.createElement('p')
        let s1_img34 = document.createElement('img')
        let s1_P34 = document.createElement('p')
        let s1_btn_eps34 = document.createElement('button')
            
        s1_btn_eps34.className = 'btn_eps'
        s1_btn_eps34.id = 's1_btn_eps34'
        s1_img34.className = 'logo_imperio'
        s1_img34.src = capa_eps[1]
        s1_img34.style = "width: 20%; opacity: 1;"

        s1_p34.innerHTML = '34'
        s1_P34.innerHTML = 'Epsódio 34'

        eps.appendChild(s1_btn_eps34)

        s1_btn_eps34.appendChild(s1_p34)
        s1_btn_eps34.appendChild(s1_img34)
        s1_btn_eps34.appendChild(s1_P34)

        s1_btn_eps34.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s1_eps_[34]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 34 */


        /* EPS 35 */

        let s1_p35 = document.createElement('p')
        let s1_img35 = document.createElement('img')
        let s1_P35 = document.createElement('p')
        let s1_btn_eps35 = document.createElement('button')
            
        s1_btn_eps35.className = 'btn_eps'
        s1_btn_eps35.id = 's1_btn_eps35'
        s1_img35.className = 'logo_imperio'
        s1_img35.src = capa_eps[1]
        s1_img35.style = "width: 20%; opacity: 1;"

        s1_p35.innerHTML = '35'
        s1_P35.innerHTML = 'Epsódio 35'

        eps.appendChild(s1_btn_eps35)

        s1_btn_eps35.appendChild(s1_p35)
        s1_btn_eps35.appendChild(s1_img35)
        s1_btn_eps35.appendChild(s1_P35)

        s1_btn_eps35.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s1_eps_[35]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 35 */


        /* EPS 36 */

        let s1_p36 = document.createElement('p')
        let s1_img36 = document.createElement('img')
        let s1_P36 = document.createElement('p')
        let s1_btn_eps36 = document.createElement('button')
            
        s1_btn_eps36.className = 'btn_eps'
        s1_btn_eps36.id = 's1_btn_eps36'
        s1_img36.className = 'logo_imperio'
        s1_img36.src = capa_eps[1]
        s1_img36.style = "width: 20%; opacity: 1;"

        s1_p36.innerHTML = '36'
        s1_P36.innerHTML = 'Epsódio 36'

        eps.appendChild(s1_btn_eps36)

        s1_btn_eps36.appendChild(s1_p36)
        s1_btn_eps36.appendChild(s1_img36)
        s1_btn_eps36.appendChild(s1_P36)

        s1_btn_eps36.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s1_eps_[36]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 36 */


        /* EPS 37 */

        let s1_p37 = document.createElement('p')
        let s1_img37 = document.createElement('img')
        let s1_P37 = document.createElement('p')
        let s1_btn_eps37 = document.createElement('button')
            
        s1_btn_eps37.className = 'btn_eps'
        s1_btn_eps37.id = 's1_btn_eps37'
        s1_img37.className = 'logo_imperio'
        s1_img37.src = capa_eps[1]
        s1_img37.style = "width: 20%; opacity: 1;"

        s1_p37.innerHTML = '37'
        s1_P37.innerHTML = 'Epsódio 37'

        eps.appendChild(s1_btn_eps37)

        s1_btn_eps37.appendChild(s1_p37)
        s1_btn_eps37.appendChild(s1_img37)
        s1_btn_eps37.appendChild(s1_P37)

        s1_btn_eps37.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s1_eps_[37]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 37 */


        /* EPS 38 */

        let s1_p38 = document.createElement('p')
        let s1_img38 = document.createElement('img')
        let s1_P38 = document.createElement('p')
        let s1_btn_eps38 = document.createElement('button')
            
        s1_btn_eps38.className = 'btn_eps'
        s1_btn_eps38.id = 's1_btn_eps38'
        s1_img38.className = 'logo_imperio'
        s1_img38.src = capa_eps[1]
        s1_img38.style = "width: 20%; opacity: 1;"

        s1_p38.innerHTML = '38'
        s1_P38.innerHTML = 'Epsódio 38'

        eps.appendChild(s1_btn_eps38)

        s1_btn_eps38.appendChild(s1_p38)
        s1_btn_eps38.appendChild(s1_img38)
        s1_btn_eps38.appendChild(s1_P38)

        s1_btn_eps38.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s1_eps_[38]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 38 */

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
                let s1_btn_eps11 = document.getElementById('s1_btn_eps11')
                let s1_btn_eps12 = document.getElementById('s1_btn_eps12')
                let s1_btn_eps13 = document.getElementById('s1_btn_eps13')
                let s1_btn_eps14 = document.getElementById('s1_btn_eps14')
                let s1_btn_eps15 = document.getElementById('s1_btn_eps15')
                let s1_btn_eps16 = document.getElementById('s1_btn_eps16')
                let s1_btn_eps17 = document.getElementById('s1_btn_eps17')
                let s1_btn_eps18 = document.getElementById('s1_btn_eps18')
                let s1_btn_eps19 = document.getElementById('s1_btn_eps19')
                let s1_btn_eps20 = document.getElementById('s1_btn_eps20')
                let s1_btn_eps21 = document.getElementById('s1_btn_eps21')
                let s1_btn_eps22 = document.getElementById('s1_btn_eps22')
                let s1_btn_eps23 = document.getElementById('s1_btn_eps23')
                let s1_btn_eps24 = document.getElementById('s1_btn_eps24')
                let s1_btn_eps25 = document.getElementById('s1_btn_eps25')
                let s1_btn_eps26 = document.getElementById('s1_btn_eps26')
                let s1_btn_eps27 = document.getElementById('s1_btn_eps27')
                let s1_btn_eps28 = document.getElementById('s1_btn_eps28')
                let s1_btn_eps29 = document.getElementById('s1_btn_eps29')
                let s1_btn_eps30 = document.getElementById('s1_btn_eps30')
                let s1_btn_eps31 = document.getElementById('s1_btn_eps31')
                let s1_btn_eps32 = document.getElementById('s1_btn_eps32')
                let s1_btn_eps33 = document.getElementById('s1_btn_eps33')
                let s1_btn_eps34 = document.getElementById('s1_btn_eps34')
                let s1_btn_eps35 = document.getElementById('s1_btn_eps35')
                let s1_btn_eps36 = document.getElementById('s1_btn_eps36')
                let s1_btn_eps37 = document.getElementById('s1_btn_eps37')
                let s1_btn_eps38 = document.getElementById('s1_btn_eps38')

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
                eps.removeChild(s1_btn_eps11)
                eps.removeChild(s1_btn_eps12)
                eps.removeChild(s1_btn_eps13)
                eps.removeChild(s1_btn_eps14)
                eps.removeChild(s1_btn_eps15)
                eps.removeChild(s1_btn_eps16)
                eps.removeChild(s1_btn_eps17)
                eps.removeChild(s1_btn_eps18)
                eps.removeChild(s1_btn_eps19)
                eps.removeChild(s1_btn_eps20)
                eps.removeChild(s1_btn_eps21)
                eps.removeChild(s1_btn_eps22)
                eps.removeChild(s1_btn_eps23)
                eps.removeChild(s1_btn_eps24)
                eps.removeChild(s1_btn_eps25)
                eps.removeChild(s1_btn_eps26)
                eps.removeChild(s1_btn_eps27)
                eps.removeChild(s1_btn_eps28)
                eps.removeChild(s1_btn_eps29)
                eps.removeChild(s1_btn_eps30)
                eps.removeChild(s1_btn_eps31)
                eps.removeChild(s1_btn_eps32)
                eps.removeChild(s1_btn_eps33)
                eps.removeChild(s1_btn_eps34)
                eps.removeChild(s1_btn_eps35)
                eps.removeChild(s1_btn_eps36)
                eps.removeChild(s1_btn_eps37)
                eps.removeChild(s1_btn_eps38)

                cont_temp == 0
        
            }else if( type_temp == 'temp'){
                
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


        /* EPS 11 */

        let s2_p11 = document.createElement('p')
        let s2_img11 = document.createElement('img')
        let s2_P11 = document.createElement('p')
        let s2_btn_eps11 = document.createElement('button')
            
        s2_btn_eps11.className = 'btn_eps'
        s2_btn_eps11.id = 's2_btn_eps11'
        s2_img11.className = 'logo_imperio'
        s2_img11.src = capa_eps[2]
        s2_img11.style = "width: 20%; opacity: 1;"

        s2_p11.innerHTML = '11'
        s2_P11.innerHTML = 'Epsódio 11'

        eps.appendChild(s2_btn_eps11)

        s2_btn_eps11.appendChild(s2_p11)
        s2_btn_eps11.appendChild(s2_img11)
        s2_btn_eps11.appendChild(s2_P11)

        s2_btn_eps11.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s2_eps_[11]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 11 */


        /* EPS 12 */

        let s2_p12 = document.createElement('p')
        let s2_img12 = document.createElement('img')
        let s2_P12 = document.createElement('p')
        let s2_btn_eps12 = document.createElement('button')
            
        s2_btn_eps12.className = 'btn_eps'
        s2_btn_eps12.id = 's2_btn_eps12'
        s2_img12.className = 'logo_imperio'
        s2_img12.src = capa_eps[2]
        s2_img12.style = "width: 20%; opacity: 1;"

        s2_p12.innerHTML = '12'
        s2_P12.innerHTML = 'Epsódio 12'

        eps.appendChild(s2_btn_eps12)

        s2_btn_eps12.appendChild(s2_p12)
        s2_btn_eps12.appendChild(s2_img12)
        s2_btn_eps12.appendChild(s2_P12)

        s2_btn_eps12.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s2_eps_[12]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 12 */


        /* EPS 13 */

        let s2_p13 = document.createElement('p')
        let s2_img13 = document.createElement('img')
        let s2_P13 = document.createElement('p')
        let s2_btn_eps13 = document.createElement('button')
            
        s2_btn_eps13.className = 'btn_eps'
        s2_btn_eps13.id = 's2_btn_eps13'
        s2_img13.className = 'logo_imperio'
        s2_img13.src = capa_eps[2]
        s2_img13.style = "width: 20%; opacity: 1;"

        s2_p13.innerHTML = '13'
        s2_P13.innerHTML = 'Epsódio 13'

        eps.appendChild(s2_btn_eps13)

        s2_btn_eps13.appendChild(s2_p13)
        s2_btn_eps13.appendChild(s2_img13)
        s2_btn_eps13.appendChild(s2_P13)

        s2_btn_eps13.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s2_eps_[13]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 13 */

        /* EPS 14 */

        let s2_p14 = document.createElement('p')
        let s2_img14 = document.createElement('img')
        let s2_P14 = document.createElement('p')
        let s2_btn_eps14 = document.createElement('button')
            
        s2_btn_eps14.className = 'btn_eps'
        s2_btn_eps14.id = 's2_btn_eps14'
        s2_img14.className = 'logo_imperio'
        s2_img14.src = capa_eps[2]
        s2_img14.style = "width: 20%; opacity: 1;"

        s2_p14.innerHTML = '14'
        s2_P14.innerHTML = 'Epsódio 14'

        eps.appendChild(s2_btn_eps14)

        s2_btn_eps14.appendChild(s2_p14)
        s2_btn_eps14.appendChild(s2_img14)
        s2_btn_eps14.appendChild(s2_P14)

        s2_btn_eps14.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s2_eps_[14]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 14 */


        /* EPS 15 */

        let s2_p15 = document.createElement('p')
        let s2_img15 = document.createElement('img')
        let s2_P15 = document.createElement('p')
        let s2_btn_eps15 = document.createElement('button')
            
        s2_btn_eps15.className = 'btn_eps'
        s2_btn_eps15.id = 's2_btn_eps15'
        s2_img15.className = 'logo_imperio'
        s2_img15.src = capa_eps[2]
        s2_img15.style = "width: 20%; opacity: 1;"

        s2_p15.innerHTML = '15'
        s2_P15.innerHTML = 'Epsódio 15'

        eps.appendChild(s2_btn_eps15)

        s2_btn_eps15.appendChild(s2_p15)
        s2_btn_eps15.appendChild(s2_img15)
        s2_btn_eps15.appendChild(s2_P15)

        s2_btn_eps15.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s2_eps_[15]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 15 */


        /* EPS 16 */

        let s2_p16 = document.createElement('p')
        let s2_img16 = document.createElement('img')
        let s2_P16 = document.createElement('p')
        let s2_btn_eps16 = document.createElement('button')
            
        s2_btn_eps16.className = 'btn_eps'
        s2_btn_eps16.id = 's2_btn_eps16'
        s2_img16.className = 'logo_imperio'
        s2_img16.src = capa_eps[2]
        s2_img16.style = "width: 20%; opacity: 1;"

        s2_p16.innerHTML = '16'
        s2_P16.innerHTML = 'Epsódio 16'

        eps.appendChild(s2_btn_eps16)

        s2_btn_eps16.appendChild(s2_p16)
        s2_btn_eps16.appendChild(s2_img16)
        s2_btn_eps16.appendChild(s2_P16)

        s2_btn_eps16.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s2_eps_[16]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 16 */


        /* EPS 17 */

        let s2_p17 = document.createElement('p')
        let s2_img17 = document.createElement('img')
        let s2_P17 = document.createElement('p')
        let s2_btn_eps17 = document.createElement('button')
            
        s2_btn_eps17.className = 'btn_eps'
        s2_btn_eps17.id = 's2_btn_eps17'
        s2_img17.className = 'logo_imperio'
        s2_img17.src = capa_eps[2]
        s2_img17.style = "width: 20%; opacity: 1;"

        s2_p17.innerHTML = '17'
        s2_P17.innerHTML = 'Epsódio 17'

        eps.appendChild(s2_btn_eps17)

        s2_btn_eps17.appendChild(s2_p17)
        s2_btn_eps17.appendChild(s2_img17)
        s2_btn_eps17.appendChild(s2_P17)

        s2_btn_eps17.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s2_eps_[17]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 17 */


        /* EPS 18 */

        let s2_p18 = document.createElement('p')
        let s2_img18 = document.createElement('img')
        let s2_P18 = document.createElement('p')
        let s2_btn_eps18 = document.createElement('button')
            
        s2_btn_eps18.className = 'btn_eps'
        s2_btn_eps18.id = 's2_btn_eps18'
        s2_img18.className = 'logo_imperio'
        s2_img18.src = capa_eps[2]
        s2_img18.style = "width: 20%; opacity: 1;"

        s2_p18.innerHTML = '18'
        s2_P18.innerHTML = 'Epsódio 18'

        eps.appendChild(s2_btn_eps18)

        s2_btn_eps18.appendChild(s2_p18)
        s2_btn_eps18.appendChild(s2_img18)
        s2_btn_eps18.appendChild(s2_P18)

        s2_btn_eps18.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s2_eps_[18]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 18 */


        /* EPS 19 */

        let s2_p19 = document.createElement('p')
        let s2_img19 = document.createElement('img')
        let s2_P19 = document.createElement('p')
        let s2_btn_eps19 = document.createElement('button')
            
        s2_btn_eps19.className = 'btn_eps'
        s2_btn_eps19.id = 's2_btn_eps19'
        s2_img19.className = 'logo_imperio'
        s2_img19.src = capa_eps[2]
        s2_img19.style = "width: 20%; opacity: 1;"

        s2_p19.innerHTML = '19'
        s2_P19.innerHTML = 'Epsódio 19'

        eps.appendChild(s2_btn_eps19)

        s2_btn_eps19.appendChild(s2_p19)
        s2_btn_eps19.appendChild(s2_img19)
        s2_btn_eps19.appendChild(s2_P19)

        s2_btn_eps19.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s2_eps_[19]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 19 */


        /* EPS 20 */

        let s2_p20 = document.createElement('p')
        let s2_img20 = document.createElement('img')
        let s2_P20 = document.createElement('p')
        let s2_btn_eps20 = document.createElement('button')
            
        s2_btn_eps20.className = 'btn_eps'
        s2_btn_eps20.id = 's2_btn_eps20'
        s2_img20.className = 'logo_imperio'
        s2_img20.src = capa_eps[2]
        s2_img20.style = "width: 20%; opacity: 1;"

        s2_p20.innerHTML = '20'
        s2_P20.innerHTML = 'Epsódio 20'

        eps.appendChild(s2_btn_eps20)

        s2_btn_eps20.appendChild(s2_p20)
        s2_btn_eps20.appendChild(s2_img20)
        s2_btn_eps20.appendChild(s2_P20)

        s2_btn_eps20.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s2_eps_[20]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 20 */


        /* EPS 21 */

        let s2_p21 = document.createElement('p')
        let s2_img21 = document.createElement('img')
        let s2_P21 = document.createElement('p')
        let s2_btn_eps21 = document.createElement('button')
            
        s2_btn_eps21.className = 'btn_eps'
        s2_btn_eps21.id = 's2_btn_eps21'
        s2_img21.className = 'logo_imperio'
        s2_img21.src = capa_eps[2]
        s2_img21.style = "width: 20%; opacity: 1;"

        s2_p21.innerHTML = '21'
        s2_P21.innerHTML = 'Epsódio 21'

        eps.appendChild(s2_btn_eps21)

        s2_btn_eps21.appendChild(s2_p21)
        s2_btn_eps21.appendChild(s2_img21)
        s2_btn_eps21.appendChild(s2_P21)

        s2_btn_eps21.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s2_eps_[21]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 21 */


        /* EPS 22 */

        let s2_p22 = document.createElement('p')
        let s2_img22 = document.createElement('img')
        let s2_P22 = document.createElement('p')
        let s2_btn_eps22 = document.createElement('button')
            
        s2_btn_eps22.className = 'btn_eps'
        s2_btn_eps22.id = 's2_btn_eps22'
        s2_img22.className = 'logo_imperio'
        s2_img22.src = capa_eps[2]
        s2_img22.style = "width: 20%; opacity: 1;"

        s2_p22.innerHTML = '22'
        s2_P22.innerHTML = 'Epsódio 22'

        eps.appendChild(s2_btn_eps22)

        s2_btn_eps22.appendChild(s2_p22)
        s2_btn_eps22.appendChild(s2_img22)
        s2_btn_eps22.appendChild(s2_P22)

        s2_btn_eps22.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s2_eps_[22]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 22 */


        /* EPS 23 */

        let s2_p23 = document.createElement('p')
        let s2_img23 = document.createElement('img')
        let s2_P23 = document.createElement('p')
        let s2_btn_eps23 = document.createElement('button')
            
        s2_btn_eps23.className = 'btn_eps'
        s2_btn_eps23.id = 's2_btn_eps23'
        s2_img23.className = 'logo_imperio'
        s2_img23.src = capa_eps[2]
        s2_img23.style = "width: 20%; opacity: 1;"

        s2_p23.innerHTML = '23'
        s2_P23.innerHTML = 'Epsódio 23'

        eps.appendChild(s2_btn_eps23)

        s2_btn_eps23.appendChild(s2_p23)
        s2_btn_eps23.appendChild(s2_img23)
        s2_btn_eps23.appendChild(s2_P23)

        s2_btn_eps23.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s2_eps_[23]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 23 */


        /* EPS 24 */

        let s2_p24 = document.createElement('p')
        let s2_img24 = document.createElement('img')
        let s2_P24 = document.createElement('p')
        let s2_btn_eps24 = document.createElement('button')
            
        s2_btn_eps24.className = 'btn_eps'
        s2_btn_eps24.id = 's2_btn_eps24'
        s2_img24.className = 'logo_imperio'
        s2_img24.src = capa_eps[2]
        s2_img24.style = "width: 20%; opacity: 1;"

        s2_p24.innerHTML = '24'
        s2_P24.innerHTML = 'Epsódio 24'

        eps.appendChild(s2_btn_eps24)

        s2_btn_eps24.appendChild(s2_p24)
        s2_btn_eps24.appendChild(s2_img24)
        s2_btn_eps24.appendChild(s2_P24)

        s2_btn_eps24.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s2_eps_[24]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 24 */


        /* EPS 25 */

        let s2_p25 = document.createElement('p')
        let s2_img25 = document.createElement('img')
        let s2_P25 = document.createElement('p')
        let s2_btn_eps25 = document.createElement('button')
            
        s2_btn_eps25.className = 'btn_eps'
        s2_btn_eps25.id = 's2_btn_eps25'
        s2_img25.className = 'logo_imperio'
        s2_img25.src = capa_eps[2]
        s2_img25.style = "width: 20%; opacity: 1;"

        s2_p25.innerHTML = '25'
        s2_P25.innerHTML = 'Epsódio 25'

        eps.appendChild(s2_btn_eps25)

        s2_btn_eps25.appendChild(s2_p25)
        s2_btn_eps25.appendChild(s2_img25)
        s2_btn_eps25.appendChild(s2_P25)

        s2_btn_eps25.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s2_eps_[25]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 25 */


        /* EPS 26 */

        let s2_p26 = document.createElement('p')
        let s2_img26 = document.createElement('img')
        let s2_P26 = document.createElement('p')
        let s2_btn_eps26 = document.createElement('button')
            
        s2_btn_eps26.className = 'btn_eps'
        s2_btn_eps26.id = 's2_btn_eps26'
        s2_img26.className = 'logo_imperio'
        s2_img26.src = capa_eps[2]
        s2_img26.style = "width: 20%; opacity: 1;"

        s2_p26.innerHTML = '26'
        s2_P26.innerHTML = 'Epsódio 26'

        eps.appendChild(s2_btn_eps26)

        s2_btn_eps26.appendChild(s2_p26)
        s2_btn_eps26.appendChild(s2_img26)
        s2_btn_eps26.appendChild(s2_P26)

        s2_btn_eps26.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s2_eps_[26]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 26 */


        /* EPS 27 */

        let s2_p27 = document.createElement('p')
        let s2_img27 = document.createElement('img')
        let s2_P27 = document.createElement('p')
        let s2_btn_eps27 = document.createElement('button')
            
        s2_btn_eps27.className = 'btn_eps'
        s2_btn_eps27.id = 's2_btn_eps27'
        s2_img27.className = 'logo_imperio'
        s2_img27.src = capa_eps[2]
        s2_img27.style = "width: 20%; opacity: 1;"

        s2_p27.innerHTML = '27'
        s2_P27.innerHTML = 'Epsódio 27'

        eps.appendChild(s2_btn_eps27)

        s2_btn_eps27.appendChild(s2_p27)
        s2_btn_eps27.appendChild(s2_img27)
        s2_btn_eps27.appendChild(s2_P27)

        s2_btn_eps27.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s2_eps_[27]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 27 */


        /* EPS 28 */

        let s2_p28 = document.createElement('p')
        let s2_img28 = document.createElement('img')
        let s2_P28 = document.createElement('p')
        let s2_btn_eps28 = document.createElement('button')
            
        s2_btn_eps28.className = 'btn_eps'
        s2_btn_eps28.id = 's2_btn_eps28'
        s2_img28.className = 'logo_imperio'
        s2_img28.src = capa_eps[2]
        s2_img28.style = "width: 20%; opacity: 1;"

        s2_p28.innerHTML = '28'
        s2_P28.innerHTML = 'Epsódio 28'

        eps.appendChild(s2_btn_eps28)

        s2_btn_eps28.appendChild(s2_p28)
        s2_btn_eps28.appendChild(s2_img28)
        s2_btn_eps28.appendChild(s2_P28)

        s2_btn_eps28.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s2_eps_[28]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 28 */


        /* EPS 29 */

        let s2_p29 = document.createElement('p')
        let s2_img29 = document.createElement('img')
        let s2_P29 = document.createElement('p')
        let s2_btn_eps29 = document.createElement('button')
            
        s2_btn_eps29.className = 'btn_eps'
        s2_btn_eps29.id = 's2_btn_eps29'
        s2_img29.className = 'logo_imperio'
        s2_img29.src = capa_eps[2]
        s2_img29.style = "width: 20%; opacity: 1;"

        s2_p29.innerHTML = '29'
        s2_P29.innerHTML = 'Epsódio 29'

        eps.appendChild(s2_btn_eps29)

        s2_btn_eps29.appendChild(s2_p29)
        s2_btn_eps29.appendChild(s2_img29)
        s2_btn_eps29.appendChild(s2_P29)

        s2_btn_eps29.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s2_eps_[29]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 29 */
        

        /* EPS 30 */

        let s2_p30 = document.createElement('p')
        let s2_img30 = document.createElement('img')
        let s2_P30 = document.createElement('p')
        let s2_btn_eps30 = document.createElement('button')
            
        s2_btn_eps30.className = 'btn_eps'
        s2_btn_eps30.id = 's2_btn_eps30'
        s2_img30.className = 'logo_imperio'
        s2_img30.src = capa_eps[2]
        s2_img30.style = "width: 20%; opacity: 1;"

        s2_p30.innerHTML = '30'
        s2_P30.innerHTML = 'Epsódio 30'

        eps.appendChild(s2_btn_eps30)

        s2_btn_eps30.appendChild(s2_p30)
        s2_btn_eps30.appendChild(s2_img30)
        s2_btn_eps30.appendChild(s2_P30)

        s2_btn_eps30.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s2_eps_[30]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 30 */


        /* EPS 31 */

        let s2_p31 = document.createElement('p')
        let s2_img31 = document.createElement('img')
        let s2_P31 = document.createElement('p')
        let s2_btn_eps31 = document.createElement('button')
        
        s2_btn_eps31.className = 'btn_eps'
        s2_btn_eps31.id = 's2_btn_eps31'
        s2_img31.className = 'logo_imperio'
        s2_img31.src = capa_eps[2]
        s2_img31.style = "width: 20%; opacity: 1;"

        s2_p31.innerHTML = '31'
        s2_P31.innerHTML = 'Epsódio 31'

        eps.appendChild(s2_btn_eps31)

        s2_btn_eps31.appendChild(s2_p31)
        s2_btn_eps31.appendChild(s2_img31)
        s2_btn_eps31.appendChild(s2_P31)

        s2_btn_eps31.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s2_eps_[31]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 31 */


        /* EPS 32 */

        let s2_p32 = document.createElement('p')
        let s2_img32 = document.createElement('img')
        let s2_P32 = document.createElement('p')
        let s2_btn_eps32 = document.createElement('button')
            
        s2_btn_eps32.className = 'btn_eps'
        s2_btn_eps32.id = 's2_btn_eps32'
        s2_img32.className = 'logo_imperio'
        s2_img32.src = capa_eps[2]
        s2_img32.style = "width: 20%; opacity: 1;"

        s2_p32.innerHTML = '32'
        s2_P32.innerHTML = 'Epsódio 32'

        eps.appendChild(s2_btn_eps32)

        s2_btn_eps32.appendChild(s2_p32)
        s2_btn_eps32.appendChild(s2_img32)
        s2_btn_eps32.appendChild(s2_P32)

        s2_btn_eps32.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s2_eps_[32]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 32 */


        /* EPS 33 */

        let s2_p33 = document.createElement('p')
        let s2_img33 = document.createElement('img')
        let s2_P33 = document.createElement('p')
        let s2_btn_eps33 = document.createElement('button')
            
        s2_btn_eps33.className = 'btn_eps'
        s2_btn_eps33.id = 's2_btn_eps33'
        s2_img33.className = 'logo_imperio'
        s2_img33.src = capa_eps[2]
        s2_img33.style = "width: 20%; opacity: 1;"

        s2_p33.innerHTML = '33'
        s2_P33.innerHTML = 'Epsódio 33'

        eps.appendChild(s2_btn_eps33)

        s2_btn_eps33.appendChild(s2_p33)
        s2_btn_eps33.appendChild(s2_img33)
        s2_btn_eps33.appendChild(s2_P33)

        s2_btn_eps33.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s2_eps_[33]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 33 */


        /* EPS 34 */

        let s2_p34 = document.createElement('p')
        let s2_img34 = document.createElement('img')
        let s2_P34 = document.createElement('p')
        let s2_btn_eps34 = document.createElement('button')
            
        s2_btn_eps34.className = 'btn_eps'
        s2_btn_eps34.id = 's2_btn_eps34'
        s2_img34.className = 'logo_imperio'
        s2_img34.src = capa_eps[2]
        s2_img34.style = "width: 20%; opacity: 1;"

        s2_p34.innerHTML = '34'
        s2_P34.innerHTML = 'Epsódio 34'

        eps.appendChild(s2_btn_eps34)

        s2_btn_eps34.appendChild(s2_p34)
        s2_btn_eps34.appendChild(s2_img34)
        s2_btn_eps34.appendChild(s2_P34)

        s2_btn_eps34.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s2_eps_[34]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 34 */


        /* EPS 35 */

        let s2_p35 = document.createElement('p')
        let s2_img35 = document.createElement('img')
        let s2_P35 = document.createElement('p')
        let s2_btn_eps35 = document.createElement('button')
            
        s2_btn_eps35.className = 'btn_eps'
        s2_btn_eps35.id = 's2_btn_eps35'
        s2_img35.className = 'logo_imperio'
        s2_img35.src = capa_eps[2]
        s2_img35.style = "width: 20%; opacity: 1;"

        s2_p35.innerHTML = '35'
        s2_P35.innerHTML = 'Epsódio 35'

        eps.appendChild(s2_btn_eps35)

        s2_btn_eps35.appendChild(s2_p35)
        s2_btn_eps35.appendChild(s2_img35)
        s2_btn_eps35.appendChild(s2_P35)

        s2_btn_eps35.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s2_eps_[35]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 35 */


        /* EPS 36 */

        let s2_p36 = document.createElement('p')
        let s2_img36 = document.createElement('img')
        let s2_P36 = document.createElement('p')
        let s2_btn_eps36 = document.createElement('button')
            
        s2_btn_eps36.className = 'btn_eps'
        s2_btn_eps36.id = 's2_btn_eps36'
        s2_img36.className = 'logo_imperio'
        s2_img36.src = capa_eps[2]
        s2_img36.style = "width: 20%; opacity: 1;"

        s2_p36.innerHTML = '36'
        s2_P36.innerHTML = 'Epsódio 36'

        eps.appendChild(s2_btn_eps36)

        s2_btn_eps36.appendChild(s2_p36)
        s2_btn_eps36.appendChild(s2_img36)
        s2_btn_eps36.appendChild(s2_P36)

        s2_btn_eps36.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s2_eps_[36]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 36 */


        /* EPS 37 */

        let s2_p37 = document.createElement('p')
        let s2_img37 = document.createElement('img')
        let s2_P37 = document.createElement('p')
        let s2_btn_eps37 = document.createElement('button')
            
        s2_btn_eps37.className = 'btn_eps'
        s2_btn_eps37.id = 's2_btn_eps37'
        s2_img37.className = 'logo_imperio'
        s2_img37.src = capa_eps[2]
        s2_img37.style = "width: 20%; opacity: 1;"

        s2_p37.innerHTML = '37'
        s2_P37.innerHTML = 'Epsódio 37'

        eps.appendChild(s2_btn_eps37)

        s2_btn_eps37.appendChild(s2_p37)
        s2_btn_eps37.appendChild(s2_img37)
        s2_btn_eps37.appendChild(s2_P37)

        s2_btn_eps37.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s2_eps_[37]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 37 */


        /* EPS 38 */

        let s2_p38 = document.createElement('p')
        let s2_img38 = document.createElement('img')
        let s2_P38 = document.createElement('p')
        let s2_btn_eps38 = document.createElement('button')
            
        s2_btn_eps38.className = 'btn_eps'
        s2_btn_eps38.id = 's2_btn_eps38'
        s2_img38.className = 'logo_imperio'
        s2_img38.src = capa_eps[2]
        s2_img38.style = "width: 20%; opacity: 1;"

        s2_p38.innerHTML = '38'
        s2_P38.innerHTML = 'Epsódio 38'

        eps.appendChild(s2_btn_eps38)

        s2_btn_eps38.appendChild(s2_p38)
        s2_btn_eps38.appendChild(s2_img38)
        s2_btn_eps38.appendChild(s2_P38)

        s2_btn_eps38.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s2_eps_[38]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 38 */


        /* EPS 39 */

        let s2_p39 = document.createElement('p')
        let s2_img39 = document.createElement('img')
        let s2_P39 = document.createElement('p')
        let s2_btn_eps39 = document.createElement('button')
            
        s2_btn_eps39.className = 'btn_eps'
        s2_btn_eps39.id = 's2_btn_eps39'
        s2_img39.className = 'logo_imperio'
        s2_img39.src = capa_eps[2]
        s2_img39.style = "width: 20%; opacity: 1;"

        s2_p39.innerHTML = '39'
        s2_P39.innerHTML = 'Epsódio 39'

        eps.appendChild(s2_btn_eps39)

        s2_btn_eps39.appendChild(s2_p39)
        s2_btn_eps39.appendChild(s2_img39)
        s2_btn_eps39.appendChild(s2_P39)

        s2_btn_eps39.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s2_eps_[39]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 39 */


        /* EPS 40 */

        let s2_p40 = document.createElement('p')
        let s2_img40 = document.createElement('img')
        let s2_P40 = document.createElement('p')
        let s2_btn_eps40 = document.createElement('button')
            
        s2_btn_eps40.className = 'btn_eps'
        s2_btn_eps40.id = 's2_btn_eps40'
        s2_img40.className = 'logo_imperio'
        s2_img40.src = capa_eps[2]
        s2_img40.style = "width: 20%; opacity: 1;"

        s2_p40.innerHTML = '40'
        s2_P40.innerHTML = 'Epsódio 40'

        eps.appendChild(s2_btn_eps40)

        s2_btn_eps40.appendChild(s2_p40)
        s2_btn_eps40.appendChild(s2_img40)
        s2_btn_eps40.appendChild(s2_P40)

        s2_btn_eps40.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s2_eps_[40]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 40 */


        /* EPS 41 */

        let s2_p41 = document.createElement('p')
        let s2_img41 = document.createElement('img')
        let s2_P41 = document.createElement('p')
        let s2_btn_eps41 = document.createElement('button')
        
        s2_btn_eps41.className = 'btn_eps'
        s2_btn_eps41.id = 's2_btn_eps41'
        s2_img41.className = 'logo_imperio'
        s2_img41.src = capa_eps[2]
        s2_img41.style = "width: 20%; opacity: 1;"

        s2_p41.innerHTML = '41'
        s2_P41.innerHTML = 'Epsódio 41'

        eps.appendChild(s2_btn_eps41)

        s2_btn_eps41.appendChild(s2_p41)
        s2_btn_eps41.appendChild(s2_img41)
        s2_btn_eps41.appendChild(s2_P41)

        s2_btn_eps41.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s2_eps_[41]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 41 */


        /* EPS 42 */

        let s2_p42 = document.createElement('p')
        let s2_img42 = document.createElement('img')
        let s2_P42 = document.createElement('p')
        let s2_btn_eps42 = document.createElement('button')
            
        s2_btn_eps42.className = 'btn_eps'
        s2_btn_eps42.id = 's2_btn_eps42'
        s2_img42.className = 'logo_imperio'
        s2_img42.src = capa_eps[2]
        s2_img42.style = "width: 20%; opacity: 1;"

        s2_p42.innerHTML = '42'
        s2_P42.innerHTML = 'Epsódio 42'

        eps.appendChild(s2_btn_eps42)

        s2_btn_eps42.appendChild(s2_p42)
        s2_btn_eps42.appendChild(s2_img42)
        s2_btn_eps42.appendChild(s2_P42)

        s2_btn_eps42.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s2_eps_[42]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 42 */


        /* EPS 43 */

        let s2_p43 = document.createElement('p')
        let s2_img43 = document.createElement('img')
        let s2_P43 = document.createElement('p')
        let s2_btn_eps43 = document.createElement('button')
            
        s2_btn_eps43.className = 'btn_eps'
        s2_btn_eps43.id = 's2_btn_eps43'
        s2_img43.className = 'logo_imperio'
        s2_img43.src = capa_eps[2]
        s2_img43.style = "width: 20%; opacity: 1;"

        s2_p43.innerHTML = '43'
        s2_P43.innerHTML = 'Epsódio 43'

        eps.appendChild(s2_btn_eps43)

        s2_btn_eps43.appendChild(s2_p43)
        s2_btn_eps43.appendChild(s2_img43)
        s2_btn_eps43.appendChild(s2_P43)

        s2_btn_eps43.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s2_eps_[43]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 43 */


        /* EPS 44 */

        let s2_p44 = document.createElement('p')
        let s2_img44 = document.createElement('img')
        let s2_P44 = document.createElement('p')
        let s2_btn_eps44 = document.createElement('button')
            
        s2_btn_eps44.className = 'btn_eps'
        s2_btn_eps44.id = 's2_btn_eps44'
        s2_img44.className = 'logo_imperio'
        s2_img44.src = capa_eps[2]
        s2_img44.style = "width: 20%; opacity: 1;"

        s2_p44.innerHTML = '44'
        s2_P44.innerHTML = 'Epsódio 44'

        eps.appendChild(s2_btn_eps44)

        s2_btn_eps44.appendChild(s2_p44)
        s2_btn_eps44.appendChild(s2_img44)
        s2_btn_eps44.appendChild(s2_P44)

        s2_btn_eps44.addEventListener('click',()=>{

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
            
            videoPlayer.src = caminho + s2_eps_[44]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 44 */

        cont_temp = 1
        type_temp = 'temp2'
        console.log(type_temp)

    } /* FIM TEMPORADA 02 */
    
}) /* FIM FUNCTION myeps */