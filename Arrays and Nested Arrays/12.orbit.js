function orbit(input) {
    let [width, height, x, y] = input
    let spaceOfCells = new Array(width).fill(1)
    spaceOfCells = spaceOfCells.map((useless) => useless = new Array(height).fill(1))
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if(x == j && y == i){
                continue
            }
            let score = Math.max(Math.abs(x - j), Math.abs(y - i))
            spaceOfCells[j][i] = score + 1
        }
    }
    spaceOfCells.forEach(x=>{
        console.log(x.join(' '))
    })
    
}
orbit([4, 4, 0, 0])