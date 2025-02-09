function lockedProfile() {
  let prifilesEl = document.querySelectorAll(".profile");
  let profileIterator = Array.from(prifilesEl);
  for (let currentProfile of profileIterator) {
    const btn = currentProfile.querySelector("button");
    btn.addEventListener("click", function (event) {
      let lockRadioBtn = event.currentTarget.parentElement.querySelector(
        'input[value="lock"]'
      );
      let hiddenElements =
        event.currentTarget.parentElement.querySelector("div > div");
      

      if (lockRadioBtn.checked === false) {
        if (event.target.textContent == "Show more") {
          hiddenElements.style.display = "inline";

            event.target.textContent = "Hide it"
            console.log(hiddenElements);
            
        } else {
            
            hiddenElements.style.display = "";
            event.target.textContent = "Show more";
        }
      }
    });
  }
}
