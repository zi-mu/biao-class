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
//     let fr = '不吃香菜';\
//     return [myguest, fr];
// })

// document.addEventListener('click', () => {
//     console.log('yo');
// })
// setInterval(() => {
//     console.log('yo')
// }, 1000);
// setInterval(() => {
//     console.log('hah');
// }, 1000);
// setTimeout(() => {
//     console.log('wowo.....')
// }, 5000);


// 造一个基础函数eachNumber()，可以传入数字组成的数组和一个回调函数
// 基于此函数造出：

// evenNumber()，evenNumber([1, 2, 3, 4]) // [2, 4]
// oddNumber()，oddNumber([1, 2, 3, 4]) // [1, 3]
// sum()，sum([1, 2]) // 3
// max()，max([1, 2, 3, 4]) // 4
// min()，min([1, 2, 3, 4]) // 1


// function eachNumber(arr, fn) {
//     for (let i = 0; i < arr.length; i++) {
//         fn(arr[i]);
//     }
// }

// function evenNumber(list) {
//     let result = [];
//     eachNumber(list, function (item) {
//         if (item % 2)
//             return;
//         result.push(item);
//     })
//     return result;
// }
// console.log(evenNumber([1, 2, 4, 6, 4, 7, 8, 9, 10]));

// function eachNumber(arr, fn) {
//     for (let i = 0; i < arr.length; i++) {
//         fn(arr[i]);
//     }
// }

// function evenNumber(arr) {
//     let result = [];
//     eachNumber(arr, function (it) {
//         if (it % 2)
//             return;
//         result.push(it);
//     })
//     return result;
// }
// console.log(evenNumber([1, 2, 3, 4, 5, 6, 7, 8]))

// function eachNumber(arr, fn) {
//     for (let i = 0; i < arr.length; i++) {
//         let it = arr[i];
//         fn(it);
//     }
// }

// function evenNumber(arr) {
//     let result = [];
//     eachNumber(arr, function (it) {
//         if (it % 2)
//             return;
//         result.push(it);
//     })
//     console.log(result);
// }
// evenNumber([2, 3, 4]);

// function eachNumber(arr, fn) {
//     for (let i = 0; i < arr.length; i++) {
//         fn(arr[i]);
//     }
// }

// function evenNumber(arr) {
//     let result = [];
//     eachNumber(arr, function (it) {
//         if (it % 2)
//             return;
//         result.push(it);
//     })
//     console.log(result);
// }
// evenNumber([22, 3, 45, 3, 67, 8]);

// function eachNumber(arr, fn) {
//     for (let i = 0; i < arr.length; i++) {
//         fn(arr[i]);
//     }
// }

// function evenNumber(arr) {
//     let result = [];
//     eachNumber(arr, function (it) {
//         if (it % 2)
//             return;
//         result.push(it);
//     })
//     return result;
// }
// console.log(evenNumber([2, 3, 4, 5, 6, ]))

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// function eachNumber(arr, fn) {
//     for (let i = 0; i < arr.length; i++) {
//         fn(arr[i]);
//     }
// }

// function oddNumber(arr) {
//     let result = [];
//     eachNumber(arr, function (it) {
//         if (!(it % 2))
//             return;
//         result.push(it);

//     })
//     return result;
// }
// console.log(oddNumber([1, 2, 3, 4, 5]));

// function eachNumber(arr, fn) {
//     for (let i = 0; i < arr.length; i++) {
//         fn(arr[i]);
//     }
// }

// function oddNumber(arr) {
//     let list = [];
//     eachNumber(arr, function (it) {
//         if (it % 2)
//             list.push(it);
//     })
//     console.log(list);
// }

// oddNumber([2, 1, 2, 43, , 4, 3])

// function eachNumber(arr, fn) {
//     for (let i = 0; i < arr.length; i++) {
//         fn(arr[i]);
//     }
// }

// function oddNumber(list) {
//     let result = [];
//     eachNumber(list, function (item) {
//         if (!(item % 2))
//             return
//         result.push(item);

//     })
//     console.log(result);
// }
// oddNumber([3, 3, 3, 2, 23, 34, ]);

// function eachNumber(arr, fn) {
//     for (let i = 0; i < arr.length; i++) {
//         fn(arr[i]);
//     }
// }

// function oddNumber(arr) {
//     let result = [];
//     eachNumber(arr, function (it) {
//         if (!(it % 2))
//             return;
//         result.push(it);
//     })
//     console.log(result);
// }
// oddNumber([3, 4, 5, 7])

// function eachNumber(arr, fn) {
//     for (let i = 0; i < arr.length; i++) {
//         fn(arr[i]);
//     }
// }

// function oddNumber(arr) {
//     let result = [];
//     eachNumber(arr, function (it) {
//         if (it % 2)
//             result.push(it);
//     })
//     console.log(result);
// }
// oddNumber([3, 6, 9, 3, 5, 4])
//

//===============================================
// function eachNumber(arr, fn) {
//     for (let i = 0; i < arr.length; i++) {
//         fn(arr[i]);
//     }
// }

// function sum(arr) {
//     let sum = 0;
//     eachNumber(arr, function (it) {
//         sum += it;
//     })
//     console.log(sum)
// }
// sum([1, 2, 3, 4, 5])

// function eachNumber(arr, fn) {
//     for (let i = 0; i < arr.length; i++) {
//         fn(arr[i]);
//     }
// }

// function sum(arr) {
//     let sum = 0;
//     eachNumber(arr, function (it) {
//         sum += it;
//     })
//     console.log(sum);
// }
// sum([3, 4, 5, 6]);

// function eachNumber(arr, fn) {
//     for (let i = 0; i < arr.length; i++) {
//         fn(arr[i]);
//     }
// }

// function sum(arr) {
//     let sum = 0;
//     eachNumber(arr, function (it) {
//         sum += it;
//     })
//     return sum;
// }
// console.log(sum([2, 3, 5]))

// function eachNumber(arr, fn) {
//     for (let i = 0; i < arr.length; i++) {
//         fn(arr[i]);
//     }
// }

// function sum(arr) {
//     let sum = 0;
//     eachNumber(arr, it => sum += it);
//     return sum;
// }
// console.log(sum([3, 4, 5]))

// function eachNumber(arr, fn) {
//     for (let i = 0; i < arr.length; i++) {
//         fn(arr[i]);
//     }
// }

// function sum(arr) {
//     let sum = 0;
//     eachNumber(arr, it => sum += it);
//     return sum;
// }
// console.log(sum([1, 2, 3, 4]))

//================================ max()

// function eachNumber(arr, fn) {
//     for (let i = 0; i < arr.length; i++) {
//         fn(arr[i])
//     }
// }

// function max(arr) {
//     let num;
//     eachNumber(arr, function (it) {
//         if (num === undefined) {
//             num = it;
//             return;
//         }
//         if (it > num)
//             num = it;

//     })
//     return num;
// }
// console.log(max([3, 4, -2]));

// function eachNumber(arr, fn) {
//     for (let i = 0; i < arr.length; i++) {
//         fn(arr[i]);
//     }
// }

// function max(arr) {
//     let num;
//     eachNumber(arr, it => {
//         if (num === undefined) {
//             num = it;
//             return;
//         }
//         if (it > num)
//             num = it;

//     })
//     return num;
// }
// console.log(max([2, 4, 3, 5, 6]));

// function eachNumber(arr, fn) {
//     for (let i = 0; i < arr.length; i++) {
//         fn(arr[i]);
//     }
// }

// function max(arr) {
//     let num;
//     eachNumber(arr, it => {
//         if (num === undefined) {
//             num = it;
//             return;
//         }
//         if (it > num)
//             num = it;
//     })
//     return num;
// }
// console.log(max([2, 3, 1, 3]));

// function eachNumber(arr, fn) {
//     for (let i = 0; i < arr.length; i++) {
//         fn(arr[i]);
//     }
// }

// function max(arr) {
//     let num;
//     eachNumber(arr, it => {
//         if (num === undefined) {
//             num = it;
//             return;
//         }
//         if (it > num)
//             num = it;
//     });
//     return num;
// }
// console.log(max([1, 2, 3, 4]))

//======================================
// function eachNumber(arr, fn) {
//     for (let i = 0; i < arr.length; i++) {
//         fn(arr[i]);
//     }
// }

// function min(arr) {
//     let num;
//     eachNumber(arr, it => {
//         if (num === undefined) {
//             num = it;
//             return;
//         }
//         if (it < num)
//             num = it;
//     });
//     return num;
// }
// console.log(min([1, 2, 4, -1]))

function eachNumber(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        fn(arr[i]);
    }
}

// function min(arr) {
//     let num;
//     eachNumber(arr, it => {
//         if (num === undefined) {
//             num = it;
//             return;
//         }
//         if (it < num)
//             num = it;
//     });
//     console.log(num);
// }

// min([1, 2, 3, 4, 5])
// function min(arr) {
//     let num;
//     eachNumber(arr, it => {
//         if (num === undefined) {
//             num = it;
//             return;
//         }
//         if (it < num)
//             num = it;
//     });
//     console.log(num);
// }
// min([1, 2, 3, 4])

// function min(arr) {
//     let num;
//     eachNumber(arr, it => {

//         if (num === undefined) {
//             num = it;
//             return;
//         }
//         if (it < num)
//             num = it;
//     });

//     console.log(num);
// }
// min([1, 2, 3])

// function min(arr) {
//     let num;
//     eachNumber(arr, it => {
//         if (num === undefined) {
//             num = it;
//             return;
//         }
//         if (it < num)
//             num = it;
//     });
//     console.log(num)
// }
// min([0, -1, 2, 3])

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+++++++++++++++++++++
//造一个基础函数eachStr()，可以传入字符串组成的数组和一个回调函数

function eachStr(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        fn(arr[i]);
    }
}

// function getYo(arr) {
//     let result = [];
//     eachStr(arr, it => {
//         if (!it.includes('yo'))
//             return;
//         result.push(it);
//     })
//     console.log(result);
// }
// getYo(['a', 'yo', 'yoo'])

// function getYo(arr) {
//     let result = [];
//     eachStr(arr, it => {
//         if (it.includes('yo'))
//             result.push(it);
//     });
//     console.log(result);
// }
// getYo(['aa,', 'bb', 'yo', 'yoo'])

// function getYo(arr) {
//     let result = [];
//     eachStr(arr, it => {
//         if (it.includes('yo'))
//             result.push(it);
//     });
//     console.log(result);
// }
// getYo(['a', 'yo', 'haha']);
// function getYo(arr) {
//     let result = [];
//     eachStr(arr, (it) => {
//         if (it.includes('yo'))
//             result.push(it);
//     });
//     return result;
// }
// console.log(getYo(['a,', 'b', 'yo']))
//++++++++++++++++++++++++++++++++++++++++

// function shortStr(arr) {
//     let result = [];
//     eachStr(arr, it => {
//         if (it.length === 1)
//             result.push(it);
//     });
//     console.log(result);
// }
// shortStr(['a', 'foo', 'b', 'bar'])