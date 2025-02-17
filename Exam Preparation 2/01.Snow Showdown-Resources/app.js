window.addEventListener("load", solve);

function solve() {
  // capturing inputFields
  const snowmanName = document.getElementById("snowman-name");
  const snowmanHeight = document.getElementById("snowman-height");
  const locationEl = document.getElementById("location");
  const creatorName = document.getElementById("creator-name");
  const specialAtribute = document.getElementById("special-attribute");
  const addBtn = document.getElementsByClassName("add-btn")[0];
  //capturing ul
  const previewUl = document.getElementsByClassName("snowman-preview")[0];
  const mySnowmanUl = document.getElementsByClassName("snow-list")[0];
  //capturing main and picture
  const picture = document.getElementById("back-img")
  const main = document.getElementById("hero")
  const body = document.getElementsByClassName("body")[0]

  //event for the addBtn
  addBtn.addEventListener("click", (event) => {
    event.preventDefault();

    // making sure that inputs are valid
    if (specialAtribute.selectedIndex <= 0) {
      return;
    }
    if (snowmanName.value === "") return;
    if (snowmanHeight.value === "") return;
    if (locationEl.value === "") return;
    if (creatorName.value === "") return;
    // reserving their values
    const oldSnowmanName = snowmanName.value;
    const oldSnowmanHeight = snowmanHeight.value;
    const oldLocation = locationEl.value;
    const oldCreatorName = creatorName.value;
    const oldSpecialAtribute = specialAtribute.selectedIndex;
    //creating list for the preview
    const articlePreview = document.createElement("article");
    const liElPreview = document.createElement("li");
    liElPreview.classList.add("snowman-info");
    //populating paragraphs
    const p1 = document.createElement("p");
    p1.textContent = `Name: ${oldSnowmanName}`;
    articlePreview.appendChild(p1);

    const p2 = document.createElement("p");
    p2.textContent = `Height: ${oldSnowmanHeight}`;
    articlePreview.appendChild(p2);

    const p3 = document.createElement("p");
    p3.textContent = `Location: ${oldLocation}`;
    articlePreview.appendChild(p3);

    const p4 = document.createElement("p");
    p4.textContent = `Creator: ${oldCreatorName}`;
    articlePreview.appendChild(p4);

    const p5 = document.createElement("p");
    p5.textContent = `Attribute: ${specialAtribute.children[oldSpecialAtribute].textContent}`;
    articlePreview.appendChild(p5);

    liElPreview.appendChild(articlePreview);
    // create buttons and append to DIV
    const btnContainerDiv = document.createElement("div");
    btnContainerDiv.classList.add("btn-container");

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = `Edit`;
    btnContainerDiv.appendChild(editBtn);

    const nextBtn = document.createElement("button");
    nextBtn.classList.add("next-btn");
    nextBtn.textContent = `Next`;
    btnContainerDiv.appendChild(nextBtn);

    liElPreview.appendChild(btnContainerDiv);
    previewUl.appendChild(liElPreview);

    //clearing input field
    snowmanName.value = "";
    snowmanHeight.value = "";
    locationEl.value = "";
    creatorName.value = "";
    specialAtribute.selectedIndex = 0;
    // disabling addBtn
    addBtn.disabled = true;

    editBtn.addEventListener("click", (e) => {
      editEventHandler(
        e,
        oldSnowmanName,
        oldSnowmanHeight,
        oldLocation,
        oldCreatorName,
        oldSpecialAtribute,
        liElPreview
      );
    });
    //creting sendBtn
    
    let sendBtn
    let liElMySnowman


    nextBtn.addEventListener(
      "click",
      function (e) {
        //making li for mySnowman
        liElMySnowman = document.createElement("li");
        liElMySnowman.classList.add("snowman-content");
        liElMySnowman.appendChild(articlePreview);
        //sendBtn crating and appending
        sendBtn = document.createElement("button");
        sendBtn.classList.add("send-btn");
        sendBtn.textContent = `Send`;
        articlePreview.appendChild(sendBtn);
        //appending li to mysnowmanUl
        mySnowmanUl.appendChild(liElMySnowman);
        //clearing liElPreviev
        liElPreview.remove();
    sendBtn.addEventListener("click", function (e) {
      main.remove();
      picture.hidden = false;
      let backBtn = document.createElement("button");
      backBtn.classList.add("back-btn");
      backBtn.textContent = "Back";
      body.appendChild(backBtn)
      backBtn.addEventListener("click",(e)=>window.location.reload())
    });
      }
    );
    
    
    
  });
  function editEventHandler(
    e,
    oldSnowmanName,
    oldSnowmanHeight,
    oldLocation,
    oldCreatorName,
    oldSpecialAtribute,
    liElPreview
  ) {
    snowmanName.value = oldSnowmanName
    snowmanHeight.value = oldSnowmanHeight;
    locationEl.value = oldLocation;
    creatorName.value = oldCreatorName;
    specialAtribute.selectedIndex = oldSpecialAtribute;
    //activating addBtn
    addBtn.disabled = false
    //clearing preview Filed
     liElPreview.remove()

  }
  
}
