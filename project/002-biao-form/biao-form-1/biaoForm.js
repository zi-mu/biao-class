window.biaoForm = {
    getData, // 相当于getData: getData;
    setData, //相当于setData: setData;
};

function getData(form) {
    let data = {};
    let inputs = form.querySelectorAll('[name]');
    inputs.forEach(it => {
        switch (it.type) {
            case 'number':
                data[it.name] = parseFloat(it.value);
                break;
            case 'radio':
                if (!it.checked)
                    return;
                data[it.name] = it.value;
                break;
            case 'checkbox':
                if (!Array.isArray(data[it.name]))
                    data[it.name] = [];
                if (it.checked)
                    data[it.name].push(it.value);
                break;

            case 'time':
            case 'week':
            case 'month':
            case 'datetime':
            case 'datetime-local':
                data[it.name] = it.valueAsDate;
                break;

            default:
                data[it.name] = it.value;
        }
    });
    return data;
}

function setData(data, form) {
    for (let key in data) {
        let val = data[key];
        let input = form.querySelector(`[name=${key}]`); // form.querySelector('[name='+key+']') 因为此处key是变的 不能('[name=key]')这样就是找name=‘key’这一项了,肯定是没有的.
        switch (input.type) {
            case 'radio':
                let radio = form.querySelector(`[type=radio][value=${val}]`)
                radio && (radio.checked = true)
                break;
            case 'checkbox':
                val.forEach(it => {
                    let checkbox = form.querySelector(`[type=checkbox][value=${it}]`);
                    checkbox && (checkbox.checked = true);
                })
                break;
            default:
                input.value = data[key];
        }
    }
}