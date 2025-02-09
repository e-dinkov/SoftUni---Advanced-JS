function foo(data, crit) {
    class Ticket{
        constructor(dest, price, status) {
            this.destination = dest
            this.price = price;
            this.status = status;
     }
    }
    let tickets = []
    data.forEach((el) => {
        let [dest, price, status] = el.split("|")
        let currTicket = new Ticket(dest, Number(price), status)
        tickets.push(currTicket)
    })
    tickets.sort( (ticket1, ticket2) => {
        if (crit === "price") {
            return ticket1.price - ticket2.price
        }
        else {
            return (ticket1[crit]).localeCompare(ticket2[crit])
        }
    })
    return tickets
    
    

}
foo(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "status"
);