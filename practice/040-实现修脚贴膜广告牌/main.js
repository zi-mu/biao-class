setInterval(() => {
    let div = document.querySelector('.container');
    let span = div.querySelector('.inner')
    let people = div.querySelector('.people');


    if (span.style.opacity === '1') {
        span.style.opacity = 0;

    } else {
        span.style.opacity = 1;

    }


}, 800);