var array = [] // declara o vetor
var bigger = 0 // maior número
var smaller = 101 // menor número
var sum = 0 // soma dos números
var select = document.getElementById("select") // encontra o elemento "Select"
var div = document.getElementById('result') // encontra o elemento "Div"
var i = 0
function insert(){
    div.innerHTML = ""
    var numb = Number(document.getElementById("number").value) // pega o número digitado
    sum += numb // soma
    if (numb > bigger){ //verificar se é maior
        bigger = numb
    }if (numb < smaller){ // verificar se é menor
        smaller = numb
    }
    if (numb == "" || array.indexOf(numb) != -1 || numb > 100 || numb < 1){ //validar o valor
        alert("Number invalid or already exist in list")
    }else{
        let op = document.createElement('option')// Cria um elemento Option
        select.appendChild(op)// Insere o novo Option no Select
        op.text = `Value ${numb} added`// O option recebe um texto
        array.push(numb)//insere o número digitado no vetor
    }
}
function calculate(){
    for(;i <= 5;i++){
        let paragraph = document.createElement('p')
        div.appendChild(paragraph)
        switch(i){
            case 1:
                paragraph.innerHTML = `Altogether there are ${array.length} numbers`
            break
            case 2:
                paragraph.innerHTML = `The smaller number informed is ${smaller}`
            break
            case 3:
                paragraph.innerHTML = `The bigger number informed is ${bigger}`
            break
            case 4:
                paragraph.innerHTML = `The sum of all numbers is ${sum}`
            break
            case 5:
                paragraph.innerHTML= `The average of values ${sum / array.length}`
        }
    }
    i = 0
}