const fs = require("node:fs");
// Datos iniciales de libros en formato JSON
let biblioteca = leerJSON();

function leerJSON(){
    if(!fs.existsSync("./libros.json")){
        console.log("No se encontró el archivo");
        return null;
    }
    try {
        const datosRaw = fs.readFileSync("libros.json", 'utf-8');
        const listaNotas = JSON.parse(datosRaw); // JSON a Arreglo
        return listaNotas;
    } catch (error) {
        console.error("Error al leer el archivo de forma síncrona:", error.message);
        return null;
    }
}

// Función para simular la lectura de datos (asimilar la lectura de un archivo JSON)
function leerDatos(callback) {
    setTimeout(() => {
        callback(biblioteca);
    }, 500);
}

// Función para mostrar todos los libros en consola
function mostrarLibros(time, callback) {
    setTimeout(() => {
        callback();
    }, time);
}

// Función para agregar un nuevo libro
function agregarLibro(mensaje, titulo, autor, genero, disponible) {
    const nuevoLibro = { titulo, autor, genero, disponible };
    setTimeout(() => {
        biblioteca.libros.push(nuevoLibro);
        fs.writeFileSync("./libros.json", JSON.stringify(biblioteca));
        leerDatos((datos) => {
            console.log(mensaje + "\nInventario de libros:");
            datos.libros.forEach((libro, index) => {
                console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} (${libro.disponible ? 'Disponible' : 'Prestado'})`);
            });
        });
    }, 500);
}

// Función para cambiar la disponibilidad de un libro
function actualizarDisponibilidad(mensaje, titulo, nuevoEstado) {
    // Simula un retraso antes de actualizar la disponibilidad
    setTimeout(() => {
        biblioteca.libros[1].titulo = titulo;
        biblioteca.libros[1].disponible = nuevoEstado;
        fs.writeFileSync("./libros.json", JSON.stringify(biblioteca)); 
        leerDatos((datos) => {
            console.log(mensaje + "\nInventario de libros:");
            datos.libros.forEach((libro, index) => {
                console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} (${libro.disponible ? 'Disponible' : 'Prestado'})`);
            });
        });
    }, 500);
}

// Ejemplo de cómo ejecutar la aplicación
mostrarLibros(1000, () => {leerDatos((datos) => {
            console.log("Apertura de Inventario: ~~~~~~~~~~~~~~" + "\nInventario de libros:");
            datos.libros.forEach((libro, index) => { console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} (${libro.disponible ? 'Disponible' : 'Prestado'})`);});
        })});
mostrarLibros(3000, () => {agregarLibro("Agregar Libro: ~~~~~~~~~~~~~~~~~~~~~~","El principito", "Antoine de Saint-Exupéry", "Fábula", true)});
mostrarLibros(5000, () => {actualizarDisponibilidad("Actualizar datos: ~~~~~~~~~~~~~~~~~~~","1984", false)});