let list2 = [
    'a',
    'b',
    'c',
    'd',
];

function breaker(badass, list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === badass)
            break;
        console.log(list[i]);
    }
}

breaker('c', list2);