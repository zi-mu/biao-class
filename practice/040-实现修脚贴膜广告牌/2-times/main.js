//字框闪烁
// ;
// (function () {
//     'use strict';

//     const board = document.querySelector('.board');
//     const inner = board.querySelector('.inner');

//     setInterval(() => {

//         let visible = getComputedStyle(inner).opacity === '1'
//         if (visible) {
//             inner.style.opacity = 0;
//             board.style.borderColor = 'transparent';
//         } else {
//             inner.style.opacity = 1;
//             board.style.borderColor = 'inherit'
//         }

//     }, 800)
// })();

// 在广告牌后面添加计数器
// ;
// (function () {
//     'use strict';

//     const board = document.querySelector('.board');
//     const inner = board.querySelector('.inner');
//     const counter = inner.querySelector('.counter');

//     let count = 0;

//     setInterval(() => {
//         let visible = getComputedStyle(inner).opacity === '1';
//         if (visible) {
//             inner.style.opacity = 0;
//             board.style.borderColor = 'transparent';
//         } else {
//             inner.style.opacity = 1;
//             board.style.borderColor = 'inherit';
//             count++;
//         }
//         counter.innerText = count + '人用了都说好';
//     }, 800)
// })();

//越闪越大，最大3级，然后重头循环
// ;
// (function () {
//     'use strict';

//     const board = document.querySelector('.board');
//     const inner = board.querySelector('.inner');

//     let size = 1;

//     setInterval(() => {
//         let visible = getComputedStyle(inner).opacity === '1';
//         if (visible) {
//             inner.style.opacity = 0;
//             board.style.borderColor = 'transparent';
//         } else {
//             inner.style.opacity = 1;
//             board.style.borderColor = 'inherit';
//             size < 3 ? size++ : size = 1;
//             inner.style.fontSize = 2 * size + 'rem';
//         }
//     }, 800)
// })();
//
//“修脚”和“贴膜”交替显示
// ;
// (function () {
//     'use strict';

//     const board = document.querySelector('.board');
//   
//     let pedicure = true;
//     setInterval(function () {
//         let text;
//         let current = 0;
//         let visible = getComputedStyle(inner).opacity === '1';
//         if (visible) {
//             inner.style.opacity = 0;
//             board.style.borderColor = 'transparent';
//         } else {
//             inner.style.opacity = 1;
//             board.style.borderColor = 'inherit';
//             pedicure ? text = '修脚贴膜' : text = '按摩洗澡';
//             inner.innerText = text;
//             pedicure = !pedicure;
//         }

//     }, 500)
// })();

// ;
// (function () {
//     'use strict';

//     let board = document.querySelector('.board');
//     let inner = board.querySelector('.inner');

//     let pedicure = true;

//     setInterval(() => {
//         let text;
//         let visible = getComputedStyle(inner).opacity === '1';
//         if (visible) {
//             inner.style.opacity = 0;
//             board.style.borderColor = 'transparent';
//         } else {
//             inner.style.opacity = 1;
//             board.style.borderColor = 'inherit';
//             pedicure ? text = '洗澡按摩' : text = '修脚贴膜';
//             inner.innerText = text;
//             pedicure = !pedicure;
//         }
//     }, 800);
// })();

// ;
// (function () {
//     'use strict'

//     const board = document.querySelector('.board');
//     const inner = board.querySelector('.inner');

//     let pedicure = true;
//     setInterval(() => {
//         let text;
//         let visible = getComputedStyle(inner).opacity === '1';
//         if (visible) {
//             inner.style.opacity = 0;
//             board.style.borderColor = 'transparent';
//         } else {
//             inner.style.opacity = 1;
//             board.style.borderColor = 'inherit';
//             pedicure ? text = '修脚贴膜' : text = '洗澡按摩';
//             inner.innerText = text;
//             pedicure = !pedicure;
//         }
//     }, 800);
// })();

// ;
// (function () {
//     'use strict';

//     const board = document.querySelector('.board');
//     const inner = board.querySelector('.inner');

//     let str = '洗脚按摩'

//     setInterval(() => {

//         let visible = getComputedStyle(inner).opacity === '1';
//         if (visible) {
//             inner.style.opacity = 0;
//             board.style.borderColor = 'transpanret';
//         } else {
//             inner.style.opacity = 1;
//             board.style.borderColor = 'inherit';
//             // if (str == '洗脚按摩') {
//             //     str = '手机贴膜';
//             // } else {
//             //     str = '洗脚按摩';
//             // }

//             str == '洗脚按摩' ? str = '手机贴膜' : str = '洗脚按摩';

//             inner.innerText = str;

//         }
//     }, 600)
// })();

// ;
// (function () {
//     'use strict';
//     const board = document.querySelector('.board');
//     const inner = board.querySelector('.inner');

//     let pedicure = true;
//     setInterval(() => {
//         let text;
//         let visible = getComputedStyle(inner).opacity == '1';
//         if (visible) {
//             inner.style.opacity = 0;
//             board.style.borderColor = 'transparent';
//         } else {
//             inner.style.opacity = 1;
//             board.style.borderColor = 'inherit';
//             pedicure ? text = '修脚贴膜' : text = '洗澡按摩';
//             inner.innerText = text;
//             pedicure = !pedicure;
//         }
//     }, 800);
// })();

// ;
// (function () {
//     'use strict';

//     const board = document.querySelector('.board');
//     const inner = board.querySelector('.inner');
//     let list = ['擀面皮', '上市申报', '贴膜'];
//     let current = 0;

//     setInterval(() => {
//         let visible = getComputedStyle(inner).opacity === '1';
//         if (visible) {
//             inner.style.opacity = 0;
//             board.style.borderColor = 'transparent';
//         } else {
//             inner.style.opacity = 1;
//             board.style.borderColor = 'inherit';
//             current++;
//             // current < list.length ? current : current = 0;
//             if (current >= list.length) {
//                 current = 0;
//             }

//             inner.innerText = list[current];
//         }
//     }, 500)
// })();

// ;
// (function () {
//     'use strict';

//     const board = document.querySelector('.board');
//     const inner = board.querySelector('.inner');

//     let list = ['Facebook', 'google', 'apple', 'alibaba', 'amazon'];
//     let current = 0;
//     setInterval(() => {
//         let visible = getComputedStyle(inner).opacity == '1';
//         if (visible) {
//             inner.style.opacity = 0;
//             board.style.borderColor = 'transparent';
//         } else {
//             inner.style.opacity = 1;
//             board.style.borderColor = 'inherit';
//             current++;
//             if (current >= list.length)
//                 current = 0;
//             inner.innerText = list[current];
//         }
//     }, 800);
// })();