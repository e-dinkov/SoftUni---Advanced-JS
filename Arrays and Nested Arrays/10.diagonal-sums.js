function diagonalSums(bigArr) {
    let firstDiagonal = 0
    let secondDiagonal = 0
    for (let i = 0; i < bigArr[0].length; i++) {
        firstDiagonal += bigArr[i][i]
        secondDiagonal += bigArr[i][(bigArr[0].length) - (i + 1)]

    }
    console.log(firstDiagonal + " " + secondDiagonal)
    //console.log()
}
diagonalSums([[20, 40], [10, 60]])