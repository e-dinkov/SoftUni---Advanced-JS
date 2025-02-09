function solve() {
  const randomText = document.querySelector("#text").value;
  const namingConvention = document.querySelector("#naming-convention").value;
  const output = document.querySelector("#result");
  let words = randomText.split(/[ ]+/);
  if (namingConvention.toLowerCase() == "camel case") {
    for (let i = 0; i < words.length; i++) {
      if (i === 0) {
        words[i] = words[i].toLowerCase();
      } else {
        words[i] = words[i].toLowerCase();
        words[i] = words[i].replace(words[i][0], words[i][0].toUpperCase());
      }
    
    }
   
    output.textContent = words.join("");
  }
  else if (namingConvention.toLowerCase() == "pascal case") {
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].toLowerCase();
     
      words[i] = words[i].replace(words[i][0], words[i][0].toUpperCase());
    //  console.log(words[i]);
    }
    output.textContent = words.join("")
  } else {
    output.textContent = "Error!";
  }
}
