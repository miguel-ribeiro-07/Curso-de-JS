function fatorial(n){
    if (n == 1){
        return '1'
    }else{
        let result = 1
        for(;n > 1; --n)
        result *= n
        return result
    }
}
console.log(fatorial(5))