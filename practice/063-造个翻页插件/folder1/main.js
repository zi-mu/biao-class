;
(function () {
    'use strict';

    biaoPage.boot({
        selector: '.footer',
        amount: 101,
        limit: 10,
        onChange(page) {
            console.log(page);
        }
    })

})();