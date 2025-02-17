class FashionRetailInventory{
    constructor(storehouse, location) {
        this.storehouse = storehouse
        this.location = location
        this.productStock = []

    }
    addProduct(productName, size, quantity, price) {
        const currEl = this.productStock.find(product =>productName === product.productName && size === product.size)
        if (currEl === undefined) {
            let temp = {
                productName,
                size,
                quantity : Number(quantity),
                price : Number(price)
            }
            this.productStock.push(temp)
            return `The product ${productName}, size ${size} was successfully added to the inventory`
              
            
        }
        else {
            currEl["quantity"] += Number(quantity)
            return `You added ${quantity} more pieces of product ${productName} size ${size}`
        }
        
    }
    sendProduct(productName, size) {
        const currElIndex = this.productStock.findIndex(
          (product) =>
            productName === product.productName && size === product.size
        )
        if (currElIndex === -1) {
            throw new Error(
              `The product ${productName}, size ${size} is not in the inventory`
            );
            
        }
        else {

            this.productStock.splice(currElIndex, 1)
            return `The product ${productName}, size ${size} was successfully removed from the inventory`
        }
        
    }
    findProductsBySize(size) {
        const sizeArr = this.productStock.filter(
          (product) => size === product.size
        )
        if (sizeArr.length === 0) {
            return `There are no products available in that size`;
        }
        else {
            // output config
            let output = ``
            for (let i = 0; i < sizeArr.length; i++) {
                if (i === sizeArr.length - 1) {
                     output += `${sizeArr[i]["productName"]}-${sizeArr[i]["quantity"]} pieces`;
                }
                else {
                    output += `${sizeArr[i]["productName"]}-${sizeArr[i]["quantity"]} pieces, `;
                }
                 
            }
            return output
        }
    }
    listProducts() {
        if (this.productStock.length === 0) {
            return `${this.storehouse} storehouse is empty`;
        }
        else {
            this.productStock = this.productStock.sort((a, b) => {
                return (a.productName).localeCompare(b.productName)
            })
            let firstLine = `${this.storehouse} storehouse in ${this.location} available products:\n`
            let secondLine = this.productStock.map(
              (product) =>
                `${product.productName}/Size:${product.size}/Quantity:${product.quantity}/Price:${product.price}$`
            ).join(`\n`)
            return firstLine + secondLine
 
        }   
    }
}
  const storeHouse = new FashionRetailInventory("East", "Milano");
  console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
  console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
  console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
  console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
  console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
  console.log(storeHouse.listProducts());


  
