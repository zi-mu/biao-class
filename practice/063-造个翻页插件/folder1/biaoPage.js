;
(function () {
    'use strict';

    const DEFAULT_CONFIG = {
        limit: 10,
        currentPage: 1,
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
            config,
        };

        state.currentPage = config.currentPage;

        prepare(state);
        render(state);
        bindEvents(state);

    }

    function prepare(state) {
        let el = document.createElement('div');
        el.classList.add('biao-page');
        el.innerHTML = `
        <span class="shortcuts">
        <button class='prev'>上一页</button>
        <button class='first'>第一页</button>
        </span>

    <span class="page-list">
       
    </span>

    <span class="shortcuts">
        <button class='next'>下一页</button>
        <button class='last'>最后一页</button>
    </span>
`;
        state.root = document.querySelector(state.config.selector);
        state.el = el;
        state.pageList = el.querySelector('.page-list');
        state.root.appendChild(el);

    }

    function render(state) {
        let pageCount = state.pageCount = Math.ceil(state.config.amount / state.config.limit);
        let list = state.pageList;
        list.innerHTML = '';
        for (let i = 0; i < pageCount; i++) {
            let page = i + 1;
            let button = document.createElement('button');

            button.classList.add('biao-page-item');

            if (state.currentPage == page)
                button.classList.add('active');
            button.innerText = page;
            button.$page = page;
            state.pageList.appendChild(button);
        }
        state.buttons = state.pageList.querySelectorAll('.biao-page-item');
    }

    function bindEvents(state) {
        state.el.addEventListener('click', e => {
            let target = e.target;
            let page = target.$page;
            let klass = target.classList;
            if (page) {

                setCurrentPage(state, page);
            }


            if (klass.contains('first'))
                setCurrentPage(state, 1);

            if (klass.contains('last'))
                setCurrentPage(state, state.pageCount);

            if (klass.contains('prev'))
                setCurrentPage(state, state.currentPage - 1);

            if (klass.contains('next'))
                setCurrentPage(state, state.currentPage + 1);
        })
    }

    function setCurrentPage(state, page) {

        if (page < 1)

            return setCurrentPage(state, 1);



        if (page > state.pageCount)
            return setCurrentPage(state, state.pageCount);


        state.currentPage = page;

        let onChange = state.config.onChange;
        onChange && onChange(page, state);

        state.buttons.forEach(it => {
            if (it.$page != page) {
                it.classList.remove('active');
                return;
            }
            it.classList.add('active');
        });
    }
})();