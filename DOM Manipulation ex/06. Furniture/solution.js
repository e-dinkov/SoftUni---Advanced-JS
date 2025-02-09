function solve() {
  let Btns = Array.from(document.querySelectorAll("button"));
  const buyBtn = Btns[1];
  let textAreas = Array.from(document.querySelectorAll("textarea"));
  const outputArea = textAreas[1];
  const textArea = document.querySelector("textarea");
  const generateBtn = document.querySelector("button");
  const table = document.querySelector("table tbody");

  generateBtn.addEventListener("click", function (event) {
    let furnitures = JSON.parse(textArea.value);
    furnitures.forEach((element) => {
      let currentRow = document.createElement("tr");
      let currentHead1 = document.createElement("td");
      let currentHead2 = document.createElement("td");
      let currentHead3 = document.createElement("td");
      let currentHead4 = document.createElement("td");
      let currentHead5 = document.createElement("td");
      let imageHead = document.createElement("img");
      imageHead.setAttribute("src", element.img);
      let nameHead = document.createElement("p");
      nameHead.textContent = element.name;
      let priceHead = document.createElement("p");
      priceHead.textContent = element.price;
      let decHead = document.createElement("p");
      decHead.textContent = element.decFactor;
      let markHead = document.createElement("input");
      markHead.setAttribute("type", "checkbox");

      table.append(currentRow);
      currentRow.append(currentHead1);
      currentHead1.append(imageHead);
      currentRow.append(currentHead2);
      currentHead2.append(nameHead);
      currentRow.append(currentHead3);
      currentHead3.append(priceHead);
      currentRow.append(currentHead4);
      currentHead4.append(decHead);
      currentRow.append(currentHead5);
      currentHead5.append(markHead);
    });
  });
  let averageDec = 0;
  let totalSum = 0;
  let productList = [];
  buyBtn.addEventListener("click", function (event) {
    let furnitures = document.querySelectorAll("table tbody tr");
    for (const element of furnitures) {
      let checkbox = element.querySelector("input");
      let tableHeads = Array.from(element.querySelectorAll("td"));
      let name = tableHeads[1].querySelector("p").textContent;
      let price = tableHeads[2].querySelector("p").textContent;
      let decFactor = tableHeads[3].querySelector("p").textContent;
      console.log(name);

      if (checkbox.checked) {
        productList.push(name);
        totalSum += Number(price);
        averageDec += Number(decFactor);
      }
    }
    outputArea.textContent = `Bought furniture: ${productList.join(", ")}\n`;
    outputArea.textContent += `Total price: ${totalSum.toFixed(2)}\n`;
    outputArea.textContent += `Average decoration factor: ${
      averageDec / productList.length
    }`;
  });
}
