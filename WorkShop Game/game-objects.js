const gameArea = document.querySelector(".game-area")
// creating functionalitues
export const factory = {
    createWizzard(wizzardConfig) {
        const wizzardEl = document.createElement("div")
        wizzardEl.classList.add("wizzard")
        // Set styles
        wizzardEl.style.width = wizzardConfig.width + "px"
        wizzardEl.style.height = wizzardConfig.height + "px";
        wizzardEl.style.top = wizzardConfig.y + "px";
        wizzardEl.style.left = wizzardConfig.x + "px";
        wizzardEl.style.backgroundSize = "contain";
        wizzardEl.style.backgroundRepeat = "no-repeat";
        wizzardEl.style.backgroundPosition = "center";
        //setting image
        wizzardEl.style.position = "absolute";
         
        wizzardEl.style.backgroundImage = ('url("images/wizard.png")')
        gameArea.append(wizzardEl)
        
 }
}