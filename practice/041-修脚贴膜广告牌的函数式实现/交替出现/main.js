// const board = document.querySelector('.board');
// const inner = board.querySelector('.inner');

// let pedicure = true;
// setInterval(() => {
//     // let text;
//     let visible = getComputedStyle(inner).opacity == '1';
//     if (visible) {
//         inner.style.opacity = 0;
//         board.style.borderColor = 'transparent';
//     } else {
//         inner.style.opacity = 1;
//         board.style.borderColor = 'inherit';

//         pedicure ? text = '修脚' : text = '贴膜'
//         inner.innerText = text;
//         pedicure = !pedicure;
//     }
// }, 500)




// 以整个文档为范围选中.board
const board = document.querySelector('.board');
// 以.board为范围选中.inner
const inner = board.querySelector('.inner');

// 当前是否为修脚
let pedicure = true;

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
    // 通过pedicure的状态判断当前应该显示的文字
    pedicure ? text = '修脚' : text = '贴膜';

    // 设置内部文字
    inner.innerText = text;

    // 将状态倒置，为下一次做准备
    pedicure = !pedicure;
}

// const board = document.querySelector('.board');
// const inner = board.querySelector('.inner');

// let pedicure = true;

// boot();

// function boot() {
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

// function changeText() {
//     pedicure ? text = '修脚' : text = '贴膜';
//     inner.innerText = text;
//     pedicure = !pedicure;
// }

// const board = document.querySelector('.board');
// const inner = board.querySelector('.inner');

// let pedicure = true;

// boot();

// function boot() {
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

// function changeText() {
//     pedicure ? text = '修脚' : text = '贴膜';
//     inner.innerText = text;
//     pedicure = !pedicure;
// }

// const board = document.querySelector('.board');
// const inner = board.querySelector('.inner');

// let pedicure = true;

// boot();

// function boot() {
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

// function changeText() {
//     pedicure ? text = '修脚' : text = '贴膜';
//     inner.innerText = text;
//     pedicure = !pedicure;
// }