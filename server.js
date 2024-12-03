// Importar el paquete ws
const WebSocket = require('ws');

// Crear un servidor WebSocket en el puerto 8080
const wss = new WebSocket.Server({ port: 8080 });

console.log('Servidor WebSocket escuchando en ws://localhost:8080');

// Manejar conexiones de los clientes
wss.on('connection', (ws) => {
  console.log('Cliente conectado');

  // Enviar un mensaje al cliente
  ws.send('¡Hola, cliente!');

  // Manejar mensajes recibidos del cliente
  ws.on('message', (message) => {
    console.log(`Mensaje recibido del cliente: ${message}`);
    ws.send(`Servidor responde: ${message}`);
  });

  // Manejar la desconexión del cliente
  ws.on('close', () => {
    console.log('Cliente desconectado');
  });
});
