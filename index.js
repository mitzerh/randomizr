const crypto = require('crypto');
const alpha = 'abcdefghijklmnopqrstuvwxyz';
const numeric = '1234567890';
const opts = ['alphanumeric', 'alpha', 'numeric'];

function sha256(secret) {
    secret = (typeof secret === 'string') ? secret : 'test';
    let ts = (new Date()).getTime().toString();
    const hash = crypto.createHmac('sha256', secret).update(ts).digest('hex');
    return hash;
}
