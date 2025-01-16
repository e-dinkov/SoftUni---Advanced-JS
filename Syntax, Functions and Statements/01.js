function easyFruits(typeOfFruit, grams, perKIlo){
let totalSum = (grams/1000) * perKIlo
console.log(`I need $${totalSum.toFixed(2)} to buy ${(grams/1000).toFixed(2)} kilograms ${typeOfFruit}.`)
}
easyFruits('orange', 2500, 1.80)