//Array & Object
//1.Array
//Deklarasi variable array
//Cara 1. Array Literal
// let numbers = [1, 2, 3, 4, 5,];
// console.log(numbers);
// //Cara 2. Kata Kunci new
// let numbers2 = new Array(6, 7, 8, 9, 10);
// console.log(numbers2);

//Tipe data dalam Array
// let numbers = [1, 2, 3, 4, 5]; //Numbers
// let students = ["John", "Jane", "Bob"]; //String
// let john = ["John", 30, true, [80, 90, 100]] //Campuran
// console.log(john);

// //Array Length
// console.log(numbers.length);
// console.log(students.length);
// console.log(john.length);

// //Mengalses elemen dalam array
// //Melalui index. Index selalu dimulai dari 0
// console.log(numbers[2]); //3
// console.log(students[1]); //Jane
// console.log(john[3]); //80, 90, 100
// console.log(john[3][1]); //90

//Mengakses elemen terakhir dalam array
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers.length); //10
// console.log(numbers[numbers.length - 1]);

// //Array Method
// let array = [1, 2, 3, "hallo", false, true];
// console.log(array);
// //1. to string()
// console.log(array.toString());
// //2. join()
// console.log(array.join(" "));
// console.log(array.join("-"));
// //3. Pop()
// array.pop();
// console.log(array);
// //4. Push()
// array.push("selamat pagi");
// console.log(array);
// //5. Shift()
// array.shift();
// console.log(array);
// //6. Unshift()
// array.unshift("selamat Pagi");
// //7. splice()
// array.splice(3, 0, 4, 5);
// console.log(array);
// //8. concat / concatination()
// let buah = ["Pisang", "Apel", "Jeruk"];
// let sayur = ["Tomat", "Bayam", "Wortel"];
// let biji = ["Kedelai", "Kacang tanah", "Kacang Polong"];

// let makanan = buah.concat(sayur, biji);
// console.log(makanan);
// //9. Slice()
// let sayuran = makanan.slice(3, 6);
// console.log(sayuran);


