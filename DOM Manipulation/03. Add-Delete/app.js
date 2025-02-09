function addItem() {
    const inputEl = document.getElementById("newItemText");
    const itemsEl = document.getElementById("items");
    let addedItem = document.createElement("li")
    addedItem.textContent = inputEl.value
    itemsEl.append(addedItem)
    inputEl.value = ''
    inputEl.focus()
    const deleteBtn = document.createElement("a")
    deleteBtn.href = "#"
    deleteBtn.textContent = "[Delete]"
    addedItem.append(deleteBtn)
    deleteBtn.addEventListener("click", function (event) {
        addedItem.remove()
    })
    deleteBtn.addEventListener
}