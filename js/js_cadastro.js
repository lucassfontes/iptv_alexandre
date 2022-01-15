let btn_verSenha = document.querySelector('#verSenha')
let btn_verSenha_slash = document.querySelector('#verSenha_slash')

let btn_verConfirmeSenha = document.querySelector('#verConfirmeSenha')
let btn_verConfirmeSenha_slash = document.querySelector('#verConfirmeSenha_slash')

let nome = document.querySelector('#cadnome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#cademail')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#cadsenha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let comfirmSenha = document.querySelector('#comfirmSenha')
let labelComfirmSenha = document.querySelector('#labelComfirmSenha')
let validComfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')




btn_verSenha.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#cadsenha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
        btn_verSenha.setAttribute('style', 'display:none')
        btn_verSenha_slash.setAttribute('style', 'display:block')
    }else{
        inputSenha.setAttribute('type', 'password')
    }
})

btn_verSenha_slash.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#cadsenha')

    if(inputSenha.getAttribute('type') == 'text'){
        inputSenha.setAttribute('type', 'password')
        btn_verSenha.setAttribute('style', 'display:block')
        btn_verSenha_slash.setAttribute('style', 'display:none')
    }else{
        inputSenha.setAttribute('type', 'text')
    }
})


btn_verConfirmeSenha.addEventListener('click', ()=>{
    let inputConfirmeSenha = document.querySelector('#comfirmSenha')

    if(inputConfirmeSenha.getAttribute('type') == 'password'){
        inputConfirmeSenha.setAttribute('type', 'text')
        btn_verConfirmeSenha.setAttribute('style','display:none')
        btn_verConfirmeSenha_slash.setAttribute('style','display:block')
    }else{
        inputConfirmeSenha.setAttribute('type', 'password')
    }
})

btn_verConfirmeSenha_slash.addEventListener('click', ()=>{
    let inputConfirmeSenha = document.querySelector('#comfirmSenha')

    if(inputConfirmeSenha.getAttribute('type') == 'text'){
        inputConfirmeSenha.setAttribute('type', 'password')
        btn_verConfirmeSenha.setAttribute('style','display:block')
        btn_verConfirmeSenha_slash.setAttribute('style','display:none')
    }else{
        inputConfirmeSenha.setAttribute('type', 'text')
    }
})


nome.addEventListener('keyup', () => {

    if(nome.value.length <= 2){
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Nome * Insira no minimo 3 caracteres'
        nome.setAttribute('style', 'border-color: red')
        validNome = false
    }else{
        labelNome.setAttribute('style', 'color: #ff9100;')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: #ff9100;')
        validNome = true
    }
})

usuario.addEventListener('keyup', () => {
    
    if(usuario.value.length <= 14){
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML = 'Email * Insira no minimo 15 caracteres'
        usuario.setAttribute('style', 'border-color: red')
        validUsuario = false
    }else{
        labelUsuario.setAttribute('style', 'color: #ff9100;')
        labelUsuario.innerHTML = 'Email'
        usuario.setAttribute('style', 'border-color: #ff9100;')
        validUsuario = true
    }
})

senha.addEventListener('keyup', () => {
    
    if(senha.value.length <= 5){
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha * Insira no minimo 6 caracteres'
        senha.setAttribute('style', 'border-color: red')
        validSenha = false
    }else{
        labelSenha.setAttribute('style', 'color: #ff9100;')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color: #ff9100;')
        validSenha = true
    }
})

comfirmSenha.addEventListener('keyup', () => {
    
    if(senha.value != comfirmSenha.value){
        labelComfirmSenha.setAttribute('style', 'color: red')
        labelComfirmSenha.innerHTML = 'Confirmar Senha * A Senha não conferem'
        comfirmSenha.setAttribute('style', 'border-color: red')
        validComfirmSenha = false
    }else{
        labelComfirmSenha.setAttribute('style', 'color: #ff9100;')
        labelComfirmSenha.innerHTML = 'Confirmar Senha'
        comfirmSenha.setAttribute('style', 'border-color: #ff9100;')
        validComfirmSenha = true
    }
})

/*function cadastrar(){
    if(validNome && validUsuario && validSenha && validComfirmSenha){

        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            {
                nomeCad: nome.value,
                userCad: usuario.value,
                senhaCad: senha.value
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''

        setTimeout(()=>{
            window.location.href = '../index.html'
        }, 3000)
        
    }else{
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'

        labelNome.setAttribute('style','color:red')
        labelUsuario.setAttribute('style','color:red')
        labelSenha.setAttribute('style','color:red')
        labelComfirmSenha.setAttribute('style','color:red')

        nome.focus()

    }
}*/

let btn_volta = document.getElementById('x')
btn_volta.addEventListener('click',()=>{

    window.location.href='../index.php'

})

const cadForm = document.getElementById("cad-usaurio-form")

cadForm.addEventListener("submit", async (e) =>{
    

    if(nome.value == "" || usuario.value == "" || senha.value == "" /*|| comfirmSenha.value == ""*/){

        e.preventDefault()

        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'

    }else{

        e.preventDefault()

        const dadosForm = new FormData(cadForm);

        const dados = await fetch("../cadastrar.php", {
            method: "POST",
            body: dadosForm 
        });

        const resposta = await dados.json();

        console.log(resposta)

        if(resposta['erro']){

            msgError.setAttribute('style', 'display:block')
            msgError.innerHTML = resposta['msg'];

            console.log(msgError)

        }else{

            //msgSuccess.setAttribute('style', 'display:block')
            //msgSuccess.innerHTML = resposta['msg'];

            console.log('deu certo')

            window.location.href = '../index.php'
            //cadForm.reset();
            //cadModal.hide();
        }

    }
});