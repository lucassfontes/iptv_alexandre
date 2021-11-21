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

    /*01*/ '48721.mp4', 
    /*02*/ '48722.mp4',
    /*03*/ '48723.mp4',
    /*04*/ '48724.mp4',
    /*05*/ '48725.mp4',
    /*06*/ '48726.mp4',
    /*07*/ '48727.mp4',
    /*08*/ '62998.mp4',
    /*09*/ '62999.mp4',
    /*10*/ '63000.mp4',

    /* TEMPORADA 02 */

    // o primeiro numero e o index o segundo é o numero do epsodio

    /*11_01*/ '93583.mp4', 
    /*12_02*/ '93943.mp4',
    /*13_03*/ '94241.mp4',
    /*14_04*/ '96034.mp4',
    /*15_05*/ '96035.mp4',
    /*16_06*/ '96556.mp4',
    /*17_07*/ '97977.mp4',
    /*18_08*/ '98805.mp4',
    /*19_09*/ '100378.mp4',
    /*20_10*/ '100379.mp4',

]

const capa_eps = [

    'eliminando o indece 0',
    /* TEMPORADA 01 */

    /*01*/ "https://oc2-0-767-1335.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZ7EKWElFiMWwd4FAEtoQNp6VQrMRguFZy_NGUI3ABxfmdbg-JKaKVzvjerUP0VJyXCGd0yT7uG86QMAu5cCrE6AB1Qh0WVTknL1TVqDZgU6Jf3e.jpg?r=603", 

    /*02*/ 'https://oc2-0-767-1335.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVhn3BE1fHCl7UTF29GqssQcIkNHEiQ-xXnTqDhtEJDfxO8O-wkzmw1bH1re3GP1iyBsLHKCzIxgarPK4bK1mCYbbde4TSaYjov_sceFKyp8sX6I.jpg?r=e92',

    /*03*/ 'https://oc2-0-767-1335.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZZV5Kl-9OAsr9yBNfxUz-7RhiLOGN2czI2LkSF2FbpwDkQyE3B0kEWC-9z5O9qcAjgcn3EpMxNicgjAiL3Ik5r2lG1475Zdz9F6TClB2n6qE8yq.jpg?r=96f',

    /*04*/ 'https://oc2-0-767-1335.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdo2S57nwlBFI1Gj1bNCKRCNC-T6Hx0Tn3FhtEghpAPICEvzD0v0ZWCts0ENL2XR4grFykBpp5YUfYuwFZ0gxui2mABZA7WIlLn88FS-g4hcpbfO.jpg?r=eba',

    /*05*/ 'https://oc2-0-767-1335.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVidHX1Frnc1a5VH9I3Ouj9bv4LtXUPNja01E3crRjVx-dzPLr5Gf6UFlLMi3vcf2Cm2VZd9P6C69g55A6x5ArqVpFYMsa2iIK_Ts-FhmBAx7edP.jpg?r=0cb',

    /*06*/ 'https://oc2-0-767-1335.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABeHrOhjVG3aGHJ3WfMdwg6_a4_Vw6cBRc0mWhs1B1oJeMpOH8d4he-7kaxgn3Z4DTLxB6_AGqj54RDaIYM5eanpo0kLivINqAg4--lllQI9rczAr.jpg?r=7b0',

    /*07*/ 'https://oc2-0-767-1335.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYcBIKBrJDC_kzAGeP4HPLR4KHQ5hxdMyQ79CfEceCUT3e6ywBgFzejJAPCOvR3LJ5wAvXTZVaPCt2Nv9iDgsyQbltec1lY5TeCHJATlW9bI0Xzh.jpg?r=8de',

    /*08*/ 'https://oc2-0-767-1335.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbXIoCqC0yjblrQ_nNL6tmv2DYL5jPkROTSWq_tLMklpelPhPJvUMl73jOUKPsa4rP_YNmvZYcP0mu6ajsWnz9BOWMsev4DEOPpq9AXSD3cU3qid.jpg?r=eef',

    /*09*/ 'https://oc2-0-767-1335.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUAZnJ-4ewQV5HUpTqKlgjAU3MlbhHOEBynW9wZPS4qBdHgF1HBaLOsDM9-o69PdbeClbWmItyJXQwQJyAxhMcM_ksS-HNebYcB03kg5rVBz9JkX.jpg?r=cef',

    /*10*/ 'https://oc2-0-767-1335.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfOS0gYJZHsS9oeupZ78cL4pSMXsAS-gHr5VWHWj8NIf_ntc2z5foBPNKIgJUFx511niqVosj056S7Clm0y261v4LBBaSZEakWS96PVKMO7KLoi2.jpg?r=cc6',

    /* TEMPORADA 02 */ 

    // o primeiro numero e o index o segundo é o numero do epsodio

    /*11_01*/ 'https://oc2-0-767-1335.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXiMhqlfD1ZW3N8Vlux_Al5q1YJtyZYiJoYTqmVlD2wDxLkRJgHZvatRorppIOiuiG8h4Zws1ZAtw6Kng0j-Afx-o25Rkrn0YxUtk_2K8ZuEiMDw.jpg?r=74a',

    /*12_02*/ 'https://oc2-0-767-1335.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTiAmbqHaoaZgAK-qCHeore3W1RfIITcLGwSnHQp4fmDT0iTkXL-7SxfoSW7XRJ8Fp5s6uTwnIrcwg5FJ3Y1SZWvLLQM_n1fdPjaRwThxSvF_vhB.jpg?r=028',

    /*13_03*/ 'https://oc2-0-767-1335.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABX6erfD4nSvgNML2IUfi230kZ8oFSit8g75iVbaszVvcvFLIq3luKkCbWx3qy02tdv9CHEOXIeIntT5w30sJ1XKXch4ZMOcALXygLllsbBcLt5gG.jpg?r=e37',

    /*14_04*/ 'https://oc2-0-767-1335.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABeLCKPiC8NspicpFHND8I5Kze7xdiRJKSXGQb6RuXBSS7v7M25JhVFfL9ZYKbu4ps_KzrWahSjknFScoxeAUnKSC9Z5Hj4ruLCZbTQ9ZEhnzsqW5.jpg?r=181',

    /*15_05*/ 'https://oc2-0-767-1335.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaW2fVotwe8kcAHnImxdzJbB0HO7KkQ1JfQsmRGef2tbdi4a5zEXC_LOMiz5NojLNGwXxDqJkxqkViEZNCsJ7meaKdZu0o-WnfPeX0XlYDxun8nR.jpg?r=00a',

    /*16_06*/ 'https://oc2-0-767-1335.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABV5IK4RJioBJSRmOKuS2DeCveMBNfa-Pdt0vAxD2Os2oSb37bu4JcumdKxPnR67XTSKhWhsjj7V_z4jW_9h3ycYNs3HRvPL_2-fI2Nu6oxzaNhGc.jpg?r=f1c',

    /*17_07*/ 'https://oc2-0-767-1335.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYYa8CJX1gqEBVmxs_-4jL96pEuzcbC9BHOtlH3kH3YycbDfEzi3Dl9l8wP3PF0p0-OpHAQu1xpVHQfR0TmE_zkTqucyicM1JNazVCNZphhJ_sQG.jpg?r=458',

    /*18_08*/ 'https://oc2-0-767-1335.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUtK9h13zRKUQCezgwrNCZpVr18qxwLOGlqdb_eEvgsq2MEvH9AI2I88rADNVAK8QfYibA93DGzpPXEoBBS7GW65qX5cflldEscPJa_NOOJ7ePl7.jpg?r=898',

    /*19_09*/ 'https://oc2-0-767-1335.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUS364C2ioZZ8M9PnD7unT579Ra_yScBv-YsGU9mbAOrOitiTImo39W8xReZTvFrxRg1Z84OICxQdLDDIqnvw6GCvg846GBz3qySpfP6KXoEVVF9.jpg?r=954',

    /*20_10*/ 'https://oc2-0-767-1335.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdBcoYgg1QpzRouFOnqlZT1k0ma9mEmXgZmNWsj6NLvu58OmOUeXVNyZR0Aqay1XMn04GZhyolPcCAj5AH82VytXV-yQI1WlG6BbbrbqAO24eMKT.jpg?r=1f8',

]

// type_logo

let type_logo = document.getElementById('type_logo')

type_logo.src = 'https://oc2-0-767-1335.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABck2lTqVpya4XivwKsn5hEVmE4cAr3P4y4OHNcsozqXyQ7c5s6phBlndVApZ5A7XGN378fmnyjlYvhupgBSsf5MExpfdfIOeO-FF8-2WBWMhSB65nr3rv9SK0CQcew.jpg?r=6c2'

type_logo.title = 'Expresso do Amanhã'
type_logo.alt = 'Expresso do Amanhã'

// fim type_logo


const capa = 'https://oc2-0-767-1335.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABck2lTqVpya4XivwKsn5hEVmE4cAr3P4y4OHNcsozqXyQ7c5s6phBlndVApZ5A7XGN378fmnyjlYvhupgBSsf5MExpfdfIOeO-FF8-2WBWMhSB65nr3rv9SK0CQcew.jpg?r=6c2'
    
let eps = document.createElement('div')
eps.id = 'eps'
eps.className = 'eps'

let cont_temp = 0
let type_temp = 'temp'

function fechar_video(){

    let btn_fechar = document.getElementById('fechar')
    let btn_sair = document.getElementById('sair')
    let play_temporadas = document.getElementById('temporadas')
    let play_video = document.getElementById('play_video')
    
    btn_fechar.setAttribute('style','display:none')
    play_video.setAttribute('style','display:none')
    document.querySelector(".videoPlayer").pause()
    btn_sair.setAttribute('style','display:block')
    play_temporadas.setAttribute('style','display:block')

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
            let btn_sair = document.getElementById('sair')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            btn_sair.setAttribute('style','display:none')
            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa
            
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
        s1_img2.src = capa_eps[2]
        s1_img2.style = "width: 20%; opacity: 1;"

        s1_p2.innerHTML = '2'
        s1_P2.innerHTML = 'Epsódio 02'

        eps.appendChild(s1_btn_eps2)

        s1_btn_eps2.appendChild(s1_p2)
        s1_btn_eps2.appendChild(s1_img2)
        s1_btn_eps2.appendChild(s1_P2)

        s1_btn_eps2.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let btn_sair = document.getElementById('sair')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            btn_sair.setAttribute('style','display:none')
            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa
            
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
        s1_img3.src = capa_eps[3]
        s1_img3.style = "width: 20%; opacity: 1;"

        s1_p3.innerHTML = '3'
        s1_P3.innerHTML = 'Epsódio 03'

        eps.appendChild(s1_btn_eps3)

        s1_btn_eps3.appendChild(s1_p3)
        s1_btn_eps3.appendChild(s1_img3)
        s1_btn_eps3.appendChild(s1_P3)

        s1_btn_eps3.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let btn_sair = document.getElementById('sair')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            btn_sair.setAttribute('style','display:none')
            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa
            
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
        s1_img4.src = capa_eps[4]
        s1_img4.style = "width: 20%; opacity: 1;"

        s1_p4.innerHTML = '4'
        s1_P4.innerHTML = 'Epsódio 04'

        eps.appendChild(s1_btn_eps4)

        s1_btn_eps4.appendChild(s1_p4)
        s1_btn_eps4.appendChild(s1_img4)
        s1_btn_eps4.appendChild(s1_P4)

        s1_btn_eps4.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let btn_sair = document.getElementById('sair')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            btn_sair.setAttribute('style','display:none')
            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa
            
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
        s1_img5.src = capa_eps[5]
        s1_img5.style = "width: 20%; opacity: 1;"

        s1_p5.innerHTML = '5'
        s1_P5.innerHTML = 'Epsódio 05'

        eps.appendChild(s1_btn_eps5)

        s1_btn_eps5.appendChild(s1_p5)
        s1_btn_eps5.appendChild(s1_img5)
        s1_btn_eps5.appendChild(s1_P5)

        s1_btn_eps5.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let btn_sair = document.getElementById('sair')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            btn_sair.setAttribute('style','display:none')
            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa
            
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
        s1_img6.src = capa_eps[6]
        s1_img6.style = "width: 20%; opacity: 1;"

        s1_p6.innerHTML = '6'
        s1_P6.innerHTML = 'Epsódio 06'

        eps.appendChild(s1_btn_eps6)

        s1_btn_eps6.appendChild(s1_p6)
        s1_btn_eps6.appendChild(s1_img6)
        s1_btn_eps6.appendChild(s1_P6)

        s1_btn_eps6.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let btn_sair = document.getElementById('sair')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            btn_sair.setAttribute('style','display:none')
            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa
            
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
        s1_img7.src = capa_eps[7]
        s1_img7.style = "width: 20%; opacity: 1;"

        s1_p7.innerHTML = '7'
        s1_P7.innerHTML = 'Epsódio 07'

        eps.appendChild(s1_btn_eps7)

        s1_btn_eps7.appendChild(s1_p7)
        s1_btn_eps7.appendChild(s1_img7)
        s1_btn_eps7.appendChild(s1_P7)

        s1_btn_eps7.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let btn_sair = document.getElementById('sair')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            btn_sair.setAttribute('style','display:none')
            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa
            
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
        s1_img8.src = capa_eps[8]
        s1_img8.style = "width: 20%; opacity: 1;"

        s1_p8.innerHTML = '8'
        s1_P8.innerHTML = 'Epsódio 08'

        eps.appendChild(s1_btn_eps8)

        s1_btn_eps8.appendChild(s1_p8)
        s1_btn_eps8.appendChild(s1_img8)
        s1_btn_eps8.appendChild(s1_P8)

        s1_btn_eps8.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let btn_sair = document.getElementById('sair')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            btn_sair.setAttribute('style','display:none')
            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa
            
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
        s1_img9.src = capa_eps[9]
        s1_img9.style = "width: 20%; opacity: 1;"

        s1_p9.innerHTML = '9'
        s1_P9.innerHTML = 'Epsódio 09'

        eps.appendChild(s1_btn_eps9)

        s1_btn_eps9.appendChild(s1_p9)
        s1_btn_eps9.appendChild(s1_img9)
        s1_btn_eps9.appendChild(s1_P9)

        s1_btn_eps9.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let btn_sair = document.getElementById('sair')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            btn_sair.setAttribute('style','display:none')
            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa
            
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
        s1_img10.src = capa_eps[10]
        s1_img10.style = "width: 20%; opacity: 1;"

        s1_p10.innerHTML = '10'
        s1_P10.innerHTML = 'Epsódio 10'

        eps.appendChild(s1_btn_eps10)

        s1_btn_eps10.appendChild(s1_p10)
        s1_btn_eps10.appendChild(s1_img10)
        s1_btn_eps10.appendChild(s1_P10)

        s1_btn_eps10.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let btn_sair = document.getElementById('sair')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            btn_sair.setAttribute('style','display:none')
            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa
            
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
        s2_img1.src = capa_eps[11]
        s2_img1.style = "width: 20%; opacity: 1;"

        s2_p1.innerHTML = '1'
        s2_P1.innerHTML = 'Epsódio 01'

        eps.appendChild(s2_btn_eps1)

        s2_btn_eps1.appendChild(s2_p1)
        s2_btn_eps1.appendChild(s2_img1)
        s2_btn_eps1.appendChild(s2_P1)

        s2_btn_eps1.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let btn_sair = document.getElementById('sair')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            btn_sair.setAttribute('style','display:none')
            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa
            
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
        s2_img2.src = capa_eps[12]
        s2_img2.style = "width: 20%; opacity: 1;"

        s2_p2.innerHTML = '2'
        s2_P2.innerHTML = 'Epsódio 02'

        eps.appendChild(s2_btn_eps2)

        s2_btn_eps2.appendChild(s2_p2)
        s2_btn_eps2.appendChild(s2_img2)
        s2_btn_eps2.appendChild(s2_P2)

        s2_btn_eps2.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let btn_sair = document.getElementById('sair')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            btn_sair.setAttribute('style','display:none')
            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa
            
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
        s2_img3.src = capa_eps[13]
        s2_img3.style = "width: 20%; opacity: 1;"

        s2_p3.innerHTML = '3'
        s2_P3.innerHTML = 'Epsódio 03'

        eps.appendChild(s2_btn_eps3)

        s2_btn_eps3.appendChild(s2_p3)
        s2_btn_eps3.appendChild(s2_img3)
        s2_btn_eps3.appendChild(s2_P3)

        s2_btn_eps3.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let btn_sair = document.getElementById('sair')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            btn_sair.setAttribute('style','display:none')
            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa
            
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
        s2_img4.src = capa_eps[14]
        s2_img4.style = "width: 20%; opacity: 1;"

        s2_p4.innerHTML = '4'
        s2_P4.innerHTML = 'Epsódio 04'

        eps.appendChild(s2_btn_eps4)

        s2_btn_eps4.appendChild(s2_p4)
        s2_btn_eps4.appendChild(s2_img4)
        s2_btn_eps4.appendChild(s2_P4)

        s2_btn_eps4.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let btn_sair = document.getElementById('sair')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            btn_sair.setAttribute('style','display:none')
            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa
            
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
        s2_img5.src = capa_eps[15]
        s2_img5.style = "width: 20%; opacity: 1;"

        s2_p5.innerHTML = '5'
        s2_P5.innerHTML = 'Epsódio 05'

        eps.appendChild(s2_btn_eps5)

        s2_btn_eps5.appendChild(s2_p5)
        s2_btn_eps5.appendChild(s2_img5)
        s2_btn_eps5.appendChild(s2_P5)

        s2_btn_eps5.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let btn_sair = document.getElementById('sair')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            btn_sair.setAttribute('style','display:none')
            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa
            
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
        s2_img6.src = capa_eps[16]
        s2_img6.style = "width: 20%; opacity: 1;"

        s2_p6.innerHTML = '6'
        s2_P6.innerHTML = 'Epsódio 06'

        eps.appendChild(s2_btn_eps6)

        s2_btn_eps6.appendChild(s2_p6)
        s2_btn_eps6.appendChild(s2_img6)
        s2_btn_eps6.appendChild(s2_P6)

        s2_btn_eps6.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let btn_sair = document.getElementById('sair')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            btn_sair.setAttribute('style','display:none')
            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa
            
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
        s2_img7.src = capa_eps[17]
        s2_img7.style = "width: 20%; opacity: 1;"

        s2_p7.innerHTML = '7'
        s2_P7.innerHTML = 'Epsódio 07'

        eps.appendChild(s2_btn_eps7)

        s2_btn_eps7.appendChild(s2_p7)
        s2_btn_eps7.appendChild(s2_img7)
        s2_btn_eps7.appendChild(s2_P7)

        s2_btn_eps7.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let btn_sair = document.getElementById('sair')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            btn_sair.setAttribute('style','display:none')
            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa
            
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
        s2_img8.src = capa_eps[18]
        s2_img8.style = "width: 20%; opacity: 1;"

        s2_p8.innerHTML = '8'
        s2_P8.innerHTML = 'Epsódio 08'

        eps.appendChild(s2_btn_eps8)

        s2_btn_eps8.appendChild(s2_p8)
        s2_btn_eps8.appendChild(s2_img8)
        s2_btn_eps8.appendChild(s2_P8)

        s2_btn_eps8.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let btn_sair = document.getElementById('sair')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            btn_sair.setAttribute('style','display:none')
            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa
            
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
        s2_img9.src = capa_eps[19]
        s2_img9.style = "width: 20%; opacity: 1;"

        s2_p9.innerHTML = '9'
        s2_P9.innerHTML = 'Epsódio 09'

        eps.appendChild(s2_btn_eps9)

        s2_btn_eps9.appendChild(s2_p9)
        s2_btn_eps9.appendChild(s2_img9)
        s2_btn_eps9.appendChild(s2_P9)

        s2_btn_eps9.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let btn_sair = document.getElementById('sair')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            btn_sair.setAttribute('style','display:none')
            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa
            
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
        s2_img10.src = capa_eps[20]
        s2_img10.style = "width: 20%; opacity: 1;"

        s2_p10.innerHTML = '10'
        s2_P10.innerHTML = 'Epsódio 10'

        eps.appendChild(s2_btn_eps10)

        s2_btn_eps10.appendChild(s2_p10)
        s2_btn_eps10.appendChild(s2_img10)
        s2_btn_eps10.appendChild(s2_P10)

        s2_btn_eps10.addEventListener('click',()=>{

            let btn_fechar = document.getElementById('fechar')
            let btn_sair = document.getElementById('sair')
            let play_temporadas = document.getElementById('temporadas')
            let play_video = document.getElementById('play_video')

            btn_sair.setAttribute('style','display:none')
            play_temporadas.setAttribute('style','display:none')
            btn_fechar.setAttribute('style','display:block')
            play_video.setAttribute('style','display:block')
                
            let videoPlayer = document.querySelector(".videoPlayer")

            videoPlayer.poster =  capa
            
            videoPlayer.src = caminho + eps_[20]
            
            videoPlayer.setAttribute('style', 'display:block')
            
            document.querySelector(".videoPlayer").play()

        }) /* FIM EPS 10 */

        cont_temp = 1
        type_temp = 'temp2'
        console.log(type_temp)

    } /* FIM TEMPORADA 02 */
    
} /* FIM FUNCTION myeps */