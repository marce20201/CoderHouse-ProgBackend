
const socket = io("ws://localhost:8080");

let inputEmail = document.querySelector('#input-email')
let inputText = document.querySelector('#input-text')
let btnEnviar = document.querySelector('#btn-enviar')
let btnLoad = document.querySelector('#btn-load')
let chatList = document.querySelector('#chat-list')
let alerta = document.querySelector('.alert')

btnEnviar.addEventListener('click',()=>{
    let objMsg = {
        email: inputEmail.value,
        texto: inputText.value
    }    
    socket.emit('nuevo-mensaje',objMsg)
})

socket.on('recibido',data=>{
    alerta.classList.add('hide')
    let msjNuevo = document.createElement('li')
    msjNuevo.innerHTML = `<p><span id="email">${data.email}</span> <span id="msg">${data.texto}</span></p>`
    chatList.appendChild(msjNuevo)
})

socket.on('mensajes',(data)=>{
    if(data.length == 0){
        alerta.classList.remove('hide')    
    }else{
        alerta.classList.add('hide')
        data.forEach(element => {
            let msjNuevo = document.createElement('li')
            msjNuevo.innerHTML = `<p><span id="email">${element.email}</span> <span id="msg">${element.texto}</span></p>`
            chatList.appendChild(msjNuevo)
        });
    }
})