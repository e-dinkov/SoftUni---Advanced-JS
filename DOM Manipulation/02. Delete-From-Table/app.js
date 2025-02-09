function deleteByEmail() {
    const inputElement = document.getElementsByName("email")
    const resultElement = document.getElementById("result")
    let tableContent = document.querySelectorAll("#customers tbody tr")
    let searchedEmail = inputElement[0].value
    let isFound = false
     let emails = (Array.from(tableContent)).map(x => {
        let cell = x.getElementsByTagName("td")
        if (cell[1].textContent === searchedEmail) {
            x.remove()
            resultElement.textContent = "Deleted."
            isFound = true
        }
        return cell[1].textContent
    })
    if (isFound  === false) {
        resultElement.textContent = "Not found."
    }
    inputElement[0].value = ''
    inputElement[0].focus()
    

    

}