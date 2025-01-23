function alphabeticalCatalogue(input){
let products ={}
input.forEach(element=>{
    let [name, price] = element .split(' : ')
    products[name] = Number(price)
})
let orderedKeys = Object.keys(products) .sort((a,b)=>{
   return a.localeCompare(b)
})
let  letter = orderedKeys[0][0]
console.log(letter)
for(let currentKey of orderedKeys){
 if(currentKey[0] !== letter){
    letter = currentKey[0]
    console.log(letter)
    console.log(`${currentKey}: ${products[currentKey]}`);
    
 }
 else{
    console.log(`${currentKey}: ${products[currentKey]}`)

 }
}
//console.log(orderedKeys);

}
alphabeticalCatalogue(['Appricot : 20.4', 

'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10'])