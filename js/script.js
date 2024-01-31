let video_demo = document.getElementById('video_demo')
let play = document.getElementById('play')
let pause = document.getElementById('pause')
let at = 0

play.setAttribute('style','z-index:9;')

play.addEventListener('click',()=>{
    at = 1
    video_demo.play()
    play.setAttribute('style', 'display:none;')
    pause.setAttribute('style','z-index:9;')

})
pause.addEventListener('click',()=>{
    video_demo.pause()
    play.setAttribute('style', 'display:block;')
    pause.setAttribute('style', 'display:none;')
    play.setAttribute('style','z-index:9;')
    at = 0
})

video_demo.addEventListener('mouseenter',()=>{

    if(at == 1){
        pause.setAttribute('style', 'display:none;')
        at = 2
    }else if(at == 2){
        pause.setAttribute('style', 'display:block;')
        at = 1
    }

})


 

