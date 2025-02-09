function commandProcessor(input) {
  
  let commandImplementor = (function () {
    let arr = [];
    return {
        create: (name, inherit, parentName) => {
            if (inherit === "inherit") {
                let prototype = arr.find(x => x.name === parentName)
                let newEl = Object.create(prototype)
                newEl.name = name
                arr.push(newEl)
            }
            else {
                let newEl = new Object();
                newEl.name = name;
                arr.push(newEl);
            }
        },
        set: (name, property, value) => {
            let editEl = arr.find(x => x.name === name)
            editEl[property] = value
            
            
            
        },
        print: (name) => {
            let printEl = arr.find(x => x["name"] === name)
            let printArr = []
            for (let key in printEl) {
                if (key !== "name") {
                    printArr.push(`${key}:${printEl[key]}`)
                }
            }
            console.log(printArr.join(","))
            
        }
    };
    })();
    
  for (let currCmd of input) {
        let [cmd, name, property, value] = currCmd.split(" ")
        commandImplementor[cmd](name,property,value)
    }
    
    function Foo(name) {
        this.name = name;
    }   
  
}
commandProcessor([
  "create c1",

  "create c2 inherit c1",

  "set c1 color red",

  "set c2 model new",

  "print c1",

  "print c2",
]);
