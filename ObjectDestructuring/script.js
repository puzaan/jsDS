// unpacking data into separate variables
// ES 6 feature
// We will simulate food delivery application

const restaurant = {
  name: 'Pepe Pizza',
  location: 'Tripureshwor',
  categories: ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'],
  startermenu: ['Focaccia', 'Bruschetta', 'Garlic', 'bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },

    fri: {
      open: 11,
      close: 23,
    },

    sat: {
      open: 0,
      close: 24,
    },
  },

  orderDelivery: function ({ time, starterIndex, mainIndex, address }) {
    // console.log(time);
    //console.log(starterIndex);
    console.log(
      `Order Received! ${this.mainMenu[mainIndex]} and ${this.startermenu[starterIndex]}, will be delivered to ${address} at ${time}`);
    
  },
};

// const resName = restaurant.name;

// const { resName } = restaurant;

const {
  name: resName = [],
  openingHours: hours = [],
  categories: items = [],
  menu = [],
} = restaurant;
// console.log(items, menu);

let a = 10;
let b = 20;
const obj = { a: 5, b: 10 };
({ a, b } = obj);

console.log(`value of a = ${a}`);

const {
  fri: { open: opening, close },
} = hours;
console.log(`Opening hours = ${opening}`);
console.log(`Colosing hours = ${close}`);

restaurant.orderDelivery({
  time: '20:30',
  mainIndex: 2,
  starterIndex: 1,
  address:'Kathmandu',
});



