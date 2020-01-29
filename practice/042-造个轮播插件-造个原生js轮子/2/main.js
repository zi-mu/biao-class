const parent = document.querySelector('.slider');
const slides = parent.querySelectorAll('.item');
let current = 0;
let lastIndex = slides.length - 1;

boot();

function boot() {
    show(slides[current]);
    setInterval(() => {
        flip();
    }, 1000);
}

function flip() {
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