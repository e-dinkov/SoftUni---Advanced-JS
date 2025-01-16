function ascendingSubset (input){
    let biggest = input [0]
    let outputArray = [biggest]
    for(let i = 1 ; i < input.length; i++){
        if(input[i] >= biggest) {
           outputArray .push(input[i])
           biggest = input[i]
        }
        else{
            continue
        }
    }
    return outputArray

}
ascendingSubset([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    )