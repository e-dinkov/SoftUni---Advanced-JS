function sumTable() {
    const tableSelector = document.querySelector("table")
    const priceSelector = tableSelector.querySelectorAll("tr td:nth-child(even):not(#sum)")
    const sumBar = tableSelector.querySelector("#sum")
    console.log(priceSelector)
    let sum = 0
//console.log(priceSelector)
    for (let element of priceSelector) {
       // console.log(element.textContent)
        if (element.textContent) {
            sum += Number(element.textContent)
        }
        else {
            
        }
    }
    sumBar.textContent = sum
}
