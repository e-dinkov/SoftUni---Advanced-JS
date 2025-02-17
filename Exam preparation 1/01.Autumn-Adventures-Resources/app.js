window.addEventListener("load", solve);

function solve() {
    //target finish ul
        const finishedUl = document.getElementById("finished-list")
        //create new list items
    const finishedLiEl = document.createElement("li")
    //target delete btn
    const deleteBtn = document.getElementById("clear")
  let time = document.getElementById("time");
  let date = document.getElementById("date");
  let place = document.getElementById("place");
  let event = document.getElementById("event-name");
  let email = document.getElementById("email");
  let addBtn = document.getElementById("add-btn");
  addBtn.addEventListener("click", addButtonHandler);
  function addButtonHandler(e) {
    if (time.value === "") return;
    if (date.value === "") return;
    if (place.value === "") return;
    if (event.value === "") return;
    if (email.value === "") return;
    const unorderdListEl = document.getElementById("check-list");
    let listItemsEl = document.createElement("li");
    listItemsEl.classList.add("event-content");
    // create paragraphs
    const article = document.createElement("article");
    const firstPar = document.createElement("p");
    firstPar.textContent = `Begins: ${date.value} at: ${time.value}`;
    const secondPar = document.createElement("p");
    secondPar.textContent = `In: ${place.value}`;
    const thirdPar = document.createElement("p");
    thirdPar.textContent = `Event: ${event.value}`;
    const fourthPar = document.createElement("p");
    fourthPar.textContent = `Contact: ${email.value}`;
    //create buttons
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");
    const continueBtn = document.createElement("button");
    continueBtn.textContent = "Continue";
    continueBtn.classList.add("continue-btn");
    //append p to article
    article.appendChild(firstPar);
    article.appendChild(secondPar);
    article.appendChild(thirdPar);
    article.appendChild(fourthPar);
    //append article to li
    listItemsEl.appendChild(article);
    //append btns to li
    listItemsEl.appendChild(editBtn);
    listItemsEl.appendChild(continueBtn);
    //append li to ul
    unorderdListEl.appendChild(listItemsEl);
    //setting btn to disabled
    addBtn.disabled = true;
    // preserving items
    const editTimeBtn = time.value;
    const editDateBtn = date.value;
    const editPlaceBtn = place.value;
    const editEventBtn = event.value;
    const editEmailBtn = email.value;
    // clearing elements
    time.value = "";
    date.value = "";
    place.value = "";
    event.value = "";
    email.value = ""
      editBtn.addEventListener("click", onEditHandler)
      function onEditHandler(e){
        
        
      time.value = editTimeBtn
        date.value = editDateBtn
        place.value = editPlaceBtn
        event.value = editEventBtn
        email.value = editEmailBtn
        listItemsEl.remove()
        addBtn.disabled = false
      };
      continueBtn.addEventListener("click", onContinueHandler)
      function onContinueHandler(e) {
          // upcoming list unorderlist targeted
          const upcomingEl = document.getElementById("upcoming-list");
          const upcomingLIstEl = document.createElement("li")
          upcomingLIstEl.classList.add("event-content")
         upcomingLIstEl.appendChild(article)
          upcomingEl.appendChild(upcomingLIstEl)
          unorderdListEl.removeChild(listItemsEl)
          //activate addBUtton
          addBtn.disabled = false
          // move to fin button
          const moveToFinBtn = document.createElement("button")
          moveToFinBtn.textContent = "Move to Finished";
          moveToFinBtn.classList.add("finished-btn")
          upcomingLIstEl.appendChild(moveToFinBtn)
          moveToFinBtn.addEventListener("click", (e) => {
              moveToFinHandler(e,article,upcomingLIstEl)
          })
          deleteBtn.addEventListener("click", function (e) {
              finishedLiEl.remove()
          })

      }
      
    }
    function moveToFinHandler(e, article, listEl) {
        const upcomingEl = document.getElementById("upcoming-list")
        upcomingEl.removeChild(listEl)
        
        // append
        finishedLiEl.appendChild(article)
        finishedUl.appendChild(finishedLiEl)
    }
}
