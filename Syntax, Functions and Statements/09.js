function toUpperCase (string){
let splittingPattern = /\W+/
let stringParts = string.split(splittingPattern)
let outputString = ''
stringParts.forEach(element => {
    if(element !== ''){
    element = element.toUpperCase()
    outputString += element + ', '
    }
    
});
outputString = outputString.slice(0,outputString.length - 2)
console.log(outputString)

}
toUpperCase('hello')