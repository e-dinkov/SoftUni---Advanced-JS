function toggle() {
    const buttonText = document.querySelector(".button")
    const hiddenTextDiv = document.querySelector("#extra")
    console.log(hiddenTextDiv)
    if (buttonText.textContent === "More") {
        buttonText.textContent = "Less"
        hiddenTextDiv.style.display = "block"
        

    }
    else {
         buttonText.textContent = "More";
         hiddenTextDiv.style.display = "none";
        
    }
    console.log(buttonText.textContent)
}