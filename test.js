const randomizr = require('./index');
const iter = 100000;
const log = console.log;

(() => {
    console.time('string concat');
    let s = '';
    for (let i = 0; i < iter; i++) {
        s += i;
    }
    console.timeEnd('string concat');
    log('\n');
})();

(() => {
    console.time('string array');
    let s = [];
    for (let i = 0; i < iter; i++) {
        s.push(i);
    }
    s.join('');
    console.timeEnd('string array');
    log('\n');
})();

(() => {
    console.time('randomizr.hash');
    log('hash:', randomizr.hash());
    for (let i = 0; i < iter; i++) {
        let s = randomizr.hash();
    }
    console.timeEnd('randomizr.hash');
    log('\n');
})();

(() => {
    console.time('randomizr.range1');
    log('range[0-9]:', randomizr.range());
    for (let i = 0; i < iter; i++) {
        let s = randomizr.range();
    }
    console.timeEnd('randomizr.range1');
    log('\n');
})();

(() => {
    console.time('randomizr.range2');
    log(`range[1-${iter}]:`, randomizr.range(0, iter));
    for (let i = 0; i < iter; i++) {
        let s = randomizr.range(0, iter);
    }
    console.timeEnd('randomizr.range2');
    log('\n');
})();

(() => {
    console.time('randomizr.generate');
    log('generate:', randomizr.generate());
    for (let i = 0; i < iter; i++) {
        let s = randomizr.generate();
    }
    console.timeEnd('randomizr.generate');
    log('\n');
})();

(() => {
    console.time('randomizr.generate.add');
    log('generate add:', randomizr.generate(32, {
        add: '~`!@#$%^&*()_+?><,.;:\'"[{]}\\|"\'\`'
    }));
    for (let i = 0; i < iter; i++) {
        let s = randomizr.generate(32, {
            add: '~`!@#$%^&*()_+?><,.;:\'"[{]}\\|"\'\`'
        });
    }
    console.timeEnd('randomizr.generate.add');
    log('\n');
})();

(() => {
    console.time('randomizr.generate.custom2');
    log('generate custom [1 or 0]:', randomizr.generate(32, {
        custom: '10'
    }));
    for (let i = 0; i < iter; i++) {
        let s = randomizr.generate(32, {
            custom: '10'
        });
    }
    console.timeEnd('randomizr.generate.custom2');
    log('\n');
})();

(() => {
    console.time('randomizr.generate.custom1');
    log('generate custom:', randomizr.generate(32, {
        custom: '~`!@#$%^&*()_+?><,.;:\'"[{]}\\|"\'\`'
    }));
    for (let i = 0; i < iter; i++) {
        let s = randomizr.generate(32, {
            custom: '~`!@#$%^&*()_+?><,.;:\'"[{]}\\|"\'\`'
        });
    }
    console.timeEnd('randomizr.generate.custom1');
    log('\n');
})();
