import crypto from 'crypto';

const defaultOpt = 'alphanumeric';
const opts = [defaultOpt, 'alpha', 'numeric'];
const map = {
    alpha: 'abcdefghijklmnopqrstuvwxyz',
    numeric: '1234567890'
};

function API() {
    return crypto.createHmac('sha256', generate())
        .update((new Date()).getTime().toString())
        .digest('hex');
}

API.generate = (len, props) => {
    len = toNum(len, 64);
    props = props || {};
    let type = (props.type && opts.includes(props.type)) ? props.type : defaultOpt;

    return generate(len, type, {
        add: toStr(props.add),
        custom: toStr(props.custom),
        camelCase: (props.camelCase === true) ? true : null
    });
};

API.range = (min, max) => {
    min = toNum(min);
    max = toNum(max, 9);
    return rnd(max, min);
};

export default API;

function generate(len, type, props) {
    let s = '';
    for (let i = 0; i < len; i++) {
        s += get(type, props);
    }
    return s;
}

function get(type, props) {
    if (props.custom) {
        return props.custom.charAt(rnd(props.custom.length - 1));
    }

    let chooser;
    if (type === 'alphanumeric') {
        if (rnd(1) === 0) {
            chooser = map.alpha + map.numeric;
        } else {
            chooser = map[(rnd(1) === 0) ? 'alpha' : 'numeric'];
        }
    } else {
        chooser = map[type];
    }
    if (props.add) {
        let idx = rnd(chooser.length);
        chooser = chooser.slice(0, idx) + props.add + chooser.slice(idx);
    }
    let ret = chooser.charAt(rnd(chooser.length - 1));
    return (props.camelCase && rnd(1) === 0) ? ret.toUpperCase() : ret;
}

function rnd(max, min) {
    min = min || 0;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function toStr(str) {
    return (typeof str === 'string') ? str : '';
}

function toNum(val, defaultsTo) {
    return (typeof val === 'number') ? Math.floor(parseFloat(val)) : (defaultsTo || 0);
}
