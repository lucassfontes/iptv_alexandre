
/*let userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.querySelector('#logado')

if(localStorage.getItem('token') == null){

    window.location.href='../index.html'

}else{

    logado.innerHTML = `Olá ${userLogado.nome}`
}*/

function sair(){
    
    //localStorage.removeItem('token')
    //localStorage.removeItem('userLogado')
    //window.location.href='sair.php'
    header('Location: pgs/sair.php');
   
}

function expresso_amanha(){
    window.location.href = '../series/expresso_amanha/expresso_amanha.html'
}

function game_of_thrones(){
    window.location.href = '../series/game_of_thrones/game_of_thrones.html'
}

function peaky_blinders(){
    window.location.href = '../series/peaky_blinders/peaky_blinders.html'
}

function wanda_vision(){
    window.location.href = '../series/wanda_vision/wanda_vision.html'
}

function the_umbrella_academy(){
    window.location.href = '../series/the_umbrella_academy/the_umbrella_academy.html'
}

function round_6(){
    window.location.href = '../series/round_6/round_6.html'
}

function ultimo_dragao(){
    window.location.href = '../series/ultimo_dragao/ultimo_dragao.html'
}supernatural

function supernatural(){
    window.location.href = '../series/supernatural/supernatural.html'
}

