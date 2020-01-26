const board = document.querySelector('.board');
// 以.board为范围选中.inner
const inner = board.querySelector('.inner');

// 字体大小倍数，初始为1倍
let size = 1;


// 启动
boot();

function boot() {
    startFlash();
}

/**
 * 开始闪烁
 */
function startFlash() {
    // 设置间隔
    setInterval(function () {
        toggleBorder();
        toggleText(enlarge);
    }, 500);
}

/**
 * .inner是否可见
 * @return {boolean}
 */
function isVisible() {
    return getComputedStyle(inner).opacity != '0';
}

/**
 * 文字开关
 * @param {Function} onShow 当文字显示时应该做什么
 * @param {Function} onHide 当文字隐藏时应该做什么
 */
function toggleText(onShow, onHide) {
    if (isVisible()) {
        inner.style.opacity = 0;
        onHide && onHide();
    } else {
        inner.style.opacity = 1;
        onShow && onShow();
    }
}

/**
 * 边框开关
 */
function toggleBorder() {
    board.style.borderColor =
        isVisible() ? 'transparent' : 'inherit';
}

function enlarge() {
    // 如果尺寸不超过3倍就继续加，否则复位为1
    size < 3 ? size++ : size = 1;

    // 设置新的字体大小
    board.style.fontSize = 2 * size + 'rem';
}



// const board = document.querySelector('.board');
// const inner = board.querySelector('.inner');

// let size = 1;

// boot();

// function boot() {
//     startFlash();
// }

// function startFlash() {
//     //设置间隔
//     setInterval(() => {
//         toggleBorder();
//         toggleText(enlarge);
//     }, 500);
// }

// //.inner 是否可见
// function isVisible() {
//     return getComputedStyle(inner).opacity != '0';
// }

// function toggleBorder() {
//     board.style.borderColor = isVisible() ? 'transparent' : 'inherit';
// }

// /**
//  * 
//  * @param {function} onshow 当文字显示时应该做什么 
//  * @param {function} onhide 当文字隐藏时应该做什么 
//  */
// function toggleText(onShow, onHide) {
//     if (isVisible()) { //
//         inner.style.opacity = 0;
//         if (onHide) //有onhide函数,就调用 ,没有就什么也不做
//             onHide(); //简写形式: onShow&&onHide();
//     } else {
//         inner.style.opacity = 1;
//         if (onShow) //有onshow函数,就调用 ,没有就什么也不做
//             onShow(); //简写形式: onshow&&onshow();
//     }
// }

// function enlarge() {
//     size < 3 ? size++ : size = 1; // // 如果尺寸不超过3倍就继续加，否则复位为1
//     inner.style.fontSize = 2 * size + 'rem';
// }

// const board = document.querySelector('.board');
// const inner = board.querySelector('.inner');
// let size = 1;

// boot();

// function boot() {
//     startFlash();
// }

// function startFlash() {
//     setInterval(() => {
//         toggleBorder();
//         toggleText(() => {
//             size < 3 ? size++ : size = 1;
//             inner.style.fontSize = 2 * size + 'rem';
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

// let size = 1;

// boot();

// function boot() {
//     startFlash();
// }

// function startFlash() {
//     setInterval(() => {
//         toggleBorder();
//         toggleText(() => {
//             size < 3 ? size++ : size = 1;
//             inner.style.fontSize = size + 'rem';
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

// function toggleBorder() {
//     board.style.borderColor = isVisible() ? 'tarnsparent' : 'inherit';
// }

// function isVisible() {
//     return getComputedStyle(inner).opacity != '0';
// }

// const board = document.querySelector('.board');
// const inner = board.querySelector('.inner');

// let size = 1;

// boot();

// function boot() {
//     startFlash();
// }

// function startFlash() {
//     setInterval(() => {
//         toggleBorder();
//         toggleText(() => {
//             size < 3 ? size++ : size = 1;
//             inner.style.fontSize = size + 'rem';
//         });
//     }, 800);
// }

// function toggleBorder() {
//     board.style.borderColor = isVisible() ? 'transparent' : 'inherit';
// }

// function toggleText(onShow, onHide) {
//     if (isVisible()) {
//         inner.style.opacity = 0;
//         onHide && onHide()
//     } else {
//         inner.style.opacity = 1;
//         onShow && onShow();
//     }
// }

// function isVisible() {
//     return getComputedStyle(inner).opacity != '0';
// }