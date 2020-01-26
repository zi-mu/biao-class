const board = document.querySelector('.board');
const inner = board.querySelector('.inner');

boot();
/**
 * 启动函数,一切从这里开始
 */
function boot() {
    startFlash();

}

/**
 * 闪烁函数
 */
function startFlash() {
    setInterval(() => {
        toggleText();
        toggleColor();
    }, 800);
}


function isVisible() {
    return getComputedStyle(inner).opacity === '1';
}

function toggleColor() {
    if (isVisible()) {
        if (board.style.color == 'red')
            board.style.color = 'green'
        else
            board.style.color = 'red';

    }
}

function toggleText() {
    let visible = isVisible();

    visible ? inner.style.opacity = 0 : inner.style.opacity = 1;
}