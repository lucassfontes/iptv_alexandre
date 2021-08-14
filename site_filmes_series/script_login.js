let btn_eye = document.querySelector('#eye')
let btn_slash = document.querySelector('#eye-slash')

btn_eye.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
        btn_eye.setAttribute('style', 'display:none')
        btn_slash.setAttribute('style', 'display:block')
    }
})

btn_slash.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')
    
    if(inputSenha.getAttribute('type') == 'text'){
        inputSenha.setAttribute('type', 'password')
        btn_eye.setAttribute('style', 'display:block')
        btn_slash.setAttribute('style', 'display:none')

    }
})

function entrar(){
    let usuario = document.querySelector('#usuario')
    let userLabel = document.querySelector('#userLabel')

    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhaLabel')

    let msgError = document.querySelector('#msgError')

    let listaUser = []

    let userValid = {
        nome: '6a54sd56as5d',
        user: '23v1bn4f8gth',
        senha: '7yu84b52nm1',
    }
    

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    if(listaUser == null){

    }else{

        listaUser.forEach((item) => {

            if(usuario.value == item.userCad && senha.value == item.senhaCad){
                userValid = {
                    nome: item.nomeCad,
                    user: item.userCad,
                    senha: item.senhaCad
                }
            }
        })
    }

    if(usuario.value == userValid.user && senha.value == userValid.senha ){
        
        window.location.href='site_filmes_series/tela_inicio.html'

        let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)
        
        localStorage.setItem('token',token)

        localStorage.setItem('userLogado', JSON.stringify(userValid))
        
    }else{
        userLabel.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        senhaLabel.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')

        msgError.setAttribute('style', 'display:block')
        msgError.innerHTML = '*Usuario ou senha incorretos, \n Por favor insira um usuario ou senha validos! '

        usuario.value = ''
        senha.value = ''
        usuario.focus()
    }
}