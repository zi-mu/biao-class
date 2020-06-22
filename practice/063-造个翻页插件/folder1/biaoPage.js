;
(function () {
    'use strict';

    window.biaoPage = {
        boot,
        render,
    };

    const DEFAULT_CONFIG = {
        limit: 10
    };


    function boot(settings) {
        // let config = Object.assign({},DEFAULT_CONFIG,settings); // es5语法合并;
        let config = {
            ...DEFAULT_CONFIG,
            ...settings
        } //es6 语法合并.
        let state = {
            config
        };
        console.log(state);
        prepare(state);
        render(state);
    }


    /***
     * 准备插件框架
     */
    function prepare(state) {
        let el = document.createElement('div');
        el.classList.add('biao-page');

        el.innerHTML = `
        <span>
        <button class="shortcuts">第一页</button>
    </span>

    <span class="page-list">
       
    </span>
    <span>
        <button class="shortcuts">最后一页</button>
    </span>
        `;
        state.root = document.querySelector('.footer');
        state.root.appendChild(el);
        state.pageList = state.root.querySelector('.page-list');
        state.el = el;

    }

    /***
     * 渲染内部需要显示多少页
     */
    function render(state) {
        let pageAmount =
            state.pageCount = Math.ceil(state.config.amount / state.config.limit);

        for (let i = 0; i < pageAmount; i++) {
            let page = i + 1;
            let button = document.createElement('button');
            button.innerText = page;
            state.pageList.appendChild(button);
        }

    }
})();