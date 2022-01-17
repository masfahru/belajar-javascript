/**
 *  Statements Variabel ada 3 jenis
 *  var
 *  let
 *  const
 *  */

/**
 *  var adalah keyword untuk mendeklarasikan variabel, bisa beserta inisialisasinya
 *      bersifat mutable, atau bisa diubah nilainya setelah variabel dideklarasikan
 *      hanya memiliki dua scope, yakni Global Scope dan Local (function) Scope
 */

var a // statements var untuk mendeklarasikan variabel bernama a

var b = 1 // statements var dengan expression untuk menginisialisasi nilai awal

b = 2 // expression untuk mengubah nilai a

/**
 * let adalah keyword untuk mendeklarasikan variabel dengan scope lokal
 *      Bersifat mutable
 *      Memiliki tiga scope, yakni Global Scope, Local Scope, dan Block Scope
 */

//  let name = "Javascript"
//  function printConsole() {
//    console.log(name)
//    if (true) {
//      let kelas = "Belajar Pemrograman Javascript"
//    }
//    console.log(kelas) // Error: ReferenceError
//  }
//  printConsole()

/**
 * const adalah keyword untuk mendeklarasikan variabel konstan (tidak bisa diubah)
 *      Bersifat immutable
 *      Memiliki tiga scope, yakni Global Scope, Local Scope, dan Block Scope
 *      Biasanya dideklarasikan sebagai variabel global
 */

//  const name = "Javascript"
//  console.log(name)
//  name = "Pemrograman Javascript" // ERROR: Assignment to constant variable


/**
 * Variabel Hoisting
 * Ketika menjalankan kode Javascript, Javascript Engine melakukan dua tahap berikut ini:
 * 
 *      Parsing (menguraikan) kode
 *      Execution (eksekusi) kode
 * 
 *  Pada tahap parsing, Javascript Engine akan memindahkan semua keyword deklarasi variabel global ke atas,
 *  atau ke atas fungsi jika di deklarasikan di dalam fungsi.
 */

/**
 * Apa yang terjadi pada kode di bawah ini?
 */
//  function printConsole() {
//     console.log(message)
//   }
//   printConsole()
//   var message = "Hello"
