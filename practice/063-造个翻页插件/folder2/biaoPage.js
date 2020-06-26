;
(function () {

    'use strict';

    window.biaoPage = {
        boot,
        render
    };
    const DEFAULT_CONFIG = {
        limit: 15,
        currentPage: 1
    }

    function boot(settings) {
        let config = {
            ...DEFAULT_CONFIG,
            ...settings
        };
        let state = {
            config
        };
        state.currentPage = config.currentPage;
        prepare(state);
        render(state);
        bindEvents(state);
        console.log(state);
    }

    function prepare(state) {
        let el = document.createElement('div');
        el.classList.add('biao-page');
        el.innerHTML = `
        <span class="shortcuts">
        <button class='prev'>上一页</button>
        <button class='first'>第一页</button>
    </span>

    <span class="page-list"></span>
    <span class="shortcuts">
        <button class='next'>下一页</button>
        <button class='end'>最后一页</button>
    </span>
        `;
        state.el = el;
        state.root = document.querySelector('.footer');
        state.root.appendChild(el);
        state.pageList = state.root.querySelector('.page-list');
    }

    function render(state) {

        let pageAmount =
            state.pageCount = Math.ceil(state.config.amount / state.config.limit);
        for (let i = 0; i < pageAmount; i++) {
            let page = i + 1;
            let button = document.createElement('button');
            button.classList.add('biao-item');

            if (state.currentPage == page)
                button.classList.add('active');

            button.innerText = page;
            button.$page = page;
            state.pageList.appendChild(button);
        }
        state.buttons = state.pageList.querySelectorAll('.biao-item');
    }

    function bindEvents(state) {
        state.el.addEventListener('click', e => {
            let page = e.target.$page;
            if (page) {

                setCurrentPage(state, page); //////
            }

            if (e.target.classList.contains('prev')) {
                setCurrentPage(state, state.currentPage - 1);
            }
            if (e.target.classList.contains('next')) {
                setCurrentPage(state, state.currentPage + 1);
            }
            if (e.target.classList.contains('first')) {
                setCurrentPage(state, 1);
            }
            if (e.target.classList.contains('end')) {
                setCurrentPage(state, state.pageCount);
            }

        })
    }

    /////////
    function setCurrentPage(state, page) {
        if (page < 1) {
            return setCurrentPage(state, 1)
        }
        if (page > state.pageCount) {
            return setCurrentPage(state, state.pageCount)
        }

        state.currentPage = page;
        let onChange = state.config.onChange;
        onChange && onChange(page);
        state.buttons.forEach(it => {
            if (it.$page != page) {
                it.classList.remove('active');
                return;
            }
            it.classList.add('active');
        });
    }
})();