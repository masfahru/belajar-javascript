/**
 *  Javascript Synchronous dan Asynchronous
 */

/**
 *  Promise
 */

/**
 *  promise-then
 */
//  const ifResolved = (pesan) => {
//     console.log(`Terpenuhi karena ${pesan}`)
//   }
//   const ifRejected = (err) => {
//     console.log(`Tidak terpenuhi karena ${err}`)
//   }
//   const myPromise = new Promise((resolve, reject) => {
//     let x = 10
//     if (x <= 10) {
//       resolve("Nilai kurang dari atau sama dengan 10")
//     }
//     reject("Nilai lebih dari 10")
//   }).then(ifResolved, ifRejected)
//   // callback function ifResolved akan terpanggil jika status promise resolved
//   // callback function ifRejected akan terpanggil jika status promise rejected
  
/**
 * promise-then-catch
 */
// then dan catch pada Promise memudahkan kita untuk membaca kode
// method then hanya diisi dengan callback function ketika sukses
// method catch hanya diisi dengan callback function ketika gagal

// const myPromise = new Promise((resolve, reject) => {
//   let x = 12;
//   if (x <= 10) {
//     resolve("Nilai kurang dari atau sama dengan 10");
//   }
//   reject("Nilai lebih dari 10");
// })
//   .then((pesan) => {
//     console.log(`Terpenuhi karena ${pesan}`);
//   })
//   .catch((err) => {
//     console.log(`Tidak terpenuhi karena ${err}`);
//   });  

/**
 *  promise-then-throw
 */
// Kode dalam Promise terkadang bisa error tanpa sempat memanggil callback reject
// error ini biasa ditampilkan dengan sintaks throw
// fungsi catch akan tetap menangkap nilai yang dikirimkan melalui throw
// meskipun callback reject tidak dipanggil
// const myPromise = new Promise((resolve) => {
//   let x = 12;
//   if (x <= 10) {
//     resolve("Nilai kurang dari atau sama dengan 10");
//   }
//   throw Error("Nilai lebih dari 10");
// })
//   .then((pesan) => {
//     console.log(`Terpenuhi karena ${pesan}`);
//   })
//   .catch((err) => {
//     console.log(`Tidak terpenuhi karena ${err}`);
//   });
  
/**
 *  Promises Chaining
 */
// // Fetch data dari covid19
// window.fetch("https://covid19.mathdro.id/api")
//   .then((data) => data.json()) // Kemudian ubah data menjadi Object dengan json
//   .then((obj) => {
//     console.log(obj) // tampilkan obj ke console
//   })
//   .catch((err) => {
//     console.log(err) // tampilkan error jika salah satu Promise gagal terpenuhi
//   })
// console.log("Pengambilan data covid 19")
// /**
//  * Output:
//  * Pengambilan data covid 19
//  * {
//  * confirmed: {...},
//  * recovered: {...},
//  * ..dan-seterusnya..
//  * }
//  */

/**
 *  Async
 */

// Contoh Promise Biasa
// const myPromise = new Promise((resolve, reject) => {
//     let x = 10
//      if (x <= 10) {
//        // Perlu menggunakan resolve
//        // untuk memberi tanda bahwa Promise terselesaikan
//       resolve("Nilai kurang dari atau sama dengan 10")
//     }
//      throw Error("Nilai lebih dari 10")
//    })
//    // Penanganan Promise menggunakan method then dan catch
//    // method finally juga bisa dipakai jika dibutuhkan
//    myPromise.then((pesan) => {
//        console.log(pesan)
//      }).catch((err) => {
//        console.log(err)  
//    })
   

/**
 * Contoh Async
 */
// buat sebuah async function
// const myAsync = async function () {
//     let x = 10
//      if (x <= 10) {
//        // Tidak perlu menggunakan resolve, cukup return
//        // untuk memberi tanda bahwa async function selesai
//       return "Nilai kurang dari atau sama dengan 10"
//     }
//      throw Error("Nilai lebih dari 10")
//    }
   
//    // Karena Async function menghasilkan Promise
//    // maka kita bisa gunakan method then dan catch juga
//    myAsync().then((pesan) => {
//        console.log(pesan)
//      }).catch((err) => {
//        console.log(err)
//      })
   
/**
 *  Contoh Promises Chaining
 * */
// window.fetch("https://covid19.mathdro.id/api")
//   .then((data) => data.json())
//   .then((obj) => {
//     console.log(obj)
//   }).catch((err) => {
//     console.log(err)
//   })
// console.log("Pengambilan data covid 19")


/**
 * Async-Await
 */
//  const getData = async () => {
//     let data = await window.fetch("https://covid19.mathdro.id/api")
//     let obj = await data.json() // dijalankan hanya jika variabel data terisi
//     console.log(obj) // dijalankan hanya jika variabel obj terisi
//   }
//   getData().catch((err) => {
//     console.log(err)
//   })
//   console.log("Pengambilan data covid 19")
  
