function ubiasedSorting(input){
    let sortedArray = input.sort((a,b)=>{
        return a - b
    })
    let newArray = []
    for(let i = 0 ; i < Math.ceil(sortedArray.length/2); i++){
        if( i === sortedArray.length - 1 - i){
            newArray.push(sortedArray[i])
            
        }
        else{ newArray.push(sortedArray[i],sortedArray[sortedArray.length - 1 - i])}
       
    }
    return newArray
}
ubiasedSorting([22, 9, 63, 3, 2, 19, 54, 11, 21, 18, 1])
//	[2, 63, 3, 54, 9, 22, 11, 21, 18, 19]