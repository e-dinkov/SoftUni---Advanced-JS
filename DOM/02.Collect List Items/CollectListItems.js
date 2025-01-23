function extractText() {
    debugger;
    const ulSelector = document.querySelectorAll("#items > li");
    let arr = Array.from(ulSelector).map(x =>  x.textContent
    )
    let resultBar = document.getElementById("result")
    resultBar.textContent = arr.join("\n")

  
}
