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

//4.应用
// function shopping(setColor) {
//     console.log('1.buy vegetables');
//     console.log('2.buy riyongpin');

//     // 3.买秋裤,问娃想穿啥颜色
//     let color = setToRed();
//     console.log('娃想穿' + color + '色的');

//     console.log('4.jiezhang');

// }

// function setToRed() {
//     return 'Red';
// }
// shopping(setToRed);

//5

// function cooking(吃什么, 几个人, 有忌口吗) {

//     console.log('1.买菜: ' + '买跟' + 吃什么() + '相关的食材');
//     console.log('2.蒸饭 ' + '蒸' + 几个人() + '的饭');
//     console.log('4.炒菜' + '客人' + 有忌口吗());
// }

// function 红烧肉() {
//     return '红烧肉';
// }

// function 数人() {
//     let myguest = 2;
//     let taguest = 3
//     return myguest + taguest;
// }

// function 询问忌口() {
//     let myguest = '不吃香菜';
//     let taguest = '不吃辣椒';
//     return [myguest, taguest]
// }
// cooking(红烧肉, 数人, 询问忌口);

// function shopping(setcolor) {
//     console.log('1.mai cai');
//     console.log('2.mai yongpin');

//     console.log('3.mai qiuke ,wen xia wa xiang mai shenmeyangsede');
//     let color = setcolor();
//     console.log('waxiangmai    ' + color + '   sede');

//     console.log('4.jiezhang');
// }
// shopping(function () {
//     return 'red';
// })


//5.
// function cooking(what, which, isorno) {
//     console.log('买菜,买跟' + what() + '相关的菜');
//     console.log('蒸 ' + which() + ' 的饭');
//     console.log('客人' + isorno());
// }
// cooking(function () {
//     return '红烧肉';
// }, function () {
//     let myguest = 5;
//     let fr = 6;
//     return myguest + fr;
// }, function () {
//     let myguest = '不吃辣椒';
//     let fr = '不吃香菜';
//     return [myguest, fr];
// })