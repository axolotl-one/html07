// Simulando una base de datos de mesas
let mesasDisponibles = 5;

// Función que simula la verificación de disponibilidad de mesas
function verificarDisponibilidad(nombreCliente, mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(mesasDisponibles>mesasSolicitadas) { mesasDisponibles -= mesasSolicitadas; resolve("Mesas Disponibles para " + nombreCliente);}
        else reject("No hay mesas disponibles para " + nombreCliente);
    }, 2000);
  });
}

// Función que simula el envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.floor(Math.random()*10)%3 !== 0) resolve("Correo enviado con éxito a " + nombreCliente);
        else reject("No se pudo enviar el correo a " + nombreCliente); // probabilidad 3/10 de salir error;
    }, 1500);
  });
}

// Función principal para manejar una reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    console.log("Verificando disponibilidad de mesas...");
    const disponibilidad = await verificarDisponibilidad(nombreCliente, mesasSolicitadas);
    console.log(disponibilidad + "\nEnviando Correo a " + nombreCliente);
    const confirmacion = await enviarConfirmacionReserva(nombreCliente);
    console.log(confirmacion);
  } catch (error) {
    console.log("Error:", error);  // Maneja los errores en la promesa
  }
}

// Llamada de prueba
hacerReserva("Juan Pérez", 3);  // Intenta hacer una reserva para 3 personas
setTimeout(() => {
    hacerReserva("Axolotl Tepotzon", 3);  // Intenta hacer una reserva para 3 personas
}, 1500);