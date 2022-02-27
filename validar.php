<?php

session_start();

include_once "conexao.php";

$dados = filter_input_array(INPUT_POST, FILTER_DEFAULT);

/*$dados = [
    "email" => "lucas@gmail.com",
    "senha" => "123456"
];*/

if(empty($dados['email'])){

    $retorna = ['erro' => true, 'msg' => "*Erro: Necessario preencher o campo usuario!"];

}elseif(empty($dados['senha'])){

    $retorna = ['erro' => true, 'msg' => "*Erro: Necessario preencher o campo senha!"];

}else{

    $query_usuario = "SELECT id, nome, email, senha
        FROM usuarios 
        WHERE email=:email
        LIMIT 1";

    $result_usuario = $conn->prepare($query_usuario);
    $result_usuario->bindParam(':email', $dados['email'], PDO::PARAM_STR);
    $result_usuario->execute();

    if(($result_usuario) and ($result_usuario->rowCount() != 0)){
        
        $row_usuario = $result_usuario->fetch(PDO::FETCH_ASSOC);

        if(password_verify($dados['senha'], $row_usuario['senha'])){

            $_SESSION['id'] = $row_usuario['id'];
            $_SESSION['nome'] = $row_usuario['nome'];

            $retorna = ['erro' => false, 'dados' => $row_usuario];

        }else{

            $retorna = ['erro' => true, 'msg' => "*Erro: Usuario ou senha invalido!"];

        };

    }else{

        $retorna = ['erro' => true, 'msg' => "*Erro: Usuario ou senha invalido!"];

    }


}

echo json_encode($retorna);