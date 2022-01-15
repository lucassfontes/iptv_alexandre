<?php
    session_start();

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>

    <script data-ad-client="ca-pub-0877093098611905" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Início-NetMix</title>

    <link rel="shortcut icon" href="https://fontmeme.com/permalink/211216/7a95c79b12a647fffe61a6e392eeb85f.png" type="image/x-icon">

    <link rel="stylesheet" href="../css/css_home.css">
    
</head>
    <body>
        
        <div class="logo">

            <a id="netflix_font" href="/pgs/home.html">

               <img src="https://fontmeme.com/permalink/211216/79f207cfe6ddd3cc61a2269d400dd12f.png" alt="netflix-font" border="0">
                
            </a>

            <div id="log">

                <h2 id="logado">
                    <?php
                        echo "Bem vindo  - " . $_SESSION['nome'];
                    
                    ?>
                </h2>
                <a href='../sair.php'><button id="sair">Sair</button></a>

            </div> <!-- log -->

        </div> <!-- logo -->

            <div id="container">
                
                <div id="conteudo">
                                   
                    <div class="poste">
                    
                        <button id="expresso_amanha" class="contem" onclick="expresso_amanha()"></button>
                            
                    </div> <!-- poste -->

                    <div class="poste">
                    
                        <button id="game_of_thrones" class="contem" onclick="game_of_thrones()"></button>
                            
                    </div> <!-- poste -->

                    <div class="poste">
                    
                        <button id="peaky_blinders" class="contem" onclick="peaky_blinders()"></button>
                            
                    </div> <!-- poste -->
                    
                    <div class="poste">
                    
                        <button id="wanda_vision" class="contem" onclick="wanda_vision()"></button>
                            
                    </div> <!-- poste -->

                    <div class="poste">
                    
                        <button id="the_umbrella_academy" class="contem" onclick="the_umbrella_academy()"></button>
                            
                    </div> <!-- poste -->

                    <div class="poste">
                    
                        <button id="round_6" class="contem" onclick="round_6()"></button>
                            
                    </div> <!-- poste -->
                    
                    <div class="poste">
                    
                        <button id="ultimo_dragao" class="contem" onclick="ultimo_dragao()"></button>
                            
                    </div> <!-- poste -->

                    <div class="poste">
                    
                        <button id="supernatural" class="contem" onclick="supernatural()"></button>
                            
                    </div> <!-- poste -->

                </div> <!-- conteudo -->

            </div> <!-- container -->

        <script src="../js/js_home.js"></script>
    </body>
</html>