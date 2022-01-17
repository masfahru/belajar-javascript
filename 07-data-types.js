/**
 * Javascript memiliki 7 tipe data, yaitu:
 *      undefined
 *      null
 *      boolean
 *      number
 *      bigint
 *      string
 *      Object
 */

/**
 * Javascript merupakan salah satu loosely typed language 
 * yang membuat variabelnya tidak terikat tipe data tertentu
 * Namun, nilai dari variabelnya lah yang memiliki tipe data tertentu
 */

//  let myName // variabel myName bernilai undefined
//  myName = "Javascript" // nilai myName bertipe data string
//  myName = 20 // nilai myName bertipe data number
//  myName = true // nilai myName bertipe data boolean

/**
 * Cek Tipe Data Javascript
 * Pengecekan tipe data dari nilai suatu variabel dapat dilakukan dengan 
 * menggunakan expression operator typeof.
 */

//  let myName
//  console.log(typeof myName) // output: undefined
 
//  myName = "Javascript" // nilai name bertipe data string
//  console.log(typeof myName) // output: string
 
//  myName = 20 // nilai name bertipe data number
//  console.log(typeof myName) // output: number
 
//  myName = true // nilai name bertipe data boolean
//  console.log(typeof myName) // output: boolean

/**
 * Undefined
 * Undefined adalah tipe data primitive yang nilainya undefined atau tidak terdefinisikan
 * Tipe data ini adalah merupakan tipe data default untuk variabel yang dideklarasikan tanpa nilai
 */

//  let myName
//  console.log(myName) // output: undefined
//  console.log(typeof myName) // output: undefined

/**
 * Null
 * Null adalah tipe data primitive yang nilainya null.
 * Perbedaan nilai null dan undefined terletak pada tipenya
 * null merupakan pointer untuk object yang kosong 
 * sehingga tipe datanya object.
 */

 let myName = null
 console.log(myName) // output: null
 console.log(typeof myName) // output: object

/**
 * Number
 * Number adalah tipe data yang mewakili seluruh tipe data angka
 * seperti integer (bilangan bulat) dan floating point (desimal).
 */

//  let num = 100 // integer atau bilangan bulat 100
//  let minsnum = -100 // integer atau bilangan bulat -100
//  let desim = 10.01 // desimal
//  let desnum = 100.0 // diinterpretasikan sebagai integer 100

/**
 * NaN
 * NaN atau Not a Number adalah nilai numeric yang spesial. 
 * Digunakan untuk memberitahu bahwa nilai dari variabel tersebut adalah invalid number.
 */

//  console.log("a" / 2) // output NaN

/**
 * String
 * String pada Javascript adalah tipe data yang berhubungan dengan karakter. 
 * String terdiri dari satu atau lebih karakter yang dibatasi oleh simbol petik ' ', petik dua " ", ataupun backtick ``.
 */

//  let myName = "Javascript"
//  console.log(myName) // output: Javascript
//  let website = "https://developer.mozilla.org/"
//  console.log(website) // https://developer.mozilla.org/
//  let belajar = `Learn Javascript in Mozilla`
//  console.log(belajar) // output: Javascript in Mozilla

/**
 * Dikarenakan string merupakan kumpulan dari satu atau lebih karakter, 
 * maka kita bisa mencari panjang string dan melakukan perulangan layaknya array.
 */

//  let kata = "Javascript"
//  for (let i = 0; i < kata.length; i++) {
//    console.log(kata[i])
//  }

// // Output:
// // 'J'
// // 'a'
// // 'v'
// // 'a'
// // 's'
// // 'c'
// // 'r'
// // 'i'
// // 'p'
// // 't'

/**
 * Boolean
 */

//  let isLearning = true
//  if (isLearning) {
//    console.log("isLearning = true")
//  }
//  // Output : isLearning = true


/**
 * Object
 */

// Object Kosong
// let emptyObject = {}

// // Object berisi properties
// let user = {
//     id: 1,
//     firstName: "Javascript",
//     lastName: "Node"
// }
// console.log(user)

/**
 *  Cara Akses Properti Pada Object
 */

//  console.log(user.firstName) // output: Javascript
//  console.log(user["lastName"]) // output: Node

/**
 * Template literal
 */

//  const greeting = "Hello"
//  const subject = "World"
//  // cara biasa
//  console.log(greeting + " " + subject + "!")
//  // Cara template literal
//  console.log(`${greeting} ${subject}!`)

/**
 * Shorthand property names
 * */
// // Membuat variabel cara biasa
// let a = 1
// let b = 2
// let c = 3
// console.log(`${a} + ${b} = ${c}`)

// // Cara Singkat
// let a = 1, b = 2, c = 3
// console.log(`${a} + ${b} = ${c}`)
 
// // Cara Shorthand Property Name
// let [a, b, c] = [1, 2, 3]
// console.log(`${a} + ${b} = ${c}`)

/**
 * (Ternary) Operator
 */
// // Cara biasa
// let a = 10
// // if else biasa
// if (a < 10) {
//   console.log("a kurang dari 10")
// } else {
//   console.log("a sama dengan atau lebih besar dari 10")
// }
// // operator ternary
// a < 10
//   ? console.log("a kurang dari 10")
//   : console.log("a sama dengan atau lebih besar dari 10")

// // operator ternary assign value
// let a = 10
// // operator ternary assign value
// a = a <= 10 ? a + 10 : a - 10
// console.log(a)
// // Output: 20

/**
 *  Null coalescing operator
 */
//  function add(a, b) {
//     // jika variabel bernilai `null` atau `undefined`,
//     // maka isi variabel dengan nilai 0
//     a = a ?? 0
//     b = b ?? 0
//     return a + b
//   }
  
//   // panggil fungsi tanpa argumen
//   console.log(add()) // output: 0
//   // panggil fungsi dengan salah satu argumennya null
//   console.log(add(null, 12)) // output: 12