function validate() {
    const emailEl = document.querySelector("#email")
    let pattern = /[a-z]+@[a-z]+\.[a-z]+/;
    emailEl.addEventListener("change", function (event) {
        const emailText = emailEl.value
        if (!pattern.test(emailText)) {
        emailEl.classList.add("error")
    }
    else {
        emailEl.classList.remove("error");
    }  
    })
  
}