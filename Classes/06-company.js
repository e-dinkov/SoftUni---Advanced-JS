class Company{
    constructor() {
        this.departments = {}
    }
    addEmployee(name, salary, position, department) {
        const testArr = [name, salary, position, department];
        if (testArr.some(x => x === undefined || x === null || x === "")) {
            throw new Error("Invalid input!");
            
        }
        if (Number(salary) < 0) {
            throw new Error("Invalid input!");
        }
        if (department in this.departments) {
            const temp = {
                name: name,
                salary: Number(salary),
                position:position
            }
            this.departments[department]["workers"].push(temp)
            
        }
        else {
            const temp = {
              name: name,
              salary: Number(salary),
              position: position,
            }
            this.departments[department] = {}
            this.departments[department]["workers"] = []
            this.departments[department]["workers"].push(temp);
            
        }

        if (this.departments[department]["averageSalary"]) {
            this.departments[department]["averageSalary"] += Number(salary)
        }
        else {
            this.departments[department]["averageSalary"] = Number(salary);
        }
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
    bestDepartment() {
        let best = ''
        let bestAvgSalary = Number.MIN_SAFE_INTEGER
        for (let department in this.departments) {

            if (this.departments[department]["averageSalary"] / this.departments[department]["workers"].length > bestAvgSalary) {
                bestAvgSalary =
                  this.departments[department]["averageSalary"] /
                    this.departments[department]["workers"].length;
                best = department
            }
            
        }
        let output = `Best Department is: ${best}\nAverage salary: ${bestAvgSalary.toFixed(2)}`;
        let sortedKeys = this.departments[best]["workers"].sort((a, b) => {
            if (a["salary"] - b["salary"] == 0) {
              return  a["name"].localeCompare(b["name"])
            }
            else {
                return b["salary"] - a["salary"];
            }
        })
        sortedKeys.forEach(element => {
            output += `\n${element.name} ${element.salary} ${element.position}`
        })
        return output
    }
}
let c = new Company();
 console.log(c.addEmployee("Stanimir", 2000, "engineer", "Human resources"))
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

let act = c.bestDepartment();
console.log(act);

