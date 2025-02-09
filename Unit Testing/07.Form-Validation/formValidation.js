function validate() {
       const html = {
         companyCheck: document.getElementById(`company`),
         submit: document.getElementById(`submit`),
         validDiv: document.getElementById(`valid`),
         companyInfo: document.getElementById(`companyInfo`),
       };

       const inputFields = {
         username: document.getElementById(`username`),
         email: document.getElementById(`email`),
         password: document.getElementById(`password`),
         "confirm-password": document.getElementById(`confirm-password`),
         companyNumber: document.getElementById(`companyNumber`),
    };
    html.companyCheck.addEventListener("change", function (event) {
        
        if (html.companyCheck.checked) {
        html.companyInfo.style.display = "block"
        }
        else {
            html.companyInfo.style.display = "none";
        }
    })
    let checkLength = (min, max, given) => given.length >= min && given.length <= max
    let checkPassword = (min,max,given,compare)=>  checkLength(min,max,given) && /^\w+$/.test(given) && given === inputFields[compare].value
    let validate = {
      username: (v) => checkLength(3, 20, v) && /^[a-zA-Z0-9]+$/.test(v),

      password: (v) => checkPassword(5, 15, v, "confirm-password"),
      "confirm-password": (v) => checkPassword(5, 15, v, "password"),
      email: (v) => /^[\w]+@[\w]+\.[\w\.]+$/.test(v),
        companyNumber: (v) => {
            let isComp = html.companyCheck.checked
            
            if (isComp && (v < 1000 || v > 9999)) {
              return false
            }
            if (isComp && v >= 1000 && v <= 9999) {
                return true
            }
            if (isComp === false) {
                return true
            }
      },
    };

    html.submit.addEventListener("click", function (event) {
        
        event.preventDefault()
        let isCompany = html.companyCheck.checked
        let isFormValid = true
        Object.entries(inputFields).forEach(([name,field]) => {
            let isCurrValid = validate[name](field.value)
            if (!isCurrValid) {
                isFormValid = false

                field.style.borderColor= "red"
            }
            else {
                
                field.style.border = "none";
            }
            
            
        }) 
        
        
        if (isFormValid) {
            html.validDiv.style.display = 'flex'
        }
        if (!isFormValid) {
            html.validDiv.style.display = "none";
        }
            
        
        
        
    })
}
