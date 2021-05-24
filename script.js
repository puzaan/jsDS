const restaurant = {
  name: 'Pepe Pizza',
  location: 'Tripureshwor',
  categories: ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'],
  startermenu: ['Focaccia', 'Bruschetta', 'Garlic', 'bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.startermenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// const arr = [1, 2, 3, 4, 5];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// const d = arr[3];
// const e = arr[4];
// console.log(arr);
// // console.log(a, b, c, d, e);
// const [a, , , b] = arr;
// console.log(a, b);
// console.log(arr);

// let [a, b] = restaurant.categories;
// console.log(a, b);

// a = Italian;
// b = Pizzeria;

// const temp = a;
// a = b;
// b = temp;

// console.log(a, b);

// [b, a] = [a, b];
// console.log(a, b);

// const [i, j] = restaurant.order(2, 0);
// console.log(i);
// console.log(j);

// const arr = [1, 2, [4, 5]];

// const [a, , [b, c]] = arr;

// console.log(a, b, c);

const [a = 1, b = 1, c = 1, d = 1, e = 1] = [8, 9];
console.log(a, b, d);
