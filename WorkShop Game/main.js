import { factory } from "./game-objects.js";
import { state } from "./game-state.js";
const startElement = document.querySelector(".game-start");

startElement.addEventListener("click", (e) => {
    // Hide start element
    e.currentTarget.classList.add("hidden");

    // Initialize Wizzard
    const wizardConfig = { x: 100, y: 100, width: 50, height: 50 }
    factory.createWizzard(state.wizard)
    

})