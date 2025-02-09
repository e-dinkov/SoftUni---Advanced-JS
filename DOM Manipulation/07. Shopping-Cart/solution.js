function solve() {
   const addProductButtons = document.querySelectorAll(".product-add");
   const exactButtons = document.querySelectorAll(".add-product")
   const textAreaElement = document.querySelector("textarea")
   const checkOutButton = document.querySelector(".checkout")
   let list = {}
   checkOutButton.addEventListener("click", function (event) {
      //console.log(list);
      let arrObjKeys = Array.from(Object.keys(list))
      let arrObjValues = Array.from(Object.values(list))
      let totalPrice = 0
      arrObjValues.forEach(x => totalPrice += x)
      textAreaElement.textContent += `You bought ${arrObjKeys.join(", ")} for ${totalPrice.toFixed(2)}.`;
      exactButtons.forEach((btn) => {
       btn.setAttribute("disabled","disabled")
      })
      event.currentTarget.setAttribute("disabled","disabled")
      
      
      
      
         
      
      
   })
   let buttonArr = Array.from(addProductButtons)
   for (const element of buttonArr) {
      element.addEventListener("click", function (event) {
         const currParent = element.parentNode
         const productName = currParent.querySelector(".product-title")
         const productPrice = currParent.querySelector(".product-line-price");
         if (list[productName.textContent]) {
            list[productName.textContent] += Number(productPrice.textContent);
         }
         else {
            list[productName.textContent] = Number(productPrice.textContent);
         }
         textAreaElement.textContent += `Added ${productName.textContent} for ${Number(productPrice.textContent).toFixed(2)} to the cart.\n`;
         //console.log(productName.textContent);
         
      })
   }
}// Added {name} for {money} to the cart.\n