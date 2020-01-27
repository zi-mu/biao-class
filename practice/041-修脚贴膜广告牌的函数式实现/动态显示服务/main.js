// 以整个文档为范围选中.board
const board = document.querySelector('.board');
// 以.board为范围选中.inner
const inner = board.querySelector('.inner');

// 提供的所有服务
const services = [
    '修脚', '擀面皮', '保健用品',
    '上市申报', '贴膜',
];

// 当前显示的服务
let current = 0;

// 启动
boot();

function boot() {
    // 初始显示
    inner.innerText = services[current];
    startFlash();
}

/**
 * 开始闪烁
 */
function startFlash() {
    // 设置间隔
    setInterval(function () {
        toggleBorder();
        toggleText(changeText);
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

function changeText() {
    // 自增，为下一次循环，做准备
    current++;

    // 如果循环到头了，就复位从第一个开始
    if (current >= services.length)
        current = 0;

    // 通过当前显示的服务索引动态更新内部文字
    inner.innerText = services[current];
}

// //以整个文档为范围,选中.board
// const board = document.querySelector('.board')
// //以.board为范围,选中.inner
// const inner = board.querySelector('.inner');

// //显示的所有服务
// const services = ['擀面皮', '上市申报', '修脚', '按摩', '贴膜']
// //当前显示的服务
// let current = 0;

// /**
//  * 启动
//  */
// boot();

// function boot() {
//     //初始显示.
//     inner.innerText = services[current];
//     startFlash();
// }

// /***
//  * 开始闪烁
//  */
// function startFlash() {
//     //设置间隔
//     setInterval(() => {
//         toggleBorder();
//         toggleText(changeText);
//     }, 800);
// }

// /**
//  * .inner 是否可见
//  * @returns {boolean}
//  */

// function isVisible() {
//     return getComputedStyle(inner).opacity != '0';
// }

// /**
//  * 边框开关
//  */
// function toggleBorder() {
//     board.style.borderColor = isVisible() ? 'transparent' : 'inherit';
// }

// /**
//  * /**
// //  * 文字开关
// //  * @param {Function} onShow 当文字显示时应该做什么
// //  * @param {Function} onHide 当文字隐藏时应该做什么
// //  */
// function toggleText(onShow, onHide) {
//     if (isVisible()) {
//         inner.style.opacity = 0;
//         onHide && onHide();
//     } else {
//         inner.style.opacity = 1;
//         onShow && onShow();
//     }
// }

// function changeText() {
//     //自增,为下次循环作准备
//     current++

//     //判断当前的服务是否超过了数组的长度,超过了重新开始.
//     // 如果循环到头了，就复位从第一个开始
//     if (current >= services.length)
//         current = 0;

//     // 通过当前显示的服务索引动态更新内部文字
//     inner.innerText = services[current];
// }

// const board = document.querySelector('.board');
// const inner = board.querySelector('.inner');
// const services = ['擀面皮', '上市申报', '修脚', '按摩', '贴膜'];

// let current = 0;

// boot();

// function boot() {
//     inner.innerText = services[current];
//     startFlash();
// }

// function startFlash() {
//     setInterval(() => {
//         toggleBorder();
//         toggleText(changeText);
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

// function changeText() {
//     current++;
//     if (current >= services.length)
//         current = 0;
//     inner.innerText = services[current];
// }

// const board = document.querySelector('.board');
// const inner = board.querySelector('.inner');
// const services = ['擀面皮', '上市申报', '修脚', '按摩', '贴膜'];

// let current = 0;

// boot();

// function boot() {
//     inner.innerText = services[current];
//     startFlash();
// }

// function startFlash() {
//     setInterval(() => {
//         toggleBorder();
//         toggleText(changeText);
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

// function changeText() {
//     current++;
//     if (current >= services.length)
//         current = 0;
//     inner.innerText = services[current];
// }