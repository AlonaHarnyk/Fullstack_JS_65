// const users = [
//   {
//     id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     id: "249b6175-5c30-44c6-b154-f120923736f5",
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     id: "150b00fb-dd82-427d-9faf-2879ea87c695",
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     id: "e1bf46ab-7168-491e-925e-f01e21394812",
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// const ages1 = users.map(user => user.age)
// const ages2 = users.map(({ age }) => age)

// console.log(ages2)

// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ]; 

// const a = students.map(({ courses }) => courses)

// console.log(a.flat())
// console.log(a)

// const courses = students.flatMap(student => student.courses);
// console.log(courses) // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія']


// const users1 = users.filter(({ name, balance }) => balance > 3000 && name[0] === "S")
// console.log(users1)


// const userFind = users.find(({ name, balance }) => balance > 3000 && name[0] === "S")
// console.log(userFind)
// console.log(users.indexOf(userFind))

// const index = users.findIndex(({ name, balance }) => balance > 3000 && name[0] === "S")
// console.log(index)


// const result1 = users.every(({ balance }) => balance > 1000)
// const result2 = users.every(({age}) => age >= 20 && age <=30)

// console.log(result2)

// const result3 = users.some(({ eyeColor }) => eyeColor === 'green')
// const result4 = users.some(({friends}) => friends.length > 5)
// console.log(result4)

// const array = [2, 7, 3, 14, 6]
// console.log(array)
// const total = array.reduce((previousValue, number, index) => {
//   console.log('Iteration:', index + 1)
//   console.log('previousValue', previousValue)
//   const res = previousValue + number;
//   console.log('res', res)
//   return res;
// }, 0);

// console.log(total); // 32


// const countSum = (array) => {
//   // I
//   // const positiveNums = array.filter(elem => elem >= 0)
//   // return positiveNums.reduce((acc, elem) => acc + elem)
//   // II
//   return array.filter(elem => elem >= 0).reduce((acc, elem) => acc + elem)
// }

// const countSum = (array) => {
//   return array.reduce((acc, elem) => {
//     if (elem > 0) {
//       return acc + elem
//     } else {
//       return acc
//     }
//   }, 0)
// }


// const countSum = (array) => array.reduce((acc, elem) => elem > 0 ? acc + elem : acc, 0)


// console.log(countSum([-34, 1, 5, 4, -5, 7, 3, 0]))
// console.log(countSum([-34, 1, -4, -5, -40, 3, 0]))



// const array = [2, 7, 3, 14, 6]
// const total = array.reduce((previousValue, number) => {
//   console.log('previousValue', previousValue)
//   const res = previousValue + number;
//   console.log('res', res)
//   return res;
// }, '');

// console.log(total); // '273146'




// const getSums = (array) => array.reduce((acc, num, idx) => idx === 0 ? [num] : [...acc, num + acc[idx-1]], [])

// const getSums = (array) => array.reduce((acc, num, idx) => {
//   console.log(idx+1)
//   console.log('acc', acc)
//   if (idx === 0) {
//     return [num]
//   } else {
//     console.log('last elem', acc[idx - 1])
//     return [...acc, num + acc[idx - 1]]
//   }

// }, [])

// console.log(getSums([1, 2, 3, 4, 5]))// [1, 3, 6, 10, 15]

// const cars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false }
// ];

// Example 1 - Метод map
// Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.

// const getModels = cars => {
//   return cars.map(({model}) => model)
// };

// console.log(getModels(cars));

// Example 2 - Метод filter
// Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж значення параметра threshold.

// const filterByPrice = (cars, threshold) => {
//   return cars.filter((car) => car.price > threshold)
// };

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

// Example 3 - Метод filter
// Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.

// const getCarsWithDiscount = cars => {
//   return cars.filter(car => car.onSale === true)
// };

// const getCarsWithDiscount = cars => {
//   return cars.filter(car => car.onSale)
// };

// console.table(getCarsWithDiscount(cars));

// Example 4 - Метод find
// const getCarByModel = (cars, model) => {
//   return cars.find(car => car.model === model)
// };

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));

// Example 5 - Метод reduce
// Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount).

// const getTotalAmount = cars => {
//   return cars.reduce((total, car) => {
//     return total + car.amount
//   }, 0)
// };

// console.log(getTotalAmount(cars));








