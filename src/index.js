//枚举一组数字
function enumerateInterval(down, up) {
    if (typeof down !== 'number' || typeof up !== 'number') {
        return [];
    }
    if (down > up) {
        return [];
    }
    let ret = [];
    for (; down <= up; down++) {
        ret.push(down);
    }
    return ret;
}

//生成组数的所有组合
function accumulate(arr) {
    if (!arr || arr.length < 1) return [];
    return flatten(arr.map(item => {
        let newSet = new Set(arr);
        newSet.delete(item);
        let retire = [...newSet];
        let temp = accumulate(retire);
        if (temp.length < 1) return [].concat(item);
        return temp.map(inner => {
            return [].concat(item, inner);
        });
    }));
}

//扁平化数组
function flatten(arr) {
    let ret = [];
    for (const value of arr) {
        if (Array.isArray(value)) {
            ret.push(...value);
        } else {
            ret.push(value);
        }
    }
    return ret;
}

module.exports = {
    enumerateInterval,
    accumulate
};
