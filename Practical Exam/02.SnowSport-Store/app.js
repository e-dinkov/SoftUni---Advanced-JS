class SnowSportStore {
  constructor(storeName) {
    this.storeName = storeName;
    this.availableEquipment = [];
    this.revenue = 0;
  }
  addEquipment(type, price, condition) {
    if (!type || !condition || !Number.isInteger(price) || price <= 0) {
      throw new Error("Invalid equipment details!");
    }

    let newEquipment = {
      type,
      price: Number(price),
      condition,
    };

    this.availableEquipment.push(newEquipment);

    return `New equipment added: ${type} / ${condition} condition - ${price.toFixed(
      2
    )}$.`;
  }
  rentEquipment(type, rentalDays) {
    if (type === "") {
      throw new Error("Invalid equipment details!");
    }
    if (Number.isInteger(rentalDays) === false || rentalDays <= 0) {
      throw new Error("Invalid equipment details!");
    }
    let currRent = this.availableEquipment.find(
      (item) => item.type === type && item.condition === "used"
    );
    if (currRent === undefined) {
      throw new Error(`${type} is not available for rent!`);
    }
    let rentalCost = currRent.price * 0.1 * rentalDays;
    this.revenue += rentalCost;
    return `${type} rented for ${rentalDays} days. Total cost: ${rentalCost.toFixed(
      2
    )}$.`;
  }
  sellEquipment(type) {
    if (type === "") {
      throw new Error("Invalid equipment details!");
    }
    let currSell = this.availableEquipment.findIndex(
      (item) => item.type === type && item.condition === "new"
    );
    if (currSell === -1) {
      throw new Error(`${type} is not available for purchase!`);
    }
    let soldItemPrice = this.availableEquipment[currSell].price;
    this.revenue += soldItemPrice;
    this.availableEquipment.splice(currSell, 1);
    return `${type} has been sold for ${soldItemPrice.toFixed(2)}$.`;
  }
  showRevenue() {
    if (this.revenue === 0) {
      return `Nothing has been sold or rented.`;
    } else {
      return `${
        this.storeName
      } has made a total revenue of ${this.revenue.toFixed(2)}$.`;
    }
  }
}
let store = new SnowSportStore("Alpine Gear Shop");
console.log(store.addEquipment("Ski", 500, "new"));
console.log(store.addEquipment("Snowboard", 300, "used"));
console.log(store.rentEquipment("Snowboard", 3));
console.log(store.rentEquipment("Boots", 3));
