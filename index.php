<?php
    session_start();

    if(isset($_SESSION['id']) and (isset($_SESSION['nome']))){

       // echo "<a> Bem vindo </a> " . "<a> $_SESSION[nome]</a>.<br>";
       // echo "<a href='sair.php'>Sair</a><br>";

       header('Location: pgs/home.php');

    }else{

        //echo "<div id='dados-usuario'>";
        //echo "<button type='button' >Acessar</button>";
    }

?>

<!DOCTYPE html>

<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>Login-NetMix</title>

        <link rel="shortcut icon" href="https://fontmeme.com/permalink/211216/7a95c79b12a647fffe61a6e392eeb85f.png" type="image/x-icon">
        
        <link rel="stylesheet" href="css/css_index.css">

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
        
    </head>
    <body>

        <form id="login-usaurio-form">

            <div class="logo">
                <a href="index.php">

                    <img src="https://fontmeme.com/permalink/211216/79f207cfe6ddd3cc61a2269d400dd12f.png" alt="netflix-font" border="0"></a>
            </div>
            
            <div class="container">
                
                <div class="card">
                    <h1>Entrar</h1>

                    <div class="label-float">

                        <input type="email" name="email" id="email" placeholder="Email">
                        <label id="emailLabel" for="email"></label>

                    </div>

                    <div class="label-float">

                        <input type="password" name="senha" id="senha" placeholder="Senha">
                        <label id="senhaLabel" for="senha"></label>

                        <i id="eye" class="fa fa-eye" ></i>
                        <i id="eye-slash" class="fa fa-eye-slash"></i>
                        
                    </div>

                    <div class="justify-center">

                        <button id="entrar" name="entrar" type="submit">Entrar</button>

                    </div>

                    <div id='msgError'></div>

                    <div>
                        <hr>
                    </div>

                    <p> Não tem uma conta?
                        <a href="./pgs/cadastro.php">Cadastre-se</a>
                    </p>

                </div>
            </div>
        </form>
        <script src="js/js_index.js"></script>
    </body>
</html>