// const board = document.querySelector('.board');
// const inner = board.querySelector('.inner');
// const counter = inner.querySelector('.counter');

// let count = 0;

// boot();

// function boot() {
//     startFlash();
// }

// function startFlash() {
//     setInterval(() => {
//         toggleBorder();
//         toggleText(() => {
//             count++;
//             counter.innerText = count + '人用了都说好';
//         });
//     }, 500);
// }

// function toggleText(onShow, onHide) {
//     if (isVisible()) {
//         inner.style.opacity = 0;
//         onHide && onHide();
//     } else {
//         inner.style.opacity = 1;
//         onShow && onShow();
//     }
// }

// function isVisible() {
//     return getComputedStyle(inner).opacity != '0';
// }

// function toggleBorder() {
//     board.style.borderColor = isVisible() ? 'transparent' : 'inherit';
// }

// const board = document.querySelector('.board');
// const inner = board.querySelector('.inner');
// const counter = inner.querySelector('.counter');

// let count = 0;

// boot();

// function boot() {
//     startFlash();
// }

// function startFlash() {
//     setInterval(() => {
//         toggleBorder();
//         toggleText(() => {
//             count++;
//             counter.innerText = count + '人用了都说好';
//         });
//     }, 500);
// }

// function isVisible() {
//     return getComputedStyle(inner).opacity != '0';
// }

// function toggleBorder() {
//     board.style.borderColor = isVisible() ? 'transparent' : 'inherit';
// }

// function toggleText(onShow, onHide) {
//     if (isVisible()) {
//         inner.style.opacity = 0;
//         onHide && onHide();
//     } else {
//         inner.style.opacity = 1;
//         onShow && onShow();
//     }
// }

// const board = document.querySelector('.board');
// const inner = board.querySelector('.inner');
// const counter = inner.querySelector('.counter');

// let count = 0;

// boot();

// function boot() {
//     startFlash();
// }

// function startFlash() {
//     setInterval(() => {
//         toggleBorder();
//         toggleText(() => {
//             count++;
//             counter.innerText = count + '人用了都说好'
//         });
//     }, 800);
// }

// function isVisible() {
//     return getComputedStyle(inner).opacity != '0';
// }

// function toggleText(onShow, onHide) {
//     if (isVisible()) {
//         inner.style.opacity = 0;
//         onHide && onHide();
//     } else {
//         inner.style.opacity = 1;
//         onShow && onShow();
//     }
// }

// function toggleBorder() {
//     board.style.borderColor = isVisible() ? 'transparent' : 'inherit';
// }

// const board = document.querySelector('.board');
// const inner = board.querySelector('.inner');
// const counter = inner.querySelector('.counter');

// let count = 0;

// boot();

// function boot() {
//     startFlash();
// }

// function startFlash() {
//     setInterval(() => {
//         toggleBorder();
//         toggleText(() => {
//             count++;
//             counter.innerText = count + '人用了都说好';

//         });
//         toggleColor();
//     }, 800);
// }

// function isVisible() {
//     return getComputedStyle(inner).opacity != '0';
// }

// function toggleBorder() {
//     board.style.borderColor = isVisible() ? 'transparent' : 'inherit';
// }

// function toggleText(onShow, onHide) {
//     if (isVisible()) {
//         inner.style.opacity = 0;
//         onHide && onHide();
//     } else {
//         inner.style.opacity = 1;

//         onShow && onShow();
//     }
// }

// function toggleColor() {
//     if (isVisible()) {
//         if (inner.style.color == 'red') {

//             inner.style.color = 'green';
//             board.style.borderColor = 'green';
//         } else {

//             inner.style.color = 'red';
//             board.style.borderColor = 'red';
//         }
//     }
// }

const board = document.querySelector('.board');
const inner = board.querySelector('.inner');
const counter = inner.querySelector('.counter');
let count = 0;


boot();

function boot() {
    startFlash();
}

function startFlash() {
    setInterval(() => {
        toggleBorder();
        toggleText(increment);
    }, 800)
}

function isVisible() {
    return getComputedStyle(inner).opacity != '0';
}

function toggleBorder() {
    board.style.borderColor = isVisible() ? 'transparent' : 'inherit';
}

function toggleText(onShow, onHide) {
    if (isVisible()) {
        inner.style.opacity = 0;
        onHide && onHide();
    } else {
        inner.style.opacity = 1;
        onShow && onShow();
    }
}

function increment() {
    count++;
    counter.innerText = count + '人用了都说好';
}