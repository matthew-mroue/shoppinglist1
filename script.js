class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class List {
  constructor() {
    this.items = [];
  }
  add(info) {
    this.items.push(info);
  }
  printList() {
    for(let i = 0; i < this.items.length; i++) {
      console.log(this.items[i].name, this.items[i].price);
      sum += parseInt(this.items[i].price);
    }
    console.log(`The total price is $${sum}`);
  }
}

const newList = new List;
sum = 0;

while(true) {
  const choice = prompt("What would you like to do?", "add, print, or quit");
  if (choice === "add") {
    const name = prompt("Name:"); 
    const price = prompt("Price:");
    newList.add(new Item(name, price));
  }
  else if (choice === "print") {
    newList.printList();
  }
  else if (choice === "quit") {
    break;
  }
}