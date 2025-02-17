window.addEventListener('load', solve);

function solve() {
    //capturing diff fields
    const thanksField = document.getElementById("thanks-text");
    const myPrefField = document.getElementsByClassName("preference-list")[0]
    const confirmField = document.getElementsByClassName("confirm-list")[0]
    //capturing preferences el
    const formEl = document.querySelector(".container-form form");

    const scentType = formEl.querySelector("#scent-type");
    const budget = formEl.querySelector("#budget");
    const occasion = formEl.querySelector("#occasion");
    const brandPref = formEl.querySelector("#brand");
    const skinType = formEl.querySelector("#skin-type");
    const nextBtn = formEl.querySelector("#next-btn");
    //nextBtn functionality
    nextBtn.addEventListener("click", function (event) {
        event.preventDefault()
        if (scentType.selectedIndex === 0) {
            return
        }
        if (budget.value === '') {
            return
        }
         if (occasion.value === "") {
           return;
        }
         if (brandPref.value === "") {
           return;
        }
        if (skinType.selectedIndex === 0) {
          return;
        }
        // saving the values to be able to retrieve them later
        const oldScentType = scentType.selectedIndex
        const oldBudget = budget.value
        const oldOccasion = occasion.value;
        const oldBrandPref = brandPref.value
        const oldSkinType = skinType.selectedIndex
        //clearing the thanksField
         thanksField.textContent = ''
        // creating the yourPreferences
        const liElMyPref = document.createElement("li")
        liElMyPref.classList.add("content")

        const articleMyPref = document.createElement("article")
        //populate article
        const p1 = document.createElement("p")
        p1.textContent = `Scent Type: ${scentType.children[oldScentType].textContent}`
        articleMyPref.appendChild(p1)

        const p2 = document.createElement("p");
        p2.textContent = `Budget: ${oldBudget} $`;
        articleMyPref.appendChild(p2);
        
        const p3 = document.createElement("p");
        p3.textContent = `Occasion: ${oldOccasion}`;
        articleMyPref.appendChild(p3);

        const p4 = document.createElement("p");
        p4.textContent = `Brand: ${oldBrandPref}`;
        articleMyPref.appendChild(p4);

        const p5 = document.createElement("p");
        p5.textContent = `Skin Type: ${skinType.children[oldSkinType].textContent}`;
        articleMyPref.appendChild(p5);
        
        //appending the article 
        liElMyPref.appendChild(articleMyPref)
        //creating Btns
        const editBtn = document.createElement("button")
        editBtn.classList.add("edit-btn")
        editBtn.textContent = "Edit"
        liElMyPref.appendChild(editBtn)

        const continueBtn = document.createElement("button");
        continueBtn.classList.add("continue-btn");
        continueBtn.textContent = "Continue";
        liElMyPref.appendChild(continueBtn);
        //appending li to ul
        myPrefField.appendChild(liElMyPref)
        //clearing the field
        scentType.selectedIndex = 0
        budget.value = ''
        occasion.value = '' 
        brandPref.value = ''
        skinType.selectedIndex = 0
        //disabling nextBtn
        nextBtn.disabled = true
        //editBtn functionality
        editBtn.addEventListener("click", function (e) {
            liElMyPref.remove()
            scentType.selectedIndex = oldScentType
            budget.value = oldBudget
            occasion.value = oldOccasion
            brandPref.value = oldBrandPref
            skinType.selectedIndex = oldSkinType
            nextBtn.disabled = false

        })
        //continueBtn functionality
        continueBtn.addEventListener("click", function (e) {
            liElMyPref.remove()
            //crating li for confirm menu and populating it
            const LiElConfirm = document.createElement("li")
            LiElConfirm.classList.add("content")
            LiElConfirm.appendChild(articleMyPref)
            //creating btns
            const confirmBtn = document.createElement("button");
            confirmBtn.classList.add("confirm-btn");
            confirmBtn.textContent = "Confirm";
            LiElConfirm.appendChild(confirmBtn);

            const cancelBtn = document.createElement("button");
            cancelBtn.classList.add("cancel-btn");
            cancelBtn.textContent = "Cancel";
            LiElConfirm.appendChild(cancelBtn)
            //appending li to confirlUlfield
            confirmField.appendChild(LiElConfirm)
            //cancelBtn functionality
            cancelBtn.addEventListener("click",function (e) {
                LiElConfirm.remove()
                nextBtn.disabled = false
            })
            confirmBtn.addEventListener("click", function (e) {
                LiElConfirm.remove();
                nextBtn.disabled = false;
                thanksField.textContent =
                  "Thank you for sharing your preferences!";
            })
        })


    })
    
    
}

    
    
