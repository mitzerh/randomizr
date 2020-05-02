const iter = 100000;


(() => {
    console.time('string concat');
    let s = '';
    for (let i = 0; i < iter; i++) {
        s += i;
    }
    console.timeEnd('string concat');
})();

(() => {
    console.time('string array');
    let s = [];
    for (let i = 0; i < iter; i++) {
        s.push(i);
    }
    s.join('');
    console.timeEnd('string array');
})();
