const board = document.querySelector('.board');
const inner = board.querySelector('.inner');

// boot();
// /**
//  * 一起从这里启动
//  */
// function boot() {
//     startFlash();
// }

// function startFlash() {
//     setInterval(() => {
//         toggleBorder();
//         toggleText();
//     }, 800);
// }



// function toggleBorder() {
//border.style.borderColor = isVisible()?'transparent':'inherit';
// isVisible()?board.style.borderColor='transparent':board.style.borderColor='inherit'

//     if (isVisible())
//         board.style.borderColor = 'transparent';
//     else
//         board.style.borderColor = 'inherit';
// }

// function toggleText() {
// inner.style.opacity = isVisible()?0:1;                     //1//

//      isVisible()?inner.style.opacity =0:inner.style.opacity =1;             //2//
//
/**3 */
//     if (isVisible())
//         inner.style.opacity = 0
//     else
//         inner.style.opacity = 1;
// }
//
// function isVisible() {
//     return getComputedStyle(inner).opacity == '1';
// }

// boot();

// function boot() {
//     startFlash();
// }

// function startFlash() {
//     setInterval(() => {
//         toggleText();
//         toggleBorder();
//     }, 800);
// }

// function toggleBorder() {
//     board.style.borderColor = isVisible() ? 'transparent' : 'inherit';
// }

// function toggleText() {
//     inner.style.opacity = isVisible() ? 0 : 1;
// }

// function isVisible() {
//     return getComputedStyle(inner).opacity == '1';
// }

// boot();

// function boot() {
//     startFlash();
// }

// function startFlash() {
//     setInterval(() => {
//         toggleBorder();
//         toggleText();
//     }, 800);
// }

// function isVisible() {
//     return getComputedStyle(inner).opacity != '0';
// }

// function toggleText() {
//     inner.style.opacity = isVisible() ? 0 : 1;
// }

// function toggleBorder() {
//     board.style.borderColor = isVisible() ? 'transparent' : 'inherit';
// }

// boot();

// function boot() {
//     startFlash();
// }

// function startFlash() {
//     setInterval(() => {
//         toggleBorder();
//         toggleText();
//     }, 800);
// }

// function toggleBorder() {
//     isVisible() ? board.style.borderColor = 'transparent' : board.style.borderColor = 'inherit';
// }

// function toggleText() {
//     isVisible() ? inner.style.opacity = 0 : inner.style.opacity = 1;
// }

// function isVisible() {
//     return getComputedStyle(inner).opacity == '1';

// }

// boot();

// function boot() {
//     startFlash();
// }

// function startFlash() {
//     setInterval(() => {
//         toggleText();
//         toggleBorder();
//         toggleColor();
//     }, 800);
// }

// function isVisible() {
//     return getComputedStyle(inner).opacity != '0';
// }

// function toggleBorder() {
//     // board.style.borderColor = isVisible() ? 'transparent' : 'inherit';
//     if (isVisible()) {
//         if (board.style.borderColor == 'red') {
//             board.style.borderColor = 'green'
//         } else {
//             board.style.borderColor = 'red'
//         }
//     }
// }

// function toggleText() {
//     // inner.style.opacity = isVisible() ? 0 : 1;
//     if (isVisible()) {
//         if (inner.style.color == 'red')
//             inner.style.color = 'green';
//         else
//             inner.style.color = 'red';
//     }
// }

boot();

function boot() {
    startFlash();
}

function startFlash() {
    setInterval(() => {
        toggleBorder();
        toggleText();
    }, 800);
}

function isVisible() {
    return getComputedStyle(inner).opacity != '0';
}

function toggleBorder() {
    board.style.borderColor = isVisible() ? 'transparent' : 'inherit';
}

function toggleText() {
    inner.style.opacity = isVisible() ? 0 : 1;
}