import lodash from 'lodash';

function c(){
    const e = document.createElement('div');
    e.innerHTML = lodash.join(['Hello','webpack'],' ')
    return e
}

document.body.appendChild(c())