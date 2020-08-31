var weekday = new Date().getDay()
var result = 'The day of week is '
switch(weekday){
    case 0:
        console.log(result += 'Sunday')
    break
    case 1:
        console.log(result += 'Monday')
    break
    case 2:
        console.log(result += 'Tuesday')
    break
    case 3:
        console.log(result += 'Wednesday')
    break
    case 4:
        console.log(result += 'Thursday')
    break
    case 5:
        console.log(result += 'Friday')
    break
    case 6:
        console.log(result += 'Saturday')
    break
    default:
        console.log('Incorrect Value')
}