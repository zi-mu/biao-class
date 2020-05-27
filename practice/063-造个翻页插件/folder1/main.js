;
(function () {
    'use strict';

    biaoPage.boot({
        selector: '.footer',
        amount: 101,
        limit: 10,
        currentPage: 2,
        onChange(page, state) {
            console.log(page);
        }
    })

})();