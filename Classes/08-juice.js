function foo(input) {
    let juice = {}
    let juiceBottles = {}
    for (let el of input) {
        let [juiceFlavour, quantity] = el.split(" => ")
        if (juiceFlavour in juice) {
            juice[juiceFlavour] += Number(quantity)
        }
        else {
            juice[juiceFlavour] = Number(quantity)
        }
        if (juice[juiceFlavour] >= 1000) {
            let addBottles = Math.floor(juice[juiceFlavour] / 1000)
            juice[juiceFlavour] = juice[juiceFlavour] % 1000
            if (juiceFlavour in juiceBottles) {
                juiceBottles[juiceFlavour] += addBottles
            }
            else {
                juiceBottles[juiceFlavour] = addBottles;
            }
        }
        
    }
    let output = Array.from(Object.entries(juiceBottles))
    output.forEach(el => {
        let [key, value] = el
        console.log(`${key} => ${value}`)
    })
    
}
foo([
  "Orange => 2000",
  "Peach => 1432",
  "Banana => 450",
  "Peach => 600",
  "Strawberry => 549",
]);