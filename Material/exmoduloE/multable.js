function calculate(){
    var number = (document.getElementById('number').value)
    var multable = (document.getElementById('multable'))
    if(number.length == 0){
        alert("[ERRO] Select a valid Number")
    }else{
        number = Number(number) // Converte para Number
        multable.innerHTML = ""
        for(var i = 1; i <= 10; i++){
            var op = document.createElement('option')
            multable.appendChild(op)
            op.value = `tab ${i}`// da nome as options
            op.text = `${number} x ${i} = ${number*i}`
        }
    }
}