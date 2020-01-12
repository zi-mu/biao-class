// let list2 = [
//     'a',
//     'b',
//     'c',
//     'd',
// ];

// function breaker(badass, list) {
//     for (let i = 0; i < list.length; i++) {
//         if (list[i] === badass)
//             break;
//         console.log(list[i]);
//     }
// }

// breaker('c', list2);

// let list2 = [
//     'a',
//     'b',
//     'c',
//     'd',
// ];
// let list1 = [
//     'A',
//     'B',
//     'C',
//     'D',
// ];
// let arr = [];

// function selector(value, list) {
//     for (let i = 0; i < list.length; i++) {
//         let it = list[i];
//         if (it === value)
//             break;

//         // console.log(it);
//         arr.push(it);
//     }
//     return arr;
// }
// let it = selector('C', list1);
// console.log(it);


// let list = [{
//         name: '王花花',
//         salary: 100,
//     },
//     {
//         name: '李拴蛋',
//         salary: 200,
//     },
//     {
//         name: '牛备备',
//         salary: 300,
//     },
// ];

// let arr = [];

// function getRich(bundary) {
//     for (let i = 0; i < list.length; i++) {
//         let it = list[i];
//         if (it.salary <= bundary)
//             continue;

//         arr.push(it);
//     }

//     return arr;
// }
// console.log(getRich(200));

//1.两数之和;
// function add(a, b) {
//     return a + b;
// }
// console.log(add(1, 3));
// function add(a,b){
//     return a+b;
// }
// function add(a,b){
//     return a+b;
// }
// function add(a,b){
//     return a+b;
// }
// function add(item1,item2){
//     return item1+item2;
// }
// function add(c,d){
//     return c+d;
// }

//造一个函数printer，分别打印数组中的元素
// let lister = [1, 2, 3, 4, 5, 6];
// let lister2 = [1, 'z', 3, 'c', 5]

// function printer(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
// printer(lister)
// printer(lister2);

// function printer(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
// printer(lister);
// console.log('\n')
// printer(lister2);
// let result = [];

// function printer(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//         result.push(arr[i]);
//     }
//     console.log(result);
// }
// printer(lister2);

// function printer(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
// printer(lister);
// function printer(arr){
//     for(let i = 0; i<arr.length;i++){
//         console.log(arr[i]);
//     }
// }

// function printer (arr){
//     for(let i =0; i<arr.length;i++){
//         let it = arr[i];
//         console.log(it);
//     }
// }

// printer(arr, breaker) 会分别打印数组arr中的每一项，且只打印breaker以前的元素

// let list1 = [
//     '王花花',
//     '刘备备',
//     '李拴蛋',
//     '赵克爽',

// ];

// function printer(arr, breaker) {
//     for (let i = 0; i < arr.length; i++) {
//         let it = arr[i];
//         if (it === breaker)
//             break;

//         console.log(it);
//     }
// }
// printer(list1, '李拴蛋');

// function printer(arr, breaker) {
//     for (let i = 0; i < arr.length; i++) {
//         let it = arr[i];
//         if (it === breaker)
//             break;
//         console.log(it);
//     }
// }
// printer(list1, '赵克爽');
// function printer(arr, user) {
//     for (let i = 0; i < arr.length; i++) {
//         let it = arr[i];
//         if (it === user)
//             break;

//         console.log(it);
//     }
// }
// printer(list1, '赵克爽');

// function printer(arr, person) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === person)
//             break;
//         console.log(arr[i]);
//     }
// }
// printer(list1, '刘备备')

// function printer(arr, person) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === person)
//             break;
//         console.log(arr[i]);
//     }
// }
// printer(list1, '赵克爽')
// printer(list1, '赵克爽')

// function printer(arr, user) {
//     for (let i = 0; i < arr.length; i++) {
//         let it = arr[i];
//         if (it === user)
//             break;
//         console.log(it);
//     }
// }


// let list = [
//     '王花花',
//     '刘备备',
//     '李拴蛋',
//     '赵克爽',

// ];
// printer(list, '刘备备')

// function printer(arr, jumper) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === jumper)
//             continue;
//         console.log(arr[i]);
//     }
// }

// function printer(arr, jumper) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === jumper)
//             continue;

//         console.log(arr[i]);
//     }
// }
// printer(list, '李拴蛋');

// function printer(arr, jumper) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === jumper)
//             continue;

//         console.log(arr[i]);
//     }
// }
// printer(list, '李拴蛋');

// function printer(arr, jumper) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === jumper)
//             continue;

//         console.log(arr[i]);
//     }
// }
// printer(list, '王花花');

// function printer(arr, jumper) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === jumper)
//             continue;

//         console.log(arr[i]);
//     }
// }
// printer(list, '李拴蛋');

// function printer(arr, jumper) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === jumper)
//             continue;
//         console.log(arr[i]);
//     }
// }
// printer(list, '王花花');

// function printer(arr, jumper) {
//     for (let i = 0; i < arr.length; i++) {
//         let it = arr[i];
//         if (it === jumper)
//             continue;
//         console.log(it);
//     }
// }
// printer(list, '刘备备');

// let list = [
//     '王花花',
//     '李拴蛋',
//     '赵可爽',
// ];
// let str = '';

// function glue(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         str += arr[i];
//     }
//     console.log(str);
// }
// glue(list);


// function glue(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         str = str + arr[i];
//     }
//     console.log(str);
// }
// glue(list);
// glue(list);

// function glue(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         str += arr[i];
//     }
//     console.log(str);
// }

// function glue(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         str = str + arr[i];
//     }
//     return str;
// }
// console.log(glue(list));

// function glue(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         str += arr[i];
//     }
//     console.log(str);
// }
// glue(list);

// function glue(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let it = arr[i];
//         str += it + ' ';
//     }
//     return str;
// }
// console.log(glue(list));
// function glue(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let it = arr[i] + ' ';
//         str += it;
//     }
//     return str;
// }
// console.log(glue(list));
// function glue(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let connector = ',';
//         let it = arr[i];

//         if (i === arr.length - 1)
//             connector = '';

//         str += it + connector;
//     }
//     return str;
// }
// console.log(glue(list));

// function glue(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let item = arr[i];
//         let connector = ',';
//         if (i === arr.length - 1)
//             connector = '';

//         str += item + connector;
//     }
//     return str;
// }
// console.log(glue(list));

// function glue(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let it = arr[i];

//         let connector = ',';
//         if (i === arr.length - 1)
//             connector = '';

//         str += it + connector;
//     }
//     return str;
// }
// console.log(glue(list));


// function glue(arr, connector) {
//     for (let i = 0; i < arr.length; i++) {
//         let it = arr[i];
//         if (i === arr.length - 1)
//             connector = '';
//         str += it + connector;
//     }
//     console.log(str);
// }
// glue(list, ',');

// let list = [
//     '王花花',
//     '李拴蛋',
//     '赵可爽',
// ];

// function glue(arr, connector) {
//     let str = '';
//     let length = arr.length;
//     for (let i = 0; i < length; i++) {
//         if (i === length - 1)
//             connector = '';

//         str += arr[i] + connector;
//     }
//     return str;
// }
// console.log(glue(list, ','));

// function glue(arr, connector) {
//     let str = '';
//     for (let i = 0; i < arr.length; i++) {
//         if (i === arr.length - 1)
//             connector = '';
//         str += arr[i] + connector
//     }
//     console.log(str);
// }
// glue(list, ',');

// function glue(arr, connector) {
//     let str = '';
//     for (let i = 0; i < arr.length; i++) {
//         if (i === arr.length - 1)
//             connector = '';
//         str += arr[i] + connector;
//     }
//     console.log(str);
// }
// glue(list, ',')

// function glue(arr, connector) {
//     let str = '';
//     for (let i = 0; i < arr.length; i++) {
//         if (i === arr.length - 1)
//             connector = '';
//         str += arr[i] + connector;
//     }
//     console.log(str);
// }
// glue(list, ',');

// function glue(arr, connector) {
//     let str = '';
//     for (let i = 0; i < arr.length; i++) {
//         if (i === arr.length - 1)
//             connector = '';
//         str += arr[i] + connector;
//     }
//     console.log(str);
// }
// glue(list, '~')

//造一个函数sum，可以将传入的数组求和

let list = [1, 2, 3, 4, 5];

// function sum(arr) {
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i];
//     }
//     console.log(result);
// }
// sum(list);
function sum(arr) {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}
console.log(sum(list));


// let list = ['a1', 'a2', ['b1', 'b2', ['c1', 'c2', 'c3'], 'b3'], 'a3'];