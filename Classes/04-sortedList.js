

class List{
    list = []
    size = this.list.length
    orderList = () => {
        this.list.sort((a, b) => { return a - b })
    }
    getSize = () => {
        this.size = this.list.length;
    }
    add(x){
        this.list.push(x)
        this.getSize()
        this.orderList()
    }
    get(index) {
        if (index < this.size && index >= 0) {
            return this.list[index];
        }
        else{
            throw Error("Invalid index!")
        }
    }
    remove(index) {
        if (index < this.size && index >= 0)
        { this.list.splice(index, 1); }
       else{
        throw Error("Invalid index!")
        } 
        this.getSize()
        this.orderList()

    }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.size)
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));

