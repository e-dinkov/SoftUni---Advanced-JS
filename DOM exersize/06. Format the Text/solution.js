function solve() {
  const writtenText = document.querySelector("#input")
  let editedText = writtenText.value
  editedText = editedText.trim()
  editedText = editedText.toString()
  if (editedText === '')
  {
    return
  }
  
  
  
let sentences = Array.from(editedText
  .split(".")
  .filter((x) => x.trim() !== "")
  .map((x) => { return x = x.trim() + "." }))
  if (sentences === '') {
    return
  }
  console.log(sentences.length);
  
  let result = document.getElementById("output")
  result.textContent = ''
  let paragraphCount = Math.ceil(sentences.length / 3)
  for (let i = 0; i < paragraphCount; i++){
    let paragraph = sentences.splice(0, 3).join(" ")
    result.innerHTML += `<p>${paragraph}</p>`
  }


  
  
  }
