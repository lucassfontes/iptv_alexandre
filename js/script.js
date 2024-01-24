let modal = document.getElementById('modal')
let play = document.getElementById('play')
let close = document.getElementById('close')
let videoPlay = document.getElementById('videoPlay')

play.addEventListener('click', ()=>{

    
    modal.setAttribute('style','display:block')
    videoPlay.play()
})

close.addEventListener('click', ()=>{
    videoPlay.pause()
    modal.setAttribute('style','display:none')

})


