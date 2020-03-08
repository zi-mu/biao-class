;
(function () {
    'use strict';
    let table, thead, tbody, structure, list;

    window.biaoTable = {
        boot
    }

    function boot(tableSelector, struct, arr) {
        table = document.querySelector(tableSelector);
        thead = table.tHead;
        tbody = table.tBodies[0];
        structure = struct;
        list = arr;
        render();
    }

    function render() {
        renderHead();
        renderBody();
    }

    function renderHead() {
        let html = '';
        for (let key in structure) {
            html += `<th>${structure[key]}</th>`;
        }
        thead.innerHTML = html;
    }

    function renderBody() {
        list.forEach(it => {
            let tr = document.createElement('tr');
            let html = '';
            for (let key in structure) {
                html += `<td>${it[key]||'-'}</td>`
            }
            tr.innerHTML = html;
            tbody.appendChild(tr);
        });
    }


})();
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