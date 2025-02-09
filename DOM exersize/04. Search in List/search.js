function search() {
   const townNames = document.querySelectorAll("ul li")
   const currentSearch = document.querySelector("#searchText")
   const matchesBar = document.querySelector("#result")
   let totalMatches = 0
   for (const element of townNames) {
      if (element.textContent.toLowerCase().includes(currentSearch.value.toLowerCase())) {
         element.style.textDecoration = "underline"
         element.style.fontWeight = "bold";
         totalMatches ++

      }
      else {
         element.style.textDecoration = "";
         element.style.fontWeight = "";
         
      }
   }
   matchesBar.textContent = `${totalMatches} matches found`;
   //console.log(townNames)

}
