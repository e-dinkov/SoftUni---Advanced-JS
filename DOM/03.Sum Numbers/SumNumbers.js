function calc() {
    const numHtml1 = document.getElementById("num1")
    const numHtml2 = document.getElementById("num2");
    const sum = document.getElementById("sum");
    let num1 = Number(numHtml1.value)
    let num2 = Number(numHtml2.value);
    let Sum = num1 + num2
    
    sum.value = num1+ num2

   
    
}
