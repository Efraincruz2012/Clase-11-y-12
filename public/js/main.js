const socket = io();


///// Prodcto/////////////
 function addProduct(e) {
    const product = {
        title: document.getElementById('title').value,
        price: document.getElementById('price').value,
        thumbnail: document.getElementById('thumbnail').value
    };
    document.getElementById('title').value = ''
    document.getElementById('price').value = ''
    document.getElementById('thumbnail').value = ''
    socket.emit('new-product', product);
    return false;
} 

/////////CHAT////////
function addMessage(e) {
    const mensaje = {
        author: document.getElementById('username').value,
        text: document.getElementById('texto').value
    }
    socket.emit('nuevoMensaje', mensaje);
    return false;
}

function makeHTML(mensajes) {
    return mensajes.map((elem, index) => {
        return (`<div>
            <strong>${elem.author}</strong>:
            <em>${elem.text}</em> </div>`)
    }).join(" ")
}

function render(mensajes) {
    const html = makeHTML(mensajes)
    document.getElementById('mensajes').innerHTML = html;
}

socket.on('mensajes', mensajes => {
    render(mensajes)
});