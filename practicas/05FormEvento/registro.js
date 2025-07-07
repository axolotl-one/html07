document.getElementById("formRegistro").addEventListener("submit", function(e) {
    e.preventDefault();
    const error = document.getElementById("mensajeError")
    if(isNaN(document.getElementById("inputTelefono").value)){ error.innerHTML = "El telefono debe contener números";return}
    if(!isNaN(document.getElementById("inputUsuario").value)){ error.innerHTML = "El nombre no debe contener números";return}
    if(!validarExtension(document.getElementById("inputFile").value)){ error.innerHTML = "Ingresa un archivo con extensión .png o .jpg";return}
    document.getElementById("mensajeError").innerHTML = "";
    document.getElementById("menuContent").innerHTML = "<legend>Registro exitoso</legend><h1>Se ha guardado tu registro</h1>";
})

function validarExtension(archivo){
    if(archivo.charAt(archivo.length - 4) === ".")
        if(archivo.charAt(archivo.length - 3) === "j")
            if(archivo.charAt(archivo.length - 2) === "p")
                if(archivo.charAt(archivo.length - 1) === "g")
                    return true;
    if(archivo.charAt(archivo.length - 4) === ".")
        if(archivo.charAt(archivo.length - 3) === "p")
            if(archivo.charAt(archivo.length - 2) === "n")
                if(archivo.charAt(archivo.length - 1) === "g")
                    return true;
    return false; 
}