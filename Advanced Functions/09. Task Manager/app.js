function solve() {
  const sections = document.querySelectorAll("section");
  document
    .getElementById("add")
    .addEventListener("click", function addTask(event) {
      event.preventDefault();
      let currForm = event.currentTarget.parentElement.children;
      let name = currForm[2].value;

      let description = currForm[6].value;

      let dueDate = currForm[9].value;
      if (!name || !description || !dueDate) {
        return;
        }
         currForm[2].value = "";
         currForm[6].value = "";
         currForm[9].value = "";
      let article = createArticle(
        name,
        description,
        dueDate,
        "Start",
        "green",
        "Delete",
        "red",
        true
      );
      sections[1].children[1].append(article);
    });
  function createArticle(
    name,
    description,
    dueDate,
    button1Text,
    button1Class,
    button2Text,
    button2Class,
    isDeleteOrFinish
  ) {
    let article = document.createElement("article");
    let heading = document.createElement("h3");
    let pDate = document.createElement("p");
    let pTask = document.createElement("p");
    heading.textContent = name;
    if (description.includes("Description:")) {
      pDate.textContent = dueDate;
      pTask.textContent = description;
    } else if (description.includes("Description:") === false) {
      pDate.textContent = "Due Date: " + dueDate;
      pTask.textContent = "Description: " + description;
    }
    article.append(heading);
    article.append(pTask);
    article.append(pDate);
    let div = document.createElement("div");
    div.setAttribute("class", "flex");
    let button1;
    let button2;
    if (isDeleteOrFinish == true) {
      button1 = document.createElement("button");
      button2 = document.createElement("button");

      button1.setAttribute("class", button1Class);
      button2.setAttribute("class", button2Class);

      button1.textContent = button1Text;
      button2.textContent = button2Text;

      button1.addEventListener("click", startArticle);
      button2.addEventListener("click", deleteArticle);

      div.appendChild(button1);
      div.appendChild(button2);

      article.appendChild(div);
    } else if (isDeleteOrFinish === false) {
      button1 = document.createElement("button");
      button2 = document.createElement("button");

      button1.setAttribute("class", button1Class);
      button2.setAttribute("class", button2Class);

      button1.textContent = button1Text;
      button2.textContent = button2Text;

      button1.addEventListener("click", deleteArticle);
      button2.addEventListener("click", finishArticle);

      div.appendChild(button1);
      div.appendChild(button2);

      article.appendChild(div);
    }
    
    return article;
    }
    function finishArticle(e) {
      let article = e.target.parentNode.parentNode;

      let articleElements = article.children;

      let newArticle = createArticle(
        articleElements[0].textContent,
        articleElements[1].textContent,
        articleElements[2].textContent
      );

      sections[3].children[1].appendChild(newArticle);

      article.remove();
    }
    function deleteArticle(e) {
      e.target.parentNode.parentNode.remove();
      }
        function startArticle(e) {
          let article = e.target.parentNode.parentNode;

          let articleElements = article.children;

          let newArticle = createArticle(
            articleElements[0].textContent,
            articleElements[1].textContent,
            articleElements[2].textContent,
            "Delete",
            "red",
            "Finish",
            "orange",
            false
          );

          sections[2].children[1].appendChild(newArticle);

          article.remove();
        }
}
