document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario de forma predeterminada

    // Enviar el formulario utilizando la API de FormSubmit
    fetch(event.target.action, {
        method: event.target.method,
        body: new FormData(event.target)
    })
    .then(function(response) {
        // Comprobar si el correo se envió correctamente
        if (response.ok) {
            // Mostrar una alerta de éxito
            swal("¡Correo enviado!", "El correo ha sido enviado exitosamente.", "success");
            
            // Restablecer los valores del formulario
            event.target.reset();
        } else {
            // Mostrar una alerta de error
            swal("Error", "Hubo un error al enviar el correo.", "error");
        }
    })
    .catch(function(error) {
        // Mostrar una alerta de error en caso de una excepción
        swal("Error", "Hubo un error al enviar el correo.", "error");
    });
});
