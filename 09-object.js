/**
 * Inisiasi Object
 */
//  const hello = new String("Hello")
//  hello.name = "brother"
//  hello.print = function () {
//    console.log(`${this} ${this.name}`)
//  }
 
//  hello.print()
//  // Output: Hello brother
 
/**
 * Object properties
 */
//  const identitas = new Object()
//  identitas.nama = "Kak Fahru"
//  identitas.hobi = "baca dokumentasi"
//  console.log(`${identitas.nama} suka ${identitas.hobi}`)
//  // output: Kak Fahru hobi baca dokumentasi
 
/**
 * Object Literal
 */
//  const identitas = {
//     nama: "Kak Fahru",
//     hobi: "baca dokumentasi",
//   }
//   console.log(`${identitas.nama} suka ${identitas.hobi}`)
//   // output: Kak Fahru hobi baca dokumentasi
  
/**
 *  this on Object
 */
//  function Human(firstName, lastName) {
//     this.namaDepan = firstName
//     this.namaBelakang = lastName
//     this.panggil = function () {
//       console.log(`Hello ${this.namaDepan} ${this.namaBelakang}`)
//     }
//   }
  
//   const kaFahru = new Human("Ka Fahru", "Rofi")
//   kaFahru.panggil()
//   // Output: Hello Ka Fahru Rofi
  
/**
 * Method on Object
 */
//  const printConsole = function () {
//     console.log(`Hello ${this.first} ${this.last}`)
//   }
  
//   const identitas = {
//     first: "Mas",
//     last: "Fahru",
//     print: printConsole,
//   }
//   identitas.print()
//   // output: Hello Mas Fahru

/**
 * Undefined safety Operator
 */
// buat sebuah object dengan propertinya
// const fulan = {
//     nama: "fulan",
//     kucing: {
//       nama: "meong",
//     },
//   }
//   console.log(fulan.kucing.nama)
//   // output: meong
  
//   console.log(fulan.kambing.name)
//   // output: error: Uncaught TypeError: Cannot read properties of undefined (reading 'name')
  
//   console.log(fulan.sapi?.name)
//   // output: undefined

/**
 * Object as Argument
 */
//  const identitas = {
//     first: "Imam",
//     last: "Fahru",
//     print: () => {
//       console.log("ini method print")
//     },
//   }
  
//   const printConsole = (props) => {
//     console.log("Hello " + props.first + " " + props.last)
//     // kita bisa memanggil method pada object props
//     props.print()
//   }
  
//   printConsole(identitas)

/**
 * Destructuring Object
 */
//  const identitas = {
//     nama: "Ka Fahru",
//     status: "sudah menikah",
//     pekerjaan: "software engineer",
//   }
   
//   // buat sebuah fungsi dengan parameter destructuring object,
//   // pada kasus ini hanya menerima properti nama dan status
//   function printConsole({ nama, status }) {
//     console.log(`${nama} ${status}`)
//   }
//   // masukkan object sebagai argumen pemanggilan fungsi printConsole
//   printConsole(identitas)
//   // Output: Ka Fahru sudah menikah

/**
 * Spread Operator for Array
 */
// // buat sebuah fungsi dengan tiga parameter
// function myBio(firstName, lastName, job) {
//     console.log(`${firstName} ${lastName} bekerja sebagai ${job}`)
//   }
//   // buat sebuah array berisi firstName, lastName, dan job
//   const identitas = ["Fulan", "bin Fulan", "Programmer"]
//   // panggil fungsi myBio dengan argumen menggunakan spread operator dari array di atas
//   // ...identitas dijabarkan menjadi "Fulan", "bin Fulan",  "Programmer"
//   myBio(...identitas)
//   // Output di console log:
//   // "Fulan bin Fulan bekerja di Freelancer"
  

/**
 * Spread Operator for Object
 */
// Spread pada Object bisa digunakan untuk menggabungkan 2 Object
// buat 2 object
// const obj1 = {
//     firstName: "Fulan",
//     lastName: "bin Fulan",
//     job: "Programmer",
//   }
//   const obj2 = {
//     gender: "Male",
//     age: "25",
//   }
  
//   // gabungkan kedua object tsb
//   const obj3 = {
//     ...obj1,
//     ...obj2,
//   }
  
//   console.log(obj3)
//   // output:
//   // {firstName: 'Fulan', lastName: 'bin Fulan', job: 'Programmer', gender: 'Male', age: '25'}