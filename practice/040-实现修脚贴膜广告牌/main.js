// ;
// (function () {
//     'use strict';
//     /**
//      * 只有字体闪现
//      */
//     // setInterval(() => {
//     //     const board = document.querySelector('.board');
//     //     const inner = board.querySelector('.inner');

//     //     let visible = inner.style.opacity === '1';
//     //     visible ? inner.style.opacity = 0 : inner.style.opacity = 1;
//     // }, 800);
//     /**
//      * 边框和字体闪现
//      */
//     // setInterval(() => {
//     //     const board = document.querySelector('.board');
//     //     const inner = board.querySelector('.inner');
//     //     let visible = getComputedStyle(inner).opacity === '1';

//     //     if (visible) {
//     //         inner.style.opacity = 0;
//     //         board.style.borderColor = 'transparent';
//     //     } else {
//     //         inner.style.opacity = 1;
//     //         board.style.borderColor = 'inherit';
//     //     }
//     // }, 800);
//     // setInterval(() => {
//     //     const board = document.querySelector('.board');
//     //     const inner = board.querySelector('.inner');
//     //     let visible = inner.style.opacity == '1';
//     //     if (visible) {

//     //         inner.style.opacity = 0;
//     //         board.style.borderColor = 'transparent';
//     //     } else {

//     //         inner.style.opacity = 1;
//     //         board.style.borderColor = 'inherit';
//     //     }
//     // }, 800);

//     // setInterval(() => {
//     //     const board = document.querySelector('.board');
//     //     const inner = board.querySelector('.inner');
//     //     let visible = getComputedStyle(inner).opacity === '1';
//     //     if (visible) {
//     //         inner.style.opacity = 0;
//     //         board.style.borderColor = 'transparent';
//     //     } else {
//     //         inner.style.opacity = 1;
//     //         board.style.borderColor = 'inherit';
//     //     }

//     // }, 800);
//     // setInterval(() => {
//     //     const board = document.querySelector('.board');
//     //     const inner = board.querySelector('.inner');
//     //     let visible = getComputedStyle(inner).opacity === '1';

//     //     if (visible) {
//     //         inner.style.opacity = 0;
//     //         board.style.borderColor = 'transparent';
//     //     } else {
//     //         inner.style.opacity = 1;
//     //         board.style.borderColor = 'inherit';
//     //     }
//     // }, 500);
//     // setInterval(() => {
//     //     const board = document.querySelector('.board');
//     //     const inner = board.querySelector('.inner');

//     //     let visible = inner.style.opacity === '1';
//     //     if (visible) {
//     //         inner.style.opacity = 0;
//     //         board.style.borderColor = 'transparent';
//     //     } else {
//     //         inner.style.opacity = 1;
//     //         board.style.borderColor = 'inherit'
//     //     }
//     // }, 300);

// })();
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
//         counter.innerText = count + '人用了都说好'
//     }, 800);
// })();

// ;
// (function () {
//     'use strict';

//     let board = document.querySelector('.board');
//     let inner = board.querySelector('.inner');

//     setInterval(() => {
//         let visible = getComputedStyle(inner).opacity == '1';
//         if (visible) {
//             inner.style.opacity = 0;
//             board.style.borderColor = 'transparent';
//         } else {
//             inner.style.opacity = 1;
//             board.style.borderColor = 'inherit';
//         }
//     }, 500);
// })();

// +++++++++++++++++++++++++++++++++++++++
// ;
// (function () {
//     'use strict';

//     let board = document.querySelector('.board');
//     let inner = board.querySelector('.inner');
//     let counter = inner.querySelector('.counter');
//     let count = 0;

//     setInterval(() => {
//         let visible = getComputedStyle(inner).opacity == '1';
//         if (visible) {
//             inner.style.opacity = 0;
//             board.style.borderColor = 'transparent';
//         } else {
//             inner.style.opacity = 1;
//             board.style.borderColor = 'inherit';
//             count++;
//         }
//         counter.innerText = count + '人用了都说好';
//     }, 500);
// })();

// ;
// (function () {
//     'use strict';

//     let board = document.querySelector('.board');
//     let inner = board.querySelector('.inner');
//     let counter = inner.querySelector('.counter');
//     let count = 0;

//     setInterval(() => {
//         let visible = inner.style.opacity == '1'
//         if (visible) {
//             inner.style.opacity = 0;
//             board.style.borderColor = 'transparent';
//         } else {
//             inner.style.opacity = 1;
//             board.style.borderColor = 'inherit';
//             count++;
//         }
//         counter.innerText = count + '人用了都说好'
//     }, 500);
// })();
//++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ;
// (function () {
//     'use strict';

//     let board = document.querySelector('.board');
//     let inner = board.querySelector('.inner');
//     let size = 1;

//     setInterval(() => {
//         let visible = getComputedStyle(inner).opacity == '1';
//         if (visible) {
//             inner.style.opacity = 0;
//             board.style.borderColor = 'transparent';
//         } else {
//             inner.style.opacity = 1;
//             board.style.borderColor = 'inherit';
//             size < 3 ? size++ : size = 1;
//             board.style.fontSize = 2 * size + 'rem';
//         }
//     }, 1000);
// })();

// ;
// (function () {
//     'use strict';

//     let board = document.querySelector('.board');
//     let inner = board.querySelector('.inner')
//     let size = 1;

//     setInterval(() => {
//         let visible = getComputedStyle(inner).opacity == '1';
//         if (visible) {
//             inner.style.opacity = 0;
//             board.style.borderColor = 'transparent';
//         } else {
//             inner.style.opacity = 1;
//             board.style.borderColor = 'inherit';
//             size < 3 ? size++ : size = 1;
//             inner.style.fontSize = 2 * size + 'rem';
//         }
//     }, 800);
// })();
// ;
// (function () {
//     'use strict';

//     let board = document.querySelector('.board');
//     let inner = board.querySelector('.inner');
//     let size = 1;
//     setInterval(() => {
//         let visible = getComputedStyle(inner).opacity == '1';
//         if (visible) {
//             inner.style.opacity = 0;
//             board.style.borderColor = 'transparent';
//         } else {
//             inner.style.opacity = 1;
//             board.style.borderColor = 'inherit';
//             size < 3 ? size++ : size = 1;
//             inner.style.fontSize = 2 * size + 'rem';
//         }
//     }, 800);
// })();

// ;
// (function () {
//     'use strict';

//     let board = document.querySelector('.board');
//     let inner = board.querySelector('.inner');
//     let size = 1;

//     setInterval(() => {
//         let visible = getComputedStyle(inner).opacity == '1';
//         if (visible) {
//             inner.style.opacity = 0;
//             board.style.borderColor = 'transparent';
//         } else {
//             inner.style.opacity = 1;
//             board.style.borderColor = 'inherit';
//             size < 3 ? size++ : size = 1;
//             inner.style.fontSize = size + 'rem';
//         }
//     }, 800);
// })();
// ;
// (function () {
//     'use strict';

//     let board = document.querySelector('.board');
//     let inner = board.querySelector('.inner');
//     let size = 1;
//     setInterval(() => {
//         let visible = getComputedStyle(inner).opacity == '1';
//         if (visible) {
//             inner.style.opacity = 0;
//             board.style.borderColor = 'transparent';
//         } else {
//             inner.style.opacity = 1;
//             board.style.borderColor = 'inherit';
//             size < 3 ? size++ : size = 1;
//             inner.style.fontSize = 2 * size + 'rem';
//         }
//     }, 800);
// })();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 以整个文档为范围选中.board
// const board = document.querySelector('.board');
// // 以.board为范围选中.inner
// const inner = board.querySelector('.inner');

// // 当前是否为修脚
// let pedicure = true;

// // 设置间隔
// setInterval(function () {
//   // 声明广告牌文字不确定，先声明
//   let text;

//   // .inner是否可见
//   let visible = getComputedStyle(inner).opacity == '1';

//   // 如果可见
//   if (visible) {
//     // 就隐藏它（让其透明）
//     inner.style.opacity = 0;
//     // 同时隐藏边框（让其透明）
//     board.style.borderColor = 'transparent';
//   } else { // 否则
//     // 显示文字
//     inner.style.opacity = 1;

//     // 显示边框
//     board.style.borderColor = 'inherit';

//     // 通过pedicure的状态判断当前应该显示的文字
//     pedicure ? text = '修脚' : text = '贴膜';

//     // 设置内部文字
//     inner.innerText = text;

//     // 将状态倒置，为下一次做准备
//     pedicure = !pedicure;
//   }
// }, 500);

// ;
// (function () {
//     'use strict';

//     let board = document.querySelector('.board');
//     let inner = board.querySelector('.inner');
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
//             pedicure ? text = '修脚贴膜' : text = '按摩';
//             inner.innerText = text;
//             pedicure = !pedicure
//         }
//     }, 800);
// })();

// ;
// (function () {
//     'use strict';

//     let board = document.querySelector('.board');
//     let inner = board.querySelector('.inner');
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
//             pedicure ? text = '修脚贴膜' : text = '按摩洗澡';
//             inner.innerText = text;
//             pedicure = !pedicure;
//         }
//     }, 800);
// })();

// ;
// (function () {
//     'use strict';

//     let board = document.querySelector('.board');
//     let inner = board.querySelector('.inner');

//     let pedicure = true;
//     setInterval(() => {
//         let text;
//         let visible = inner.style.opacity == '1';
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
//     }, 800);
// })();

// ;
// (function () {
//     'use strict';

//     let board = document.querySelector('.board');
//     let inner = board.querySelector('.inner');
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

//     let board = document.querySelector('.board');
//     let inner = board.querySelector('.inner');
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

//+++++++++++++++++++++++++++++=======================

// ;
// (function () {
//     'use strict';

//     let board = document.querySelector('.board');
//     let inner = board.querySelector('.inner');

//     let list = ['修脚', '上市申报', '擀面皮', '洗澡按摩']
//     let current = 0;
//     inner.innerText = list[current];

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
//             inner.innerText = list[current]
//         }

//     }, 800);
// })();

// ;
// (function () {
//     'use strict';

//     let board = document.querySelector('.board');
//     let inner = board.querySelector('.inner');
//     let list = ['a', 'b', 'c', 'd'];
//     let current = 0;
//     inner.innerText = list[current];
//     setInterval(() => {
//         let visible = getComputedStyle(inner).opacity == '1';
//         if (visible) {
//             inner.style.opacity = 0;
//             board.style.borderColor = 'transparent'
//         } else {
//             inner.style.opacity = 1;
//             board.style.borderColor = 'inherit';
//             current++;
//             if (current >= list.length) {
//                 current = 0;
//             }
//             inner.innerText = list[current];
//         }
//     }, 900);
// })();
// ;
// (function () {
//     'use strict';

//     let board = document.querySelector('.board');
//     let inner = board.querySelector('.inner');
//     let list = ['apple', 'orange', 'bananas'];
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
//             if (current >= list.length) {
//                 current = 0;
//             }
//             inner.innerText = list[current];
//         }
//     }, 800);
// })();

// ;
// (function () {
//     'use strict';

//     let board = document.querySelector('.board');
//     let inner = board.querySelector('.inner');
//     let list = ['按摩', '洗澡', '修脚'];
//     let current = 0;

//     setInterval(() => {
//         let visible = getComputedStyle(inner).opacity == '1';
//         if (visible) {
//             inner.style.opacity = 0;
//             board.style.borderColor = 'transparent'
//         } else {
//             inner.style.opacity = 1;
//             board.style.borderColor = 'inherit';
//             current++;
//             if (current >= list.length) {
//                 current = 0;
//             }
//             inner.innerText = list[current];
//         }
//     }, 800)
// })();

// ;
// (function () {
//     'use strict';

//     let board = document.querySelector('.board');
//     let inner = board.querySelector('.inner');
//     let list = ['按摩', '洗澡', '修脚'];
//     let current = 0;
//     let color = ['red', 'lightgreen', 'orange']

//     setInterval(() => {
//         let visible = getComputedStyle(inner).opacity == '1';
//         if (visible) {
//             inner.style.opacity = 0;
//             board.style.borderColor = 'transparent'
//         } else {
//             inner.style.opacity = 1;

//             current++;
//             if (current >= color.length) {
//                 current = 0;
//             }
//             board.style.borderColor = color[current];

//             if (current >= list.length) {
//                 current = 0;
//             }
//             inner.innerText = list[current];
//             inner.style.color = color[current];
//         }
//     }, 800)
// })();