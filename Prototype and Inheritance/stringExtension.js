(function stringExtension() {
    String.prototype.ensureStart = function (str) {
        if (this.toString().startsWith(str)) {
            
            
           return this.toString()
            
        }
        else {
            return str + this.toString()
        }
       
        
    }
    String.prototype.ensureEnd = function (str) {
      if (this.toString().endsWith(str)) {
        return this.toString();
      } else {
        return this.toString() + str;
        }
        
    }
    String.prototype.isEmpty = function () {
        if (this.toString().length > 0) {
                return false
        }
        else {
            return true
        }
    }
 String.prototype.truncate = function (n) {
   
   if (n >= this.toString().length) {
     return this.toString();
   } else if (n < 4) {
     return ".".repeat(n);
   } else {
       let lastIndex = this.toString().substring(0, n - 2).lastIndexOf(" ")
     if (lastIndex >= 0) {
       

       return this.toString().substring(0,lastIndex) + "...";
     } else  {
       return this.toString().substring(0, n - 3) + "...";
     }
   }
 };
  String.format = function (str, ...params) {
    let placeholderPattern = /{[0-9]+}/g;
    for (let el of params) {
      if (placeholderPattern.test(str)) {
        str = str.replace(str.match(placeholderPattern)[0], el);
      }
    }
    return str;
  };
      
})()
let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
console.log(str);

console.log(str = str.truncate(16))
console.log(str = str.truncate(14))
console.log(str = str.truncate(8))
console.log(str = str.truncate(4))
console.log(str = str.truncate(2))
// str = 
//   console.log(String.format('The {0} {1} fox',
//     'quick', 'brown'));
  
// console.log(String.format('jumps {0} {1}',
//   'dog'))
