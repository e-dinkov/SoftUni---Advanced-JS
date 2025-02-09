function addItem() {
    const inputText = document.querySelector("#newItemText")
    const ulElement = document.getElementById("items")
    let inputCreate = document.createElement("li")
    inputCreate.textContent = inputText.value
    ulElement.appendChild(inputCreate)
    //console.log(inputText.value);
    inputText.value =''
    inputText.focus()

}