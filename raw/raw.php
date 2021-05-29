<?php
// header("Access-Control-Allow-Origin: *");
// header("Content-Type: application/text; charset=utf-8");


$port = $_SERVER['SERVER_PORT'];
if($port == 80){$protocolo = "http://";}
if($port == 443){$protocolo = "https://";}
$url = $protocolo . $_SERVER["HTTP_HOST"] ."/utilidades/";

$parametros = $_GET['id'];

    switch ($parametros) {
        case 'bootstrap':
        $cadena = "<link href='" .$url ."css/bootstrap.min.css?version=4.5.3' rel='stylesheet'>";
        //echo $cadena;
        break;

        default:$cadena = $parametros;
        }

echo $cadena;