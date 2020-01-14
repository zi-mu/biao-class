//1.
// function a(arg) {
//     arg();
// }

// function b() {
//     console.log('i am b.');
// }

// a(b);

// function a(arr,arg){
//     arg();
// }
// function b (){
//     console.log('i am b');
// }
// a(b);


//2.
// function iterator(arr, fn) {
//     for (let i = 0; i < arr.length; i++) {
//         fn(arr[i]);
//     }
// }

// iterator([12, 3, 4], function (it) {
//     console.log(it);
// })
// function iterator(arr, fn) {
//     for (let i = 0; i < arr.length; i++) {
//         fn(arr[i]);
//     }
// }

// iterator([1, 2, 3, 4, 5], function (it) {
//     console.log(it);
// })
// function iterator(arr, fn) {
//     for (let i = 0; i < arr.length; i++) {
//         fn(arr[i]);
//     }
// }

// iterator([1, 2, 3, 4, 4], function (it) {
//     console.log(it)
// })
// function iterator(arr, fn) {
//     for (let i = 0; i < arr.length; i++) {
//         fn(arr[i]);
//     }
// }
// iterator([1, 2, 3, 4], function (it) {
//     console.log(it);
// })

//3.原生应用 ,数组
// let arr = ['a', 'b', 'c'];
// arr.forEach(function (it) {
//     console.log(it);
// })
// arr.forEach(function (it) {
//     console.log(it);
// // })
// arr.forEach(function (it) {
//     console.log(it);
// })