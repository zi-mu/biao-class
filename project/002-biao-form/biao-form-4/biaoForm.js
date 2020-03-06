window.biaoForm = {
    getData, //相当于getData:getData,
    setData, //相当于setData:setData,
};

function getData(form) {
    /**
     * 本质是取到所有输入组件,把输入组件中到value,存到一个data{}中.
     */
    //定义一个对象,以便存值.
    let data = {};
    //取到所有输入组件, 也就是所有有name属性的元素
    // 如<input name="xxx">或者<textarea name="xxx">...
    let inputs = form.querySelectorAll('[name]');
    // 循环所有输入组件
    inputs.forEach(it => {
        // it就是每个输入组件
        // 以<input name="age" value="10">为例：
        // it.name  ==> 'age'
        // it.value ==> '10'
        //判断组件(每一项)的类型
        switch (it.type) {
            // 如果是数字，就将值转换为数字类型
            case 'number':
                data[it.name] = it.value;
                break;
                // 如果是单选框
            case 'radio':
                // 检查它当前是否打钩了，如果没打勾就跳过
                if (!it.checked)
                    return;
                // 否则就存到data中
                //    ↓'age'       ↓10
                data[it.name] = it.value;
                break;
                // 如果是复选框，那么取到的值就应该是个数组，
                // 因为可能会选中多项
            case 'checkbox':
                // 第一次碰到复选框，就应该将data中对应的那一项初始化为空数组
                // 否则后面没法推入选中的值
                if (!Array.isArray(data[it.name]))
                    data[it.name] = [];
                /*
                  如果当前的复选框打钩了，就应该推入到数组中
                  <input value=a checked>
                  <input value=b checked> ==> ['a', 'b']
                  <input value=c>
                */
                if (it.checked)
                    data[it.name].push(it.value);
                break;
                // 如果是以下类型中的任何一项
            case 'date':
            case 'week':
            case 'time':
            case 'datetime':
            case 'month':
            case 'datetime-local':
                // 就将其转化为更强大的Date对象
                data[it.name] = it.valueAsDate;
                break;
                // 默认情况下直接取字符串
            default:
                data[it.name] = it.value;
        }
    });
    return data;
}

function setData(data, form) {
    /**
     * 存值,本质上就是循环data{}中的每一项,把每一项存到每一个输入组件中(value),
     * 
     */
    //循环data  循环数据中的每一项
    for (let key in data) {
        // 取到每项的值，方便后面用
        let val = data[key];
        // 取到本项对应的输入组件
        let input = form.querySelector(`[name=${key}]`);
        // 检查组件的类型
        switch (input.type) {
            // 如果是单选框
            case 'radio':
                // 选中类型为"radio"，且name为本项的键，且值为本项值的元素
                // 以 gender: 'male' 为例（比如说循环到{... gender: 'male', ...}这一项）
                // radio 就等于 <input type=radio name=gender value=male>
                //     
                let radio = form.querySelector(`[type=radio][value=${val}]`)
                // 如果radio存在，就将其勾上
                radio && (radio.checked = true)
                break;
                // 如果是复选框
            case 'checkbox':
                // 如果是复选框说明值是数组
                // 以 orientation: ['male', 'female'] 为例（比如说循环到{... orientation: ['male', 'female'], ...}这一项）
                val.forEach(it => {
                    // 选中类型为"checkbox"，且name为本项的键，且值为本项的值的元素
                    // 以 'male' 为例
                    // checkbox 就等于 <input type=checkbox name=orientation value=male>
                    //  
                    let checkbox = form.querySelector(`[type=checkbox][value=${it}]`)
                    // 如果checkbox存在，就将其勾上
                    checkbox && (checkbox.checked = true);
                })
                break;
            default:
                // 如果是其他类型的输入组件，就直接存值
                input.value = data[key];
        }
    }
}