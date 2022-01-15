<?php

$host = "localhost";
$user = "root";
$pass = "";
$dbname = "d18015900_netfake_db";
$port = 3307;

try{
    //Conexap com a porta
    $conn = new PDO("mysql:host=$host;port=$port;dbname=" . $dbname, $user, $pass);

    //Conexap sem a porta
    //$conn = new PDO("mysql:host=$host;dbname=" . $dbname, $user, $pass);

    //echo("Conexao com banco de dados realizado com sucesso.  ");

}catch(PDOException $erro){

    echo("<a>Erro: Conexao com banco de dados nao realizado com sucesso. 
    Erro gerado</a> " . $erro -> getMessage());
}