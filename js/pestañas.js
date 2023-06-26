 // Función JavaScript para manejar las pestañas
 function openTab(tabName) {
    var i, tabcontent, tablinks;
  
    // Ocultar todos los contenidos
    tabcontent = document.getElementsByClassName("content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remover la clase 'active' de todas las pestañas
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
  
    // Mostrar el contenido de la pestaña seleccionada y agregar la clase 'active' a la pestaña
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName + "-tab").classList.add("active");
  }