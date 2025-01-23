function calorieObject(input){
    let outputOBJ = {}
for(let i = 0 ; i < input.length; i +=2){
    outputOBJ[input[i]] = Number(input[i + 1])
}
console.log(outputOBJ)
}
calorieObject(['Yoghurt', '48', 'Rise', '138','Apple', '52'])
// ['Yoghurt', '48', 'Rise', '138','Apple', '52']

//      { Yoghurt: 48, Rise: 138, Apple: 52 }