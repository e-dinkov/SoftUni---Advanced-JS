function extract(content) {
    let pattern = /\(([\w ]+)\)/gm
    const text1 = document.getElementById("content")
    let actionText = text1.textContent
   // console.log(actionText)
    let matches =Array.from(actionText.matchAll(pattern)) 
    const result = matches.map((x) => x[1]).join("; ")
    return  result
  
   // console.log(text.textContent)
}