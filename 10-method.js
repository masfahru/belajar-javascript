/**
 *  Array Built-in Method
 */

/**
 * Method find
 */
// // buat sebuah array
// const array1 = [5, 12, 8, 130, 44]

// // buat sebuah callback function yang me-return nilai lebih besar dari 10
// function biggerThanTen(value) {
//   return value > 10
// }

// // panggil method find pada array1, dengan parameter nama fungsi di atas
// // masukkan hasilnya ke variabel found
// const found = array1.find(biggerThanTen)

// console.log(found) // output: 12

/**
 * Method some
 */
// // Sebuah array bisa memanggil method some
// const a = [2, 5, 8, 1, 4].some((element) => element > 10)
// console.log(a) // output: false
// const b = [12, 5, 8, 1, 4].some((element) => element > 10)
// console.log(b) // output: true

/**
 *  Method Every
 */
//  let a = [12, 5, 8, 130, 44]
//  // cek apakah semua anggota array a bernilai > 10
//  const resultA = a.every((elemen) => elemen > 10)
//  console.log(resultA) // output: false
 
//  let b = [12, 54, 18, 130, 44]
//  const resultB = b.every((elemen) => elemen > 10)
//  console.log(resultB) // output: true
 
/**
 * Method Includes
 */
//  let a = [12, 54, 18, 130, 44]

//  let resultA = a.includes(12)
//  console.log(resultA) //output: true
 
/**
 *  Method map
 */
//  let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//  // buat callback function kali 3
//  function kaliTiga(element) {
//    return element * 3
//  }
 
//  let resultA = a.map(kaliTiga)
//  console.log(resultA)
//  // output: [3, 6, 9, 12, 15, 18, 21, 24, 27]
 
/**
 * Method reduce
 */
//  let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//  // buat callback function dengan parameter result dan element
//  function kaliDua(result, element) {
//    // hasilnya adalah jumlah dari anggota setelah dikali 2
//    return result + element * 2
//  }
 
//  // untuk mendapatkan jumlah dari semua anggota array a setelah dikali 2
//  // maka kita perlu memasukkan nama callback function ke dalam argumen reduce
//  let resultA = a.reduce(kaliDua)
//  console.log(resultA)
//  // output: 89

/**
 * Method Filter
 */
// // buat sebuah array
// const array1 = [5, 12, 8, 130, 44]

// // gunakan array method filter untuk menyaring data
// // masukkan data hasil filter ke dalam variabel found
// const found = array1.filter((element) => element > 10)

// // print variabel found
// console.log(found)
// // output : Array [12, 130, 44]

/**
 *  Method Sort
 */
//  let a = [5, 12, 8, 130, 44]

//  // membuat fungsi mengurutkan dari yang terkecil ke yang terbesar
//  function sorting(current, next) {
//    // jika nilai current > next
//    if (current > next) {
//      // return 1 agar posisi current diletakkan setelah next
//      return 1
//    }
 
//    // jika nilai current kurang dari nilai next
//    if (current < next) {
//      // return -1 maka posisi current diletakkan sebelum next
//      return -1
//    }
 
//    // jika nilai current = next maka return 0
//    if (current === next) {
//      // return 0 maka posisi tidak diubah
//      return 0
//    }
//  }
 
//  // panggil method sort dengan parameter fungsi sorting
//  let result = a.sort(sorting)
//  console.log(result)
