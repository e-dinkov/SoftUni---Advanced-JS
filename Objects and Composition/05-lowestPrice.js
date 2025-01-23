function findingLowestPrice(input) {
    let products = {}
    for (let element of input) {
        let [town, currentProduct, price] = element.split(' | ')
        price = + price
        if (products[currentProduct]) {
            if (products[currentProduct]['price'] > price) {
                products[currentProduct]['price'] = price
                products[currentProduct]['town'] = town
            }
        }
        if (!products[currentProduct]) {
            products[currentProduct] = {
                price,
                town
            }
        }
    }
   // console.log(products)
   let arrProduct = Object.entries(products)
   for(let [currentElement, lilObj] of arrProduct){
    console.log(`${currentElement} -> ${products[currentElement]['price']} (${products[currentElement]['town']})`) 
   }
  

}
findingLowestPrice(['Sample Town | Sample Product | 1000',

    'Sample Town | Orange | 2',

    'Sample Town | Peach | 1',

    'Sofia | Orange | 3',

    'Sofia | Peach | 2',

    'New York | Sample Product | 1000.1',

    'New York | Burger | 10'])