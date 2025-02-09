function solve() {
  function allElementsReplace(string, search, replaceValue) {
    while (string.includes(search)) {
      string = string.replace(search, replaceValue);
    }
    return string;
  }
  document.querySelector("#btnSend").addEventListener("click", onClick);

  let bestRestaurantResult = document.querySelector("#bestRestaurant > p");
  let workersResult = document.querySelector("#workers > p");

  function onClick() {
    let input = document.querySelector("#inputs > textarea").value;

    let arr = JSON.parse(input);
    let restaurants = {};
    for (let i = 0; i < arr.length; i++) {
      let [namePizza, rest] = arr[i].split(" - ");
      if (restaurants[namePizza]) {
      } else {
        restaurants[namePizza] = [];
      }

      let workers = rest.split(", ");
      for (let j = 0; j < workers.length; j++) {
        workers[j] = workers[j].trim();
        let [nameWorker, salary] = workers[j].split(" ");
        restaurants[namePizza][nameWorker] = Number(salary);
        //console.log(nameWorker);
      }
     }
     //console.log(Object.keys(restaurants));
     let bestAverageSalary = Number.MIN_SAFE_INTEGER
     let bestAverageSalaryName = ''
     
     for (const restaurantName of Object.keys(restaurants)) {
        let averageSalary = 0;
        let workersCount = 0 
        
        for (const workers of Object.keys(restaurants[restaurantName])) {
           averageSalary += restaurants[restaurantName][workers]
           workersCount++;
           
        }
        averageSalary = averageSalary / workersCount
        if (averageSalary > bestAverageSalary) { bestAverageSalary = averageSalary
           bestAverageSalaryName = restaurantName
        }
        
        
     }
    const lastArr = Array.from(Object.entries(restaurants[bestAverageSalaryName]).sort(([,salaryA],[salaryB]) => salaryB - salaryA))
     let secondOutputText = ``
     let bestSalary = lastArr[0][1]
     for (let [name, salary] of lastArr) {
        secondOutputText += `Name: ${name} With Salary: ${salary} `
     }
  

      
      const secondOutput = document.querySelector("#workers > p")
     const firstOutput = document.querySelector("#bestRestaurant > p");
     secondOutput.textContent = secondOutputText
     firstOutput.textContent = `Name: ${bestAverageSalaryName} Average Salary: ${bestAverageSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`
  }
}
