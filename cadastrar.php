<?php

    session_start();

    include_once "conexao.php";

    $dados = filter_input_array(INPUT_POST, FILTER_DEFAULT);

    if(empty($dados['cadnome'])){
        $retorna = ['erro' => true, 'msg' => "Erro: Necessario preencher o campo nome!"];

    }elseif(empty($dados['cademail'])){
        $retorna = ['erro' => true, 'msg' => "Erro: Necessario preencher o campo email!"];
        
    }elseif(empty($dados['cadsenha'])){
        $retorna = ['erro' => true, 'msg' => "Erro: Necessario preencher o campo senha!"];

    }else{

        $query_usuario_pes = "SELECT id 
            FROM usuarios 
            WHERE email=:email 
            LIMIT 1";

        $result_usuario = $conn->prepare($query_usuario_pes);
        $result_usuario->bindParam('email', $dados['cademail'], PDO::PARAM_STR);
        $result_usuario->execute();

        if(($result_usuario) and ($result_usuario->rowCount() != 0)){

            $retorna = ['erro' => true, 'msg' => "Erro: O e-mail ja esta cadastrado!"];
            
        }else{

            $query_usuario = "INSERT INTO usuarios (nome, email, senha) 
            VALUES (:nome, :email, :senha)";

            $cad_usuario = $conn->prepare($query_usuario);

            $cad_usuario->bindParam(':nome', $dados['cadnome'], PDO::PARAM_STR);
            $cad_usuario->bindParam(':email', $dados['cademail'], PDO::PARAM_STR);

            //aqui criptocrafa a senha do usuario
            $senha_cript = password_hash($dados['cadsenha'], PASSWORD_DEFAULT); 

            $cad_usuario->bindParam(':senha', $senha_cript, PDO::PARAM_STR);

            $cad_usuario->execute();

            if($cad_usuario->rowCount()){

                $retorna = ['erro' => false, 'msg' => "Usuario cadastrado com sucesso!"];
            }else{
                $retorna = ['erro' => true, 'msg' => "Erro: Usuario nao cadastrado!"];
            }
        } 
    }

    echo json_encode($retorna);