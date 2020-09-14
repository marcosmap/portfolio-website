<?php

  if(isset($_POST['btn-submit'])) {
    $destino = 'email@email.com';
    $nombre = htmlentities($_POST['name']);
    $email = htmlentities($_POST['email']);
    $mensaje = htmlentities(($_POST['message']));

    $content = 'Nombre: '.$nombre.'\nEmail: '.$email.'\nMensaje: '.$mensaje;
    mail($destino, "Contacto", $content);
    header('Location: ../index.html');
    exit();
  }
