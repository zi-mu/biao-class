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

;
(function () {
    'use strict';

    let board = document.querySelector('.board');
    let inner = board.querySelector('.inner')
    let size = 1;

    setInterval(() => {
        let visible = getComputedStyle(inner).opacity == '1';
        if (visible) {
            inner.style.opacity = 0;
            board.style.borderColor = 'transparent';
        } else {
            inner.style.opacity = 1;
            board.style.borderColor = 'inherit';
            size < 3 ? size++ : size = 1;
            inner.style.fontSize = 2 * size + 'rem';
        }
    }, 800);
})();