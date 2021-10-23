const express = require('express')

const producto = []

const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')
const productsON = require('./Producto.js')
const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

const mensajes = [
    { author: "Efrain", text: "¡Hola! ¿Que tal?" },
       
]

app.use(express.static('public'))


io.on('connection', socket => {
    console.log('Nuevo cliente conectado!')

    socket.emit('mensajes', mensajes)
    socket.emit('products', productsON.get())

    socket.on('nuevoMensaje', mensaje => {
        mensajes.push(mensaje)
        io.sockets.emit('mensajes', mensajes)
    })

    socket.on('new-product', data => {
        productsON.post(data)
        const products = productsON.get()
        io.sockets.emit('products', products);
    });
})

const PORT = 8080
const connectedServer = httpServer.listen(PORT, function () {
    console.log(`Servidor Http con Websockets escuchando en el puerto ${connectedServer.address().port}`)
})
connectedServer.on('error', error => console.log(`Error en servidor ${error}`))