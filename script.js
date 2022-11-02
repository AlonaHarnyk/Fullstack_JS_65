
// function isIncluded(array, number) {
//     const result = array.includes(number)
//     console.log(result)
// }

// isIncluded([1, 2, 5, 8, 3], 4) // false
// isIncluded([1, 2, 5, 8, 3], 5) // true
// isIncluded(5, [1, 3, 5]) // error


// function isIncluded(array, number) {
//     const result = array.includes(number)
//     console.log(result)
//     // return result
//     // console.log(result)
// }

// const a = isIncluded([1, 2, 5, 8, 3], 4)
// console.log(a)

// console.log(isIncluded([1, 2, 5, 8, 3], 4)) // false
// console.log(isIncluded([1, 2, 5, 8, 3], 5)) // true

// const a = isIncluded([1, 2, 5, 8, 3], 4)
// console.log(a)
// const b = isIncluded([1, 2, 5, 8, 3], 5)
// console.log(b)

// function add(a, b) {
//   // const sum = a + b
//   // return sum

//   return a + b;
// }

// const number1 = add(1, 3);
// const number2 = add(5, 7);

// const sum = number1 + number2

// const sum = add(1, 3) + add(5, 7)
// console.log(sum)

// function add(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         console.log('One of operands is not a number')
//         return
//         // return 'One of operands is not a number'
//     }
//     return a + b
// }

// // console.log(add(3, 7))
// console.log(add( 5, '10'))


// function add(a = 0, b = 0) {
//   // const sum = a + b
//   // return sum
//  console.log(a)
//  console.log(b)
//  return a + b;
// }

// console.log(add(1))

// function add(a = 0, b = 0, c = 0) {
//     console.log(a + b + c)
// }

// const num1 = 3;
// const num2 = 4

// // add(num1, num2)
// // add(3)
// add()

// function add() {
//     console.log(arguments)
//     console.log(arguments[1])
//     console.log(arguments.length)
//     let sum = 0;
//     for(const arg of arguments) {
//         // console.log(arg)
//         sum +=arg
//     }
//     // console.log(sum)
//     return sum
// }

// add(5, 7, 4, 9, 10)
// console.log(add(5, 7, 4, 9, 10))


// function isIncluded() {
//     console.log(arguments)
//     const array = Array.from(arguments);
//     console.log(array)
//     const number = arguments[arguments.length - 1]
//     console.log(number)
//     const array2 = array.slice(0, -1)
//     console.log(array2)
//     console.log(array2.includes(number))
//     return array2.includes(number)
// }

// function isIncluded(...array) {
//     console.log(array)
//     // const number = arguments[arguments.length - 1]
//     // console.log(number)
//     // const array2 = array.slice(0, -1)
//     // console.log(array2)
//     // console.log(array2.includes(number))
//     // return array2.includes(number)
// }

// isIncluded(2, 5, 6, 8, 4, 9, 3, 7)

// const add = function(a, b) {
//     if(typeof a !== 'number' || typeof b !== 'number') {
//         return 'One of operands is not a number'
//         // return
//     }
//     return a + b
// }

// console.log(add(3, 7))
// console.log(add( 5, '10'))



// const a = 1;
// console.log(a);
// function logger() {
//   const a = 2;
//   // console.log(a)
//   if (a === 2) {
//     // const a = 3;
//     // console.log(a)
//     for (let i = 0; i <= 10; i += 1) {
//       //   const a = 4;
//       console.log(a);
//       // console.log(a + i)
//     }
//   }
// }

// logger();




console.log(111)

function bar() {
    console.log("bar");
    console.log(222)
  }
  
  function baz() {
    console.log("baz");
    console.log(444)
  }
  
  function foo() {
    console.log("foo");
    bar();
    console.log(333)
    baz();
      console.log(555)
      foo()
  }
  
  foo();

  console.log('!!!')
