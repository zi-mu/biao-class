;
(function () {
    'use strict';

    // 全文变量备用
    let table, thead, tbody, structure, list;

    // 暴露插件全局变量
    window.biaoTable = {
        boot
    };

    /**
     * 启动
     * @param {string} tableSelector
     * @param {Object} struct
     * @param {Array} list
     */
    function boot(tableSelector, struct, arr) {
        // 各种更新全文变量
        table = document.querySelector(tableSelector);
        thead = table.tHead;
        tbody = table.tBodies[0];
        structure = struct;
        list = arr;

        // 直接渲染
        render();
    }

    /**
     * 总渲染
     */
    function render() {
        renderHead();
        renderBody();
    }

    /**
     * 渲染thead
     *
     * 根据structure渲染thead
     * {
     *   name: '姓名',   ==>  |姓名|性别|
     *   gender: '性别',      |xxx|xxx|
     * }
     */
    function renderHead() {
        thead.innerHTML = '';

        // 初始化组装字符串
        let html = '';

        // 循环structure中的每一条
        for (let key in structure) {
            // 以 name:'姓名' 为例
            // 此时key为'name'
            // 意味着structure[key]为'姓名'
            // 意味着最后生成的字符串为'<th>姓名</th>'
            html += `<th>${structure[key]}</th>`;
        }

        // 在thead内填充组装好的字符串
        thead.innerHTML = html;
    }

    /**
     * 渲染tbody
     *
     * 使用list渲染tbody（通过structure来限制渲染的数量和属性）
     */
    function renderBody() {
        tbody.innerHTML = '';

        // 循环每一条数据
        // 以用户列表为例 [{王花花...}, {李拴蛋...}]
        // 此时循环的就是每一个用户
        list.forEach(it => {
            // 创建表格行
            let tr = document.createElement('tr');

            // 初始化tr的组装字符串
            let html = '';

            // 循环当前用户的属性
            // 以 {name: '王花花', gender: '女'} 为例
            for (let key in structure)
                // 以 name: '王花花' 为例
                // 意味着最后生成的字符串为'<td>王花花</td>'
                html += `<td>${it[key] || '-'}</td>`;

            // 在tr内填充组装好的字符串
            tr.innerHTML = html;

            // 在tbody最后追加一行
            tbody.appendChild(tr);
        });
    }
})();

// 使用插件

let userStruct = {
    name: '姓名',
    score: '分数',
    gender: '性别',
    balance: '余额',
};

let users = [{
        name: '王花花',
        gender: '男',
        score: 20,
        balance: 80,
    },
    {
        name: '李拴蛋',
        gender: '女',
        score: 65,
    },
    {
        name: '赵可爽',
        gender: '男',
        score: 81,
    },
];

let orderStruct = {
    oid: '订单号',
    product: '产品',
    totalCost: '总费用',
};

let orders = [{
        oid: '001',
        product: '拖鞋',
        totalCost: 70,
    },
    {
        oid: '002',
        product: '毛裤',
        totalCost: 80,
    },
    {
        oid: '003',
        product: '枸杞',
        totalCost: 90,
    },
];

biaoTable.boot('#student', userStruct, users);
biaoTable.boot('#product', orderStruct, orders);