
const socket = io("ws://localhost:8080");



let inputEmail = document.querySelector('#input-email')
let inputText = document.querySelector('#input-text')
let btnEnviar = document.querySelector('#btn-enviar')
let btnLoad = document.querySelector('#btn-load')

btnEnviar.addEventListener('click',()=>{
    socket.emit('nuevo-mensaje',{
            email: inputEmail.value,
            texto: inputText.value  
    })
})

btnLoad.addEventListener('click',()=>{
    fetch('http://localhost:8080/api/msj/',{
        method:'GET'
    }).then(res=>{
        console.log(res)
    })
    .catch(err=>console.log(err))

})

