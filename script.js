  
// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: false,
//     rating: 0,
//     data: {
//         a: 1,
//         b: {
//           test: 'test!!!'
//         },
//         c: 3
//     }
//   };


// const x = 'author';

// const a = book.title
// console.log(a)
// console.log(book.genres)
// console.log(book.data.a)
// console.log(book.data.b.test)

// console.log(book['genres']);
// console.log(book[genres]); // error

// console.log(book['author']) //  "Bernard Cornwell"
// console.log(book[x]) // "Bernard Cornwell"

// console.log(book.x) // undefined

// console.log(book['data']['a']) // 1

// console.log(book)

// book.isPublic = true;

// console.log(book)

// book.genres.push('tale')
// console.log(book)

// book.price = '10$'
// book['price'] = '10$'

// console.log(book)


// const name = "Генрі Сибола";
// const age = 25;


// const user = {
//   name: name,
//   age: age,
// };

// console.log(user)

// const user = {
//   name,
//   age,
// };

// console.log(user)

// console.log(user.name); // "Генрі Сибола"
// console.log(user.age); // 25


// const student = {
//     name: 'Jhon',
//     email: 'jhon@gmail.com',
//     homeworkResults: [],
//     getName() {
//         console.log(this.name)
//     },
//     getEmail() {
//         console.log(this.email)
//     },
//     getHWResults() {
//         console.log(this.homeworkResults)
//     },
//     addHomeworkResults(topic, sucess) {
//         const item = {topic, sucess}
//         this.homeworkResults.push(item)
//     }
// }

// student.getName()
// student.getEmail()
// student.getHWResults()
// student.addHomeworkResults('HTML/CSS', true)
// student.getHWResults()
// student.addHomeworkResults('JS', true)
// student.getHWResults()


// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };

//   for (const key in book) {
//     // Ключ
//     console.log('key', key);
//     // Значення властивості з таким ключем
//     console.log(book.key)
//     console.log('value', book[key]);
//   }
 

const animal = {
  legs: 4,
  eyes: 2
};

// // console.log(animal)

const dog = Object.create(animal);

// // console.log(dog)

dog.name = "Манго"


// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4

// for (const a in dog) {
//   console.log(a)
// }

// for (const key in dog) {
  
//   // console.log(dog.hasOwnProperty(key))
// if (dog.hasOwnProperty(key)) {
//     console.log(key)
// }
// }


// dog.eyeColor = 'grey';

// const keys = Object.keys(dog)
// console.log(keys)

// for (const item of keys) {
//   console.log(item)
// }

// const values = Object.values(dog)
// console.log(values)

// const entries = Object.entries(dog)
// console.log(entries)














