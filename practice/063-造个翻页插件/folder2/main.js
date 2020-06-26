;(function(){
    'use strict';

    biaoPage.boot({
        selector:'.footer',
        amount:1005,
        limit:15,
        currentPage:4,
        onChange(page,state){
            console.log(page);
        }
    })
})();