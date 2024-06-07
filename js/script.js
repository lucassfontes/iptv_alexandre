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

let fom_mod = document.getElementById('fom_mod')
let start_form = document.getElementById('start_form')

let nome = document.getElementById('nome')
let sobre_nome = document.getElementById('sobre_nome')
let email = document.getElementById('email')
let celular = document.getElementById('celular')
let cidade = document.getElementById('cidade')
let UF = document.getElementById('UF')

start_form.className = 'btn btn-primary disabled'

nome.addEventListener('keyup',()=>{
    
    if(nome.value == ''){
        nome.className = 'form-control is-invalid'
    }else if(nome.value !== ''){
        nome.className = 'form-control is-valid'
    }
    verefic()
})

sobre_nome.addEventListener('keyup',()=>{
    
    if(sobre_nome.value == ''){
        sobre_nome.className = 'form-control is-invalid'
    }else if(sobre_nome.value !== ''){
        sobre_nome.className = 'form-control is-valid'
    }
    verefic()
})

email.addEventListener('keyup',()=>{
    
    if(email.value == ''){
        email.className = 'form-control is-invalid'
    }else if(email.value !== ''){
        email.className = 'form-control is-valid'
    }
    verefic()
})

celular.addEventListener('keyup',()=>{
    
    if(celular.value == ''){
        celular.className = 'form-control is-invalid'
    }else if(celular.value !== ''){
        celular.className = 'form-control is-valid'
    }
    verefic()
})

cidade.addEventListener('keyup',()=>{
    
    if(cidade.value == ''){
        cidade.className = 'form-control is-invalid'
    }else if(cidade.value !== ''){
      cidade.className = 'form-control is-valid'
    }
    verefic()
})


UF.addEventListener('change',()=>{
    
    if(UF.value == 'Selecione' ||  UF.value == '' ){
        UF.className = 'form-control is-invalid'
    }else if(UF.value !== ''){
        UF.className = 'form-control is-valid'
    }
    verefic()
})

start_form.className = 'btn btn-primary'

function verefic(){

    if (nome.value !== '' & 
        sobre_nome.value !== '' & 
        email.value !== '' &
        celular.value !== '' &
        cidade.value !== '' &
        UF.value !== 'Selecione'){

        start_form.className = 'btn btn-primary' 

    }else{
        start_form.className = 'btn btn-primary disabled'
    }

}

// input
let instituicao = document.getElementById('instituicao')
let Curso = document.getElementById('Curso')

//radio Nivel do Curso
nivel = document.getElementById('nivel')

let graduacao = document.getElementById('graduacao')
let pos_graduacao = document.getElementById('pos_graduacao')
let mestrado = document.getElementById('mestrado')
let doutorado = document.getElementById('doutorado')
let licenciaturas = document.getElementById('licenciaturas')
let bacharelados = document.getElementById('bacharelados')
let tecnologo = document.getElementById('tecnologo')

let Nivels_dos_Cursos = document.querySelectorAll("input[name='Nivel_do_Curso']")
var selected_nivel

let Nivels_selected = () => {
    selected_nivel = document.querySelector("input[name='Nivel_do_Curso']:checked").value
}
Nivels_dos_Cursos.forEach(Nivel_do_Curso => {
    Nivel_do_Curso.addEventListener("change",
        Nivels_selected)
})

// radio Modalidade
let pesencial = document.getElementById('pesencial')
let semi_pesencial = document.getElementById('semi_pesencial')
let EAD = document.getElementById('EAD')

let Modalidades = document.querySelectorAll("input[name='Modalidade']")
var selected_mod

let Modalidade_selected = () => {
    selected_mod = document.querySelector("input[name='Modalidade']:checked").value
}
Modalidades.forEach(Modalidade => {
    Modalidade.addEventListener("change",
        Modalidade_selected)
})


/*const btn_PDF = document.getElementById('btn_PDF')

btn_PDF.addEventListener('click', () => {
    const nivi = document.getElementById('nivi')

    const options = {
        margin: [10,10,10,10],
        filename: "nomedopdf.pdf",
        html2cavas: {scale: 2},
        jsPDF: {unit: "mm", format: "a4", orientation: "portrait"}
    }

    html2pdf().set(options).from(nivi)
})*/



btn_PDF.addEventListener('click', () => {

    let nome_ft = 'Nome: ' + nome.value + '<br>'
    let sobre_nome_ft = 'Sobre nome: ' + sobre_nome.value + '<br>'
    let email_ft = 'Email: ' + email.value + '<br>'
    let celular_ft = 'Celular: ' + celular.value + '<br>'
    let cidade_ft = 'Cidade:' + cidade.value + '<br>'
    let UF_ft = 'Estado: ' + UF.value + '<br>'
    let instituicao_ft = 'Instituição: ' + instituicao.value + '<br>'
    let Curso_ft = 'Curso: ' + Curso.value + '<br>'
    let Nivel_do_Curso_ft = 'Nivel do Curso: ' + selected_nivel + '<br>'
    let Modalidade_ft = 'Modalidade: ' + selected_mod + '<br>'
    //let conteudo = ()
    var janela = window.open('','','width=800, heigth=600')

    janela.document.write('<html><head>')
    janela.document.write('<title>Academyc Brasil</title>')
    janela.document.write('</head><body>')
    janela.document.write(nome_ft, sobre_nome_ft, email_ft, celular_ft, cidade_ft, UF_ft, instituicao_ft, Curso_ft, Nivel_do_Curso_ft, Modalidade_ft)
    janela.document.write('</body></html>')
    
    janela.print()

})
