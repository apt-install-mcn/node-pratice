const http = require('http');
const chalk = require('chalk');
const { log } = require('console');

const host = 'localHost';
const port = 8000;


const server = http.createServer((req , res) => {
    res.writeHead(200, { 'Content-Type': 'application/json'});
    const response = JSON.stringify({ message: 'Hola node', author: 'Moises'});
    res.end(response);
});

server.listen(port, host, () => {
    console.log(chalk.green(`Servidor en ejecución en http://${host}:${port}`));
  });
  