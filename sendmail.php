<?php

// Contact form by 

$mensaje.= "\n-----------------------------------\n";
$mensaje.= "\nDe: ".$_POST['nombre'];
$mensaje.= "\nE-mail: ".$_POST['correo'];
$mensaje.= "\nTelefono: ".$_POST['tel'];
$mensaje.= "\nMensaje: ".$_POST['mensaje'];
$mensaje.= "\n-----------------------------------\n";



$destino= "santiago.perezm.softtek.com";
$de = "Enviado desde Clinidenttabasco.com por: ".$_POST['nombre'];
$remitente = $_POST['correo'];

mail($destino,$de,$mensaje,"FROM: $remitente");

print("Su mensaje ha sido enviado correctamente.");

?>
