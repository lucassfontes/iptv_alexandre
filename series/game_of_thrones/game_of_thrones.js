//caminho

const servidor = 'http://cdn99.one'
const porta = '80'
const pasta = 'series' 
const usuario = 'lucassfontessantos'
const senha = 'br48936'

const caminho = (
    servidor + ':' + 
    porta + '/' + 
    pasta + '/' + 
    usuario + '/' + 
    senha + '/'

    )

//FIM caminho 

const eps_ = [
    
    'eliminando o indece 0',
    /* TEMPORADA 01 */
    
    /*01*/ '94048.mp4', 
    /*02*/ '94049.mp4',
    /*03*/ '94050.mp4',
    /*04*/ '94051.mp4',
    /*05*/ '94052.mp4',
    /*06*/ '94053.mp4',
    /*07*/ '94054.mp4',
    /*08*/ '94055.mp4',
    /*09*/ '94056.mp4',
    /*10*/ '94057.mp4',

    /* TEMPORADA 02 */

    // o primeiro numero e o index o segundo é o numero do epsodio

    /*11_01*/ '94058.mp4', 
    /*12_02*/ '94059.mp4',
    /*13_03*/ '94060.mp4',
    /*14_04*/ '94061.mp4',
    /*15_05*/ '94062.mp4',
    /*16_06*/ '94063.mp4',
    /*17_07*/ '94064.mp4',
    /*18_08*/ '94065.mp4',
    /*19_09*/ '94066.mp4',
    /*20_10*/ '94067.mp4',

]

const capa_eps = [

    'eliminando o indece 0',

    /* TEMPORADA 01 */

    'https://www.capital.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcap.2F2017.2F05.2F10.2F6b7b11a5-b337-4ba6-a65b-71697e7f5d92.2Ejpeg/790x395/background-color/ffffff/quality/70/game-of-thrones-ce-que-cette-serie-culte-nous-apprend-sur-le-pouvoir-en-entreprise-960913.jpg',

    /* TEMPORADA 02 */

    'https://tv-fanatic-res.cloudinary.com/iu/s--fTvHzhZv--/t_xlarge_l/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1461956482/attachment/game-of-thrones-round-table-660px.jpg',

]

// type_logo

let type_logo = document.getElementById('type_logo')

type_logo.src = 'https://www.asiamediajournal.com/wp-content/uploads/2020/10/Index-Of-Game-Of-Thrones-696x399.png'

type_logo.title = 'Expresso do Amanhã'
type_logo.alt = 'Expresso do Amanhã'

// fim type_logo


const capa_video = [
    'eliminando o indece 0',

    /* TEMPORADA 01 */

    'https://www.capital.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcap.2F2017.2F05.2F10.2F6b7b11a5-b337-4ba6-a65b-71697e7f5d92.2Ejpeg/790x395/background-color/ffffff/quality/70/game-of-thrones-ce-que-cette-serie-culte-nous-apprend-sur-le-pouvoir-en-entreprise-960913.jpg',

    /* TEMPORADA 02 */

    'https://tv-fanatic-res.cloudinary.com/iu/s--fTvHzhZv--/t_xlarge_l/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1461956482/attachment/game-of-thrones-round-table-660px.jpg',
]
    
let eps = document.createElement('div')
eps.id = 'eps'
eps.className = 'eps'

let cont_temp = 0
let type_temp = 'temp'

function fechar_video(){

    let btn_fechar = document.getElementById('fechar')
    let play_temporadas = document.getElementById('temporadas')
    let play_video = document.getElementById('play_video')
    
    btn_fechar.setAttribute('style','display:none')
    play_video.setAttribute('style','display:none')
    document.querySelector(".videoPlayer").pause()
    play_temporadas.setAttribute('style','display:block')

}

function volta(){
    window.location.href='/pgs/home.html'
}
    

function myeps(){

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
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[1]
            
            videoPlayer.src = caminho + eps_[1]
            
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
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[1]
            
            videoPlayer.src = caminho + eps_[2]
            
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
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[1]
            
            videoPlayer.src = caminho + eps_[3]
            
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
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[1]
            
            videoPlayer.src = caminho + eps_[4]
            
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
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[1]
            
            videoPlayer.src = caminho + eps_[1]
            
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
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[1]
            
            videoPlayer.src = caminho + eps_[1]
            
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
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[1]
            
            videoPlayer.src = caminho + eps_[1]
            
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
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[1]
            
            videoPlayer.src = caminho + eps_[8]
            
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
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[1]
            
            videoPlayer.src = caminho + eps_[1]
            
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
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[1]
            
            videoPlayer.src = caminho + eps_[1]
            
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
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[2]
            
            videoPlayer.src = caminho + eps_[11]
            
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
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[2]
            
            videoPlayer.src = caminho + eps_[12]
            
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
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[2]
            
            videoPlayer.src = caminho + eps_[13]
            
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
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[2]
            
            videoPlayer.src = caminho + eps_[14]
            
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
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[2]
            
            videoPlayer.src = caminho + eps_[15]
            
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
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[2]
            
            videoPlayer.src = caminho + eps_[16]
            
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
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[2]
            
            videoPlayer.src = caminho + eps_[17]
            
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
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[2]
            
            videoPlayer.src = caminho + eps_[18]
            
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
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[2]
            
            videoPlayer.src = caminho + eps_[19]
            
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
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa_video[2]
            
            videoPlayer.src = caminho + eps_[20]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 10 */

        cont_temp = 1
        type_temp = 'temp2'
        console.log(type_temp)

    } /* FIM TEMPORADA 02 */
    
} /* FIM FUNCTION myeps */