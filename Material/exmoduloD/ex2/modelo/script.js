function verify(){
    var year = document.getElementById('year').value
    var male = document.getElementsByName('option')[0].checked
    var female = document.getElementsByName('option')[1].checked
    var age = new Date().getFullYear() - year
    var picture = document.getElementById('picture')
    var result = document.getElementById('result2')
    if(year != 0 && year < new Date().getFullYear()){
        if (male == true){
            document.getElementById('result').innerHTML=`The age is ${age} years old.`
            if(age <= 10){
                picture.src ="boy.jpg"
                result.innerHTML = "He is a boy"
            }else if(age < 21){
                picture.src="young m.jpg"
                result.innerHTML = "He is a teenager"
            }else if(age < 60){
                picture.src="adult m.jpg"
                result.innerHTML = "He is a adult"
            }else{
                picture.src="old m.jpg"
                result.innerHTML = "He is a elderly"
            }
        }else if (female == true){
            document.getElementById('result').innerHTML=`The age is ${age} years old.`
            if(age <= 10){
                picture.src = "girl.jpg"
                result.innerHTML = "She is a girl"
            }else if(age < 21){
                picture.src = "young f.jpg"
                result.innerHTML = "She is a teenager"
            }else if(age < 60){
                picture.src = "adult w.jpg"
                result.innerHTML = "She is a adult"
            }else{
                picture.src = "old w.jpg"
                result.innerHTML= "She is a elderly"
            }
        }else{
            alert("Invalid Sex!")
        }
    }else{
        alert("Type a valid year!")
    }
}