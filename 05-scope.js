/**
 * Cakupan kode (scope code) Javascript adalah area dari cakupan kode agar bisa berjalan 
 * maupun diakses oleh kode lainnya.
 * Dalam sebuah file javascript, terdapat tiga jenis scope, yakni :
 *      global scope
 *      local scope 
 *      block scope
 */

/**
 * Global scope 
 * adalah kode yang cakupannya di seluruh file javascript
 * sehingga bisa diakses oleh semua fungsi yang ada di dalam file javascript.
 * Agar bisa menjadi Global scope, maka kode perlu di tulis di dasar atau root dari file javascript.
 */

// var greeting = "Halo rekan-rekan"

// function printConsole() {
//    console.log(greeting)
// }
// printConsole()
// // Output : Halo rekan-rekan
 
// function printMessage(param) {
//    console.log(param)
// }
// printMessage(greeting)
// // Output : Halo rekan-rekan

/**
 * Function Scope
 * Function scope adalah cakupan kode yang hanya dapat diakses dari dalam fungsi itu saja
 * dan tidak bisa diakses oleh kode di luar fungsi tersebut.
 */

//  function printConsole() {
//     var greeting = "Halo rekan-rekan"
//     console.log(greeting)
//   }
//   printConsole()
//   // Output : Halo rekan-rekan
  
//   function printMessage(param) {
//     console.log(param)
//   }
//   printMessage(greeting)
//   // Output: error: Uncaught ReferenceError: greeting is not defined

// contoh 2
// var printConsole = function () {
//     if (true) {
//       var greeting = "Hello Guys"
//     }
//     console.log(greeting)
//   }
//   printConsole()
//   // Output: Hello Guys

/**
 * Block Scope
 * Block scope adalah cakupan kode yang hanya terbatas pada block code saja.
 * Block code adalah area yang ada di antara kurung kurawal { dan }.
 */

//  var printConsole = function () {
//     // ini adalah contoh local scope
//     if (true) {
//       let greeting = "Hello Guys"
//       console.log(greeting)
//     }
//     console.log(greeting)
//   }
//   printConsole()
  
//   // output:
//   // Hello Guys
//   // error: Uncaught ReferenceError: greeting is not defined

/** 
 *  Test pemahaman scope I
 *  Bagaimana output kode berikut?
 * */
// let a = 1
// const function1 = function () {
//   console.log(a)
//   a = 2
// }
// a = 3
// const function2 = function () {
//   console.log(a)
// }
// function1()
// function2()

/** 
 *  Test pemahaman scope II
 *  Bagaimana output kode berikut?
 * */

 let a = 10
 const fungsi = function () {
   let a = 11
   if (true) {
     let a = 12
     console.log(a)
   }
   console.log(a)
 }
 
 fungsi()
 console.log(a)