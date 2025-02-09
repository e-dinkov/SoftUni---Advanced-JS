class Contact {
  constructor(firstName, lastName, phone, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this._online = false;
    this.element = null;
    }
    get online(){
        return this._online
    }
    set online(val) {
        this._online = val
         if (this.element) {
           const titleDiv = this.element.querySelector(".title");
           if (val) {
             titleDiv.classList.add("online");
           } else {
             titleDiv.classList.remove("online");
           }
         }

    } 
    render(id) {
        const article = document.createElement("article")
        const titleDiv = document.createElement("div")
        titleDiv.classList.add("title")
        titleDiv.textContent = `${this.firstName} ${this.lastName}`
        const button = document.createElement("button");
        button.innerHTML = "&#8505";
        
        titleDiv.append(button)
        article.append(titleDiv)
        const infoDiv = document.createElement("div")
        infoDiv.classList.add("info")
        infoDiv.style.display = 'none'
        const phoneSpan = document.createElement("span");
        const emailSpan = document.createElement("span")
        emailSpan.innerHTML = `&#9993; ${this.email}`;
        phoneSpan.innerHTML = `&#9742; ${this.phone}`;

        infoDiv.append(phoneSpan)
        infoDiv.append(emailSpan)
        article.append(infoDiv)
        button.addEventListener("click", function () {
            if (infoDiv.style.display == 'block') {
                infoDiv.style.display = 'none'
            }
            else if (infoDiv.style.display == "none") {
              infoDiv.style.display = "block";
            }
        
        })
          if (this._online) {
            titleDiv.classList.add("online");
          }
        this.element = article
        
        document.getElementById(id).append(article)
    }
    
}
let contacts = [
  new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
  new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
  new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com"),
];
contacts.forEach((c) => c.render("main"));

// After 1 second, change the online status to true
setTimeout(() => (contacts[1].online = true), 2000);


