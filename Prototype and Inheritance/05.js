function solution() {
    class Employee{
        constructor(name, age) {
            this.name = name
            this.age = age;
            this.dividend = 0
            this.salary = 0
            this.tasks = []
        }
        work() {
            console.log(this.name + ' ' + this.tasks[0])
            this.tasks.push(this.tasks[0])
            this.tasks.shift();
        }
        collectSalary() {
            console.log(
              `${this.name} received ${this.salary + this.dividend} this month.`
            );
        }
        
    }

  class Junior extends Employee{
      constructor(name, age) {
          super(name, age)
          this.tasks = [`is working on a simple task.`];
            }
    }
    class Senior extends Employee {
      constructor(name, age) {
        super(name, age);
        this.tasks = [
          `is working on a complicated task.`,
          `is taking time off work.`,
          `is supervising junior workers.`,
        ];
      }
    }
    class Manager extends Employee {
      constructor(name, age) {
        super(name, age);
        this.tasks = [
          `scheduled a meeting.`,`is preparing a quarterly report.`,
          
        ];
      }
    }
    return {
        Employee,Junior,Senior,Manager
    }
}
const classes = solution (); 
const junior = new classes.Junior('Ivan', 25); 
console.log(
  Object.getPrototypeOf(Object.getPrototypeOf(junior)).constructor.name
);



 
// junior.work();  
// junior.work();  
 
// junior.salary = 5811; 
// junior.collectSalary();  
 
// const sinior = new classes.Senior('Alex', 31); 
 
// sinior.work();  
// sinior.work();  
// sinior.work();  
// sinior.work();  
 
// sinior.salary = 12050; 
// sinior.collectSalary();  
 
// const manager = new classes.Manager('Tom', 55); 
 
// manager.salary = 15000; 
// manager.collectSalary();  
// manager.dividend = 2500; 
// manager.collectSalary();  
	


