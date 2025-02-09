function validate() {
    const email = document.getElementById("email")
    email.focus()
    email.setAttribute("placeholder","kurec")
    const emailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/
    email.addEventListener("change", function (e) {
        
        
        if (!emailPattern.test(e.target.value)) {
            e.target.classList.add("error")
        }
        if (emailPattern.test(e.target.value))
             e.target.classList.remove("error")
    })
}