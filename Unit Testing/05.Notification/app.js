function notify(message) {
  let div = document.querySelector("#notification")
  div.textContent = message
  div.style.display = "block"
  div.addEventListener("click", function (e) {
    div.style.display = 'none'
  })

}