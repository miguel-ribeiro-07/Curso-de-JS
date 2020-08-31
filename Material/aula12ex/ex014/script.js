var mensage = document.getElementById('msg')
var hours = new Date().getHours()
var picture = document.getElementById('foto')
var bground = document.body
hours = 18
mensage.innerHTML = `Agora são ${hours} horas`
if (hours < 12){
    picture.src = 'manha.png'
    bground.style.backgroundColor = "yellow"
}else if(hours < 18){
    picture.src = 'tarde.png'
    bground.style.backgroundColor = "orange"
}else{
    picture.src = 'noite.png'
    bground.style.backgroundColor = "black"
}