function addItem() {
    let inputTextEl = document.querySelector("#newItemText")
    let inputValueEl = document.querySelector("#newItemValue");
    let menu = document.querySelector("#menu")
    let option = document.createElement("option")
    option.textContent = inputTextEl.value
    option.value = inputValueEl.value
    menu.append(option)
    inputTextEl.value = ''
    inputValueEl.value = ''
}