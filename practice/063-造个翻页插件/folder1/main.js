;
(function () {
    'use strict';
    biaoPage.boot({
        selector: '.footer',
        amount: 101,
        currentPage: 3,
        limit: 10,
        onChange(page, state) {
            console.log(page);
        }
    })
})();