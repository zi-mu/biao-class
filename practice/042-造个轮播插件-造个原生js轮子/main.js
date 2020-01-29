// // 选中.slider
// const parent = document.querySelector('.slider');
// // 在.slider中选中所有的.item
// const slides = parent.querySelectorAll('.item');
// // 默认从第一张开始
// let current = 0;
// // 拿到最后一张的索引
// let lastIndex = slides.length - 1;

// boot();

// function boot() {
//   // 直接显示第一张，防止空等一秒
//   show(slides[current]);

//   setInterval(() => {
//     flip();
//   }, 1000);
// }

// /**
//  * 一次翻页
//  */
// function flip() {
//   // 自增当前页
//   ++current;

//   // 如果自增后超过最大页就重置为零（从头开始）
//   if (current >= slides.length)
//     current = 0;

//   let prev = getPrev();
//   let next = slides[current];

//   hide(prev);
//   show(next);
// }

// /**
//  * 获取前一页
//  * @return {Node}
//  */
// function getPrev() {
//   if (current == 0)
//     return slides[lastIndex];
//   else
//     return slides[current - 1];
// }

// /**
//  * 隐藏元素
//  * @param {HTMLElement} el
//  */
// function hide(el) {
//   if (!el)
//     return;

//   el.style.opacity = 0;
// }

// /**
//  * 显示元素
//  * @param {HTMLElement} el
//  */
// function show(el) {
//   if (!el)
//     return;

//   el.style.opacity = 1;
// }

// const parent = document.querySelector('.slider');
// const slides = parent.querySelectorAll('.item');
// let current = 0;
// let lastIndex = slides.length - 1;

// boot();

// function boot() {
//     show(slides[0]);
//     setInterval(() => {
//         loop();
//     }, 1000);
// }

// function loop() {
//     ++current;
//     if (current >= slides.length)
//         current = 0;

//     let prev = getPrev(); //current == 0 ? slides[lastIndex] : slides[current - 1];
//     let next = slides[current];

//     // prev && (prev.style.opacity = 0);
//     hide(prev);
//     next.style.opacity = 1;
// }

// function getPrev() {
//     if (current == 0)
//         return slides[lastIndex]
//     return slides[current - 1];
// }

// function hide(el) {
//     if (!el)
//         return;
//     el.style.opacity = 0;
// }

// function show(el) {
//     if (!el)
//         return;
//     el.style.opacity = 1;
// }

// const parent = document.querySelector('.slider');
// const slides = parent.querySelectorAll('.item');
// let current = 0;
// let lastIndex = slides.length - 1;

// boot();

// function boot() {
//     show(slides[0])
//     setInterval(() => {
//         loop();
//     }, 1000);

// }

// function loop() {
//     ++current;
//     if (current >= slides.length)
//         current = 0;

//     let prev = getPrev();
//     let next = slides[current];

//     hide(prev);
//     show(next);
// }

// function getPrev() {
//     if (current == 0)
//         return slides[lastIndex]
//     else
//         return slides[current - 1];
// }

// function hide(el) {
//     if (!el)
//         return;
//     el.style.opacity = 0;
// };

// function show(el) {
//     if (!el)
//         return;
//     el.style.opacity = 1;
// };

/**
 * 一开始显示第一页,一秒循环一次,自增,取得前一页(判断当前页是不是第一页,如果是第一页就返回最后一页,否则就返回前一页),得到下一页,隐藏前一页,显示下一页.
 */

// const parent = document.querySelector('.slider');
// const slides = parent.querySelectorAll('.item');
// let current = 0;
// let lastIndex = slides.length - 1;

// boot();

// function boot() {
//     show(slides[0]);
//     setInterval(() => {
//         loop();
//     }, 1000);
// }

// function loop() {
//     ++current;
//     if (current >= slides.length)
//         current = 0;

//     let prev = getPrev(); //current == 0 ? slides[lastIndex] : slides[current - 1];
//     let next = slides[current];

//     hide(prev);
//     show(next);
// }

// function getPrev() {
//     if (current == 0)
//         return slides[lastIndex]
//     else
//         return slides[current - 1];
// }

// function hide(el) {
//     el.style.opacity = 0;
// }

// function show(el) {
//     el.style.opacity = 1;
// }

// const parent = document.querySelector('.slider');
// const slides = parent.querySelectorAll('.item');
// let current = 0;
// let lastIndex = slides.length - 1;

// boot();

// function boot() {
//     show(slides[current]);
//     setInterval(() => {

//         loop();
//     }, 3000);
// }

// function loop() {
//     ++current;
//     if (current >= slides.length)
//         current = 0;
//     let prev = getPrev();
//     let next = slides[current];
//     hide(prev);
//     show(next);
// }

// function getPrev() {
//     if (current == 0)
//         return slides[lastIndex];
//     else
//         return slides[current - 1];
// }

// function hide(el) {
//     if (!el)
//         return;
//     el.style.opacity = 0;
// }

// function show(el) {
//     if (!el)
//         return;
//     el.style.opacity = 1;
// }

// const slider = document.querySelector('.slider');
// const items = slider.querySelectorAll('.item');

// let current = 0;
// let lastIndex = items.length - 1;

// boot();

// function boot() {
//     show(slider[current]);
//     setInterval(() => {
//         loop();
//     }, 2000);
// }

// function loop() {
//     ++current;
//     if (current >= items.length)
//         current = 0;

//     let prev = getPrev();
//     let next = items[current];

//     hide(prev);
//     show(next);

// }

// function getPrev() {
//     if (current == 0)
//         return items[lastIndex]
//     else
//         return items[current - 1];
// }

// function hide(el) {
//     if (!el)
//         return
//     el.style.opacity = 0;
// }

// function show(el) {
//     if (!el)
//         return
//     el.style.opacity = 1;
// }
//--------------------------------------------------------------------------
// const slider = document.querySelector('.slider');
// const items = slider.querySelectorAll('.item');
// let current = 0;
// let lastIndex = items.length - 1;

// setInterval(() => {
//     ++current;
//     if (current >= items.length)
//         current = 0;

//     let prev = current == 0 ? items[lastIndex] : items[current - 1];
//     let next = items[current]
//     prev.style.opacity = 0;
//     next.style.opacity = 1;
// }, 800);
//------------------------------------------------------------------------------

const parent = document.querySelector('.slider');
const slides = parent.querySelectorAll('.item');
let current = 0;
let lastIndex = slides.length - 1;

boot();

function boot() {
    show(slides[current]);
    setInterval(() => {
        loop();
    }, 1000);
}

function loop() {
    ++current;
    if (current >= slides.length)
        current = 0;

    let prev = getPrev();
    let next = slides[current];

    hide(prev);
    show(next);
}

function getPrev() {
    if (current == 0)
        return slides[lastIndex];
    else
        return slides[current - 1];
}

function hide(el) {
    if (!el)
        return;
    el.style.opacity = 0;
}

function show(el) {
    if (!el)
        return;
    el.style.opacity = 1;
}