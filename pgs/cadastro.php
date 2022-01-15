<?php

    session_start();

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Cadastro-NetMix</title>

    <link rel="stylesheet" href="../css/css_cadastro.css">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">

    <link rel="shortcut icon" href="https://fontmeme.com/permalink/211216/7a95c79b12a647fffe61a6e392eeb85f.png" type="image/x-icon">

</head>
<body>

    <form id="cad-usaurio-form">

        <div class="logo">
            <a href="../index.html">

                <img src="https://fontmeme.com/permalink/211216/79f207cfe6ddd3cc61a2269d400dd12f.png" alt="netflix-font" border="0"></a>
        </div>

        <div class="container">

            <div class="card">

                <button id="x" onclick="volta()">X</button>

                <h1>Cadastrar</h1>

                <div class="label-float">
                    <input type="text" id="cadnome" name="cadnome" placeholder="Nome">
                    <label id="labelNome" for="cadnome"></label>
                </div>

                <div class="label-float">
                    <input type="email" id="cademail" name="cademail" placeholder="Email">
                    <label id="labelUsuario" for="email"></label>
                </div>

                <div class="label-float">
                    <input type="password" id="cadsenha" name="cadsenha" placeholder="Senha">
                    <label id="labelSenha" for="usuario"></label>

                    <i id="verSenha" class="fa fa-eye"></i>
                    <i id="verSenha_slash" class="fa fa-eye-slash"></i>

                </div>
                 
                <div class="label-float">
                    <input type="password" id="comfirmSenha" name="comfirmSenha" placeholder="Confirmar Senha">

                    <label id="labelComfirmSenha" for="comfirmSenha"></label>

                    <i id="verConfirmeSenha" class="fa fa-eye"></i>
                    <i id="verConfirmeSenha_slash" class="fa fa-eye-slash"></i>
                </div>
                
                <div id="msgError"></div>
                <div id="msgSuccess"></div>

                <div class="justify-center">
                    
                    <button id="cadastrar" name="cadastrar" type="submit">Cadastrar</button>

                </div>

                <div>
                    <hr>
                </div>

                <!--  <p>Eu li e aceito os 
                    <a href="#">termos</a> de uso
                    <input type="checkbox" name="" id="termos"> 
                </p> -->
                <p>Todos os direitos reservado.</p>
            </div>
        </div>
    </form>
    <script src="../js/js_cadastro.js"></script>
</body>
</html>