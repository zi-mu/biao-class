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

// let list = [1, 2, 3, 4, 5];

// function sum(arr) {
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i];
//     }
//     console.log(result);
// }
// sum(list);
// function sum(arr) {
//     let result = 0;

//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i];
//     }
//     return result;
// }
// console.log(sum(list));

// function sum(arr) {
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i];
//     }
//     return result;
// }
// console.log(sum(list));
// function sum(arr) {
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i];
//     }
//     return result;
// }
// console.log(sum(list));

// function sum(arr) {
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let it = arr[i];
//         result += it;
//     }
//     return result;
// }
// console.log(sum(list));

// function sum(arr) {
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i];
//     }
//     return result;
// }
// console.log(sum(list));

//造一个函数filterSum，可以将传入数组，且只求和内部所有的数字元素

// let list = [1, 2, 'hah', 'yo', 7, 3, 'Yoo', 7, 3];

// function filterSum(arr) {
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] != 'number')
//             continue;
//         result += arr[i];
//     }
//     return result;
// }
// console.log(filterSum(list));

// function filterSum(arr) {
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let it = arr[i];
//         if (typeof it != 'number')
//             continue;
//         result += it;
//     }
//     return result;
// }
// console.log(filterSum(list));

// function filterSum(arr) {
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let it = arr[i];
//         if (typeof it != 'number')
//             continue;
//         result += it;
//     }
//     return result;

// }
// console.log(filterSum(list));
// function filterSum(arr) {
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let it = arr[i];
//         if (typeof it != 'number')
//             continue;

//         result += it;
//     }
//     return result;
// }
// console.log(filterSum(list));

// function filterSum(arr) {
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] != 'number')
//             continue;
//         result += arr[i];
//     }
//     return result;
// }
// console.log(filterSum(list));


//造一个函数filterGlue，可以传入数组，且只连接内部所有的字符串元素

// let list = [1, 2, 'yo', 'ha'];

// function filterGlue(arr) {
//     let str = '';
//     for (let i = 0; i < arr.length; i++) {
//     let connector = ',';
//         if (typeof arr[i] != 'string')
//             continue;
//         if (i == arr.length - 1)
//             connector = '';

//         str += arr[i] + connector;
//     }
//     return str;
// }
// console.log(filterGlue(list));

// function filterGlue(arr) {
//     let str = '';
//     for (let i = 0; i < arr.length; i++) {
//         let connector = ','
//         if (typeof arr[i] != 'string')
//             continue;
//         if (i == arr.length - 1)
//             connector = '';
//         str += arr[i] + connector;
//     }
//     return str;
// }
// console.log(filterGlue(list))

// function filterGlue(arr) {
//     let str = '';
//     for (let i = 0; i < arr.length; i++) {
//         let connector = ',';
//         if (typeof arr[i] != 'string')
//             continue;
//         if (i == arr.length - 1)
//             connector = '';

//         str += arr[i] + connector;
//     }
//     return str;
// }
// console.log(filterGlue(list));

// function filterGlue(arr) {
//     let str = '';
//     for (let i = 0; i < arr.length; i++) {
//         let connector = ','
//         if (typeof arr[i] != 'string')
//             continue;
//         if (i == arr.length - 1)
//             connector = '';
//         str += arr[i] + connector;
//     }
//     console.log(str);
// }
// filterGlue(list);

// function filterGlue(arr) {
//     let str = '';

//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] != 'string')
//             continue;

//         str += arr[i];
//     }
//     return str;
// }
// console.log(filterGlue(list));

//造一个函数sumEven，求数组中偶数元素的和
// let list = [1, 2, 3, 4, 5, 6, 8];

// function sumEven(arr) {
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2)
//             continue;

//         result += arr[i];
//     }
//     return result;
// }
// console.log(sumEven(list));

// function sumEven(arr) {
//     let total = 0;

//     for (let i = 0; i < arr.length; i++) {
//         let it = arr[i];
//         if (it % 2)
//             continue;
//         total += it;
//     }
//     return total;
// }
// console.log(sumEven(list))
// function sumEven(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2)
//             continue;

//         total += arr[i];
//     }
//     return total;
// }
// console.log(sumEven(list));
// function sumEven(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2)
//             continue;
//         total += arr[i];
//     }
//     return total;
// }
// console.log(sumEven(list));

// function sumEven(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2)
//             continue;
//         total += arr[i];
//     }
//     return total;
// }
// console.log(sumEven(list));

//造一个函数filterOdd，返回新数组，且数组中只有奇数

// let list = [1, 2, 3, 4, 5, 6, 8];

// function filterOdd(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         let it = arr[i];
//         if (!(it % 2))
//             continue;
//         result.push(it);

//     }
//     return result;
// }
// console.log(filterOdd(list));
// function filterOdd(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!(arr[i] % 2))
//             continue;
//         result.push(arr[i]);
//     }
//     return result;
// }
// console.log(filterOdd(list));

// function filterOdd(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         let it = arr[i];
//         if (!(it % 2))
//             continue;
//         result.push(it);
//     }
//     return result;
// }
// console.log(filterOdd(list));

// function filterOdd(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!(arr[i] % 2))
//             continue;
//         result.push(arr[i]);
//     }
//     return result;
// }
// console.log(filterOdd(list));

// function filterOdd(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!(arr[i] % 2))
//             continue;
//         result.push(arr[i]);
//     }
//     return result;
// }
// console.log(filterOdd(list));

// 造一个函数yoMaker，生成新数组，可以指定需要生成多少个元素
// function yoMaker(num) {
//     let result = [];
//     for (let i = 0; i < num; i++) {
//         result.push('yo');
//     }
//     return result;
// }
// let number = 1;
// console.log(yoMaker(number));
// function yoMaker(num) {
//     let result = [];
//     for (let i = 0; i < num; i++) {
//         result.push('yo');
//     }
//     return result;
// }
// let number = 2;
// console.log(yoMaker(number));

// function yoMaker(number) {
//     let result = [];
//     for (let i = 0; i < number; i++) {
//         result.push('yo');
//     }
//     return result;
// }
// console.log(yoMaker(10));

// function yoMaker(num) {
//     let result = [];
//     for (let i = 0; i < num; i++) {
//         result.push('yo');
//     }
//     return result;
// }
// console.log(yoMaker(3));

// function yoMaker(num) {
//     let result = [];
//     for (let i = 0; i < num; i++) {
//         result.push('yo');
//     }
//     console.log(result);
// }
// yoMaker(3);

// function arrayMaker(num) {
//     let result = [];
//     for (let i = 0; i < num; i++) {
//         result.push(i + 1);
//     }
//     console.log(result);
// }
// arrayMaker(3);

// function arrayMaker(num) {
//     let result = [];
//     for (let i = 0; i < num; i++) {
//         result.push(i + 1);
//     }
//     return result;
// }
// console.log(arrayMaker(34));

// function arrayMaker(num) {
//     let result = [];
//     for (let i = 0; i < num; i++) {
//         result.push(i + 1);
//     }
//     return result;
// }
// console.log(arrayMaker(10));

// function arrayMaker(num) {
//     let result = [];
//     for (let i = 0; i < num; i++) {
//         result.push(i + 1);
//     }
//     console.log(result);
// }
// arrayMaker(5);

//造一个函数evenMaker，生成新数组，数组中的元素均为偶数

// function evenMaker(max) {
//     let result = [];
//     for (let i = 0; i < max; i++) {

//         let even = i * 2;
//         if (even > max)
//             break;
//         result.push(even);
//     }
//     return result;
// }
// console.log(evenMaker(4));

// function evenMaker(max) {
//     let result = [];
//     for (let i = 0; i < max; i++) {
//         let even = i * 2;
//         if (even > max)
//             break;
//         result.push(even);
//     }
//     console.log(result);
// }
// evenMaker(4);

// function evenMaker(max) {
//     let result = [];
//     for (let i = 0; i < max; i++) {
//         let even = i * 2;
//         if (even > max)
//             break;
//         result.push(even);
//     }
//     return result;
// }
// console.log(evenMaker(5));
// function evenMaker(max) {
//     let result = [];
//     for (let i = 0; i < max; i++) {
//         let even = i * 2;
//         if (even > max)
//             break;
//         result.push(even);
//     }
//     return result;
// }
// console.log(evenMaker(8))

// function evenMaker(max) {
//     let result = [];
//     for (let i = 0; i < max; i++) {
//         let even = i * 2;
//         if (even > max)
//             break;

//         result.push(even);
//     }
//     return result;

// }
// console.log(evenMaker(19));


// 造一个函数search，输入查找范围和关键词返回搜索结果
// let list = [
//     'abb',
//     'bcc',
//     'cdd',
//     'daa',
// ];

// function search(array, str) {
//     let arr = [];
//     for (let i = 0; i < array.length; i++) {
//         let it = array[i];
//         if (it.includes(str))
//             arr.push(array[i]);
//     }
//     return arr;
// }
// console.log(search(list1, 'a'));

// function search(arr, keyword) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].includes(keyword))
//             result.push(arr[i]);
//     }
//     return result;
// }
// console.log(search(list, 'ab'));
// function search(arr, keyword) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         let it = arr[i];
//         if (!it.includes(keyword))
//             continue;
//         result.push(it);
//     }
//     return result;
// }
// console.log(search(list, 'b'));

// function search(arr, keyword) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!arr[i].includes(keyword))
//             continue;
//         result.push(arr[i]);
//     }
//     return result;
// }
// console.log(search(list, 'a'));

// function search(arr, keyword) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].includes(keyword))
//             result.push(arr[i]);
//     }
//     return result;
// }
// console.log(search(list, 'bc'));
// let list = ['a1', 'a2', ['b1', 'b2', ['c1', 'c2', 'c3'], 'b3'], 'a3'];

// function lister(arr, level = 0, filter = {}) {
//     for (let i = 0; i < arr.length; i++) {
//         let it = arr[i];

//         if (typeof it === 'string') {
//             if (typeof filter[level] !== 'object') {
//                 filter[level] = [];
//             }
//             filter[level].push(it);
//         } else {

//             lister(it, level + 1, filter)
//         }
//     }
//     return filter;
// }

// function printer(obj) {
//     for (let key in obj) {
//         let arr = obj[key];
//         let str = '第' + (+key + 1) + '级: ';
//         for (let i = 0; i < arr.length; i++) {

//             str += arr[i] + ' ';
//         }
//         console.log(str);
//     }
// }
// let filtered = lister(list);
// // console.log(a);
// printer(filtered);