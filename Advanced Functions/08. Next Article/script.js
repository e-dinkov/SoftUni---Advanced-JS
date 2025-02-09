function getArticleGenerator(articles) {
    let contentEl = document.querySelector("#content")
    let articlesCopy = articles.slice()
    console.log(articles);
    return function showNext(){
        let articleEl = document.createElement("article")
        if(articlesCopy.length > 0){
          articleEl.textContent = articlesCopy.shift()
        contentEl.append(articleEl)  
        }
        
        
     }
    
}
