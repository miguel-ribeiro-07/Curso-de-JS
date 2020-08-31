function calculate(){
    var start = Number(document.getElementById("start").value)
    var end = Number(document.getElementById("end").value)
    var step = Number(document.getElementById("step").value)
    var result = document.getElementById('result')
    if (result.innerHTML != ""){
        result.innerHTML = ""
    }else{
        if(step / 1 < 0){
            alert("[ERROR] Step Invalid!")
        }else{
            if (start < end){
                for(;start <= end;start += step){
                    result.innerHTML += start  + "&#128073"
                }
            }else{
                for(;start >= end;start -= step){
                    result.innerHTML += start  + "&#128073"
                }
            }
                result.innerHTML += "&#128681"
        }
    }
}
