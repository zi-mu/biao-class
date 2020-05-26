;
(function () {
    'use strict';

    const DEFAULT_CONFIG = {
        limit: 10,
    };


    window.biaoPage = {
        boot,
        render
    }

    function boot(settings) {
        // config = Object.assign({}, DEFAULT_CONFIG, settings); es5语法;
        let config = {
            ...DEFAULT_CONFIG,
            ...settings
        };
        let state = {
            config
        };

        prepare(state);
        render(state);

    }

    function prepare(state) {
        let el = document.createElement('div');
        el.classList.add('biao-page');
        el.innerHTML = `
        <span class="shortcuts">
        <button>上一页</button>
        </span>

    <span class="page-list">
       
    </span>

    <span class="shortcuts">
        <button>下一页</button>
    </span>
`;
        state.root = document.querySelector(state.config.selector);
        state.el = el;
        state.pageList = el.querySelector('.page-list');
        state.root.appendChild(el);

    }

    function render(state) {
        let amount = state.pageCount = Math.ceil(state.config.amount / state.config.limit);
        let list = state.pageList;
        list.innerHTML = '';
        for (let i = 0; i < amount; i++) {
            let page = i + 1;
            let button = document.createElement('button');
            button.innerText = page;
            state.pageList.appendChild(button);
        }
    }
})();