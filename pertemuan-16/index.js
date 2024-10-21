//Asynchronous JS 

//Synchronous adalah kebalikan dari asynchronous disebut juga dengan single thread ->
// satu proses tanpa antrian -> disebut juga BLOCKing
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses yang memakan waktu lama");
// console.log("Proses 4");

//Asynchronous -> multi thread
//1.parallel -> start sama sama saat execution
// setTimeout (() => {
//     console.log("Proses 1");
// }, 3000);
// console.log("Proses 2");
// setTimeout (() => {
//     console.log("Proses 3");
// }, 3000);
// console.log("Proses 4");

//2.concurent -> jalan satu per satu dan saling menunggu 
// setTimeout (() => {
//     console.log("Proses 1");
//     setTimeout (() => {
//         console.log("Proses 2");
//         setTimeout (() => {
//             console.log("Proses 3");
//             setTimeout (() => {
//                 console.log("Proses 4");
//             }, 3000);
//         }, 3000);
//     }, 3000);
// }, 3000);
//pakai callback, masih model IS5

//Promise -> IS6
let condition = false;
let newPromise = new Promise((resolve, reject) => {
    if (condition) {
        resolve("Berhasil");
    } else {
        reject ("Gagal");
    }
});

//Pakai promise
//1. then-catch
// newPromise
//     .then((result) => result)
//     .then((result2) => console.log(result2))
//     .catch((error) => console.log(error));

//2. Async - await
//Harus dibuat dalam fungsi

const consumePromise = async () => {
    try {
        let result = await newPromise;
        console.log(result);
    } catch (error) {
        console.log(error); 
    }

    
    let result = newPromise; 
    console.log(result); 
};

consumePromise();


//pakai promise yang sudah ada
//1. Fetch
fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => console.log(json))

(async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    let json = await respons .json();
    json.forEach (({name}) => console.log(name));
})();

//2. Axios
axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then