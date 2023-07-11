const readlineSync = require('readline-sync');

function obtenerJugadaComputadora() {
    let jugadas = ["piedra", "papel", "tijeras"];
    let indice = Math.floor(Math.random() * 3);
    return jugadas[indice];
  }
  
  function obtenerJugadaUsuario() {
    let jugadaUsuario = readlineSync.question("Ingresa tu jugada (piedra, papel o tijeras): ");
    return jugadaUsuario.toLowerCase();
  }
  
  function determinarGanador(jugadaComputadora, jugadaUsuario) {
    if (jugadaComputadora === jugadaUsuario) {
      return "Empate";
    } else if (
      (jugadaComputadora === "piedra" && jugadaUsuario === "tijeras") ||
      (jugadaComputadora === "papel" && jugadaUsuario === "piedra") ||
      (jugadaComputadora === "tijeras" && jugadaUsuario === "papel")
    ) {
      return "Gana la computadora";
    } else {
      return "Gana el usuario";
    }
  }
  
  let jugadaComputadora = obtenerJugadaComputadora();
  let jugadaUsuario = obtenerJugadaUsuario();
  let resultado = determinarGanador(jugadaComputadora, jugadaUsuario);
  
  console.log("La computadora eligió: " + jugadaComputadora);
  console.log("El usuario eligió: " + jugadaUsuario);
  console.log("El resultado fue: " + resultado);