function sum_even(){
    var sum = 0;
    for (var i = 9; i < 486; i++){
        if(i%2===0){
            sum +=i;
        }
    }
    return sum;
}
console.log(sum_even())