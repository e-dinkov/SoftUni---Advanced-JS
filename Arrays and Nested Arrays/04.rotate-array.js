function rotateArray(arr,rotations){
    for(let i = 0; i < rotations; i ++){
        let transferedItem = arr [arr.length - 1]
        arr.pop()
        arr.unshift(transferedItem)
    }
console.log(arr.join(" "))
}
rotateArray(['1', 
    '2', 
    '3', 
    '4'], 
    2
    )
    rotateArray(	['Banana', 
        'Orange', 
        'Coconut', 
        'Apple'], 
        15	
        
        )