/*
|--------------------------------------------------------------------------
| 一个发请求的库
|--------------------------------------------------------------------------
*/


;
(function () {
    'use strict';

    window.rq = {
        get,
        post
    };

    /**
     * 取数据
     * @param url 地址
     * @param onSuccess 成功回调
     * @param onError 失败回调
     */
    function get(url, onSuccess, onError) {
        send(url, 'get', null, onSuccess, onError);
    }

    /**
     * 存数据
     * @param url 地址
     * @param data 数据
     * @param onSuccess 成功回调
     * @param onError 失败回调
     */
    function post(url, data, onSuccess, onError) {
        send(url, 'post', data, onSuccess, onError);
    }

    /**
     * 基础请求方法
     * @param url 地址
     * @param method 请求方法
     * @param data 数据
     * @param onSuccess 成功回调
     * @param onError 失败回调
     */
    function send(url, method, data, onSuccess, onError) {
        // 造请求对象
        let http = new XMLHttpRequest();
        // 准备
        http.open(method, url);
        // 发射
        http.send();

        // 监听请求成功事件
        http.addEventListener('load', () => {
            // 解析数据（JSON字符串 ==> js原生数据）
            let data = JSON.parse(http.responseText);
            // 如果传了回调就触发回调
            onSuccess && onSuccess(data);
        });
    }
})();