;
(function () {
    'use strict';

    let a, b;
    a = 1;
    b = 1;
    console.log(a + b, a - b, a * b, a / b, a % b);
})();

;
(function () {
    'use strict';

    let time = 'afternoon';
    let name = '李拴蛋';
    let greeting;

    if (time == 'night') {
        greeting = '再见, ';
    } else if (time == 'noon') {
        greeting = '吃了么?  '
    } else if (time == 'afternoon') {
        greeting = '下午好, ';
    } else {
        greeting = '你好, ';
    }

    console.log(greeting + name);
})();

;
(function () {
    'use strict';
    // + - * / 加减乘除
    // % 求余
    // == 相等  1 == '1' 成立, 因为判断较为松散,仅仅判断字面值是否相等
    // === 全等 1 === '1' 不成立, 因为判断较为严格, 不仅判断值,还判断类型.

    let time = 'noon';
    let name = '王花花';
    let greeting;
    if (time == 'night') {
        greeting = '再见, ';
    } else if (time == 'noon') {
        greeting = '中午好, ';
    } else if (time == 'afternoon') {
        greeting = '下午好, ';
    } else {
        greeting = '早上好, ';
    }
    console.log(greeting + name);
})();

;
(function () {
    'use strict';

    let time = 'noon';
    let name = '李拴蛋';
    let greeting;

    if (time == 'night') {
        greeting = '再见, ';
    } else if (time == 'noon') {
        greeting = '中午好, ';
    } else if (time == 'afternoon') {
        greeting == '下午好, ';
    } else {
        greeting = '早上好, ';
    }
    console.log(greeting + name);
})();