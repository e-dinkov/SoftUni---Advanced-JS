function create(words) {
   const contentEl = document.getElementById("content")
   console.log(words)
   for (let element of words) {
      let div = document.createElement("div")
      let paragraph = document.createElement("p")
      paragraph.textContent = element
      paragraph.style.display = "none"
      contentEl.append(div)
      div.append(paragraph)
      
      div.addEventListener("click", function (event) {
        // console.log(event.currentTarget);
         let currentParagraph = (event.currentTarget).querySelector("p")
         //console.log(currentParagraph);
         currentParagraph.style.display = ''
         
         
      })
  }
}