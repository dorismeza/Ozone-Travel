<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $correo = $_POST['correo'];
    $mensaje = $_POST['mensaje'];

    ini_set('SMTP', 'smtp.gmail.com');
    ini_set('smtp_port', 587);

    // Dirección de correo a la que se enviará el formulario
    $destinatario = "dfulano058@gmail.com";

    // Asunto del correo
    $asunto = "Nuevo formulario de contacto";

    // Cuerpo del correo
    $cuerpo = "Nombre: " . $nombre . "\n";
    $cuerpo .= "Teléfono: " . $telefono . "\n";
    $cuerpo .= "Correo electrónico: " . $correo . "\n";
    $cuerpo .= "Mensaje: " . $mensaje;

    // Cabeceras del correo
    $cabeceras = "From: $correo\r\n";
    $cabeceras .= "Reply-To: $correo\r\n";

    // Enviar el correo
    if (mail($destinatario, $asunto, $cuerpo, $cabeceras)) {
        echo "El formulario ha sido enviado correctamente.";
    } else {
        echo "Error al enviar el formulario.";
    }
}
?>
