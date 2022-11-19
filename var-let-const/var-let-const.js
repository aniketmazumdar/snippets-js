var v = 'apple';
let l = 'apple';
const c = 'apple';

console.log('OUTER BLOCK => v:', v);
console.log('OUTER BLOCK => l:', l);
console.log('OUTER BLOCK => c:', c);
console.log('--------------------------');

if(true){
    var v = 'orange';
    let l = 'orange';
    const c = 'orange';

    console.log('INNER BLOCK-1 => v:', v);
    console.log('INNER BLOCK-1 => l:', l);
    console.log('INNER BLOCK-1 => c:', c);
    console.log('--------------------------');
}

console.log('OUTER BLOCK => v:', v);
console.log('OUTER BLOCK => l:', l);
console.log('OUTER BLOCK => c:', c);
console.log('--------------------------');

if(true){
    v = 'grapes';
    l = 'grapes';
    // c = 'grapes';       // TypeError

    console.log('INNER BLOCK-2 => v:', v);
    console.log('INNER BLOCK-2 => l:', l);
    console.log('INNER BLOCK-2 => c:', c);
    console.log('--------------------------');
}

console.log('OUTER BLOCK => v:', v);
console.log('OUTER BLOCK => l:', l);
console.log('OUTER BLOCK => c:', c);