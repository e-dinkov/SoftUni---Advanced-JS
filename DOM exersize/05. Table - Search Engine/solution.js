function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    const tableContent = document.querySelectorAll("table>  tbody > tr");
    const searchBar = document.querySelector("#searchField");
    for (const currentRow of tableContent) {
      //console.log(element);
      const rowElements = currentRow.querySelectorAll("td");
       console.log(rowElements);
       let isFound = false
      for (const element of rowElements) {
        if (
          element.textContent
            .toLowerCase()
            .includes(searchBar.value.toLowerCase())
        ) {  isFound = true
        }
       }
       if (isFound) {
          currentRow.classList.add("select")
       }
       else {
          currentRow.classList.remove("select")
       }
    }
    //console.log(tableContent);
  }
}
