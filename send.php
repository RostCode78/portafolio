<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$destinatario = "zeroxcode78@gmail.com";
$asunto = "Contacto desde nuestra web";

$carta = "De: $name \n";
$carta .= "Correo: $email \n";
$carta .= "Mensaje: $message \n";

mail($destinatario, $asunto, $carta); 
header('Location:index.html');

?>