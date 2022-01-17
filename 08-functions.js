/**
 * Function
 */
// // Cara biasa membuat function
// // Gunakan keyword function disertai dengan nama fungsi
// function myFunction(param) {
//     console.log(param)
//   }
//   myFunction("Fungsi dengan parameter")
//   // Output: Fungsi dengan parameter
  
/**
 * Anonymous Function
 */
// // variabel myFunction diberi isi berupa anonymous function
// const myFunction = function (parameter) {
//     console.log(parameter)
//   }
//   myFunction("Fungsi dengan parameter")
//   // Output: Fungsi dengan parameter
  
/**
 * Arrow Function
 */
// // ubah menjadi format arrow function
// const myFunction = (parameter) => {
//     console.log(parameter)
//   }
//   myFunction("Fungsi dengan parameter")
//   // Output: Fungsi dengan parameter

/**
 * Arrow function return only (without body)
 */
// // arrow function
// let myFuncion = (num1, num2) => `${num1} kali ${num2} = ${num1 * num2}`
// console.log(myFuncion(3, 3))
// // Output: 3 kali 3 = 9

/**
 * High order Function
 */
// buat fungsi callback bernama isGenap
// berisi kode untuk cek number genap
// function isGenap(num) {
//     // bilangan genap adalah nilai yang habis dibagi 2
//     return num % 2 == 0
//   }
   
//   // buat high-order function bernama printGenap dengan 2 parameter
//   function printGenap(num, callback) {
//     // cek apakah num genap menggunakan callback
//     const isTrue = callback(num)
//     if (isTrue) {
//       console.log(`${num} adalah bilangan genap`)
//     } else {
//       console.log(`${num} adalah bilangan ganjil`)
//     }
//   }
   
//   // argumen pertama berisi number, argumen kedua berisi callback isGenap
//   printGenap(5, isGenap)
//   // output console: "5 adalah bilangan ganjil"

/**
 * High order function with arrow function callback
 */
// // buat high-order function bernama printGenap dengan 2 parameter
// function printGenap(num, callback) {
//     // cek apakah num genap menggunakan callback
//     const isTrue = callback(num)
//     if (isTrue) {
//       console.log(`${num} adalah bilangan genap`)
//     } else {
//       console.log(`${num} adalah bilangan ganjil`)
//     }
//   }
   
//   // Pada versi ini, tidak ada fungsi isGenap.
//   // namun argumen callback diisi oleh fungsi anonymous (tanpa nama)
//   printGenap(5, function (n) {
//     // bilangan genap adalah nilai yang habis dibagi 2
//     return n % 2 == 0
//   })
//   // output console: "5 adalah bilangan ganjil"

/**
 * High order function with anonymous function callback
 */
//  function printGenap(num, callback) {
//     // cek apakah num genap menggunakan callback
//     const isTrue = callback(num)
//     if (isTrue) {
//       console.log(`${num} adalah bilangan genap`)
//     } else {
//       console.log(`${num} adalah bilangan ganjil`)
//     }
//   }
   
//   // Pada versi ini, argumen callback diisi oleh arrow function
//   printGenap(5, (n) => n % 2 == 0)
//   // output console: "5 adalah bilangan ganjil"
